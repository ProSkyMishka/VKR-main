import type { WebIR } from '../ir/web-ir.js';

export function buildLLMOnlyPrompt(swiftSource: string, entryViewName: string, viewNames: string[]): string {
  const viewList = viewNames.length ? viewNames.join(', ') : 'ContentView';
  return `You are a code generator. Convert the following SwiftUI code into a complete Vite + React + TypeScript project.

## Original SwiftUI source
\`\`\`swift
${swiftSource.slice(0, 12000)}
\`\`\`

## Your task
Generate the full project. Reply with a single markdown document where each file is in a fenced code block with the path as the info string, e.g.:
\`\`\`src/App.tsx
...content...
\`\`\`

Include these files:
1. package.json (with "type": "module", vite, react, react-dom, typescript)
2. vite.config.ts
3. tsconfig.json
4. index.html (root with script type="module" to src/main.tsx)
5. src/main.tsx (ReactDOM.createRoot, render <App />)
6. src/App.tsx (import and render the entry view only)
7. One file per view in src/views/: ${viewList}

Use React 18, functional components, useState for @State, props with callbacks for @Binding. Keep styles inline. No react-router-dom. Entry view: **${entryViewName}**. Output valid TypeScript. Do not add a path as the first line inside the code block.

Reply with ONLY the markdown document and code blocks. Do not add any commentary before or after the code blocks.`;
}

export function buildGenerationPrompt(
  webIR: WebIR,
  ragContext: string,
  swiftSource: string,
  options?: { useSkeleton?: boolean }
): string {
  const useSkeleton = options?.useSkeleton !== false;
  const skeletonBlock = webIR.skeleton
    .map((s) => {
      let block = `### ${s.viewName}\nProps:\n${s.propsInterface}\n\nState hooks:\n${s.stateHooks.join('\n')}\n\n`;
      if (s.leadingBodySwift) {
        block += `Leading Swift (convert to const/let and place above return in the component):\n\`\`\`swift\n${s.leadingBodySwift}\n\`\`\`\n\n`;
      }
      block += `JSX skeleton:\n\`\`\`tsx\n${s.jsxSkeleton}\n\`\`\``;
      return block;
    })
    .join('\n\n');
  const unresolvedBlock =
    webIR.unresolved.length > 0
      ? `Unresolved fragments (translate these appropriately):\n${webIR.unresolved
          .map((u) => `- ${u.viewName}: ${u.description}${u.rawSwift ? `\n  Raw: ${u.rawSwift}` : ''}`)
          .join('\n')}`
      : 'No unresolved fragments.';

  const otherViewNames = webIR.skeleton.map((s) => s.viewName).filter((n) => n !== webIR.entryViewName);
  const entryScreenSwitchBlock =
    otherViewNames.length > 0
      ? `
## Critical: entry view with child views
The entry is **${webIR.entryViewName}**. Other views: ${otherViewNames.join(', ')}.
- **${webIR.entryViewName}.tsx** must switch between screens with useState, e.g. \`const [currentScreen, setCurrentScreen] = useState<'settings' | 'game'>('settings')\`.
- When currentScreen === 'game', render the main content view with its props, e.g. \`<ContentView difficulty={difficulty} optionCount={optionsCount} victoryScore={victoryScore} />\`.
- The "Start the game" (or similar) button must call \`setCurrentScreen('game')\`, not only console.log.
- Use **default import** for child views: \`import ContentView from './ContentView'\`, not \`import { ContentView } from './ContentView'\`.
`
      : '';

  const refBlock = useSkeleton ? `## Reference examples (follow these patterns)
${ragContext}

## Original SwiftUI source
` : '## Original SwiftUI source\n';
  const skeletonBlockIf = useSkeleton ? `

## React skeleton (preserve structure and props/state)
${skeletonBlock}

## ${unresolvedBlock}

## Entry view
The entry component to render in App.tsx is: **${webIR.entryViewName}**.
${entryScreenSwitchBlock}
` : `

## Entry view
The entry component to render in App.tsx is: **${webIR.entryViewName}**.
`;

  return `You are a code generator. Convert the following SwiftUI code into a complete Vite + React + TypeScript project.
${refBlock}
\`\`\`swift
${swiftSource.slice(0, 8000)}
\`\`\`
${skeletonBlockIf}

## Your task
Generate the full project. Reply with a single markdown document where each file is in a fenced code block with the path as the info string, e.g.:
\`\`\`src/App.tsx
...content...
\`\`\`

Include these files exactly:
1. package.json (with "type": "module", vite, react, react-dom, typescript)
2. vite.config.ts
3. tsconfig.json
4. index.html (root with script type="module" to src/main.tsx)
5. src/main.tsx (ReactDOM.createRoot, render <App />)
6. src/App.tsx (import and render <${webIR.entryViewName} /> only)
7. One file per view: src/views/${webIR.entryViewName}.tsx and src/views/<OtherView>.tsx for each other view

**Rules:** Use React 18, functional components, useState for @State, props with callbacks for @Binding. Keep styles inline. No react-router-dom: switch screens with useState (e.g. currentScreen). Each view file must contain exactly one component: the file src/views/X.tsx must export only that component (export default X). Use default import for views: \`import X from './X'\`. Do not put App.tsx content or another view's component inside a view file.

**React setState is asynchronous:** If you compute a new value and in the same function both (1) call setState with it and (2) use it to build a list/array (e.g. a list of answer options that must include the correct one), store the result in a local variable and use that variable for both—do not read the state variable in the same synchronous block after setState, as it still holds the previous value. Example: \`let newCorrect = addition(); setCorrectAnswer(newCorrect); answerList.push(newCorrect); setChoiceArray(answerList);\` not \`setCorrectAnswer(addition()); ... answerList.push(correctAnswer);\`.

Output valid TypeScript. Do not add a path as the first line inside the code block.

Reply with ONLY the markdown document and code blocks. Do not add any commentary before or after the code blocks.`;
}
