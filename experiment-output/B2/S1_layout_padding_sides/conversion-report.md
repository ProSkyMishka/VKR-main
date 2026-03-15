# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S1_layout/padding_sides.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B2/S1_layout_padding_sides |
| Начало | 2026-03-14T22:20:17.368Z |
| Окончание | 2026-03-14T22:20:32.654Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 1272 |
| Токенов (completion) | 840 |
| Токенов (всего) | 2112 |
| Конфигурация эксперимента | B2 |

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
        "type": "Text",
        "props": {
          "content": "Padded"
        },
        "modifiers": [
          {
            "name": "padding",
            "args": [
              ".horizontal, 24"
            ]
          },
          {
            "name": "padding",
            "args": [
              ".vertical, 16"
            ]
          }
        ],
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
struct ContentView: View {
    var body: some View {
        Text("Padded")
            .padding(.horizontal, 24)
            .padding(.vertical, 16)
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
interface ContentViewProps {
  // no props
}
```

**State hooks:**
- нет

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <span style={ padding: 16 }>Padded</span>
  </div>
```


---
## Шаг 3: RAG Retriever

| Параметр | Значение |
|----------|----------|
| Число подобранных примеров | 3 |
| ID примеров | s1-centered-box, s1-vstack-text, s1-hstack |
| Длина RAG-контекста (символов) | 1334 |

### Теги по примерам

- **s1-centered-box**: layout, VStack, Spacer, Text, padding, background, S1
- **s1-vstack-text**: layout, VStack, Text, S1
- **s1-hstack**: layout, HStack, Text, S1


---
## Шаг 4: LLM Generator (OpenRouter)

| Параметр | Значение |
|----------|----------|
| Модель | — |
| Длина промпта (символов) | 4007 |
| Длина ответа (символов) | 2248 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 432 |
| vite.config.ts | 161 |
| tsconfig.json | 504 |
| index.html | 303 |
| src/main.tsx | 223 |
| src/App.tsx | 120 |
| src/views/ContentView.tsx | 340 |

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