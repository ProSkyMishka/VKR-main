# SwiftUI → React+TS Converter (MVP)

Гибридный конвертер SwiftUI в Vite React+TypeScript по пайплайну ВКР: UI-IR, Rule Mapper, RAG, LLM (OpenRouter), валидация, repair loop.

## Требования

- Node.js 18+
- Ключ **OpenRouter** для вызова LLM ([openrouter.ai](https://openrouter.ai))

### Как указать OPENROUTER_API_KEY

**Вариант 1 — файл `.env` в корне проекта (удобно, не коммитить в git):**
```bash
# в корне проекта создайте файл .env:
echo 'OPENROUTER_API_KEY=sk-or-v1-ваш-ключ' > .env
```

**Вариант 2 — в терминале перед запуском:**
```bash
export OPENROUTER_API_KEY=sk-or-v1-ваш-ключ
node dist/cli.js fixtures/sample.swift --out ./output-app
```

**Вариант 3 — в одной строке:**
```bash
OPENROUTER_API_KEY=sk-or-v1-ваш-ключ node dist/cli.js fixtures/sample.swift --out ./output-app
```

## Установка

```bash
npm install
npm run build
```

## Использование

```bash
node dist/cli.js fixtures/sample.swift --out ./output-app
# или после npm run build:
npm run convert -- fixtures/sample.swift --out ./output-app
```

Вход: один `.swift` файл с несколькими `struct Name: View`.  
Entry: `ContentView` → при отсутствии `RootView` → иначе первый View.  
Поддерживаются параметры View: `let`, `@State`, `@Binding`.  
Выход: Vite React+TS проект в `--out`; `App.tsx` рендерит entry-компонент.

После каждого запуска в директории `--out` создаётся **полный отчёт по шагам**:
- **`conversion-report.md`** — человекочитаемый отчёт (метаданные, шаг 1–6 с деталями: UI-IR, скелет, RAG, LLM, валидация, repair).
- **`conversion-report.json`** — те же данные в JSON для скриптов и анализа.

## Пайплайн

1. **Extractor** — парсинг Swift, построение UI-IR (дерево компонентов, state/bindings, навигация, анимации).
2. **Rule Mapper** — детерминированный скелет React (VStack/HStack/Text/Button/List и т.д.) + список unresolved фрагментов.
3. **RAG** — подбор примеров по подписи UI-IR, добавление в промпт.
4. **LLM (OpenRouter)** — генерация полного набора файлов (package.json, main.tsx, App.tsx, views/*.tsx).
5. **Validator** — `npm install` + `npm run build` в выходной директории.
6. **Repair Loop** — при падении валидации до 3 итераций: контрпример → повторный вызов LLM → перезапись файлов → повторная валидация.

## Структура проекта

- `src/extractor/` — парсинг .swift, построение UI-IR
- `src/ir/` — типы UI-IR и Web-IR
- `src/entry.ts` — выбор entry (ContentView → RootView → first)
- `src/rules/` — Rule Mapper
- `src/rag/` — корпус примеров и retrieval
- `src/llm/` — промпт, OpenRouter, разбор ответа, запись файлов
- `src/validator/` — сборка и проверка
- `src/repair/` — repair loop
- `src/cli.ts` — оркестрация
- `fixtures/` — примеры .swift
