#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import type { ViewDefinition } from './ir/types.js';
import type { UnresolvedFragment } from './ir/web-ir.js';
import { extract } from './extractor/index.js';
import { mapToWebIR } from './rules/index.js';
import {
  generate,
  writeGeneratedFiles,
  ensureEntryViewFile,
  ensureAppRendersEntry,
  ensureMinimalProjectStructure,
  ensureViewFilesByName,
  ensureDefaultImportsInViews,
  ensureEntryScreenSwitchButton,
  ensureFrameDivsCenter,
  normalizeViewFilePaths,
} from './llm/index.js';
import { validateProject } from './validator/index.js';
import { repair, applyRepairFiles } from './repair/index.js';
import type { ConversionReport } from './report/types.js';
import { writeReport } from './report/index.js';

const MAX_REPAIR = 3;
const SWIFT_PREVIEW_LEN = 2000;

async function loadEnv(): Promise<void> {
  const dir = path.dirname(fileURLToPath(import.meta.url));
  const root = path.resolve(dir, '..');
  const envPath = path.join(root, '.env');
  try {
    const content = await fs.readFile(envPath, 'utf-8');
    for (const line of content.split('\n')) {
      const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/);
      if (m) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
    }
  } catch {
  }
}

async function main(): Promise<void> {
  await loadEnv();
  const startedAt = new Date().toISOString();
  const args = process.argv.slice(2);
  const inputIndex = args.findIndex((a) => a.endsWith('.swift'));
  const outIndex = args.indexOf('--out');
  const configIndex = args.indexOf('--config');
  const inputFileRaw = inputIndex >= 0 ? args[inputIndex] : null;
  const inputFile = inputFileRaw ? (path.isAbsolute(inputFileRaw) ? inputFileRaw : path.resolve(process.cwd(), inputFileRaw)) : null;
  const outDir = outIndex >= 0 && args[outIndex + 1] ? path.resolve(args[outIndex + 1]) : path.resolve('./output');
  const config = (configIndex >= 0 && args[configIndex + 1]) ? (args[configIndex + 1] as string) : 'B3';
  const VALID_CONFIGS = ['B0raw', 'B0', 'B1', 'B2', 'B3'];
  if (!VALID_CONFIGS.includes(config)) {
    console.error('Invalid --config. Use B0raw|B0|B1|B2|B3');
    process.exit(1);
  }
  const useRules = config !== 'B0' && config !== 'B0raw';
  const useRAG = config === 'B2' || config === 'B3';
  const useRepair = config === 'B3';
  const pureLLM = config === 'B0raw';

  if (!inputFile) {
    console.error('Usage: swiftui2react <input.swift> [--out <dir>] [--config B0raw|B0|B1|B2|B3]');
    process.exit(1);
  }

  let swiftSource: string;
  try {
    swiftSource = await fs.readFile(inputFile, 'utf-8');
  } catch (e) {
    console.error('Failed to read input file:', e);
    process.exit(1);
  }

  const errors: string[] = [];
  const repairIterations: ConversionReport['step6_repair']['iterations'] = [];

  let ir: ConversionReport['step1_extractor']['ir'];
  let webIR: ConversionReport['step2_rules']['webIR'];

  if (pureLLM) {
    const entryViewName = (swiftSource.match(/struct\s+(\w+)\s*:\s*View\s*\{/)?.[1]) ?? 'ContentView';
    console.log('Pure LLM: no UI-IR, no rules; entry view:', entryViewName);
    ir = {
      views: [{ name: entryViewName, params: [], state: { stateVars: [], bindings: [] }, body: { type: 'Custom', props: { raw: '(skipped)' }, children: [], modifiers: [] } }],
      entryViewName,
    };
    webIR = {
      entryViewName,
      skeleton: [{ viewName: entryViewName, propsInterface: '', stateHooks: [], bindingProps: [], jsxSkeleton: '', imports: [] }],
      unresolved: [],
    };
  } else {
    console.log('Extracting UI-IR...');
    ir = extract(swiftSource);
    console.log(`  Views: ${ir.views.map((v: ViewDefinition) => v.name).join(', ')}; entry: ${ir.entryViewName ?? 'none'}`);
    webIR = mapToWebIR(ir);
    console.log('Rule mapping done; unresolved:', webIR.unresolved.length);
  }

  await fs.mkdir(outDir, { recursive: true });

  let lastResult: Awaited<ReturnType<typeof generate>>;
  try {
    lastResult = await generate(webIR, swiftSource, { ir: pureLLM ? undefined : ir, ragTopK: 3, useRules, useRAG });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    errors.push(`LLM generation: ${msg}`);
    console.error('LLM generation failed:', e);
    const finishedAt = new Date().toISOString();
    const report: ConversionReport = buildPartialReport(
      startedAt,
      finishedAt,
      inputFile,
      outDir,
      false,
      ir,
      webIR,
      swiftSource,
      errors,
      { totalLlmCalls: 1, experimentConfig: config }
    );
    report.step3_rag = { step: 'RAG Retriever', retrievedCount: 0, retrievedIds: [], retrievedTags: [], ragContextLength: 0 };
    report.step4_llm = { step: 'LLM Generator', promptLength: 0, rawResponseLength: 0, filesGenerated: [], filesCount: 0 };
    report.step5_validation = { step: 'Validator', success: false, buildOk: false };
    report.step6_repair = { step: 'Repair Loop', totalIterations: 0, iterations: [], limitReached: false };
    const { mdPath, jsonPath } = await writeReport(outDir, report);
    console.error('Report written to', mdPath, 'and', jsonPath);
    process.exit(1);
  }

  if (lastResult.files.length === 0) {
    errors.push('LLM returned no files.');
    console.error('LLM returned no files. Raw response length:', lastResult.rawResponse.length);
    const finishedAt = new Date().toISOString();
    const genUsage = lastResult.report?.usage;
    const report = buildFullReportAfterGenerate(
      startedAt,
      finishedAt,
      inputFile,
      outDir,
      false,
      ir,
      webIR,
      lastResult,
      lastResult.report,
      { success: false, buildOk: false },
      repairIterations,
      swiftSource,
      errors,
      {
        totalLlmCalls: 1,
        experimentConfig: config,
        totalPromptTokens: genUsage?.prompt_tokens,
        totalCompletionTokens: genUsage?.completion_tokens,
        totalTokens: genUsage ? genUsage.prompt_tokens + genUsage.completion_tokens : undefined,
      }
    );
    const { mdPath, jsonPath } = await writeReport(outDir, report);
    console.error('Report written to', mdPath, 'and', jsonPath);
    process.exit(1);
  }

  const normalizedFiles = normalizeViewFilePaths(lastResult.files, {
    viewNames: webIR.skeleton.map((s) => s.viewName),
    entryViewName: webIR.entryViewName,
  });
  await writeGeneratedFiles(outDir, normalizedFiles);
  await ensureViewFilesByName(outDir);
  await ensureDefaultImportsInViews(outDir);
  await ensureEntryScreenSwitchButton(outDir, webIR.entryViewName);
  await ensureEntryViewFile(outDir, webIR.entryViewName);
  await ensureFrameDivsCenter(outDir);
  await ensureMinimalProjectStructure(outDir, webIR.entryViewName);
  await ensureAppRendersEntry(outDir, webIR.entryViewName);
  console.log('Wrote', normalizedFiles.length, 'files to', outDir);

  const generateReport = lastResult.report;
  let totalPromptTokens = generateReport?.usage?.prompt_tokens ?? 0;
  let totalCompletionTokens = generateReport?.usage?.completion_tokens ?? 0;

  let validation = await validateProject(outDir);
  let repairCount = 0;

  if (useRepair) {
  while (!validation.success && repairCount < MAX_REPAIR) {
    repairCount++;
    console.log(`Validation failed. Repair attempt ${repairCount}/${MAX_REPAIR}...`);
    const validationError = validation.buildError ?? validation.testError ?? 'Unknown';
    const repairResult = await repair(
      {
        outDir,
        lastResult: { files: lastResult.files, rawResponse: lastResult.rawResponse },
        validationError,
        iteration: repairCount,
      },
      { viewNames: webIR.skeleton.map((s) => s.viewName) }
    );
    if (repairResult.usage) {
      totalPromptTokens += repairResult.usage.prompt_tokens;
      totalCompletionTokens += repairResult.usage.completion_tokens;
    }
    const filesPatched = repairResult.files.length;
    if (filesPatched > 0) {
      const repairedNormalized = normalizeViewFilePaths(repairResult.files, {
        viewNames: webIR.skeleton.map((s) => s.viewName),
        entryViewName: webIR.entryViewName,
      });
      await applyRepairFiles(outDir, repairedNormalized);
      lastResult = { ...repairResult, files: repairedNormalized };
      await ensureViewFilesByName(outDir);
      await ensureDefaultImportsInViews(outDir);
      await ensureEntryScreenSwitchButton(outDir, webIR.entryViewName);
      await ensureEntryViewFile(outDir, webIR.entryViewName);
      await ensureFrameDivsCenter(outDir);
      await ensureAppRendersEntry(outDir, webIR.entryViewName);
    }
    validation = await validateProject(outDir);
    repairIterations.push({
      iteration: repairCount,
      validationError,
      filesPatched,
      successAfter: validation.success,
    });
  }
  }

  const totalLlmCalls = 1 + repairIterations.length;
  const totalTokens = totalPromptTokens + totalCompletionTokens;
  const finishedAt = new Date().toISOString();
  const success = validation.success;
  if (success) {
    console.log('Done. Project built successfully.');
  } else {
    errors.push(validation.buildError ?? validation.testError ?? 'Validation failed');
    console.error('Validation still failing after', MAX_REPAIR, 'repairs:', validation.buildError ?? validation.testError);
  }

  const report = buildFullReportAfterGenerate(
    startedAt,
    finishedAt,
    inputFile,
    outDir,
    success,
    ir,
    webIR,
    lastResult,
    generateReport,
    validation,
    repairIterations,
    swiftSource,
    errors,
    { totalLlmCalls, experimentConfig: config, totalPromptTokens, totalCompletionTokens, totalTokens }
  );
  const { mdPath, jsonPath } = await writeReport(outDir, report);
  console.log('Report written to', mdPath, 'and', jsonPath);

  if (!success) process.exit(1);
}

function buildPartialReport(
  startedAt: string,
  finishedAt: string,
  inputFile: string,
  outDir: string,
  success: boolean,
  ir: ConversionReport['step1_extractor']['ir'],
  webIR: ConversionReport['step2_rules']['webIR'],
  swiftSource: string,
  errors: string[],
  experimentMeta?: { totalLlmCalls: number; experimentConfig: string; totalPromptTokens?: number; totalCompletionTokens?: number; totalTokens?: number }
): ConversionReport {
  return {
    meta: {
      inputFile,
      outDir,
      startedAt,
      finishedAt,
      success,
      errors: errors.length ? errors : undefined,
      ...(experimentMeta && {
        totalLlmCalls: experimentMeta.totalLlmCalls,
        experimentConfig: experimentMeta.experimentConfig,
        ...(experimentMeta.totalPromptTokens != null && { totalPromptTokens: experimentMeta.totalPromptTokens }),
        ...(experimentMeta.totalCompletionTokens != null && { totalCompletionTokens: experimentMeta.totalCompletionTokens }),
        ...(experimentMeta.totalTokens != null && { totalTokens: experimentMeta.totalTokens }),
      }),
    },
    step1_extractor: {
      step: 'SwiftUI Extractor',
      ir,
      viewsCount: ir.views.length,
      viewNames: ir.views.map((v: ViewDefinition) => v.name),
      entryViewName: ir.entryViewName,
      swiftSourcePreview: swiftSource.slice(0, SWIFT_PREVIEW_LEN),
    },
    step2_rules: {
      step: 'Rule Mapper',
      webIR,
      skeletonCount: webIR.skeleton.length,
      unresolvedCount: webIR.unresolved.length,
      unresolvedList: webIR.unresolved.map((u: UnresolvedFragment) => ({ viewName: u.viewName, location: u.location, description: u.description, rawSwift: u.rawSwift })),
    },
    step3_rag: { step: 'RAG Retriever', retrievedCount: 0, retrievedIds: [], retrievedTags: [], ragContextLength: 0 },
    step4_llm: { step: 'LLM Generator', promptLength: 0, rawResponseLength: 0, filesGenerated: [], filesCount: 0 },
    step5_validation: { step: 'Validator', success: false, buildOk: false },
    step6_repair: { step: 'Repair Loop', totalIterations: 0, iterations: [], limitReached: false },
  };
}

function buildFullReportAfterGenerate(
  startedAt: string,
  finishedAt: string,
  inputFile: string,
  outDir: string,
  success: boolean,
  ir: ConversionReport['step1_extractor']['ir'],
  webIR: ConversionReport['step2_rules']['webIR'],
  lastResult: Awaited<ReturnType<typeof generate>>,
  generateReport: Awaited<ReturnType<typeof generate>>['report'],
  validation: Awaited<ReturnType<typeof validateProject>>,
  repairIterations: ConversionReport['step6_repair']['iterations'],
  swiftSource: string,
  errors: string[],
  experimentMeta?: { totalLlmCalls: number; experimentConfig: string; totalPromptTokens?: number; totalCompletionTokens?: number; totalTokens?: number }
): ConversionReport {
  const r = generateReport ?? lastResult.report;
  return {
    meta: {
      inputFile,
      outDir,
      startedAt,
      finishedAt,
      success,
      errors: errors.length ? errors : undefined,
      ...(experimentMeta && {
        totalLlmCalls: experimentMeta.totalLlmCalls,
        experimentConfig: experimentMeta.experimentConfig,
        ...(experimentMeta.totalPromptTokens != null && { totalPromptTokens: experimentMeta.totalPromptTokens }),
        ...(experimentMeta.totalCompletionTokens != null && { totalCompletionTokens: experimentMeta.totalCompletionTokens }),
        ...(experimentMeta.totalTokens != null && { totalTokens: experimentMeta.totalTokens }),
      }),
    },
    step1_extractor: {
      step: 'SwiftUI Extractor',
      ir,
      viewsCount: ir.views.length,
      viewNames: ir.views.map((v: ViewDefinition) => v.name),
      entryViewName: ir.entryViewName,
      swiftSourcePreview: swiftSource.slice(0, SWIFT_PREVIEW_LEN),
    },
    step2_rules: {
      step: 'Rule Mapper',
      webIR,
      skeletonCount: webIR.skeleton.length,
      unresolvedCount: webIR.unresolved.length,
      unresolvedList: webIR.unresolved.map((u: UnresolvedFragment) => ({ viewName: u.viewName, location: u.location, description: u.description, rawSwift: u.rawSwift })),
    },
    step3_rag: {
      step: 'RAG Retriever',
      retrievedCount: r?.ragRetrieved?.length ?? 0,
      retrievedIds: r?.ragRetrieved?.map((e) => e.id) ?? [],
      retrievedTags: r?.ragRetrieved?.map((e) => e.tags) ?? [],
      ragContextLength: r?.ragContextLength ?? 0,
    },
    step4_llm: {
      step: 'LLM Generator',
      model: r?.model,
      promptLength: r?.promptLength ?? 0,
      rawResponseLength: lastResult.rawResponse.length,
      filesGenerated: lastResult.files.map((f) => ({ path: f.path, contentLength: f.content.length })),
      filesCount: lastResult.files.length,
    },
    step5_validation: {
      step: 'Validator',
      success: validation.success,
      buildOk: validation.buildOk,
      buildError: validation.buildError,
      testOk: validation.testOk,
      testError: validation.testError,
    },
    step6_repair: {
      step: 'Repair Loop',
      totalIterations: repairIterations.length,
      iterations: repairIterations,
      limitReached: repairIterations.length >= MAX_REPAIR && !validation.success,
    },
  };
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
