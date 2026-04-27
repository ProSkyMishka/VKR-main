import fs from 'fs/promises';
import path from 'path';

function ensureFrameCenteringInContent(content: string): string {
  const insert = " display: 'flex', alignItems: 'center', justifyContent: 'center',";
  let result = content;
  let i = 0;
  while (i < result.length) {
    const styleStart = result.indexOf('style={{', i);
    if (styleStart === -1) break;
    const open = styleStart + 'style={{'.length;
    let depth = 1;
    let j = open;
    while (j < result.length && depth > 0) {
      if (result[j] === '{') depth++;
      else if (result[j] === '}') depth--;
      j++;
    }
    const styleEnd = j;
    const inner = result.slice(open, styleEnd - 1);
    const hasWidthHeight = /\bwidth:\s*\d+/.test(inner) && /\bheight:\s*\d+/.test(inner);
    const hasCentering = /alignItems|justifyContent/.test(inner);
    if (hasWidthHeight && !hasCentering) {
      result = result.slice(0, open) + insert + (inner.startsWith(' ') ? '' : ' ') + inner + result.slice(styleEnd - 1);
      i = styleEnd + insert.length;
    } else {
      i = styleEnd;
    }
  }
  return result;
}

export async function ensureFrameDivsCenter(outDir: string): Promise<void> {
  const viewsDir = path.join(outDir, 'src', 'views');
  let entries: string[];
  try {
    entries = await fs.readdir(viewsDir);
  } catch {
    return;
  }
  for (const name of entries) {
    if (!name.endsWith('.tsx')) continue;
    const fullPath = path.join(viewsDir, name);
    const content = await fs.readFile(fullPath, 'utf-8');
    const fixed = ensureFrameCenteringInContent(content);
    if (fixed !== content) await fs.writeFile(fullPath, fixed, 'utf-8');
  }
}

// Спек-файлы LLM иногда подсовывает «по аналогии» с примерами в RAG-контексте,
// но в собираемом проекте нет devDeps `vitest`/`@testing-library/react`, и `tsc`
// падает на этих импортах. Тесты инжектятся отдельным скриптом
// (scripts/inject-and-run-tests.js), поэтому в самом проекте они не нужны.
function isStrayTestFile(p: string): boolean {
  const base = path.basename(p);
  return /\.(spec|test)\.(tsx?|jsx?)$/i.test(base);
}

export async function writeGeneratedFiles(outDir: string, files: { path: string; content: string }[]): Promise<void> {
  for (const f of files) {
    if (isStrayTestFile(f.path)) continue;
    const fullPath = path.join(outDir, f.path);
    await fs.mkdir(path.dirname(fullPath), { recursive: true });
    await fs.writeFile(fullPath, f.content, 'utf-8');
  }
}

export async function removeStrayTestFiles(outDir: string): Promise<number> {
  let removed = 0;
  async function walk(dir: string): Promise<void> {
    let entries: string[];
    try {
      entries = await fs.readdir(dir);
    } catch {
      return;
    }
    for (const name of entries) {
      const full = path.join(dir, name);
      let stat;
      try {
        stat = await fs.stat(full);
      } catch {
        continue;
      }
      if (stat.isDirectory()) {
        if (name === 'node_modules' || name === '.git') continue;
        await walk(full);
      } else if (isStrayTestFile(full)) {
        try {
          await fs.unlink(full);
          removed++;
        } catch {
        }
      }
    }
  }
  await walk(outDir);
  return removed;
}

export async function ensureEntryViewFile(outDir: string, entryViewName: string): Promise<void> {
  const viewsDir = path.join(outDir, 'src', 'views');
  const entryPath = path.join(viewsDir, `${entryViewName}.tsx`);
  try {
    await fs.access(entryPath);
    return;
  } catch {
  }
  try {
    const entries = await fs.readdir(viewsDir);
    const firstView = entries.find((e) => e.startsWith('View') && e.endsWith('.tsx'));
    if (firstView) {
      let content = await fs.readFile(path.join(viewsDir, firstView), 'utf-8');
      const baseName = firstView.replace(/\.tsx$/, '');
      content = content.replace(new RegExp(`\\b${baseName}\\b`, 'g'), entryViewName);
      await fs.writeFile(entryPath, content, 'utf-8');
      return;
    }
  } catch {
  }
  const stub = `import React from 'react';

export default function ${entryViewName}() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>${entryViewName}</div>
    </div>
  );
}
`;
  await fs.mkdir(viewsDir, { recursive: true });
  await fs.writeFile(entryPath, stub, 'utf-8');
}

function stripPathFromFirstLine(content: string): string {
  const firstLine = content.split('\n')[0]?.trim() ?? '';
  if (/^[\w./\-]+\.(tsx?|json|html)$/.test(firstLine) || firstLine.startsWith('src/')) {
    const rest = content.slice(content.indexOf('\n') + 1);
    return rest.trimStart();
  }
  return content;
}

