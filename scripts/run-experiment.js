#!/usr/bin/env node
/**
 * Запуск эксперимента B0/B1/B2/B3 по всем сэмплам датасета.
 * Собирает метрики: build%, test%, число вызовов LLM.
 *
 * Usage: node scripts/run-experiment.js [--samples N] [--out <experimentDir>]
 *   --samples N   ограничить число сэмплов (по умолчанию все)
 *   --out <dir>   директория для артефактов (по умолчанию ./experiment-output)
 *
 * Требует: npm run build перед запуском.
 */

import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const DATASETS = path.join(ROOT, 'datasets');
const CLI = path.join(ROOT, 'dist', 'cli.js');
const INJECT_TESTS = path.join(ROOT, 'scripts', 'inject-and-run-tests.js');

const CONFIGS = ['B0raw', 'B0', 'B1', 'B2', 'B3'];

function findSwiftSamples() {
  const list = [];
  for (const name of fs.readdirSync(DATASETS)) {
    const dir = path.join(DATASETS, name);
    if (!fs.statSync(dir).isDirectory()) continue;
    for (const file of fs.readdirSync(dir)) {
      if (file.endsWith('.swift')) {
        const base = file.slice(0, -6);
        const swiftPath = path.join(dir, file);
        const specPath = path.join(dir, `${base}.spec.tsx`);
        list.push({
          slug: `${name}/${base}`,
          swiftPath,
          specPath: fs.existsSync(specPath) ? specPath : null,
        });
      }
    }
  }
  return list.sort((a, b) => a.slug.localeCompare(b.slug));
}

function runCli(swiftPath, outDir, config) {
  const inputArg = path.isAbsolute(swiftPath) ? swiftPath : path.resolve(ROOT, swiftPath);
  const outArg = path.isAbsolute(outDir) ? outDir : path.resolve(ROOT, outDir);
  const args = [CLI, inputArg, '--out', outArg, '--config', config];
  const r = spawnSync(process.execPath, args, { cwd: ROOT, encoding: 'utf-8', stdio: 'pipe' });
  return { ok: r.status === 0, stderr: r.stderr || '', stdout: r.stdout || '' };
}

function readReport(outDir) {
  const p = path.join(outDir, 'conversion-report.json');
  if (!fs.existsSync(p)) return null;
  try {
    return JSON.parse(fs.readFileSync(p, 'utf-8'));
  } catch {
    return null;
  }
}

function runBuildInDir(outDir) {
  if (!fs.existsSync(outDir)) return false;
  const pkgPath = path.join(outDir, 'package.json');
  if (!fs.existsSync(pkgPath)) return false;
  const opts = { cwd: outDir, shell: true, encoding: 'utf-8', stdio: 'pipe', env: { ...process.env } };
  const install = spawnSync('npm', ['install'], opts);
  if (install.status !== 0) return false;
  const build = spawnSync('npm', ['run', 'build'], opts);
  return build.status === 0;
}

function runTests(outDir, specPath) {
  if (!specPath || !fs.existsSync(specPath)) return { passed: false, skipped: true };
  if (!fs.existsSync(outDir)) return { passed: false, skipped: false };
  const r = spawnSync(process.execPath, [INJECT_TESTS, outDir, specPath], {
    cwd: ROOT,
    encoding: 'utf-8',
    stdio: 'pipe',
    env: { ...process.env },
  });
  if (r.status !== 0) {
    const out = [r.stdout, r.stderr].filter(Boolean).join('\n').trim();
    if (out) {
      try {
        fs.writeFileSync(path.join(outDir, 'test-output.txt'), out, 'utf-8');
      } catch (_) {}
    }
  }
  return { passed: r.status === 0, skipped: false };
}

