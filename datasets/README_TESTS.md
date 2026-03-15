# Поведенческие тесты для экспериментов

Для каждого примера в `S1_layout/`, `S2_state_events/`, … лежит файл **`<name>.spec.tsx`** — поведенческий тест на TypeScript (Vitest + React Testing Library). Тесты служат **метрикой качества конвертации**: после конвертации Swift → React тест запускается над сконвертированным приложением; успех/неуспех — метрика эксперимента.

## Как запускать тесты

1. Сконвертировать пример в выходную директорию:
   ```bash
   node dist/cli.js datasets/S1_layout/vstack_simple.swift --out ./output-s1-vstack
   ```
2. Внедрить тест и зависимости в проект и запустить тесты:
   ```bash
   node scripts/inject-and-run-tests.js ./output-s1-vstack datasets/S1_layout/vstack_simple.spec.tsx
   ```
   Либо вручную:
   - скопировать `vstack_simple.spec.tsx` в `output-s1-vstack/src/App.spec.tsx`;
   - добавить в `package.json` devDependencies: `vitest`, `@testing-library/react`, `@testing-library/user-event`, `jsdom`, скрипт `"test": "vitest run"`;
   - добавить `vitest.config.ts`;
   - в каталоге `output-s1-vstack` выполнить `npm install` и `npm test`.

## Сценарии и что проверяют тесты

| Сценарий | Что проверяется |
|----------|------------------|
| **S1**   | В документе есть ожидаемые тексты/элементы (layout). |
| **S2**   | Клик по кнопке/переключателю меняет состояние (текст/счётчик). |
| **S3**   | Изменение в дочернем компоненте отражается у родителя (binding). |
| **S4**   | Список отображает ожидаемое число элементов и тексты. |
| **S5**   | После перехода (клик по ссылке/кнопке) отображается экран назначения. |
| **S6**   | После действия меняется состояние (opacity/scale/видимость). |

Имена файлов тестов совпадают с именами примеров: `vstack_simple.spec.tsx`, `counter.spec.tsx`, и т.д.

**Генерация спеок:** все 107 спеок можно перегенерировать командой:
```bash
node scripts/generate-specs.js
```
Ожидания (какие тексты/кнопки проверять) заданы в `scripts/generate-specs.js` в объекте `EXPECTATIONS`. После правок ожиданий запустите генератор заново.

**Метрика эксперимента:** для каждого сконвертированного примера запускается один соответствующий `.spec.tsx`; доля прошедших тестов (passed / total) по сценарию или по всему датасету — метрика качества конвертации.

## Запуск эксперимента B0raw/B0/B1/B2/B3

Скрипт `scripts/run-experiment.js` прогоняет все конфигурации: **B0raw** (чистый LLM — только Swift в контекст, без UI-IR и rule mapping), **B0** (LLM-only, но с UI-IR и скелетоном), **B1** (rules+LLM), **B2** (+RAG), **B3** (+repair). Метрики: **build%**, **test%**, **число вызовов LLM**.

```bash
npm run build
npm run experiment
```

Опции: `--samples N` — ограничить число сэмплов; `--out <dir>` — директория артефактов (по умолчанию `./experiment-output`). Итоговая таблица и файл `experiment-output/experiment-results.json` содержат сводку по конфигурациям.
