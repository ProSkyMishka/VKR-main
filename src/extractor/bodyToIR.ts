import type { ComponentNode, ModifierDef } from '../ir/types.js';

const VIEW_BUILDERS = [
  'VStack',
  'HStack',
  'ZStack',
  'NavigationView',
  'Text',
  'Image',
  'Button',
  'List',
  'ForEach',
  'NavigationStack',
  'NavigationLink',
];

function skipSpaces(s: string, i: number): number {
  while (i < s.length && /[\s\n]/.test(s[i])) i++;
  return i;
}

function findClosingBrace(s: string, start: number): number {
  let depth = 1;
  let i = start + 1;
  while (i < s.length && depth > 0) {
    const c = s[i];
    if (c === '"') {
      i++;
      while (i < s.length) {
        if (s[i] === '\\') {
          i += 2;
          continue;
        }
        if (s[i] === '"') break;
        i++;
      }
      i++;
      continue;
    }
    if (c === '{') depth++;
    else if (c === '}') depth--;
    i++;
  }
  return depth === 0 ? i - 1 : -1;
}

function parseModifiers(tail: string): ModifierDef[] {
  const modifiers: ModifierDef[] = [];
  const modRe = /\.(\w+)(?:\(([^)]*)\))?/g;
  let m: RegExpExecArray | null;
  while ((m = modRe.exec(tail)) !== null) {
    modifiers.push({ name: m[1], args: m[2]?.trim() ? [m[2].trim()] : undefined });
  }
  return modifiers;
}

function parseTextContent(s: string): string {
  const m = s.match(/Text\s*\(\s*"((?:[^"\\]|\\.)*)"/);
  return m ? m[1].replace(/\\"/g, '"') : '';
}

function parseChildren(source: string): ComponentNode[] {
  const children: ComponentNode[] = [];
  let i = skipSpaces(source, 0);
  while (i < source.length) {
    const rest = source.slice(i);
    let match: RegExpMatchArray | null = null;
    let type = 'Custom';
    if ((match = rest.match(/^Text\s*\(\s*"((?:[^"\\]|\\.)*)"\s*\)/))) {
      type = 'Text';
      const mods = parseModifiers(rest.slice(match[0].length));
      children.push({
        type: 'Text',
        props: { content: parseTextContent(match[0]) },
        modifiers: mods,
        children: [],
      });
      let pos = match[0].length;
      const modRe = /\.\w+(?:\([^)]*\))?/g;
      let modM: RegExpExecArray | null;
      while ((modM = modRe.exec(rest.slice(pos)))) pos += modM[0].length;
      i += pos;
      i = skipSpaces(source, i);
      continue;
    }
    if ((match = rest.match(/^Button\s*\(\s*"((?:[^"\\]|\\.)*)"\s*\)\s*\{/))) {
      const openBrace = match[0].length - 1;
      const closeBrace = findClosingBrace(source, i + openBrace);
      if (closeBrace !== -1) {
        const after = source.slice(closeBrace + 1);
        const mods = parseModifiers(after);
        children.push({
          type: 'Button',
          props: { label: match[1].replace(/\\"/g, '"') },
          modifiers: mods,
          children: [],
        });
        let pos = closeBrace + 1 - i;
        const modRe2 = /\.\w+(?:\([^)]*\))?/g;
        let modM2: RegExpExecArray | null;
        while ((modM2 = modRe2.exec(after))) pos += modM2[0].length;
        i += pos;
      } else {
        i++;
      }
      i = skipSpaces(source, i);
      continue;
    }
    if ((match = rest.match(/^Spacer\s*\(\s*\)/))) {
      children.push({ type: 'Spacer', props: {}, modifiers: [], children: [] });
      i += match[0].length;
      i = skipSpaces(source, i);
      continue;
    }
    if ((match = rest.match(/^Color\.(\w+)(\.\w+(?:\([^)]*\))?)*/))) {
      const colorName = match[1];
      const afterColor = match[0].slice(6 + colorName.length);
      const mods = parseModifiers(afterColor);
      children.push({
        type: 'Color',
        props: { name: colorName },
        modifiers: mods,
        children: [],
      });
      i += match[0].length;
      i = skipSpaces(source, i);
      continue;
    }
    for (const viewName of VIEW_BUILDERS) {
      if (viewName === 'Text' || viewName === 'Button') continue;
      const openRe = new RegExp(`^${viewName}\\s*\\(([^)]*)\\)\\s*\\{`);
      const simpleRe = new RegExp(`^${viewName}\\s*\\(\\s*\\{\\s*\\}`);
      const noParenRe = viewName === 'NavigationView' ? /^NavigationView\s*\{/ : null;
      match = rest.match(openRe) || rest.match(simpleRe) || (noParenRe && rest.match(noParenRe));
      if (match) {
        type = viewName;
        const fullMatch = match[0];
        const args = (match as RegExpMatchArray & { 1?: string })[1];
        const openBrace = fullMatch.lastIndexOf('{');
        const closeBrace = findClosingBrace(source, i + openBrace);
        if (closeBrace === -1) {
          i++;
          continue;
        }
        const inner = source.slice(i + openBrace + 1, closeBrace).trim();
        const afterBlock = source.slice(closeBrace + 1);
        const mods = parseModifiers(afterBlock);
        const childNodes =
          type === 'VStack' || type === 'HStack' || type === 'ZStack' || type === 'NavigationView' || type === 'List' || type === 'NavigationStack'
            ? parseChildren(inner)
            : type === 'Button' || type === 'NavigationLink'
              ? parseChildren(inner)
              : [];
        const props: Record<string, unknown> = {};
        if (args) {
          const trimmed = args.trim();
          if (trimmed && type === 'VStack') {
            const spacingMatch = trimmed.match(/spacing:\s*(\d+)/);
            if (spacingMatch) props.spacing = parseInt(spacingMatch[1], 10);
          }
          if (type === 'ForEach' && trimmed) props.dataBinding = trimmed;
        }
        children.push({
          type,
          props,
          modifiers: mods,
          children: childNodes,
        });
        i = skipSpaces(source, closeBrace + 1);
        const modRe2 = /\.\w+(?:\([^)]*\))?/g;
        const afterStr = source.slice(i);
        let modM2: RegExpExecArray | null;
        while ((modM2 = modRe2.exec(afterStr))) i += modM2[0].length;
        i = skipSpaces(source, i);
        break;
      }
    }
    if (!match) i++;
  }
  return children;
}

