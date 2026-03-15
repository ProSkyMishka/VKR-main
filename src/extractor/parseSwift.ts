export interface RawProp {
  name: string;
  kind: '@State' | '@Binding' | 'let';
  type?: string;
  initial?: string;
}

export interface RawViewStruct {
  name: string;
  fullSource: string;
  props: RawProp[];
  bodySource: string;
}

const STRUCT_VIEW_RE = /struct\s+(\w+)\s*:\s*View\s*\{/g;

function findMatchingBrace(s: string, openIndex: number): number {
  let depth = 1;
  let i = openIndex + 1;
  while (i < s.length && depth > 0) {
    const c = s[i];
    if (c === '{') depth++;
    else if (c === '}') depth--;
    i++;
  }
  return depth === 0 ? i - 1 : -1;
}

function inferTypeFromInitial(initial: string): string {
  const t = initial.trim();
  if (/^\d+$/.test(t)) return 'Int';
  if (/^\d+\.\d+$/.test(t)) return 'Double';
  if (/^(true|false)$/.test(t)) return 'Bool';
  if (t.startsWith('"') || t.startsWith("'")) return 'String';
  return 'Unknown';
}

function extractPropsFromStruct(source: string): RawProp[] {
  const props: RawProp[] = [];
  let m: RegExpExecArray | null;

  const stateRe = /@State\s+(?:private\s+)?var\s+(\w+)\s*:\s*([^=]+?)(?:\s*=\s*([^\n]+))?\s*[;\n]/g;
  while ((m = stateRe.exec(source)) !== null) {
    props.push({
      name: m[1],
      kind: '@State',
      type: m[2].trim(),
      initial: m[3]?.trim(),
    });
  }

  const stateNoTypeRe = /@State\s+(?:private\s+)?var\s+(\w+)\s*=\s*([^\n;]+)[\n;]/g;
  while ((m = stateNoTypeRe.exec(source)) !== null) {
    const name = m[1];
    const initial = m[2].trim();
    if (!props.some((p) => p.kind === '@State' && p.name === name)) {
      props.push({
        name,
        kind: '@State',
        type: inferTypeFromInitial(initial),
        initial,
      });
    }
  }

  const bindingRe = /@Binding\s+var\s+(\w+)\s*:\s*([^\n]+?)\s*[;\n]/g;
  while ((m = bindingRe.exec(source)) !== null) {
    props.push({
      name: m[1],
      kind: '@Binding',
      type: m[2].trim(),
    });
  }

  const letRe = /^\s*let\s+(\w+)\s*:\s*([^\n=]+?)\s*[;\n]/gm;
  while ((m = letRe.exec(source)) !== null) {
    props.push({
      name: m[1],
      kind: 'let',
      type: m[2].trim(),
    });
  }
  return props;
}

function extractBodySource(structContent: string): string {
  const bodyRe = /var\s+body\s*:\s*some\s+View\s*\{/;
  const match = structContent.match(bodyRe);
  if (!match || match.index == null) return '';
  const start = match.index + match[0].length;
  const end = findMatchingBrace(structContent, start - 1);
  if (end === -1) return '';
  return structContent.slice(start, end).trim();
}

export function extractViewStructs(swiftSource: string): RawViewStruct[] {
  const results: RawViewStruct[] = [];
  let m: RegExpExecArray | null;
  const re = new RegExp(STRUCT_VIEW_RE.source, 'g');
  while ((m = re.exec(swiftSource)) !== null) {
    const name = m[1];
    const openBrace = m.index + m[0].length - 1;
    const closeBrace = findMatchingBrace(swiftSource, openBrace);
    if (closeBrace === -1) continue;
    const fullSource = swiftSource.slice(m.index, closeBrace + 1);
    const props = extractPropsFromStruct(fullSource);
    const bodySource = extractBodySource(fullSource);
    results.push({ name, fullSource, props, bodySource });
  }
  return results;
}