function main() {
  const args = process.argv.slice(2);
  let samplesLimit = Infinity;
  let experimentDir = path.join(ROOT, 'experiment-output');
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--samples' && args[i + 1]) {
      samplesLimit = parseInt(args[i + 1], 10);
      i++;
    } else if (args[i] === '--out' && args[i + 1]) {
      experimentDir = path.resolve(args[i + 1]);
      i++;
    }
  }

  if (!fs.existsSync(CLI)) {
    console.error('Run "npm run build" first.');
    process.exit(1);
  }

  const samples = findSwiftSamples();
  const limited = samplesLimit === Infinity ? samples : samples.slice(0, samplesLimit);
  console.log(`Experiment: configs ${CONFIGS.join(', ')}; samples: ${limited.length} (of ${samples.length})\n`);

  /** @type {Record<string, { buildOk: number; testOk: number; totalLlmCalls: number; totalPromptTokens: number; totalCompletionTokens: number; totalTokens: number; runs: Array<{ slug: string; buildOk: boolean; testOk: boolean; testSkipped: boolean; llmCalls: number; promptTokens?: number; completionTokens?: number; totalTokens?: number }> }>} */
  const byConfig = {};
  for (const c of CONFIGS) {
    byConfig[c] = { buildOk: 0, testOk: 0, totalLlmCalls: 0, totalPromptTokens: 0, totalCompletionTokens: 0, totalTokens: 0, runs: [] };
  }

  for (const config of CONFIGS) {
    for (const { slug, swiftPath, specPath } of limited) {
      const outDir = path.join(experimentDir, config, slug.replace(/\//g, '_'));
      process.stdout.write(`  [${config}] ${slug} ... `);
      runCli(swiftPath, outDir, config);
      const report = readReport(outDir);
      let buildOk = report?.step5_validation?.buildOk === true;
      if (!buildOk && report?.step5_validation?.buildError) {
        try {
          fs.writeFileSync(path.join(outDir, 'build-error.txt'), report.step5_validation.buildError, 'utf-8');
        } catch (_) {}
      }
      if (!buildOk && fs.existsSync(path.join(outDir, 'package.json'))) {
        buildOk = runBuildInDir(outDir);
      }
      const llmCalls = report?.meta?.totalLlmCalls ?? 1;
      const promptTokens = report?.meta?.totalPromptTokens ?? 0;
      const completionTokens = report?.meta?.totalCompletionTokens ?? 0;
      const totalTokens = report?.meta?.totalTokens ?? promptTokens + completionTokens;
      if (buildOk) byConfig[config].buildOk++;
      byConfig[config].totalLlmCalls += llmCalls;
      byConfig[config].totalPromptTokens += promptTokens;
      byConfig[config].totalCompletionTokens += completionTokens;
      byConfig[config].totalTokens += totalTokens;

      const testResult = runTests(outDir, specPath);
      if (testResult.skipped) {
        process.stdout.write(`build ${buildOk ? 'ok' : 'fail'}, test skipped, llm=${llmCalls}, tokens=${totalTokens || '—'}\n`);
      } else {
        if (testResult.passed) byConfig[config].testOk++;
        process.stdout.write(`build ${buildOk ? 'ok' : 'fail'}, test ${testResult.passed ? 'ok' : 'fail'}, llm=${llmCalls}, tokens=${totalTokens || '—'}\n`);
      }
      byConfig[config].runs.push({
        slug,
        buildOk,
        testOk: testResult.passed,
        testSkipped: testResult.skipped,
        llmCalls,
        ...(promptTokens > 0 && { promptTokens }),
        ...(completionTokens > 0 && { completionTokens }),
        ...(totalTokens > 0 && { totalTokens }),
      });
    }
  }

  const n = limited.length;
  const table = [];
  table.push('| Config | Build % | Test % | LLM calls | Tokens (total) | Avg tokens/sample |');
  table.push('|--------|---------|--------|-----------|----------------|-------------------|');
  for (const c of CONFIGS) {
    const d = byConfig[c];
    const buildPct = n ? ((d.buildOk / n) * 100).toFixed(1) : '0';
    const testPct = n ? ((d.testOk / n) * 100).toFixed(1) : '0';
    const avgTokens = n && d.totalTokens > 0 ? Math.round(d.totalTokens / n).toLocaleString() : '—';
    table.push(`| ${c} | ${buildPct} | ${testPct} | ${d.totalLlmCalls} | ${d.totalTokens.toLocaleString()} | ${avgTokens} |`);
  }

  console.log('\n--- Summary ---\n');
  console.log(table.join('\n'));

  const resultsPath = path.join(experimentDir, 'experiment-results.json');
  fs.mkdirSync(experimentDir, { recursive: true });
  fs.writeFileSync(
    resultsPath,
    JSON.stringify(
      {
        configs: CONFIGS,
        samplesCount: n,
        samples: limited.map((s) => s.slug),
        byConfig: Object.fromEntries(
          CONFIGS.map((c) => [
            c,
            {
              buildOk: byConfig[c].buildOk,
              testOk: byConfig[c].testOk,
              totalLlmCalls: byConfig[c].totalLlmCalls,
              totalPromptTokens: byConfig[c].totalPromptTokens,
              totalCompletionTokens: byConfig[c].totalCompletionTokens,
              totalTokens: byConfig[c].totalTokens,
              buildRate: n ? byConfig[c].buildOk / n : 0,
              testRate: n ? byConfig[c].testOk / n : 0,
              runs: byConfig[c].runs,
            },
          ])
        ),
      },
      null,
      2
    )
  );
  console.log('\nResults written to', resultsPath);
}

main();