export async function ensureMinimalProjectStructure(outDir: string, entryViewName: string): Promise<void> {
  const srcDir = path.join(outDir, 'src');
  const mainPath = path.join(srcDir, 'main.tsx');
  const appPath = path.join(srcDir, 'App.tsx');
  try {
    await fs.access(mainPath);
  } catch {
    await fs.mkdir(srcDir, { recursive: true });
    await fs.writeFile(
      mainPath,
      `import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`,
      'utf-8'
    );
  }
  try {
    await fs.access(appPath);
  } catch {
    await fs.mkdir(path.join(srcDir, 'views'), { recursive: true });
    await fs.writeFile(
      appPath,
      `import React from 'react';
import ${entryViewName} from './views/${entryViewName}';

function App() {
  return <${entryViewName} />;
}

export default App;
`,
      'utf-8'
    );
  }
}

const VIEW_FILE_RE = /^View\d+\.tsx$/;

export function getDefaultExportName(content: string): string | null {
  const m1 = content.match(/export\s+default\s+(\w+)/);
  if (m1) return m1[1];
  const m2 = content.match(/const\s+(\w+)\s*:\s*React\.FC/);
  if (m2) return m2[1];
  const m3 = content.match(/function\s+(\w+)\s*\(/);
  if (m3) return m3[1];
  return null;
}

const VIEWS_PATH_PREFIX = 'src/views/';

export function normalizeViewFilePaths(
  files: { path: string; content: string }[],
  options?: { viewNames?: string[]; entryViewName?: string }
): { path: string; content: string }[] {
  const viewNames = new Set(options?.viewNames ?? []);
  const entryViewName = options?.entryViewName ?? '';

  const result: { path: string; content: string }[] = [];
  for (const f of files) {
    if (!f.path.startsWith(VIEWS_PATH_PREFIX) || !f.path.endsWith('.tsx')) {
      result.push(f);
      continue;
    }
    const base = f.path.slice(VIEWS_PATH_PREFIX.length, -4);
    const exportName = getDefaultExportName(f.content);
    const targetBase = exportName && (viewNames.size === 0 || viewNames.has(exportName)) ? exportName : base;
    const targetPath = VIEWS_PATH_PREFIX + targetBase + '.tsx';

    if (targetBase === entryViewName) {
      const looksStub = f.content.split('\n').length < 25 && !/currentScreen|setCurrentScreen/.test(f.content);
      if (looksStub && base !== entryViewName) continue;
    }
    result.push({ path: targetPath, content: f.content });
  }

  const byPath = new Map<string, { path: string; content: string }>();
  for (const f of result) {
    if (!f.path.startsWith(VIEWS_PATH_PREFIX) || !f.path.endsWith('.tsx')) {
      byPath.set(f.path, f);
      continue;
    }
    const base = f.path.slice(VIEWS_PATH_PREFIX.length, -4);
    const exportName = getDefaultExportName(f.content);
    const existing = byPath.get(f.path);
    const preferThis = exportName === base && f.content.split('\n').length > 20;
    if (!existing || (preferThis && getDefaultExportName(existing.content) !== base)) {
      byPath.set(f.path, f);
    }
  }
  return Array.from(byPath.values());
}

export async function ensureViewFilesByName(outDir: string): Promise<void> {
  const viewsDir = path.join(outDir, 'src', 'views');
  const srcDir = path.join(outDir, 'src');
  let entries: string[];
  try {
    entries = await fs.readdir(viewsDir);
  } catch {
    return;
  }
  const toAlias: { viewFile: string; componentName: string; content: string }[] = [];
  for (const name of entries) {
    if (!VIEW_FILE_RE.test(name)) continue;
    const filePath = path.join(viewsDir, name);
    const content = await fs.readFile(filePath, 'utf-8');
    const componentName = getDefaultExportName(content);
    const base = name.replace(/\.tsx$/, '');
    if (componentName && componentName !== base) {
      toAlias.push({ viewFile: name, componentName, content });
    }
  }
  for (const { viewFile, componentName, content } of toAlias) {
    const targetPath = path.join(viewsDir, `${componentName}.tsx`);
    try {
      await fs.access(targetPath);
    } catch {
      await fs.writeFile(targetPath, content, 'utf-8');
    }
    const baseView = viewFile.replace(/\.tsx$/, '');
    const relView = `./${baseView}`;
    const relViewQ = `"./${baseView}"`;
    const relViewS = `'./${baseView}'`;
    const relViews = `./views/${baseView}`;
    const relViewsQ = `"./views/${baseView}"`;
    const relViewsS = `'./views/${baseView}'`;
    const newRel = `./${componentName}`;
    const newRelQ = `"./${componentName}"`;
    const newRelS = `'./${componentName}'`;
    const newViews = `./views/${componentName}`;
    const newViewsQ = `"./views/${componentName}"`;
    const newViewsS = `'./views/${componentName}'`;

    async function replaceInFile(filePath: string): Promise<void> {
      let text = await fs.readFile(filePath, 'utf-8');
      const isInViews = filePath.includes(path.sep + 'views' + path.sep);
      if (isInViews) {
        text = text.split(relViewQ).join(newRelQ).split(relViewS).join(newRelS);
      } else {
        text = text.split(relViewsQ).join(newViewsQ).split(relViewsS).join(newViewsS);
      }
      await fs.writeFile(filePath, text, 'utf-8');
    }

    const appPath = path.join(srcDir, 'App.tsx');
    try {
      await replaceInFile(appPath);
    } catch {
    }
    for (const e of await fs.readdir(viewsDir)) {
      if (!e.endsWith('.tsx')) continue;
      const p = path.join(viewsDir, e);
      await replaceInFile(p);
    }
    try {
      await fs.unlink(path.join(viewsDir, viewFile));
    } catch {
    }
  }
}

export async function ensureDefaultImportsInViews(outDir: string): Promise<void> {
  const viewsDir = path.join(outDir, 'src', 'views');
  let entries: string[];
  try {
    entries = await fs.readdir(viewsDir);
  } catch {
    return;
  }
  const baseNames = entries.filter((e) => e.endsWith('.tsx')).map((e) => e.replace(/\.tsx$/, ''));
  for (const name of entries) {
    if (!name.endsWith('.tsx')) continue;
    const filePath = path.join(viewsDir, name);
    let content = await fs.readFile(filePath, 'utf-8');
    let changed = false;
    for (const base of baseNames) {
      if (base === name.replace(/\.tsx$/, '')) continue;
      const namedImport = new RegExp(`import\\s+\\{\\s*${base}\\s*\\}\\s+from\\s+['\"]\\./${base}['\"]`, 'g');
      if (namedImport.test(content)) {
        content = content.replace(
          new RegExp(`import\\s+\\{\\s*${base}\\s*\\}\\s+from\\s+['\"]\\./${base}['\"]`, 'g'),
          `import ${base} from './${base}'`
        );
        changed = true;
      }
    }
    if (changed) await fs.writeFile(filePath, content, 'utf-8');
  }
}

export async function ensureEntryScreenSwitchButton(
  outDir: string,
  entryViewName: string
): Promise<void> {
  const entryPath = path.join(outDir, 'src', 'views', `${entryViewName}.tsx`);
  let content: string;
  try {
    content = await fs.readFile(entryPath, 'utf-8');
  } catch {
    return;
  }
  if (/currentScreen|setCurrentScreen/.test(content)) return;
  const hasConsoleLogButton = /onClick=\s*\{\s*\(\)\s*=>\s*console\.log\s*\([^)]*\)\s*}/.test(content);
  if (!hasConsoleLogButton) return;
  content = content.replace(
    /onClick=\s*\{\s*\(\)\s*=>\s*console\.log\s*\([^)]*\)\s*}/g,
    "onClick={() => setCurrentScreen('game')}"
  );
  const useStateMatch = content.match(/const\s+\[\w+,\s*set\w+\]\s*=\s*useState[^;]+;/);
  if (useStateMatch) {
    const insertAfter = useStateMatch[0];
    const idx = content.indexOf(insertAfter) + insertAfter.length;
    content =
      content.slice(0, idx) +
      "\n  const [currentScreen, setCurrentScreen] = useState<'settings' | 'game'>('settings');" +
      content.slice(idx);
  }
  await fs.writeFile(entryPath, content, 'utf-8');
}

