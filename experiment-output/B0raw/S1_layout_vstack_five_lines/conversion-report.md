# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S1_layout/vstack_five_lines.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B0raw/S1_layout_vstack_five_lines |
| Начало | 2026-03-14T20:52:22.110Z |
| Окончание | 2026-03-14T20:52:32.561Z |
| Успех | Нет |
| Вызовов LLM | 1 |
| Токенов (prompt) | 397 |
| Токенов (completion) | 843 |
| Токенов (всего) | 1240 |
| Конфигурация эксперимента | B0raw |
| Ошибки | > swiftui-to-react@0.0.0 build > tsc && vite build  src/views/ContentView.tsx(6,21): error TS2322: Type '{ spacing: string; }' is not assignable to type 'Properties<string \| number, string & {}>'.   Object literal may only specify known properties, and 'spacing' does not exist in type 'Properties<string \| number, string & {}>'. |

---
## Шаг 1: SwiftUI Extractor (парсинг → UI-IR)

| Параметр | Значение |
|----------|----------|
| Количество View | 1 |
| Имена View | ContentView |
| Entry View | ContentView |

### UI-IR (полная структура)

```json
{
  "views": [
    {
      "name": "ContentView",
      "params": [],
      "state": {
        "stateVars": [],
        "bindings": []
      },
      "body": {
        "type": "Custom",
        "props": {
          "raw": "(skipped)"
        },
        "children": [],
        "modifiers": []
      }
    }
  ],
  "entryViewName": "ContentView"
}
```

### Исходный Swift (фрагмент)

```swift
import SwiftUI
struct ContentView: View {
    var body: some View {
        VStack(spacing: 4) {
            Text("One")
            Text("Two")
            Text("Three")
            Text("Four")
            Text("Five")
        }.padding(8)
    }
}

```

---
## Шаг 2: Rule Mapper (UI-IR → скелет + unresolved)

| Параметр | Значение |
|----------|----------|
| Компонентов в скелете | 1 |
| Неразрешённых фрагментов | 0 |
| Entry (для App.tsx) | ContentView |

### Скелет компонентов (кратко)

#### ContentView

**Props interface:**
```ts

```

**State hooks:**
- нет

**JSX skeleton (фрагмент):**
```tsx

```


---
## Шаг 3: RAG Retriever

| Параметр | Значение |
|----------|----------|
| Число подобранных примеров | 0 |
| ID примеров | — |
| Длина RAG-контекста (символов) | 22 |


---
## Шаг 4: LLM Generator (OpenRouter)

| Параметр | Значение |
|----------|----------|
| Модель | — |
| Длина промпта (символов) | 1313 |
| Длина ответа (символов) | 2231 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 435 |
| vite.config.ts | 132 |
| tsconfig.json | 504 |
| index.html | 302 |
| src/main.tsx | 209 |
| src/App.tsx | 169 |
| src/views/ContentView.tsx | 315 |

---
## Шаг 5: Validator

| Параметр | Значение |
|----------|----------|
| Успех | Нет |
| Сборка (npm run build) | Ошибка |

### Вывод сборки (ошибка)

```
> swiftui-to-react@0.0.0 build
> tsc && vite build

src/views/ContentView.tsx(6,21): error TS2322: Type '{ spacing: string; }' is not assignable to type 'Properties<string | number, string & {}>'.
  Object literal may only specify known properties, and 'spacing' does not exist in type 'Properties<string | number, string & {}>'.
```

---
## Шаг 6: Repair Loop

| Параметр | Значение |
|----------|----------|
| Всего итераций исправления | 0 |
| Лимит достигнут | Нет |


---
*Конец отчёта*