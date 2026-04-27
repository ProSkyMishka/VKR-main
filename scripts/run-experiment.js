#!/usr/bin/env node
/**
 * Запуск эксперимента B0raw / B0 / B1 / B2 / B3 по всем сэмплам датасета.
 * Собирает метрики: build%, test%, число вызовов LLM, токены.
 *
 * Поэтапный запуск:
 *   - конфигурации можно прогонять по одной и потом сложить общую сводку;
 *   - группы примеров (S1_layout, S2_state_events, …) тоже можно гонять по отдельности;
 *   - по умолчанию включён resume: уже посчитанные слаги из per-config файла пропускаются,
 *     так что после прерывания (Ctrl+C) достаточно запустить ту же команду — продолжит с места;
 *   - для полного пересчёта выборки используйте --no-resume (--fresh);
 *   - для пересчёта только упавших слагов (build fail или test fail) — --failed-only;
 *     варианты: --build-failed-only (только провал билда), --test-failed-only (только провал тестов);
 *   - файлы per-config: experiment-results-<config>.json;
 *   - общая сводка — experiment-results.json (собирается автоматически и по команде --summary).
 *
 * Usage:
 *   node scripts/run-experiment.js                      # все 5 конфигов, все сэмплы (resume)
 *   node scripts/run-experiment.js --config B3          # одна конфигурация
 *   node scripts/run-experiment.js --configs B0,B1,B3   # несколько (через запятую)
 *   node scripts/run-experiment.js --group S1_layout    # одна группа примеров
 *   node scripts/run-experiment.js --groups S1_layout,S2_state_events
 *   node scripts/run-experiment.js --samples 50         # только первые 50 сэмплов (после фильтров)
 *   node scripts/run-experiment.js --from 100 --to 200  # диапазон сэмплов (по индексу)
 *   node scripts/run-experiment.js --config B3 --no-resume # пересчитать слаги из выборки заново
 *   node scripts/run-experiment.js --config B3 --failed-only       # все упавшие (build или test)
 *   node scripts/run-experiment.js --config B3 --build-failed-only # только провалы билда
 *   node scripts/run-experiment.js --config B3 --test-failed-only  # только провалы тестов
 *   node scripts/run-experiment.js --summary            # агрегировать имеющиеся per-config файлы
 *   node scripts/run-experiment.js --list-configs       # показать допустимые конфиги
 *   node scripts/run-experiment.js --list-groups        # показать доступные группы (сценарии)
 *   node scripts/run-experiment.js --out ./my-out       # своя папка артефактов
 *
 * Требует: npm run build перед запуском (для CLI).
 */

import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const DATASETS = path.join(ROOT, 'datasets');
const CLI = path.join(ROOT, 'dist', 'cli.js');
const INJECT_TESTS = path.join(ROOT, 'scripts', 'inject-and-run-tests.js');

const ALL_CONFIGS = ['B0raw', 'B0', 'B1', 'B2', 'B3'];

function parseCsv(s) {
  return String(s || '')
    .split(',')
    .map((x) => x.trim())
    .filter(Boolean);
}

