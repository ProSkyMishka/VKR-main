# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S1_layout/hstack_spacing.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B2/S1_layout_hstack_spacing |
| Начало | 2026-03-14T22:18:59.268Z |
| Окончание | 2026-03-14T22:19:10.709Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 1334 |
| Токенов (completion) | 891 |
| Токенов (всего) | 2225 |
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
        "type": "HStack",
        "props": {
          "spacing": 16
        },
        "modifiers": [
          {
            "name": "padding",
            "args": [
              "20"
            ]
          }
        ],
        "children": [
          {
            "type": "Text",
            "props": {
              "content": "Left"
            },
            "modifiers": [],
            "children": []
          },
          {
            "type": "Text",
            "props": {
              "content": "Center"
            },
            "modifiers": [],
            "children": []
          },
          {
            "type": "Text",
            "props": {
              "content": "Right"
            },
            "modifiers": [],
            "children": []
          }
        ]
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
        HStack(spacing: 16) {
            Text("Left")
            Text("Center")
            Text("Right")
        }
        .padding(20)
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
    <div style={ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center', padding: 20 }>
      <span>Left</span>
      <span>Center</span>
      <span>Right</span>
    </div>
  </div>
```


---
## Шаг 3: RAG Retriever

| Параметр | Значение |
|----------|----------|
| Число подобранных примеров | 3 |
| ID примеров | s1-hstack, s1-centered-box, s1-vstack-text |
| Длина RAG-контекста (символов) | 1334 |

### Теги по примерам

- **s1-hstack**: layout, HStack, Text, S1
- **s1-centered-box**: layout, VStack, Spacer, Text, padding, background, S1
- **s1-vstack-text**: layout, VStack, Text, S1


---
## Шаг 4: LLM Generator (OpenRouter)

| Параметр | Значение |
|----------|----------|
| Модель | — |
| Длина промпта (символов) | 4192 |
| Длина ответа (символов) | 2400 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 433 |
| vite.config.ts | 161 |
| tsconfig.json | 504 |
| index.html | 303 |
| src/main.tsx | 224 |
| src/App.tsx | 120 |
| src/views/ContentView.tsx | 490 |

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