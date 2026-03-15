import type { ViewDefinition, ComponentNode } from '../ir/types.js';
import { RAG_CORPUS, type RagEntry } from './corpus.js';

export type { RagEntry };

function collectTagsFromIR(views: ViewDefinition[]): Set<string> {
  const tags = new Set<string>();
  for (const v of views) {
    tags.add('layout');
    const visit = (node: ComponentNode): void => {
      tags.add(node.type);
      for (const m of node.modifiers ?? []) {
        tags.add(m.name);
      }
      for (const c of node.children ?? []) {
        visit(c);
      }
    };
    visit(v.body);
    if (v.state.stateVars.length) tags.add('state');
    if (v.state.bindings.length) tags.add('@Binding');
  }
  return tags;
}

export function retrieve(
  irSignature: { views: ViewDefinition[] },
  corpus: RagEntry[] = RAG_CORPUS,
  topK = 3
): RagEntry[] {
  const wantTags = collectTagsFromIR(irSignature.views);
  const scored = corpus.map((entry) => {
    const entryTags = new Set(entry.tags);
    let score = 0;
    for (const t of wantTags) {
      if (entryTags.has(t)) score++;
    }
    return { entry, score };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, topK).map((s) => s.entry);
}

export function formatRAGContext(entries: RagEntry[]): string {
  return entries
    .map(
      (e) =>
        `## Example: ${e.id}\nSwiftUI:\n\`\`\`swift\n${e.swiftui_snippet}\n\`\`\`\nReact/TS:\n\`\`\`tsx\n${e.react_snippet}\n\`\`\`\n${e.notes}`
    )
    .join('\n\n');
}
