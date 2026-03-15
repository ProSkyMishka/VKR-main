import type { UIIR, ComponentNode, ViewDefinition, BindingDef, StateVarDef, ModifierDef } from '../ir/types.js';
import type { WebIR, ReactSkeletonComponent, UnresolvedFragment } from '../ir/web-ir.js';

function modifiersToStyle(modifiers: ModifierDef[] | undefined): Record<string, string | number> {
  const style: Record<string, string | number> = {};
  if (!modifiers?.length) return style;
  for (const m of modifiers) {
    const args = m.args;
    const argStr = Array.isArray(args) ? args[0] : typeof args === 'object' && args !== null ? String((args as Record<string, unknown>).value ?? '') : '';
    switch (m.name) {
      case 'padding':
        if (argStr && /^\d+$/.test(String(argStr))) style.padding = parseInt(String(argStr), 10);
        else style.padding = 16;
        break;
      case 'frame':
        const wMatch = String(argStr).match(/width:\s*(\d+)/);
        const hMatch = String(argStr).match(/height:\s*(\d+)/);
        if (wMatch) style.width = parseInt(wMatch[1], 10);
        if (hMatch) style.height = parseInt(hMatch[1], 10);
        break;
      case 'font':
        const sizeMatch = String(argStr).match(/size:\s*(\d+)/);
        const boldMatch = /bold|weight:\s*\.bold/.test(String(argStr));
        if (sizeMatch) style.fontSize = parseInt(sizeMatch[1], 10);
        if (boldMatch) style.fontWeight = 'bold';
        break;
      case 'foregroundColor':
      case 'foregroundStyle':
        const colorName = (argStr || '').replace(/^\./, '').toLowerCase();
        const colorMap: Record<string, string> = {
          red: '#FF0000', blue: '#0000FF', green: '#008000', gray: '#808080', grey: '#808080',
          orange: '#FFA500', pink: '#FFC0CB', purple: '#800080', white: '#FFFFFF', black: '#000000',
          yellow: '#FFFF00', primary: '#007AFF',
        };
        if (colorName) style.color = colorMap[colorName] ?? `var(--color-${colorName}, #333)`;
        break;
      case 'background': {
        const bgArg = (argStr || '').trim();
        const opacityMatch = bgArg.match(/\.opacity\s*\(\s*([\d.]+)\s*\)/);
        const opacity = opacityMatch ? parseFloat(opacityMatch[1]) : 1;
        const bgName = bgArg.replace(/^Color\./, '').replace(/\.opacity\s*\([^)]*\)/, '').replace(/^\./, '').trim().toLowerCase();
        const bgMap: Record<string, string> = {
          red: '#FF0000', blue: '#0000FF', green: '#008000', gray: '#808080', grey: '#808080',
          orange: '#FFA500', white: '#FFFFFF', black: '#000000', yellow: '#FFFF00',
        };
        const hex = bgMap[bgName] ?? (bgName ? `var(--bg-${bgName}, #eee)` : '');
        if (hex && opacity < 1) {
          const m = hex.match(/^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
          if (m) style.backgroundColor = `rgba(${parseInt(m[1], 16)}, ${parseInt(m[2], 16)}, ${parseInt(m[3], 16)}, ${opacity})`;
          else style.backgroundColor = hex;
        } else if (bgName) style.backgroundColor = hex;
        break;
      }
      case 'cornerRadius':
        if (argStr && /^\d+$/.test(String(argStr))) style.borderRadius = parseInt(String(argStr), 10);
        break;
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
    case 'Image':
      return `${pad}<img src={${node.props.name ?? '""'}} alt="" />`;
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
      const colorMap: Record<string, string> = {
        brown: '#8B4513',
        red: '#FF0000',
        blue: '#0000FF',
        green: '#008000',
        gray: '#808080',
        grey: '#808080',
        orange: '#FFA500',
        pink: '#FFC0CB',
        purple: '#800080',
        white: '#FFFFFF',
        black: '#000000',
        yellow: '#FFFF00',
        primary: '#007AFF',
        secondary: '#8E8E93',
      };
      const hex = colorMap[name] ?? `var(--color-${name}, #808080)`;
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
