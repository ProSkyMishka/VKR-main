import { spawnSync } from 'child_process';
import path from 'path';
import fs from 'fs/promises';

export interface ValidationResult {
  success: boolean;
  buildOk: boolean;
  buildError?: string;
  testOk?: boolean;
  testError?: string;
}

const FALLBACK_PACKAGE_JSON = {
  name: 'generated-app',
  private: true,
  version: '0.0.0',
  type: 'module',
  scripts: {
    dev: 'vite',
    build: 'tsc -b && vite build',
    preview: 'vite preview',
  },
  dependencies: {
    react: '^18.2.0',
    'react-dom': '^18.2.0',
  },
  devDependencies: {
    '@types/react': '^18.2.0',
    '@types/react-dom': '^18.2.0',
    '@vitejs/plugin-react': '^4.2.0',
    typescript: '^5.3.0',
    vite: '^5.0.0',
  },
};

function tryFixPackageJson(raw: string): string | null {
  let fixed = raw
    .replace(/'/g, '"')
    .replace(/,(\s*[}\]])/g, '$1');
  try {
    JSON.parse(fixed);
    return fixed;
  } catch {
    return null;
  }
}

const REQUIRED_VITE_DEPS: Record<string, string> = {
  '@vitejs/plugin-react': '^4.2.0',
  '@types/react': '^18.2.0',
  '@types/react-dom': '^18.2.0',
  vite: '^5.0.0',
  typescript: '^5.3.0',
};
const REQUIRED_DEPS: Record<string, string> = {
  react: '^18.2.0',
  'react-dom': '^18.2.0',
};

