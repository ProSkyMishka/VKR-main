# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S4_list_foreach/list_with_sections.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B0/S4_list_foreach_list_with_sections |
| Начало | 2026-03-14T21:37:33.065Z |
| Окончание | 2026-03-14T21:37:51.019Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 499 |
| Токенов (completion) | 1050 |
| Токенов (всего) | 1549 |
| Конфигурация эксперимента | B0 |

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
      "body": {
        "type": "Custom",
        "props": {
          "raw": "List {\n            Section(\"Section A\") {\n                ForEach(sectionA) { row in\n                    Text(row.title)\n                }\n            }\n            Section(\"Section B\") {\n                ForEach(sectionB) { row in\n                    Text(row.title)\n                }\n            }\n        }"
        },
        "modifiers": [],
        "children": []
      },
      "state": {
        "stateVars": [],
        "bindings": []
      }
    }
  ],
  "entryViewName": "ContentView"
}
```

### Исходный Swift (фрагмент)

```swift
import SwiftUI

struct Row: Identifiable {
    let id = UUID()
    let title: String
}

struct ContentView: View {
    let sectionA = [Row(title: "A1"), Row(title: "A2")]
    let sectionB = [Row(title: "B1"), Row(title: "B2")]

    var body: some View {
        List {
            Section("Section A") {
                ForEach(sectionA) { row in
                    Text(row.title)
                }
            }
            Section("Section B") {
                ForEach(sectionB) { row in
                    Text(row.title)
                }
            }
        }
    }
}

```

---
## Шаг 2: Rule Mapper (UI-IR → скелет + unresolved)

| Параметр | Значение |
|----------|----------|
| Компонентов в скелете | 1 |
| Неразрешённых фрагментов | 1 |
| Entry (для App.tsx) | ContentView |

### Список unresolved

| View | Расположение | Описание |
|------|--------------|----------|
| ContentView | body | Custom/unparsed body |

### Скелет компонентов (кратко)

#### ContentView

**Props interface:**
```ts
interface ContentViewProps {
  // no props
}
```

**State hooks:**
- нет

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    {/* Custom: List {
            Section("Section A") {
                ForEach(sectionA) { ro */}
  </div>
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
| Длина промпта (символов) | 1642 |
| Длина ответа (символов) | 2735 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 441 |
| vite.config.ts | 132 |
| tsconfig.json | 504 |
| index.html | 311 |
| src/main.tsx | 210 |
| src/App.tsx | 169 |
| src/views/ContentView.tsx | 803 |

---
## Шаг 5: Validator

| Параметр | Значение |
|----------|----------|
| Успех | Да |
| Сборка (npm run build) | OK |

---
## Шаг 6: Repair Loop

| Параметр | Значение |
|----------|----------|
| Всего итераций исправления | 0 |
| Лимит достигнут | Нет |


---
*Конец отчёта*