export async function ensureAppRendersEntry(outDir: string, entryViewName: string): Promise<void> {
  const appPath = path.join(outDir, 'src', 'App.tsx');
  const entryPath = path.join(outDir, 'src', 'views', `${entryViewName}.tsx`);
  let content: string;
  try {
    content = await fs.readFile(appPath, 'utf-8');
  } catch {
    return;
  }
  const clean = content.replace(/^\s*[\w./]+\s*\n/, '').trim();
  const hasCorrectImport = new RegExp(`import\\s+.*\\s+from\\s+['\"]\\.?/?views/${entryViewName}['\"]`).test(clean);
  const hasRender = new RegExp(`<${entryViewName}\\s*/?>|\\b${entryViewName}\\s*\\(`).test(clean);
  if (hasCorrectImport && hasRender) return;

  const looksLikeEntryView =
    new RegExp(`export\\s+default\\s+${entryViewName}`).test(clean) &&
    (/\buseState\b|React\.FC|:\s*React\.FC/.test(clean) || new RegExp(`function\\s+${entryViewName}\\s*\\(`).test(clean)) &&
    !new RegExp(`import\\s+.*${entryViewName}.*from\\s+['\"].*views`).test(clean);

  if (looksLikeEntryView) {
    const viewContent = stripPathFromFirstLine(content);
    await fs.mkdir(path.dirname(entryPath), { recursive: true });
    await fs.writeFile(entryPath, viewContent, 'utf-8');
  }

  const fixed = `import React from 'react';
import ${entryViewName} from './views/${entryViewName}';

function App() {
  return <${entryViewName} />;
}

export default App;
`;
  await fs.writeFile(appPath, fixed, 'utf-8');
}
