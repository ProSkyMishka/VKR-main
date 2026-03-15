# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S4_list_foreach/foreach_with_view.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B0raw/S4_list_foreach_foreach_with_view |
| Начало | 2026-03-14T21:05:59.648Z |
| Окончание | 2026-03-14T21:06:10.943Z |
| Успех | Нет |
| Вызовов LLM | 1 |
| Токенов (prompt) | 418 |
| Токенов (completion) | 843 |
| Токенов (всего) | 1261 |
| Конфигурация эксперимента | B0raw |
| Ошибки | > swiftui-to-react@0.0.0 build > tsc && vite build  src/App.tsx(5,11): error TS2741: Property 'title' is missing in type '{}' but required in type 'RowViewProps'. |

---
## Шаг 1: SwiftUI Extractor (парсинг → UI-IR)

| Параметр | Значение |
|----------|----------|
| Количество View | 1 |
| Имена View | RowView |
| Entry View | RowView |

### UI-IR (полная структура)

```json
{
  "views": [
    {
      "name": "RowView",
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
  "entryViewName": "RowView"
}
```

### Исходный Swift (фрагмент)

```swift
import SwiftUI
struct RowView: View {
    let title: String
    var body: some View { Text(title) }
}
struct ContentView: View {
    let items = ["One", "Two", "Three"]
    var body: some View {
        List(items, id: \.self) { item in RowView(title: item) }
    }
}

```

---
## Шаг 2: Rule Mapper (UI-IR → скелет + unresolved)

| Параметр | Значение |
|----------|----------|
| Компонентов в скелете | 1 |
| Неразрешённых фрагментов | 0 |
| Entry (для App.tsx) | RowView |

### Скелет компонентов (кратко)

#### RowView

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
| Длина промпта (символов) | 1323 |
| Длина ответа (символов) | 2207 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 435 |
| vite.config.ts | 131 |
| tsconfig.json | 504 |
| index.html | 302 |
| src/main.tsx | 209 |
| src/App.tsx | 284 |
| src/views/RowView.tsx | 181 |

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

src/App.tsx(5,11): error TS2741: Property 'title' is missing in type '{}' but required in type 'RowViewProps'.
```

---
## Шаг 6: Repair Loop

| Параметр | Значение |
|----------|----------|
| Всего итераций исправления | 0 |
| Лимит достигнут | Нет |


---
*Конец отчёта*