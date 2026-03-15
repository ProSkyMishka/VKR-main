# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S1_layout/card_like.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B3/S1_layout_card_like |
| Начало | 2026-03-14T22:46:49.582Z |
| Окончание | 2026-03-14T22:46:59.716Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 1358 |
| Токенов (completion) | 895 |
| Токенов (всего) | 2253 |
| Конфигурация эксперимента | B3 |

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
        "type": "VStack",
        "props": {
          "spacing": 8
        },
        "modifiers": [
          {
            "name": "padding",
            "args": [
              "16"
            ]
          },
          {
            "name": "background",
            "args": [
              "Color.gray.opacity(0.15"
            ]
          },
          {
            "name": "cornerRadius",
            "args": [
              "12"
            ]
          }
        ],
        "children": [
          {
            "type": "Text",
            "props": {
              "content": "Card Title"
            },
            "modifiers": [
              {
                "name": "font",
                "args": [
                  ".headline"
                ]
              }
            ],
            "children": []
          },
          {
            "type": "Text",
            "props": {
              "content": "Card body text here."
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
        VStack(alignment: .leading, spacing: 8) {
            Text("Card Title").font(.headline)
            Text("Card body text here.")
        }
        .padding(16)
        .background(Color.gray.opacity(0.15))
        .cornerRadius(12)
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
    <div style={ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', padding: 16, backgroundColor: 'var(--bg-gray.opacity(0.15, #eee)', borderRadius: 12 }>
      <span>Card Title</span>
      <span>Card body text here.</span>
    </div>
  </div>
```


---
## Шаг 3: RAG Retriever

| Параметр | Значение |
|----------|----------|
| Число подобранных примеров | 3 |
| ID примеров | s1-centered-box, s1-vstack-text, s1-padding |
| Длина RAG-контекста (символов) | 1292 |

### Теги по примерам

- **s1-centered-box**: layout, VStack, Spacer, Text, padding, background, S1
- **s1-vstack-text**: layout, VStack, Text, S1
- **s1-padding**: layout, padding, VStack, S1


---
## Шаг 4: LLM Generator (OpenRouter)

| Параметр | Значение |
|----------|----------|
| Модель | — |
| Длина промпта (символов) | 4320 |
| Длина ответа (символов) | 2414 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 435 |
| vite.config.ts | 131 |
| tsconfig.json | 504 |
| index.html | 303 |
| src/main.tsx | 210 |
| src/App.tsx | 120 |
| src/views/ContentView.tsx | 546 |

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