# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | datasets/S1_layout/text_modifiers.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B1/S1_layout_text_modifiers |
| Начало | 2026-03-14T18:22:48.260Z |
| Окончание | 2026-03-14T18:22:48.464Z |
| Успех | Нет |
| Вызовов LLM | 1 |
| Конфигурация эксперимента | B1 |
| Ошибки | LLM generation: OpenRouter API error 402: {"error":{"message":"This request requires more credits, or fewer max_tokens. You requested up to 8192 tokens, but can only afford 7527. To increase, visit https://openrouter.ai/settings/credits and upgrade to a paid account","code":402,"metadata":{"provider_name":null}},"user_id":"user_3ACTuIpdW2g1KbGLjUNXYh4CxGO"} |

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
          "spacing": 24
        },
        "modifiers": [
          {
            "name": "padding"
          }
        ],
        "children": [
          {
            "type": "Text",
            "props": {
              "content": "Title"
            },
            "modifiers": [
              {
                "name": "font",
                "args": [
                  ".title"
                ]
              },
              {
                "name": "bold"
              },
              {
                "name": "font",
                "args": [
                  ".system(size: 18"
                ]
              },
              {
                "name": "foregroundColor",
                "args": [
                  ".gray"
                ]
              },
              {
                "name": "frame",
                "args": [
                  "width: 200, height: 80"
                ]
              },
              {
                "name": "background",
                "args": [
                  "Color.orange.opacity(0.3"
                ]
              },
              {
                "name": "cornerRadius",
                "args": [
                  "8"
                ]
              }
            ],
            "children": []
          },
          {
            "type": "Text",
            "props": {
              "content": "Box"
            },
            "modifiers": [
              {
                "name": "frame",
                "args": [
                  "width: 200, height: 80"
                ]
              },
              {
                "name": "background",
                "args": [
                  "Color.orange.opacity(0.3"
                ]
              },
              {
                "name": "cornerRadius",
                "args": [
                  "8"
                ]
              }
            ],
            "children": []
          },
          {
            "type": "Color",
            "props": {
              "name": "orange"
            },
            "modifiers": [
              {
                "name": "opacity",
                "args": [
                  "0.3"
                ]
              }
            ],
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
        VStack(spacing: 24) {
            Text("Title")
                .font(.title)
                .bold()
            Text("Subtitle")
                .font(.system(size: 18))
                .foregroundColor(.gray)
            Text("Box")
                .frame(width: 200, height: 80)
                .background(Color.orange.opacity(0.3))
                .cornerRadius(8)
        }
        .padding()
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
    <div style={ display: 'flex', flexDirection: 'column', gap: 24, padding: 16 }>
      <span style={ fontSize: 18, color: '#808080', width: 200, height: 80, backgroundColor: 'var(--bg-orange.opacity(0.3, #eee)', borderRadius: 8 }>Title</span>
      <span style={ width: 200, height: 80, backgroundColor: 'var(--bg-orange.opacity(0.3, #eee)', borderRadius: 8 }>Box</span>
      <div style={{ position: 'absolute', inset: 0, backgroundColor: '#FFA500', zIndex: 0 }} />
    </div>
  </div>
```


---
## Шаг 3: RAG Retriever

| Параметр | Значение |
|----------|----------|
| Число подобранных примеров | 0 |
| ID примеров | — |
| Длина RAG-контекста (символов) | 0 |


---
## Шаг 4: LLM Generator (OpenRouter)

| Параметр | Значение |
|----------|----------|
| Модель | — |
| Длина промпта (символов) | 0 |
| Длина ответа (символов) | 0 |
| Сгенерировано файлов | 0 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|

---
## Шаг 5: Validator

| Параметр | Значение |
|----------|----------|
| Успех | Нет |
| Сборка (npm run build) | Ошибка |

---
## Шаг 6: Repair Loop

| Параметр | Значение |
|----------|----------|
| Всего итераций исправления | 0 |
| Лимит достигнут | Нет |


---
*Конец отчёта*