function parseArgs(argv) {
  const opts = {
    configs: null,        // массив выбранных конфигов
    scenarios: null,      // массив выбранных сценариев (S1_layout и т.п.)
    samplesLimit: Infinity,
    fromIdx: 0,
    toIdx: Infinity,
    experimentDir: path.join(ROOT, 'experiment-output'),
    resume: true,
    failedOnly: false,
    failedKind: 'all', // 'all' | 'build' | 'test'
    summaryOnly: false,
    recompute: false,
    recomputeForce: false,
    listConfigs: false,
    listGroups: false,
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    const next = argv[i + 1];
    switch (a) {
      case '--config':
      case '--configs':
        opts.configs = parseCsv(next);
        i++;
        break;
      case '--scenario':
      case '--scenarios':
      case '--group':
      case '--groups':
        opts.scenarios = parseCsv(next);
        i++;
        break;
      case '--samples':
        opts.samplesLimit = parseInt(next, 10);
        i++;
        break;
      case '--from':
        opts.fromIdx = parseInt(next, 10);
        i++;
        break;
      case '--to':
        opts.toIdx = parseInt(next, 10);
        i++;
        break;
      case '--out':
        opts.experimentDir = path.resolve(next);
        i++;
        break;
      case '--resume':
        opts.resume = true;
        break;
      case '--no-resume':
      case '--fresh':
      case '--restart':
        opts.resume = false;
        break;
      case '--failed-only':
      case '--only-failed':
      case '--retry-failed':
        opts.failedOnly = true;
        opts.failedKind = 'all';
        break;
      case '--build-failed-only':
      case '--failed-build':
      case '--retry-build-failed':
        opts.failedOnly = true;
        opts.failedKind = 'build';
        break;
      case '--test-failed-only':
      case '--failed-test':
      case '--retry-test-failed':
        opts.failedOnly = true;
        opts.failedKind = 'test';
        break;
      case '--summary':
      case '--summary-only':
        opts.summaryOnly = true;
        break;
      case '--recompute':
      case '--recompute-aggregates':
        opts.recompute = true;
        break;
      case '--recompute-force':
        opts.recompute = true;
        opts.recomputeForce = true;
        break;
      case '--list-configs':
        opts.listConfigs = true;
        break;
      case '--list-groups':
      case '--list-scenarios':
        opts.listGroups = true;
        break;
      case '--help':
      case '-h':
        printHelpAndExit(0);
        break;
      default:
        if (a.startsWith('--')) {
          console.error(`Unknown flag: ${a}`);
          printHelpAndExit(1);
        }
    }
  }
  return opts;
}

function printHelpAndExit(code) {
  console.log(
`Usage:
  node scripts/run-experiment.js [options]

Options:
  --config <name>            одна конфигурация (B0raw|B0|B1|B2|B3)
  --configs <a,b,c>          несколько конфигураций через запятую
  --group <name>             одна группа примеров (напр., S1_layout)
  --groups <g1,g2>           несколько групп через запятую (алиас --scenarios)
  --samples N                ограничить число сэмплов (после фильтра)
  --from N --to M            диапазон сэмплов по индексу (после фильтра)
  --out <dir>                папка для артефактов (default: ./experiment-output)
  --no-resume (--fresh)      принудительно пересчитать слаги, попавшие в выборку
                             (по умолчанию включён resume — при повторном запуске
                              уже посчитанные слаги пропускаются)
  --failed-only              пересчитать только ранее упавшие слаги (build fail
                             или test fail) из выборки; успешные и ещё не считавшиеся
                             пропускаются
  --build-failed-only        как --failed-only, но берёт только слаги с провалом билда
  --test-failed-only         как --failed-only, но берёт только слаги с провалом тестов
                             (билд при этом был ок)
  --summary                  только собрать общую сводку из per-config файлов
  --recompute                пересчитать агрегаты в каждом per-config файле строго
                             из массива runs[] (источник правды), затем обновить
                             общую сводку. Файлы, изменённые недавно (<30 сек),
                             пропускаются как потенциально активные.
  --recompute-force          как --recompute, но без защиты по mtime (опасно,
                             если параллельно запущен другой прогон)
  --list-configs             список доступных конфигов
  --list-groups              список доступных групп примеров
  -h, --help                 эта справка

Поведение при повторных запусках:
  По умолчанию включён resume: слаги, уже посчитанные в per-config файле, пропускаются,
  поэтому после прерывания (Ctrl+C) достаточно перезапустить ту же команду — продолжит
  с места остановки. Слаги вне выборки (--group/--samples/--from/--to) всегда сохраняются.
  Флаг --no-resume (--fresh) заставит пересчитать слаги из выборки заново, перезаписав их.
  Флаг --failed-only возьмёт только ранее упавшие (build fail или test fail) слаги из
  выборки — удобно для пересчёта после фикса датасета или багов в пайплайне.
`
  );
  process.exit(code);
}

