# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | datasets/S1_layout/text_modifiers.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B0/S1_layout_text_modifiers |
| Начало | 2026-03-14T18:21:21.072Z |
| Окончание | 2026-03-14T18:21:38.147Z |
| Успех | Да |
| Вызовов LLM | 1 |
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
| Длина RAG-контекста (символов) | 22 |


---
## Шаг 4: LLM Generator (OpenRouter)

| Параметр | Значение |
|----------|----------|
| Модель | — |
| Длина промпта (символов) | 1433 |
| Длина ответа (символов) | 2178 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 334 |
| typescript | 135 |
| tsconfig.json | 336 |
| index.html | 298 |
| typescript | 205 |
| typescript | 154 |
| typescript | 492 |

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