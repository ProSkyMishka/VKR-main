import type { WebIR } from '../ir/web-ir.js';
import type { UIIR } from '../ir/types.js';
import { retrieve, formatRAGContext, type RagEntry } from '../rag/retriever.js';
import { buildGenerationPrompt, buildLLMOnlyPrompt } from './prompt.js';
import { chat } from './openrouter.js';
import { parseGeneratedFiles } from './parseResponse.js';

export interface GenerateResult {
  files: { path: string; content: string }[];
  rawResponse: string;
  report?: {
    ragRetrieved: { id: string; tags: string[] }[];
    promptLength: number;
    ragContextLength: number;
    model?: string;
    usage?: { prompt_tokens: number; completion_tokens: number; total_tokens: number };
  };
}

export async function generate(
  webIR: WebIR,
  swiftSource: string,
  options: { ir?: UIIR; ragTopK?: number; model?: string; useRules?: boolean; useRAG?: boolean } = {}
): Promise<GenerateResult> {
  const useRules = options.useRules !== false;
  const useRAG = options.useRAG !== false;
  const ragTopK = useRAG ? (options.ragTopK ?? 3) : 0;
  const entries =
    useRAG && options.ir
      ? retrieve({ views: options.ir.views } as Parameters<typeof retrieve>[0], undefined, ragTopK)
      : [];
  const ragContext = entries.length ? formatRAGContext(entries) : 'No reference examples.';
  const prompt = useRules
    ? buildGenerationPrompt(webIR, ragContext, swiftSource, { useSkeleton: true })
    : buildLLMOnlyPrompt(
        swiftSource,
        webIR.entryViewName,
        options.ir?.views?.map((v) => v.name) ?? webIR.skeleton.map((s) => s.viewName)
      );
  const viewNames = webIR.skeleton.map((s) => s.viewName);
  const maxAttempts = 2;
  let rawResponse = '';
  let files: { path: string; content: string }[] = [];
  let lastUsage: { prompt_tokens: number; completion_tokens: number; total_tokens: number } | undefined;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const chatResult = await chat(
      [
        { role: 'system', content: 'You output only a markdown document with fenced code blocks. Each block info string is the file path. No other text.' },
        { role: 'user', content: prompt },
      ],
      { model: options.model, max_tokens: 8192 }
    );
    rawResponse = chatResult.content;
    lastUsage = chatResult.usage;
    files = parseGeneratedFiles(rawResponse, viewNames.length ? viewNames : undefined);
    if (files.length > 0) break;
  }
  const report = {
    ragRetrieved: entries.map((e: RagEntry) => ({ id: e.id, tags: e.tags })),
    promptLength: prompt.length,
    ragContextLength: ragContext.length,
    model: options.model,
    usage: lastUsage,
  };
  return { files, rawResponse, report };
}

export { chat, buildGenerationPrompt, parseGeneratedFiles };
export {
  writeGeneratedFiles,
  removeStrayTestFiles,
  ensureEntryViewFile,
  ensureAppRendersEntry,
  ensureMinimalProjectStructure,
  ensureViewFilesByName,
  ensureDefaultImportsInViews,
  ensureEntryScreenSwitchButton,
  ensureFrameDivsCenter,
  normalizeViewFilePaths,
} from './writeFiles.js';