function findSwiftSamples(scenariosFilter) {
  const list = [];
  for (const name of fs.readdirSync(DATASETS)) {
    const dir = path.join(DATASETS, name);
    if (!fs.statSync(dir).isDirectory()) continue;
    if (scenariosFilter && !scenariosFilter.includes(name)) continue;
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

function runCli(swiftPath, outDir, config, specPath) {
  const inputArg = path.isAbsolute(swiftPath) ? swiftPath : path.resolve(ROOT, swiftPath);
  const outArg = path.isAbsolute(outDir) ? outDir : path.resolve(ROOT, outDir);
  const args = [CLI, inputArg, '--out', outArg, '--config', config];
  // Spec передаём только для конфигов с repair-циклом — чтобы валидатор мог
  // прогнать Vitest и подать тестовую ошибку в repair().
  if (specPath && config === 'B3') {
    const specArg = path.isAbsolute(specPath) ? specPath : path.resolve(ROOT, specPath);
    args.push('--spec', specArg);
  }
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

function emptyAgg() {
  return {
    buildOk: 0,
    testOk: 0,
    fullOk: 0,
    inconsistent: 0,
    totalLlmCalls: 0,
    totalPromptTokens: 0,
    totalCompletionTokens: 0,
    totalTokens: 0,
    runs: [],
  };
}

// Полный успех: билд прошёл И тест либо прошёл, либо его не было (testSkipped).
// Тесто-скип — это «нет сигнала», его не штрафуем.
function isFullOk(r) {
  return r.buildOk === true && (r.testOk === true || r.testSkipped === true);
}

// Инконсистентность: билд упал, но тест почему-то записан как пройденный.
// Возможно, потому что Vitest сам собирает через esbuild, минуя `tsc -b && vite build`.
function isInconsistent(r) {
  return r.buildOk !== true && r.testOk === true;
}

function aggFromRuns(runs) {
  const agg = emptyAgg();
  for (const r of runs) {
    if (r.buildOk) agg.buildOk++;
    if (r.testOk) agg.testOk++;
    if (isFullOk(r)) agg.fullOk++;
    if (isInconsistent(r)) agg.inconsistent++;
    agg.totalLlmCalls += r.llmCalls || 0;
    agg.totalPromptTokens += r.promptTokens || 0;
    agg.totalCompletionTokens += r.completionTokens || 0;
    agg.totalTokens += r.totalTokens || 0;
  }
  agg.runs = runs;
  return agg;
}

function perConfigPath(experimentDir, config) {
  return path.join(experimentDir, `experiment-results-${config}.json`);
}

function readPerConfig(experimentDir, config) {
  const p = perConfigPath(experimentDir, config);
  if (!fs.existsSync(p)) return null;
  try {
    return JSON.parse(fs.readFileSync(p, 'utf-8'));
  } catch {
    return null;
  }
}

function writePerConfig(experimentDir, config, payload) {
  fs.mkdirSync(experimentDir, { recursive: true });
  fs.writeFileSync(perConfigPath(experimentDir, config), JSON.stringify(payload, null, 2));
}

function buildSummaryTable(byConfig, sampleCounts) {
  const lines = [];
  lines.push('| Config | Samples | Build % | Test % | Full % | LLM calls | Tokens (total) | Avg tokens/sample |');
  lines.push('|--------|---------|---------|--------|--------|-----------|----------------|-------------------|');
  for (const c of Object.keys(byConfig)) {
    const d = byConfig[c];
    const n = sampleCounts[c] || (d.runs ? d.runs.length : 0);
    const buildPct = n ? ((d.buildOk / n) * 100).toFixed(1) : '0';
    const testPct = n ? ((d.testOk / n) * 100).toFixed(1) : '0';
    const fullPct = n ? ((d.fullOk / n) * 100).toFixed(1) : '0';
    const avgTokens = n && d.totalTokens > 0 ? Math.round(d.totalTokens / n).toLocaleString() : '—';
    lines.push(`| ${c} | ${n} | ${buildPct} | ${testPct} | ${fullPct} | ${d.totalLlmCalls} | ${d.totalTokens.toLocaleString()} | ${avgTokens} |`);
  }
  return lines.join('\n');
}

// Пересчитывает агрегаты в каждом experiment-results-<config>.json строго из массива runs[].
// runs[] считается источником правды; все производные поля (buildOk, testOk, totalLlmCalls,
// totalPromptTokens, totalCompletionTokens, totalTokens, samplesCount, buildRate, testRate)
// перезаписываются. Поля startedAt/filter/config сохраняются. Добавляется recomputedAt.
//
// safeWindowMs: если файл был модифицирован недавно (вероятно, его сейчас пишет другой
// процесс run-experiment.js) — пропускаем, чтобы не словить рейс. Можно отключить флагом force.
function recomputePerConfigFiles(experimentDir, { force = false, safeWindowMs = 30_000 } = {}) {
  if (!fs.existsSync(experimentDir)) {
    console.log(`No experiment dir: ${experimentDir}`);
    return { updated: [], skipped: [], missing: [] };
  }
  const updated = [];
  const skipped = [];
  const missing = [];
  const now = Date.now();
  for (const c of ALL_CONFIGS) {
    const p = perConfigPath(experimentDir, c);
    if (!fs.existsSync(p)) {
      missing.push(c);
      continue;
    }
    if (!force) {
      try {
        const st = fs.statSync(p);
        if (now - st.mtimeMs < safeWindowMs) {
          skipped.push({ config: c, reason: `recently modified (${Math.round((now - st.mtimeMs) / 1000)}s ago) — likely active run; use --recompute-force to override` });
          continue;
        }
      } catch (_) {
      }
    }
    let data;
    try {
      data = JSON.parse(fs.readFileSync(p, 'utf-8'));
    } catch (e) {
      skipped.push({ config: c, reason: `parse error: ${e.message}` });
      continue;
    }
    const runs = Array.isArray(data.runs) ? data.runs : [];
    const agg = aggFromRuns(runs);
    const before = {
      samplesCount: data.samplesCount,
      buildOk: data.buildOk,
      testOk: data.testOk,
      fullOk: data.fullOk,
      inconsistent: data.inconsistent,
      totalLlmCalls: data.totalLlmCalls,
      totalTokens: data.totalTokens,
      buildRate: data.buildRate,
      testRate: data.testRate,
      fullSuccessRate: data.fullSuccessRate,
    };
    const after = {
      samplesCount: runs.length,
      buildOk: agg.buildOk,
      testOk: agg.testOk,
      fullOk: agg.fullOk,
      inconsistent: agg.inconsistent,
      totalLlmCalls: agg.totalLlmCalls,
      totalTokens: agg.totalTokens,
      buildRate: runs.length ? agg.buildOk / runs.length : 0,
      testRate: runs.length ? agg.testOk / runs.length : 0,
      fullSuccessRate: runs.length ? agg.fullOk / runs.length : 0,
    };
    const payload = {
      config: data.config ?? c,
      samplesCount: after.samplesCount,
      startedAt: data.startedAt,
      updatedAt: data.updatedAt,
      recomputedAt: new Date().toISOString(),
      filter: data.filter,
      buildOk: after.buildOk,
      testOk: after.testOk,
      fullOk: after.fullOk,
      inconsistent: after.inconsistent,
      totalLlmCalls: after.totalLlmCalls,
      totalPromptTokens: agg.totalPromptTokens,
      totalCompletionTokens: agg.totalCompletionTokens,
      totalTokens: after.totalTokens,
      buildRate: after.buildRate,
      testRate: after.testRate,
      fullSuccessRate: after.fullSuccessRate,
      runs,
    };
    writePerConfig(experimentDir, c, payload);
    const drifted = ['samplesCount', 'buildOk', 'testOk', 'fullOk', 'inconsistent', 'totalLlmCalls', 'totalTokens']
      .filter((k) => before[k] !== after[k])
      .map((k) => `${k}: ${before[k] ?? '—'} → ${after[k]}`);
    updated.push({ config: c, samplesCount: after.samplesCount, drifted });
  }
  console.log(`\n--- Recompute aggregates (source of truth: runs[]) in ${experimentDir} ---`);
  for (const u of updated) {
    if (u.drifted.length) {
      console.log(`  [${u.config}] updated (n=${u.samplesCount}); drift: ${u.drifted.join('; ')}`);
    } else {
      console.log(`  [${u.config}] consistent (n=${u.samplesCount}) — no drift`);
    }
  }
  for (const s of skipped) {
    console.log(`  [${s.config}] SKIPPED — ${s.reason}`);
  }
  for (const m of missing) {
    console.log(`  [${m}] no per-config file`);
  }
  return { updated, skipped, missing };
}

function summarize(experimentDir) {
  const byConfig = {};
  const sampleCounts = {};
  for (const c of ALL_CONFIGS) {
    const data = readPerConfig(experimentDir, c);
    if (!data) continue;
    byConfig[c] = aggFromRuns(data.runs || []);
    sampleCounts[c] = data.samplesCount ?? (data.runs ? data.runs.length : 0);
  }
  if (Object.keys(byConfig).length === 0) {
    console.log(`No per-config result files found in ${experimentDir}.`);
    return;
  }
  console.log(`\n--- Summary (from ${experimentDir}) ---\n`);
  console.log(buildSummaryTable(byConfig, sampleCounts));
  const combinedPath = path.join(experimentDir, 'experiment-results.json');
  fs.writeFileSync(
    combinedPath,
    JSON.stringify(
      {
        configs: Object.keys(byConfig),
        sampleCounts,
        byConfig: Object.fromEntries(
          Object.entries(byConfig).map(([c, d]) => {
            const n = sampleCounts[c] || d.runs.length;
            return [
              c,
              {
                samplesCount: n,
                buildOk: d.buildOk,
                testOk: d.testOk,
                fullOk: d.fullOk,
                inconsistent: d.inconsistent,
                totalLlmCalls: d.totalLlmCalls,
                totalPromptTokens: d.totalPromptTokens,
                totalCompletionTokens: d.totalCompletionTokens,
                totalTokens: d.totalTokens,
                buildRate: n ? d.buildOk / n : 0,
                testRate: n ? d.testOk / n : 0,
                fullSuccessRate: n ? d.fullOk / n : 0,
                runs: d.runs,
              },
            ];
          })
        ),
      },
      null,
      2
    )
  );
  console.log('\nCombined results:', combinedPath);
}

function main() {
  const opts = parseArgs(process.argv.slice(2));

  if (opts.listConfigs) {
    console.log(ALL_CONFIGS.join('\n'));
    return;
  }

  if (opts.listGroups) {
    const groups = fs
      .readdirSync(DATASETS)
      .filter((n) => {
        try {
          return fs.statSync(path.join(DATASETS, n)).isDirectory();
        } catch {
          return false;
        }
      })
      .sort();
    console.log(groups.join('\n'));
    return;
  }

  if (opts.recompute) {
    recomputePerConfigFiles(opts.experimentDir, { force: opts.recomputeForce });
    summarize(opts.experimentDir);
    return;
  }

  if (opts.summaryOnly) {
    summarize(opts.experimentDir);
    return;
  }

  if (!fs.existsSync(CLI)) {
    console.error('Run "npm run build" first.');
    process.exit(1);
  }

  const configs = (opts.configs || ALL_CONFIGS).map((c) => {
    if (!ALL_CONFIGS.includes(c)) {
      console.error(`Unknown config: ${c}. Allowed: ${ALL_CONFIGS.join(', ')}`);
      process.exit(1);
    }
    return c;
  });

  const allSamples = findSwiftSamples(opts.scenarios);
  let limited = allSamples;
  if (opts.fromIdx > 0 || opts.toIdx !== Infinity) {
    limited = allSamples.slice(opts.fromIdx, opts.toIdx);
  }
  if (opts.samplesLimit !== Infinity) {
    limited = limited.slice(0, opts.samplesLimit);
  }

  const filterTag = [
    opts.scenarios ? `scenarios=${opts.scenarios.join(',')}` : null,
    opts.fromIdx > 0 || opts.toIdx !== Infinity ? `range=${opts.fromIdx}..${opts.toIdx === Infinity ? 'end' : opts.toIdx}` : null,
    opts.samplesLimit !== Infinity ? `samples=${opts.samplesLimit}` : null,
    opts.failedOnly ? `failed-only:${opts.failedKind}` : (opts.resume ? 'resume' : 'fresh'),
  ].filter(Boolean).join(' ');

  console.log(
    `Experiment: configs ${configs.join(', ')}; samples: ${limited.length} of ${allSamples.length}${filterTag ? ` [${filterTag}]` : ''}\n`
  );

  fs.mkdirSync(opts.experimentDir, { recursive: true });

  const selectedSlugs = new Set(limited.map((s) => s.slug));

  // Слаг считается "упавшим" в зависимости от режима failedKind:
  //   'build' — только если не прошёл билд;
  //   'test'  — билд ок, но тест прогонялся и упал;
  //   'all'   — либо билд, либо тест.
  // testSkipped=true означает, что spec отсутствовал — это не фейл, это "нет сигнала".
  const isBuildFail = (r) => r.buildOk !== true;
  const isTestFail = (r) => r.buildOk === true && r.testSkipped !== true && r.testOk !== true;
  const isFailedRun = (r) => {
    if (!r) return false;
    if (opts.failedKind === 'build') return isBuildFail(r);
    if (opts.failedKind === 'test') return isTestFail(r);
    return isBuildFail(r) || isTestFail(r);
  };

  for (const config of configs) {
    const existing = readPerConfig(opts.experimentDir, config);
    const existingRuns = existing && Array.isArray(existing.runs) ? existing.runs : [];

    // --failed-only: оставляем в выборке только слаги, у которых в per-config файле
    // записан упавший прогон. Всё остальное (и успехи, и ещё не считавшиеся) — не трогаем.
    let perConfigLimited = limited;
    let failedSlugSet = null;
    if (opts.failedOnly) {
      failedSlugSet = new Set(
        existingRuns.filter(isFailedRun).filter((r) => selectedSlugs.has(r.slug)).map((r) => r.slug)
      );
      perConfigLimited = limited.filter((s) => failedSlugSet.has(s.slug));
    }
    const perConfigSelectedSlugs = new Set(perConfigLimited.map((s) => s.slug));

    // Стартовое состояние runsAcc:
    //   - слаги ВНЕ выборки (не затронутые текущим прогоном) — всегда оставляем.
    //   - слаги ИЗ выборки: при resume (дефолт) и не в --failed-only оставляем и не пересчитываем;
    //     при --no-resume или --failed-only выбрасываем, чтобы перезаписать свежими результатами.
    const shouldKeepInside = opts.resume && !opts.failedOnly;
    const keptOutside = existingRuns.filter((r) => !perConfigSelectedSlugs.has(r.slug));
    const keptInsideResume = shouldKeepInside
      ? existingRuns.filter((r) => perConfigSelectedSlugs.has(r.slug))
      : [];
    const runsAcc = [...keptOutside, ...keptInsideResume];
    const doneSlugs = new Set(keptInsideResume.map((r) => r.slug));

    let processed = 0;
    let skippedResume = 0;
    let replaced = keptOutside.length < existingRuns.length && !shouldKeepInside
      ? existingRuns.length - keptOutside.length
      : 0;
    if (opts.failedOnly && perConfigLimited.length === 0) {
      console.log(`  [${config}] --failed-only (${opts.failedKind}): no matching failed slugs in selection, nothing to do.`);
      continue;
    }
    const total = perConfigLimited.length;
    const totalWidth = String(total).length;
    const progress = (i) => `${String(i).padStart(totalWidth, ' ')}/${total}`;
    for (let i = 0; i < perConfigLimited.length; i++) {
      const { slug, swiftPath, specPath } = perConfigLimited[i];
      const pos = progress(i + 1);
      if (doneSlugs.has(slug)) {
        skippedResume++;
        console.log(`  [${config} ${pos}] ${slug} ... skipped (resume)`);
        continue;
      }
      const outDir = path.join(opts.experimentDir, config, slug.replace(/\//g, '_'));
      process.stdout.write(`  [${config} ${pos}] ${slug} ... `);
      runCli(swiftPath, outDir, config, specPath);
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

      const testResult = runTests(outDir, specPath);
      if (testResult.skipped) {
        process.stdout.write(`build ${buildOk ? 'ok' : 'fail'}, test skipped, llm=${llmCalls}, tokens=${totalTokens || '—'}\n`);
      } else {
        process.stdout.write(`build ${buildOk ? 'ok' : 'fail'}, test ${testResult.passed ? 'ok' : 'fail'}, llm=${llmCalls}, tokens=${totalTokens || '—'}\n`);
      }

      runsAcc.push({
        slug,
        buildOk,
        testOk: testResult.passed,
        testSkipped: testResult.skipped,
        llmCalls,
        ...(promptTokens > 0 && { promptTokens }),
        ...(completionTokens > 0 && { completionTokens }),
        ...(totalTokens > 0 && { totalTokens }),
      });

      // Инкрементальное сохранение после каждого сэмпла — чтобы при прерывании не потерять прогресс.
      const agg = aggFromRuns(runsAcc);
      writePerConfig(opts.experimentDir, config, {
        config,
        samplesCount: runsAcc.length,
        startedAt: existing?.startedAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        filter: {
          scenarios: opts.scenarios,
          fromIdx: opts.fromIdx,
          toIdx: opts.toIdx === Infinity ? null : opts.toIdx,
          samplesLimit: opts.samplesLimit === Infinity ? null : opts.samplesLimit,
        },
        buildOk: agg.buildOk,
        testOk: agg.testOk,
        fullOk: agg.fullOk,
        inconsistent: agg.inconsistent,
        totalLlmCalls: agg.totalLlmCalls,
        totalPromptTokens: agg.totalPromptTokens,
        totalCompletionTokens: agg.totalCompletionTokens,
        totalTokens: agg.totalTokens,
        buildRate: runsAcc.length ? agg.buildOk / runsAcc.length : 0,
        testRate: runsAcc.length ? agg.testOk / runsAcc.length : 0,
        fullSuccessRate: runsAcc.length ? agg.fullOk / runsAcc.length : 0,
        runs: runsAcc,
      });
      processed++;
    }

    const msgParts = [];
    if (replaced) msgParts.push(`replaced ${replaced} previous`);
    if (keptOutside.length) msgParts.push(`kept ${keptOutside.length} outside-of-selection`);
    if (skippedResume) msgParts.push(`skipped ${skippedResume} done (resume)`);
    if (processed) msgParts.push(`processed ${processed} new`);
    if (msgParts.length) {
      console.log(`  [${config}] ${msgParts.join('; ')}.`);
    }
  }

  // После прогона выбранных конфигов всегда обновляем общую сводку из всех per-config файлов.
  summarize(opts.experimentDir);
}

main();
