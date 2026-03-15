import type { ConversionReport } from './types.js';

function escapeMd(s: string): string {
  return s.replace(/\|/g, '\\|').replace(/\n/g, ' ');
}

export function buildReportMarkdown(report: ConversionReport): string {
  const lines: string[] = [];
  lines.push('# Отчёт конвертации SwiftUI → React+TS');
  lines.push('');
  lines.push('## Метаданные');
  lines.push('');
  lines.push('| Поле | Значение |');
  lines.push('|------|---------|');
  lines.push(`| Входной файл | ${escapeMd(report.meta.inputFile)} |`);
  lines.push(`| Выходная директория | ${escapeMd(report.meta.outDir)} |`);
  lines.push(`| Начало | ${report.meta.startedAt} |`);
  lines.push(`| Окончание | ${report.meta.finishedAt} |`);
  lines.push(`| Успех | ${report.meta.success ? 'Да' : 'Нет'} |`);
  if (report.meta.totalLlmCalls != null) {
    lines.push(`| Вызовов LLM | ${report.meta.totalLlmCalls} |`);
  }
  if (report.meta.totalPromptTokens != null) {
    lines.push(`| Токенов (prompt) | ${report.meta.totalPromptTokens} |`);
  }
  if (report.meta.totalCompletionTokens != null) {
    lines.push(`| Токенов (completion) | ${report.meta.totalCompletionTokens} |`);
  }
  if (report.meta.totalTokens != null) {
    lines.push(`| Токенов (всего) | ${report.meta.totalTokens} |`);
  }
  if (report.meta.experimentConfig) {
    lines.push(`| Конфигурация эксперимента | ${report.meta.experimentConfig} |`);
  }
  if (report.meta.errors?.length) {
    lines.push(`| Ошибки | ${report.meta.errors.map(escapeMd).join('; ')} |`);
  }
  lines.push('');
  lines.push('---');
  lines.push('## Шаг 1: SwiftUI Extractor (парсинг → UI-IR)');
  lines.push('');
  lines.push('| Параметр | Значение |');
  lines.push('|----------|----------|');
  lines.push(`| Количество View | ${report.step1_extractor.viewsCount} |`);
  lines.push(`| Имена View | ${report.step1_extractor.viewNames.join(', ')} |`);
  lines.push(`| Entry View | ${report.step1_extractor.entryViewName ?? '—'} |`);
  lines.push('');
  lines.push('### UI-IR (полная структура)');
  lines.push('');
  lines.push('```json');
  lines.push(JSON.stringify(report.step1_extractor.ir, null, 2));
  lines.push('```');
  if (report.step1_extractor.swiftSourcePreview) {
    lines.push('');
    lines.push('### Исходный Swift (фрагмент)');
    lines.push('');
    lines.push('```swift');
    lines.push(report.step1_extractor.swiftSourcePreview);
    lines.push('```');
  }
  lines.push('');
  lines.push('---');
  lines.push('## Шаг 2: Rule Mapper (UI-IR → скелет + unresolved)');
  lines.push('');
  lines.push('| Параметр | Значение |');
  lines.push('|----------|----------|');
  lines.push(`| Компонентов в скелете | ${report.step2_rules.skeletonCount} |`);
  lines.push(`| Неразрешённых фрагментов | ${report.step2_rules.unresolvedCount} |`);
  lines.push(`| Entry (для App.tsx) | ${report.step2_rules.webIR.entryViewName} |`);
  lines.push('');
  if (report.step2_rules.unresolvedList.length > 0) {
    lines.push('### Список unresolved');
    lines.push('');
    lines.push('| View | Расположение | Описание |');
    lines.push('|------|--------------|----------|');
    for (const u of report.step2_rules.unresolvedList) {
      lines.push(`| ${u.viewName} | ${escapeMd(u.location)} | ${escapeMd(u.description)} |`);
    }
    lines.push('');
  }
  lines.push('### Скелет компонентов (кратко)');
  lines.push('');
  for (const s of report.step2_rules.webIR.skeleton) {
    lines.push(`#### ${s.viewName}`);
    lines.push('');
    lines.push('**Props interface:**');
    lines.push('```ts');
    lines.push(s.propsInterface);
    lines.push('```');
    lines.push('');
    lines.push('**State hooks:**');
    lines.push(s.stateHooks.length ? s.stateHooks.map((h) => `- \`${h}\``).join('\n') : '- нет');
    lines.push('');
    lines.push('**JSX skeleton (фрагмент):**');
    lines.push('```tsx');
    lines.push(s.jsxSkeleton.slice(0, 800) + (s.jsxSkeleton.length > 800 ? '\n// ...' : ''));
    lines.push('```');
    lines.push('');
  }
  lines.push('');
  lines.push('---');
  lines.push('## Шаг 3: RAG Retriever');
  lines.push('');
  lines.push('| Параметр | Значение |');
  lines.push('|----------|----------|');
  lines.push(`| Число подобранных примеров | ${report.step3_rag.retrievedCount} |`);
  lines.push(`| ID примеров | ${report.step3_rag.retrievedIds.join(', ') || '—'} |`);
  lines.push(`| Длина RAG-контекста (символов) | ${report.step3_rag.ragContextLength} |`);
  lines.push('');
  if (report.step3_rag.retrievedTags.length > 0) {
    lines.push('### Теги по примерам');
    lines.push('');
    report.step3_rag.retrievedIds.forEach((id, i) => {
      lines.push(`- **${id}**: ${report.step3_rag.retrievedTags[i]?.join(', ') ?? ''}`);
    });
    lines.push('');
  }
  lines.push('');
  lines.push('---');
  lines.push('## Шаг 4: LLM Generator (OpenRouter)');
  lines.push('');
  lines.push('| Параметр | Значение |');
  lines.push('|----------|----------|');
  lines.push(`| Модель | ${report.step4_llm.model ?? '—'} |`);
  lines.push(`| Длина промпта (символов) | ${report.step4_llm.promptLength} |`);
  lines.push(`| Длина ответа (символов) | ${report.step4_llm.rawResponseLength} |`);
  lines.push(`| Сгенерировано файлов | ${report.step4_llm.filesCount} |`);
  lines.push('');
  lines.push('### Список сгенерированных файлов');
  lines.push('');
  lines.push('| Путь | Размер (символов) |');
  lines.push('|------|-------------------|');
  for (const f of report.step4_llm.filesGenerated) {
    lines.push(`| ${f.path} | ${f.contentLength} |`);
  }
  lines.push('');
  lines.push('---');
  lines.push('## Шаг 5: Validator');
  lines.push('');
  lines.push('| Параметр | Значение |');
  lines.push('|----------|----------|');
  lines.push(`| Успех | ${report.step5_validation.success ? 'Да' : 'Нет'} |`);
  lines.push(`| Сборка (npm run build) | ${report.step5_validation.buildOk ? 'OK' : 'Ошибка'} |`);
  if (report.step5_validation.buildError) {
    lines.push('');
    lines.push('### Вывод сборки (ошибка)');
    lines.push('');
    lines.push('```');
    lines.push(report.step5_validation.buildError);
    lines.push('```');
  }
  if (report.step5_validation.testError) {
    lines.push('');
    lines.push('### Ошибки тестов');
    lines.push('');
    lines.push('```');
    lines.push(report.step5_validation.testError);
    lines.push('```');
  }
  lines.push('');
  lines.push('---');
  lines.push('## Шаг 6: Repair Loop');
  lines.push('');
  lines.push('| Параметр | Значение |');
  lines.push('|----------|----------|');
  lines.push(`| Всего итераций исправления | ${report.step6_repair.totalIterations} |`);
  lines.push(`| Лимит достигнут | ${report.step6_repair.limitReached ? 'Да' : 'Нет'} |`);
  lines.push('');
  if (report.step6_repair.iterations.length > 0) {
    lines.push('### Итерации');
    lines.push('');
    for (const it of report.step6_repair.iterations) {
      lines.push(`#### Итерация ${it.iteration}`);
      lines.push('');
      lines.push('- **Ошибка валидации:**');
      lines.push('```');
      lines.push(it.validationError.slice(0, 500) + (it.validationError.length > 500 ? '\n...' : ''));
      lines.push('```');
      lines.push(`- Файлов исправлено: ${it.filesPatched}`);
      lines.push(`- Успех после итерации: ${it.successAfter ? 'Да' : 'Нет'}`);
      lines.push('');
    }
  }
  lines.push('');
  lines.push('---');
  lines.push('*Конец отчёта*');
  return lines.join('\n');
}
