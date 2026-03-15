#!/usr/bin/env node
/**
 * Внедряет поведенческий тест в сконвертированный проект и запускает тесты.
 * Usage: node scripts/inject-and-run-tests.js <outDir> <specPath>
 * Example: node scripts/inject-and-run-tests.js ./output-s1 datasets/S1_layout/vstack_simple.spec.tsx
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const outDir = process.argv[2];
const specPath = process.argv[3];

if (!outDir || !specPath) {
  console.error('Usage: node scripts/inject-and-run-tests.js <outDir> <specPath>');
  process.exit(1);
}

const outAbs = path.resolve(outDir);
const specAbs = path.resolve(specPath);

if (!fs.existsSync(outAbs)) {
  console.error('Output dir not found:', outAbs);
  process.exit(1);
}
if (!fs.existsSync(specAbs)) {
  console.error('Spec file not found:', specAbs);
  process.exit(1);
}

const srcDir = path.join(outAbs, 'src');
const destSpec = path.join(srcDir, 'App.spec.tsx');

if (!fs.existsSync(srcDir)) {
  console.error('No src/ in output dir');
  process.exit(1);
}

// Copy spec
fs.copyFileSync(specAbs, destSpec);

// Read package.json
const pkgPath = path.join(outAbs, 'package.json');
let pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));

const testDeps = {
  vitest: '^1.0.0',
  '@testing-library/react': '^14.0.0',
  '@testing-library/user-event': '^14.0.0',
  '@testing-library/jest-dom': '^6.0.0',
  'jsdom': '^23.0.0',
};

if (!pkg.devDependencies) pkg.devDependencies = {};
let changed = false;
for (const [dep, ver] of Object.entries(testDeps)) {
  if (!pkg.devDependencies[dep]) {
    pkg.devDependencies[dep] = ver;
    changed = true;
  }
}
if (!pkg.scripts) pkg.scripts = {};
if (!pkg.scripts.test) {
  pkg.scripts.test = 'vitest run';
  changed = true;
}
if (changed) fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

// Vitest setup (for jest-dom)
const setupPath = path.join(outAbs, 'vitest.setup.ts');
if (!fs.existsSync(setupPath)) {
  fs.writeFileSync(setupPath, "import '@testing-library/jest-dom';\n");
}

// Always overwrite vitest.config.ts with jsxRuntime:'classic' to avoid
// "@vitejs/plugin-react can't detect preamble" in jsdom (no HMR preamble injection).
const vitestConfig = `import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react({ jsxRuntime: 'classic', fastRefresh: false })],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['vitest.setup.ts'],
    include: ['src/**/*.spec.tsx', 'src/**/*.spec.ts'],
  },
});
`;
fs.writeFileSync(path.join(outAbs, 'vitest.config.ts'), vitestConfig);

// Also patch vite.config.ts: Vitest merges it with vitest.config.ts, so the
// react() plugin from vite.config.ts (without jsxRuntime:'classic') also loads
// and triggers the preamble check. Rewrite it with classic runtime too.
const viteConfigPath = path.join(outAbs, 'vite.config.ts');
const viteConfig = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react({ jsxRuntime: 'classic' })],
});
`;
fs.writeFileSync(viteConfigPath, viteConfig);

// Exclude spec files from tsc so "tsc && vite build" doesn't fail on describe/it/expect (Vitest globals)
const tsconfigPath = path.join(outAbs, 'tsconfig.json');
if (fs.existsSync(tsconfigPath)) {
  const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf-8'));
  const exclude = new Set(tsconfig.exclude || []);
  exclude.add('**/*.spec.ts');
  exclude.add('**/*.spec.tsx');
  tsconfig.exclude = [...exclude];
  fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));
}

// npm install && npm test (explicit env so PATH/npm are available in all environments)
const env = { ...process.env };
execSync('npm install', { cwd: outAbs, stdio: 'inherit', env });
execSync('npm test', { cwd: outAbs, stdio: 'inherit', env });