const OPTIONAL_DEPS: { pattern: RegExp; name: string; version: string }[] = [
  { pattern: /from\s+['"]react-router-dom['"]/, name: 'react-router-dom', version: '^6.20.0' },
];

async function detectOptionalDeps(outDir: string): Promise<Record<string, string>> {
  const found: Record<string, string> = {};
  const srcDir = path.join(outDir, 'src');
  try {
    const walk = async (dir: string): Promise<void> => {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      for (const e of entries) {
        const full = path.join(dir, e.name);
        if (e.isDirectory()) {
          await walk(full);
        } else if (/\.(tsx?|jsx?)$/.test(e.name)) {
          const content = await fs.readFile(full, 'utf-8');
          for (const { pattern, name, version } of OPTIONAL_DEPS) {
            if (pattern.test(content) && !found[name]) found[name] = version;
          }
        }
      }
    };
    await walk(srcDir);
  } catch {
  }
  return found;
}

async function ensureValidPackageJson(outDir: string): Promise<void> {
  const packagePath = path.join(outDir, 'package.json');
  let content: string;
  try {
    content = await fs.readFile(packagePath, 'utf-8');
  } catch {
    await fs.writeFile(packagePath, JSON.stringify(FALLBACK_PACKAGE_JSON, null, 2), 'utf-8');
    return;
  }
  let pkg: { scripts?: Record<string, string>; dependencies?: Record<string, string>; devDependencies?: Record<string, string> };
  try {
    pkg = JSON.parse(content) as typeof FALLBACK_PACKAGE_JSON;
  } catch {
    const fixed = tryFixPackageJson(content);
    if (fixed) {
      await fs.writeFile(packagePath, fixed, 'utf-8');
      return;
    }
    await fs.writeFile(packagePath, JSON.stringify(FALLBACK_PACKAGE_JSON, null, 2), 'utf-8');
    return;
  }
  const hasViteConfig = await fs.access(path.join(outDir, 'vite.config.ts')).then(() => true).catch(() => false);
  let changed = false;
  if (hasViteConfig) {
    if (!pkg.scripts) pkg.scripts = {};
    if (!pkg.scripts.dev) {
      pkg.scripts.dev = 'vite';
      changed = true;
    }
    if (!pkg.dependencies) pkg.dependencies = {};
    for (const [name, version] of Object.entries(REQUIRED_DEPS)) {
      if (!pkg.dependencies[name]) {
        pkg.dependencies[name] = version;
        changed = true;
      }
    }
    if (!pkg.devDependencies) pkg.devDependencies = {};
    for (const [name, version] of Object.entries(REQUIRED_VITE_DEPS)) {
      if (!pkg.devDependencies[name]) {
        pkg.devDependencies[name] = version;
        changed = true;
      }
      if (name === 'vite' && pkg.devDependencies[name]) {
        const v = pkg.devDependencies[name];
        if (/^[\^~]?3\./.test(v) || /^[\^~]?2\./.test(v)) {
          pkg.devDependencies[name] = version;
          changed = true;
        }
      }
    }
    const optional = await detectOptionalDeps(outDir);
    for (const [name, version] of Object.entries(optional)) {
      if (!pkg.dependencies![name]) {
        pkg.dependencies![name] = version;
        changed = true;
      }
    }
    if (changed) {
      await fs.writeFile(packagePath, JSON.stringify(pkg, null, 2), 'utf-8');
    }
  }
}

async function ensureViteBase(outDir: string): Promise<void> {
  const viteConfigPath = path.join(outDir, 'vite.config.ts');
  let content: string;
  try {
    content = await fs.readFile(viteConfigPath, 'utf-8');
  } catch {
    return;
  }
  if (/base\s*:\s*['"]/m.test(content)) return;
  const defineConfigMatch = content.match(/defineConfig\s*\(\s*\{\s*/);
  if (defineConfigMatch) {
    const insertPos = defineConfigMatch.index! + defineConfigMatch[0].length;
    const newContent = content.slice(0, insertPos) + "base: './',\n  " + content.slice(insertPos);
    await fs.writeFile(viteConfigPath, newContent, 'utf-8');
  }
}

async function ensureIndexHtmlScriptPath(outDir: string): Promise<void> {
  const indexPath = path.join(outDir, 'index.html');
  let content: string;
  try {
    content = await fs.readFile(indexPath, 'utf-8');
  } catch {
    return;
  }
  const fixed = content.replace(
    /src=["']\/src\/(main\.(tsx|jsx|js))["']/g,
    'src="./src/$1"'
  );
  if (fixed !== content) {
    await fs.writeFile(indexPath, fixed, 'utf-8');
  }
}

async function ensureTsConfigNoBrokenRefs(outDir: string): Promise<void> {
  const tsconfigPath = path.join(outDir, 'tsconfig.json');
  let content: string;
  try {
    content = await fs.readFile(tsconfigPath, 'utf-8');
  } catch {
    return;
  }
  const refMatch = content.match(/"references"\s*:\s*\[\s*\{\s*"path"\s*:\s*["']\.\/tsconfig\.node\.json["']\s*\}\s*]/);
  if (!refMatch) return;
  const fixed = content.replace(/\s*"references"\s*:\s*\[\s*\{\s*"path"\s*:\s*["']\.\/tsconfig\.node\.json["']\s*\}\s*]\s*,?\s*/, '').replace(/,(\s*})/g, '$1');
  if (fixed !== content) await fs.writeFile(tsconfigPath, fixed, 'utf-8');
}

export async function validateProject(outDir: string): Promise<ValidationResult> {
  const packagePath = path.join(outDir, 'package.json');
  try {
    await fs.access(packagePath);
  } catch {
    return { success: false, buildOk: false, buildError: 'No package.json in output directory' };
  }

  await ensureValidPackageJson(outDir);
  await ensureViteBase(outDir);
  await ensureIndexHtmlScriptPath(outDir);
  await ensureTsConfigNoBrokenRefs(outDir);

  const installOk = runNpmInstall(outDir);
  if (!installOk.success) {
    return { success: false, buildOk: false, buildError: installOk.stderr || 'npm install failed' };
  }

  const buildResult = runBuild(outDir);
  if (!buildResult.success) {
    const msg = [buildResult.stdout, buildResult.stderr].filter(Boolean).join('\n').trim() || 'Build failed';
    return { success: false, buildOk: false, buildError: msg };
  }

  return { success: true, buildOk: true };
}

function runNpmInstall(outDir: string): { success: boolean; stderr: string } {
  const r = spawnSync('npm', ['install'], {
    cwd: outDir,
    shell: true,
    encoding: 'utf-8',
    stdio: ['ignore', 'pipe', 'pipe'],
    env: { ...process.env },
  });
  return { success: r.status === 0, stderr: r.stderr || '' };
}

function runBuild(outDir: string): { success: boolean; stdout: string; stderr: string } {
  const r = spawnSync('npm', ['run', 'build'], {
    cwd: outDir,
    shell: true,
    encoding: 'utf-8',
    stdio: ['ignore', 'pipe', 'pipe'],
    env: { ...process.env },
  });
  return {
    success: r.status === 0,
    stdout: r.stdout || '',
    stderr: r.stderr || '',
  };
}
