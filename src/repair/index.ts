import { chat } from '../llm/openrouter.js';
import { parseGeneratedFiles } from '../llm/parseResponse.js';
import fs from 'fs/promises';
import path from 'path';

const MAX_REPAIR_ITERATIONS = 3;

export interface RepairContext {
  outDir: string;
  lastResult: { files: { path: string; content: string }[]; rawResponse: string };
  validationError: string;
  iteration: number;
}

export function buildRepairPrompt(ctx: RepairContext): string {
  return `The generated React/TypeScript project failed validation. Fix it with minimal changes. Do not change architecture.

Error:
\`\`\`
${ctx.validationError.slice(0, 2000)}
\`\`\`

Iteration: ${ctx.iteration}/${MAX_REPAIR_ITERATIONS}.

**Checklist (fix if applicable):**
- If the error is about tsconfig or "Referenced project must have composite" / "may not disable emit": remove the \`"references"\` array from tsconfig.json (or fix tsconfig.node.json: add \`"composite": true\`, remove \`noEmit\`, add \`outDir\`). Include tsconfig.json or tsconfig.node.json in your reply if you change it.
- App.tsx must import the entry view from './views/<EntryViewName>', e.g. \`import SettingView from './views/SettingView'\`.
- View files must use **default import** for other views: \`import ContentView from './ContentView'\`, not \`import { ContentView } from './ContentView'\`.
- If the entry view has a "Start the game" (or similar) button and imports another view: it must have state like \`currentScreen\` and \`setCurrentScreen\`, render the child view when \`currentScreen === 'game'\`, and the button must call \`setCurrentScreen('game')\` (not only console.log).
- Each view file (src/views/X.tsx) must contain only the X component; do not put App or another view's code inside.
- React setState is async: when building a list that must include a value you just set (e.g. correct answer in options), use a local variable for the new value and use it both in setState and when building the list—do not read the state variable in the same function.

Reply with the same format: markdown code blocks with file path as info string. Only include files that need changes. Output complete file content for each changed file.`;
}

export async function repair(
  ctx: RepairContext,
  options: { model?: string; max_tokens?: number; viewNames?: string[] } = {}
): Promise<{
  files: { path: string; content: string }[];
  rawResponse: string;
  usage?: { prompt_tokens: number; completion_tokens: number; total_tokens: number };
}> {
  const prompt = buildRepairPrompt(ctx);
  const chatResult = await chat(
    [
      {
        role: 'system',
        content:
          'You output only a markdown document with fenced code blocks. Each block info string is the file path. Output only files that need fixes.',
      },
      { role: 'user', content: prompt },
    ],
    { model: options.model, max_tokens: options.max_tokens ?? 4096 }
  );
  const files = parseGeneratedFiles(chatResult.content, options.viewNames);
  return { files, rawResponse: chatResult.content, usage: chatResult.usage };
}

export async function applyRepairFiles(
  outDir: string,
  files: { path: string; content: string }[]
): Promise<void> {
  for (const f of files) {
    const fullPath = path.join(outDir, f.path);
    await fs.mkdir(path.dirname(fullPath), { recursive: true });
    await fs.writeFile(fullPath, f.content, 'utf-8');
  }
}