const VSTACK_OPEN_RE = /^VStack\s*\(([^)]*)\)\s*\{/;
const HSTACK_OPEN_RE = /^HStack\s*\(([^)]*)\)\s*\{/;
const ZSTACK_OPEN_RE = /^ZStack\s*\(([^)]*)\)\s*\{/;
const NAVIGATIONVIEW_OPEN_RE = /^NavigationView\s*\{/;

export interface BodyParseResult {
  root: ComponentNode;
  leadingSwift?: string;
}

function splitLeadingSwiftToFirstView(trimmed: string): { viewPart: string; leadingSwift?: string } {
  const re = /\b(VStack|HStack|ZStack|NavigationView)\s*[\{(]/;
  const m = trimmed.match(re);
  if (m && m.index !== undefined && m.index > 0) {
    const leading = trimmed.slice(0, m.index).trim();
    return { viewPart: trimmed.slice(m.index), leadingSwift: leading || undefined };
  }
  if (m && m.index === 0) return { viewPart: trimmed };
  return { viewPart: trimmed };
}

function matchRootContainer(trimmed: string): RegExpMatchArray | null {
  return (
    trimmed.match(VSTACK_OPEN_RE) ||
    trimmed.match(HSTACK_OPEN_RE) ||
    trimmed.match(ZSTACK_OPEN_RE) ||
    trimmed.match(NAVIGATIONVIEW_OPEN_RE) ||
    trimmed.match(/^VStack\s*\{\s*/) ||
    trimmed.match(/^HStack\s*\{\s*/) ||
    trimmed.match(/^ZStack\s*\{\s*/)
  );
}

function buildRootNode(trimmed: string): ComponentNode {
  const rootMatch = matchRootContainer(trimmed);
  if (rootMatch) {
    const viewName = rootMatch[0].startsWith('VStack')
      ? 'VStack'
      : rootMatch[0].startsWith('HStack')
        ? 'HStack'
        : rootMatch[0].startsWith('ZStack')
          ? 'ZStack'
          : 'NavigationView';
    const openBrace = rootMatch[0].lastIndexOf('{');
    const closeBrace = findClosingBrace(trimmed, openBrace);
    if (closeBrace !== -1) {
      const inner = trimmed.slice(openBrace + 1, closeBrace).trim();
      const after = trimmed.slice(closeBrace + 1);
      const modifiers = parseModifiers(after);
      const props: Record<string, unknown> = {};
      const argStr = (rootMatch as RegExpMatchArray & { 1?: string })[1]?.trim();
      if (argStr && (viewName === 'VStack' || viewName === 'HStack')) {
        const spacingMatch = argStr.match(/spacing:\s*(\d+)/);
        if (spacingMatch) props.spacing = parseInt(spacingMatch[1], 10);
      }
      return {
        type: viewName,
        props,
        modifiers,
        children: parseChildren(inner),
      };
    }
  }
  const textRootMatch = trimmed.match(/^\s*Text\s*\(\s*"((?:[^"\\]|\\.)*)"\s*\)/);
  if (textRootMatch) {
    const afterText = trimmed.slice(textRootMatch[0].length);
    const mods = parseModifiers(afterText);
    return {
      type: 'Text',
      props: { content: textRootMatch[1].replace(/\\"/g, '"') },
      modifiers: mods,
      children: [],
    };
  }
  for (const viewName of VIEW_BUILDERS) {
    if (viewName === 'VStack' || viewName === 'HStack' || viewName === 'ZStack' || viewName === 'NavigationView')
      continue;
    const openRe = new RegExp(`^${viewName}\\s*\\(([^)]*)\\)\\s*\\{`);
    const simpleRe = new RegExp(`^${viewName}\\s*\\{\\s*\\}`);
    const match = trimmed.match(openRe) || trimmed.match(simpleRe);
    if (match) {
      const fullMatch = match[0];
      const openBrace = fullMatch.lastIndexOf('{');
      const closeBrace = findClosingBrace(trimmed, openBrace);
      if (closeBrace === -1) break;
      const inner = trimmed.slice(openBrace + 1, closeBrace).trim();
      const after = trimmed.slice(closeBrace + 1);
      const modifiers = parseModifiers(after);
      const props: Record<string, unknown> = {};
      const argStr = (match as RegExpMatchArray & { 1?: string })[1]?.trim();
      if (argStr && (viewName === 'ForEach' || viewName === 'List')) props.dataBinding = argStr;
      return {
        type: viewName,
        props,
        modifiers,
        children: parseChildren(inner),
      };
    }
  }
  return {
    type: 'Custom',
    props: { raw: trimmed.slice(0, 500) },
    modifiers: [],
    children: [],
  };
}

export function bodyToComponentTree(bodySource: string): BodyParseResult {
  let trimmed = bodySource.trim().replace(/^\uFEFF/, '').replace(/\r\n/g, '\n');
  const { viewPart, leadingSwift } = splitLeadingSwiftToFirstView(trimmed);
  const root = buildRootNode(viewPart);
  return { root, leadingSwift };
}
