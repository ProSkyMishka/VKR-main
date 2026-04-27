import type { UIIR, ComponentNode, ViewDefinition, BindingDef, StateVarDef, ModifierDef } from '../ir/types.js';
import type { WebIR, ReactSkeletonComponent, UnresolvedFragment } from '../ir/web-ir.js';

// Единая палитра SwiftUI → CSS, чтобы foreground/background не расходились.
const SWIFT_COLOR_MAP: Record<string, string> = {
  red: '#FF3B30',
  orange: '#FF9500',
  yellow: '#FFCC00',
  green: '#34C759',
  mint: '#00C7BE',
  teal: '#30B0C7',
  cyan: '#32ADE6',
  blue: '#007AFF',
  indigo: '#5856D6',
  purple: '#AF52DE',
  pink: '#FF2D55',
  brown: '#A2845E',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#8E8E93',
  grey: '#8E8E93',
  primary: '#000000',
  secondary: '#8E8E93',
  clear: 'transparent',
};

function resolveSwiftColor(rawArg: string): { css: string; opacity: number } | null {
  if (!rawArg) return null;
  const opacityMatch = rawArg.match(/\.opacity\s*\(\s*([\d.]+)\s*\)/);
  const opacity = opacityMatch ? parseFloat(opacityMatch[1]) : 1;
  const stripped = rawArg.replace(/\.opacity\s*\([^)]*\)/, '').trim();

  // Color(white: 0.95) либо Color(white: 0.95, opacity: 0.5)
  const whiteMatch = stripped.match(/Color\s*\(\s*white:\s*([\d.]+)/i);
  if (whiteMatch) {
    const w = Math.round(Math.max(0, Math.min(1, parseFloat(whiteMatch[1]))) * 255);
    return { css: `rgb(${w}, ${w}, ${w})`, opacity };
  }
  // Color(red: 1.0, green: 0.5, blue: 0.0) — компоненты 0..1
  const rgbMatch = stripped.match(/Color\s*\(\s*red:\s*([\d.]+)\s*,\s*green:\s*([\d.]+)\s*,\s*blue:\s*([\d.]+)/i);
  if (rgbMatch) {
    const r = Math.round(parseFloat(rgbMatch[1]) * 255);
    const g = Math.round(parseFloat(rgbMatch[2]) * 255);
    const b = Math.round(parseFloat(rgbMatch[3]) * 255);
    return { css: `rgb(${r}, ${g}, ${b})`, opacity };
  }
  // Color.purple / .purple / Color("name")
  const name = stripped
    .replace(/^Color\s*\(\s*"([^"]+)"\s*\)$/, '$1')
    .replace(/^Color\./, '')
    .replace(/^\./, '')
    .trim()
    .toLowerCase();
  if (!name) return null;
  const css = SWIFT_COLOR_MAP[name];
  if (!css) return { css: `var(--color-${name}, #8E8E93)`, opacity };
  return { css, opacity };
}

function applyOpacity(css: string, opacity: number): string {
  if (opacity >= 1) return css;
  const hex = css.match(/^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
  if (hex) return `rgba(${parseInt(hex[1], 16)}, ${parseInt(hex[2], 16)}, ${parseInt(hex[3], 16)}, ${opacity})`;
  const rgb = css.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (rgb) return `rgba(${rgb[1]}, ${rgb[2]}, ${rgb[3]}, ${opacity})`;
  return css;
}

function modifiersToStyle(modifiers: ModifierDef[] | undefined): Record<string, string | number> {
  const style: Record<string, string | number> = {};
  if (!modifiers?.length) return style;
  for (const m of modifiers) {
    const args = m.args;
    const argStr = Array.isArray(args) ? args[0] : typeof args === 'object' && args !== null ? String((args as Record<string, unknown>).value ?? '') : '';
    const argText = String(argStr || '');
    switch (m.name) {
      case 'padding': {
        // .padding() / .padding(16) / .padding(.horizontal, 12) / .padding(.vertical, 8)
        if (!argText.trim()) {
          style.padding = 16;
          break;
        }
        const horiz = argText.match(/\.horizontal\s*,\s*(\d+)/);
        const vert = argText.match(/\.vertical\s*,\s*(\d+)/);
        const top = argText.match(/\.top\s*,\s*(\d+)/);
        const bottom = argText.match(/\.bottom\s*,\s*(\d+)/);
        const leading = argText.match(/\.(?:leading|left)\s*,\s*(\d+)/);
        const trailing = argText.match(/\.(?:trailing|right)\s*,\s*(\d+)/);
        if (horiz) {
          style.paddingLeft = parseInt(horiz[1], 10);
          style.paddingRight = parseInt(horiz[1], 10);
        }
        if (vert) {
          style.paddingTop = parseInt(vert[1], 10);
          style.paddingBottom = parseInt(vert[1], 10);
        }
        if (top) style.paddingTop = parseInt(top[1], 10);
        if (bottom) style.paddingBottom = parseInt(bottom[1], 10);
        if (leading) style.paddingLeft = parseInt(leading[1], 10);
        if (trailing) style.paddingRight = parseInt(trailing[1], 10);
        if (!horiz && !vert && !top && !bottom && !leading && !trailing) {
          if (/^\d+$/.test(argText.trim())) style.padding = parseInt(argText.trim(), 10);
          else if (/^\.\w+$/.test(argText.trim())) style.padding = 16;
          else style.padding = 16;
        }
        break;
      }
      case 'frame': {
        const wMatch = argText.match(/width:\s*(\d+)/);
        const hMatch = argText.match(/height:\s*(\d+)/);
        const maxWMatch = argText.match(/maxWidth:\s*(?:\.infinity|infinity|(\d+))/);
        const maxHMatch = argText.match(/maxHeight:\s*(?:\.infinity|infinity|(\d+))/);
        if (wMatch) style.width = parseInt(wMatch[1], 10);
        if (hMatch) style.height = parseInt(hMatch[1], 10);
        if (maxWMatch) style.flex = 1; // maxWidth: .infinity → растягиваем во flex-родителе
        if (maxHMatch && !style.flex) style.flex = 1;
        break;
      }
      case 'font': {
        const sizeMatch = argText.match(/size:\s*(\d+)/);
        const boldMatch = /bold|weight:\s*\.bold/.test(argText);
        if (sizeMatch) style.fontSize = parseInt(sizeMatch[1], 10);
        if (boldMatch) style.fontWeight = 'bold';
        // Преднастройки .title2/.title3/.headline/.caption/...
        const presets: Record<string, number> = {
          largeTitle: 34, title: 28, title2: 22, title3: 20,
          headline: 17, body: 17, callout: 16, subheadline: 15,
          footnote: 13, caption: 12, caption2: 11,
        };
        const pm = argText.replace(/^\./, '').trim();
        if (!sizeMatch && presets[pm]) style.fontSize = presets[pm];
        break;
      }
      case 'bold':
        style.fontWeight = 'bold';
        break;
      case 'foregroundColor':
      case 'foregroundStyle': {
        const c = resolveSwiftColor(argText);
        if (c) style.color = applyOpacity(c.css, c.opacity);
        break;
      }
      case 'background': {
        const c = resolveSwiftColor(argText);
        if (c) style.backgroundColor = applyOpacity(c.css, c.opacity);
        break;
      }
      case 'cornerRadius':
        if (argText && /^\d+$/.test(argText.trim())) style.borderRadius = parseInt(argText.trim(), 10);
        break;
      case 'opacity':
        if (argText && /^[\d.]+$/.test(argText.trim())) style.opacity = parseFloat(argText.trim());
        break;
      case 'shadow': {
        const radiusMatch = argText.match(/radius:\s*(\d+)/);
        const xMatch = argText.match(/x:\s*(-?\d+)/);
        const yMatch = argText.match(/y:\s*(-?\d+)/);
        const r = radiusMatch ? parseInt(radiusMatch[1], 10) : 4;
        const x = xMatch ? parseInt(xMatch[1], 10) : 0;
        const y = yMatch ? parseInt(yMatch[1], 10) : 2;
        style.boxShadow = `${x}px ${y}px ${r}px rgba(0, 0, 0, 0.18)`;
        break;
      }
      default:
        break;
    }
  }
  return style;
}

function mergeStyle(base: Record<string, string | number>, extra: Record<string, string | number>): Record<string, string | number> {
  return { ...base, ...extra };
}

function swiftTypeToTS(swift: string): string {
  const t = swift.trim();
  if (t === 'String' || t.endsWith('String')) return 'string';
  if (t === 'Int' || t === 'Double' || t.endsWith('Int') || t.endsWith('Double')) return 'number';
  if (t === 'Bool' || t.endsWith('Bool')) return 'boolean';
  return 'unknown';
}

type NodeContext = { zIndex?: number };

function styleObjToStr(style: Record<string, string | number>): string {
  const entries = Object.entries(style).map(([k, v]) => (typeof v === 'number' ? `${k}: ${v}` : `${k}: '${String(v).replace(/'/g, "\\'")}'`));
  return entries.length ? `{ ${entries.join(', ')} }` : '{}';
}

function nodeToJSX(node: ComponentNode, indent: number, context?: NodeContext): string {
  const pad = '  '.repeat(indent);
  const modStyle = modifiersToStyle(node.modifiers);
  switch (node.type) {
    case 'VStack': {
      const base = { display: 'flex', flexDirection: 'column', gap: (node.props.spacing as number) ?? 8, alignItems: 'center' };
      const style = mergeStyle(base as Record<string, string | number>, modStyle);
      return `${pad}<div style=${styleObjToStr(style)}>\n${node.children.map((c: ComponentNode) => nodeToJSX(c, indent + 1)).join('\n')}\n${pad}</div>`;
    }
    case 'HStack': {
      const base = { display: 'flex', flexDirection: 'row', gap: (node.props.spacing as number) ?? 8, alignItems: 'center' };
      const style = mergeStyle(base as Record<string, string | number>, modStyle);
      return `${pad}<div style=${styleObjToStr(style)}>\n${node.children.map((c: ComponentNode) => nodeToJSX(c, indent + 1)).join('\n')}\n${pad}</div>`;
    }
    case 'Spacer':
      return `${pad}<div style={{ flex: 1, minWidth: 0, minHeight: 0 }} />`;
    case 'ZStack': {
      const childLines = node.children.map((c: ComponentNode, i: number) => {
        const jsx = nodeToJSX(c, indent + 1, { zIndex: i });
        if (c.type === 'Color') return jsx;
        return `${pad}  <div style={{ position: 'relative', zIndex: ${i} }}>\n${jsx}\n${pad}  </div>`;
      });
      return `${pad}<div style={{ position: 'relative', minHeight: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>\n${childLines.join('\n')}\n${pad}</div>`;
    }
    case 'Text': {
      const hasFrame = node.modifiers?.some((m) => m.name === 'frame');
      const textStyle = mergeStyle({}, modStyle);
      if (hasFrame && typeof textStyle.width === 'number' && typeof textStyle.height === 'number') {
        const { width, height, backgroundColor, borderRadius, ...rest } = textStyle;
        const wrapperStyle: Record<string, string | number> = {
          width,
          height,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        };
        if (backgroundColor) wrapperStyle.backgroundColor = backgroundColor;
        if (borderRadius !== undefined) wrapperStyle.borderRadius = borderRadius;
        const innerStyle = Object.keys(rest).length ? styleObjToStr(rest as Record<string, string | number>) : '{}';
        return `${pad}<div style=${styleObjToStr(wrapperStyle)}>\n${pad}  <span style=${innerStyle}>${escapeJsx(String(node.props.content ?? ''))}</span>\n${pad}</div>`;
      }
      const styleStr = Object.keys(textStyle).length ? ` style=${styleObjToStr(textStyle)}` : '';
      return `${pad}<span${styleStr}>${escapeJsx(String(node.props.content ?? ''))}</span>`;
    }
    case 'Image': {
      const name = String(node.props.name ?? '');
      const isSystem = node.props.isSystem === true;
      if (isSystem) {
        const inner = sfSymbolSvgInner(name);
        return `${pad}<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-label=${JSON.stringify(name)} role="img" style={{ display: 'inline-block' }}>${inner}</svg>`;
      }
      return `${pad}<img src=${JSON.stringify(name)} alt=${JSON.stringify(name)} />`;
    }
    case 'Divider':
      return `${pad}<div role="separator" style={{ height: 1, alignSelf: 'stretch', backgroundColor: 'rgba(0, 0, 0, 0.12)' }} />`;
    case 'Button':
      return `${pad}<button type="button" onClick={() => {}} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>\n${node.children.map((c: ComponentNode) => nodeToJSX(c, indent + 1)).join('\n')}\n${pad}</button>`;
    case 'List':
      return `${pad}<ul>\n${node.children.map((c: ComponentNode) => nodeToJSX(c, indent + 1)).join('\n')}\n${pad}</ul>`;
    case 'ForEach':
      return `${pad}{/* ForEach */}\n${node.children.map((c: ComponentNode) => nodeToJSX(c, indent + 1)).join('\n')}`;
    case 'NavigationStack':
    case 'NavigationView':
      return `${pad}<div>\n${node.children.map((c: ComponentNode) => nodeToJSX(c, indent + 1)).join('\n')}\n${pad}</div>`;
    case 'NavigationLink':
      return `${pad}<a href="#">\n${node.children.map((c: ComponentNode) => nodeToJSX(c, indent + 1)).join('\n')}\n${pad}</a>`;
    case 'Color': {
      const name = String(node.props.name ?? 'gray').toLowerCase();
      const hex = SWIFT_COLOR_MAP[name] ?? `var(--color-${name}, #8E8E93)`;
      const z = context?.zIndex ?? 0;
      return `${pad}<div style={{ position: 'absolute', inset: 0, backgroundColor: '${hex}', zIndex: ${z} }} />`;
    }
    case 'Custom':
      return `${pad}{/* Custom: ${String((node.props.raw as string) ?? '').slice(0, 80)} */}`;
    default:
      return `${pad}{/* ${node.type} */}`;
  }
}

function escapeJsx(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Минимальный набор SF Symbols → inline SVG (Lucide-style, viewBox 24x24).
// Для .fill-вариантов используем тот же контур, но с fill="currentColor".
function sfSymbolSvgInner(rawName: string): string {
  const filled = rawName.endsWith('.fill');
  const base = rawName.replace(/\.fill$/, '');
  const fillAttr = filled ? ' fill="currentColor"' : '';
  const PATHS: Record<string, string> = {
    bell: 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9Z M10.3 21a1.94 1.94 0 0 0 3.4 0',
    star: 'M12 2 15.09 8.26 22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z',
    heart: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z',
    person: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
    'person.crop.circle': 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z M16 19a4 4 0 0 0-8 0 M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
    gear: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z',
    magnifyingglass: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z M21 21l-4.35-4.35',
    plus: 'M12 5v14 M5 12h14',
    minus: 'M5 12h14',
    checkmark: 'M20 6 9 17l-5-5',
    'checkmark.circle': 'M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4 12 14.01l-3-3',
    xmark: 'M18 6 6 18 M6 6l12 12',
    'xmark.circle': 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z M15 9l-6 6 M9 9l6 6',
    'chevron.right': 'm9 18 6-6-6-6',
    'chevron.left': 'm15 18-6-6 6-6',
    'chevron.up': 'm18 15-6-6-6 6',
    'chevron.down': 'm6 9 6 6 6-6',
    'arrow.right': 'M5 12h14 M12 5l7 7-7 7',
    'arrow.left': 'M19 12H5 M12 19l-7-7 7-7',
    'arrow.up': 'M12 19V5 M5 12l7-7 7 7',
    'arrow.down': 'M12 5v14 M19 12l-7 7-7-7',
    house: 'm3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z M9 22V12h6v10',
    envelope: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z m20 2-10 7L2 6',
    trash: 'M3 6h18 M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6 M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2',
    pencil: 'M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z',
    lock: 'M5 11h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z M7 11V7a5 5 0 0 1 10 0v4',
    eye: 'M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
    'info.circle': 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z M12 16v-4 M12 8h.01',
    'exclamationmark.triangle': 'M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z M12 9v4 M12 17h.01',
    calendar: 'M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z M16 2v4 M8 2v4 M3 10h18',
    clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z M12 6v6l4 2',
    photo: 'M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z M8.5 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z m13.5 7-6-6-9 9',
    camera: 'M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2Z M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
    'play.fill': 'M5 3 19 12 5 21 5 3Z',
    'pause.fill': 'M6 4h4v16H6Z M14 4h4v16h-4Z',
    'sun.max': 'M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z M12 2v2 M12 20v2 M4.93 4.93l1.41 1.41 M17.66 17.66l1.41 1.41 M2 12h2 M20 12h2 M4.93 19.07l1.41-1.41 M17.66 6.34l1.41-1.41',
    'moon.fill': 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z',
    circle: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z',
    square: 'M3 3h18v18H3Z',
    triangle: 'M12 2 22 21H2Z',
  };
  const path = PATHS[base] ?? PATHS[rawName];
  if (path) {
    return `<path d=${JSON.stringify(path)}${fillAttr} />`;
  }
  return `<circle cx="12" cy="12" r="9"${filled ? ' fill="currentColor"' : ''} />`;
}

function collectUnresolved(view: ViewDefinition, body: ComponentNode, path: string): UnresolvedFragment[] {
  const out: UnresolvedFragment[] = [];
  if (body.type === 'Custom' && body.props.raw) {
    out.push({
      viewName: view.name,
      location: path,
      description: 'Custom/unparsed body',
      rawSwift: String(body.props.raw).slice(0, 300),
    });
  }
  const resolvedModifiers = [
    'padding', 'frame', 'background', 'foregroundStyle', 'foregroundColor', 'onTapGesture', 'animation',
    'font', 'bold', 'cornerRadius', 'opacity', 'offset', 'scaleEffect',
  ];
  for (const mod of body.modifiers ?? []) {
    if (!resolvedModifiers.includes(mod.name)) {
      out.push({
        viewName: view.name,
        location: path,
        description: `Unresolved modifier: .${mod.name}`,
      });
    }
  }
  body.children.forEach((c: ComponentNode, i: number) => {
    out.push(...collectUnresolved(view, c, `${path}.children[${i}]`));
  });
  return out;
}

export function mapToWebIR(ir: UIIR): WebIR {
  const skeleton: ReactSkeletonComponent[] = [];
  const unresolved: UnresolvedFragment[] = [];

  for (const view of ir.views) {
    const propsLines: string[] = [];
    for (const p of view.params) {
      propsLines.push(`  ${p.name}: ${swiftTypeToTS(p.type)};`);
    }
    for (const b of view.state.bindings) {
      propsLines.push(`  ${b.name}: ${swiftTypeToTS(b.type)};`);
      propsLines.push(`  on${b.name.charAt(0).toUpperCase() + b.name.slice(1)}Change?: (value: ${swiftTypeToTS(b.type)}) => void;`);
    }
    const bindingProps = view.state.bindings.map((b: BindingDef) => `${b.name}, on${b.name.charAt(0).toUpperCase() + b.name.slice(1)}Change`).filter(Boolean);
    const stateHooks = view.state.stateVars.map(
      (s: StateVarDef) => `const [${s.name}, set${s.name.charAt(0).toUpperCase() + s.name.slice(1)}] = useState<${swiftTypeToTS(s.type)}>(${s.initial ?? '0'});`
    );
    let jsxSkeleton = nodeToJSX(view.body, 2);
    if (view.body.type !== 'ZStack') {
      jsxSkeleton = `  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>\n${jsxSkeleton}\n  </div>`;
    }
    skeleton.push({
      viewName: view.name,
      propsInterface: `interface ${view.name}Props {\n${propsLines.join('\n') || '  // no props'}\n}`,
      stateHooks,
      bindingProps,
      jsxSkeleton,
      imports: ['import React, { useState } from "react";'],
      leadingBodySwift: view.leadingBodySwift,
    });
    unresolved.push(...collectUnresolved(view, view.body, 'body'));
  }

  return {
    skeleton,
    unresolved,
    entryViewName: ir.entryViewName ?? ir.views[0]?.name ?? 'ContentView',
  };
}
