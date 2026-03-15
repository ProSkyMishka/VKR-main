export interface GeneratedFile {
  path: string;
  content: string;
}

const CODE_BLOCK_RE = /```(\S*)\n([\s\S]*?)```/g;

function countViewPaths(usedPaths: Set<string>): number {
  let n = 0;
  for (const u of usedPaths) if (u.startsWith('src/views/') && u.endsWith('.tsx')) n++;
  return n;
}

function normalizePath(
  path: string,
  content: string,
  index: number,
  usedPaths: Set<string>,
  viewNames?: string[]
): string {
  const p = path.trim();
  const pl = p.toLowerCase();
  if (pl === 'json') {
    if (/"name"\s*:\s*"[^"]*"/.test(content) && /dependencies|vite|react/.test(content) && !usedPaths.has('package.json'))
      return 'package.json';
    if (/"compilerOptions"/.test(content) && !usedPaths.has('tsconfig.json')) return 'tsconfig.json';
  }
  if (pl === 'ts') {
    if (/"compilerOptions"/.test(content) && !usedPaths.has('tsconfig.json')) return 'tsconfig.json';
    if (/vite|defineConfig/.test(content) && !usedPaths.has('vite.config.ts')) return 'vite.config.ts';
  }
  if (pl === 'tsx') {
    if (/createRoot|ReactDOM\.render|getElementById/.test(content) && !usedPaths.has('src/main.tsx'))
      return 'src/main.tsx';
    if (/import.*from\s+['"]react['"]/.test(content) && !/createRoot/.test(content) && !usedPaths.has('src/App.tsx'))
      return 'src/App.tsx';
    const viewIndex = countViewPaths(usedPaths);
    const baseName = viewNames && viewNames[viewIndex] ? viewNames[viewIndex] : `View${viewIndex}`;
    let viewPath = `src/views/${baseName}.tsx`;
    if (usedPaths.has(viewPath)) viewPath = `src/views/${baseName}_${Math.random().toString(36).slice(2, 8)}.tsx`;
    return viewPath;
  }
  if (pl === 'html' && !usedPaths.has('index.html')) return 'index.html';
  if (!p.includes('/') && !p.includes('.')) {
    if (pl === 'json' && !usedPaths.has('package.json')) return 'package.json';
    if (pl === 'ts' && !usedPaths.has('vite.config.ts')) return 'vite.config.ts';
    if (pl === 'tsx' && !usedPaths.has('src/App.tsx')) return 'src/App.tsx';
    if (pl === 'html' && !usedPaths.has('index.html')) return 'index.html';
  }
  return path;
}

function looksLikeFilePath(line: string): boolean {
  const t = line.trim();
  if (!t) return false;
  if (t.startsWith('http')) return false;
  if (t.includes('/') && /\.(tsx?|json|html|css)$/.test(t)) return true;
  if (/^[\w./\-]+\.(tsx?|json|html|css)$/.test(t)) return true;
  if (/^src\/[\w./\-]+$/.test(t)) return true;
  return false;
}

function stripPathFromFirstLine(_filePath: string, content: string): string {
  const firstLine = content.split('\n')[0]?.trim() ?? '';
  if (looksLikeFilePath(firstLine)) {
    const rest = content.slice(content.indexOf('\n') + 1);
    return rest.trimStart();
  }
  return content;
}

export function parseGeneratedFiles(response: string, viewNames?: string[]): GeneratedFile[] {
  const files: GeneratedFile[] = [];
  const usedPaths = new Set<string>();
  let m: RegExpExecArray | null;
  while ((m = CODE_BLOCK_RE.exec(response)) !== null) {
    let path = m[1].trim() || `file_${files.length}.txt`;
    let content = m[2].replace(/\n$/, '');
    if (path && !path.startsWith('http')) {
      path = normalizePath(path, content, files.length, usedPaths, viewNames);
      if (path) usedPaths.add(path);
      content = stripPathFromFirstLine(path, content);
      files.push({ path, content });
    }
  }
  return files;
}
