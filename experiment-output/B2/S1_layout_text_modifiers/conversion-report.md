# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S1_layout/text_modifiers.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B2/S1_layout_text_modifiers |
| Начало | 2026-03-14T22:21:22.611Z |
| Окончание | 2026-03-14T22:21:34.706Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 1643 |
| Токенов (completion) | 1089 |
| Токенов (всего) | 2732 |
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
    <div style={ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center', padding: 16 }>
      <div style={ width: 200, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-orange.opacity(0.3, #eee)', borderRadius: 8 }>
        <span style={ fontSize: 18, color: '#808080' }>Title</span>
      </div>
      <div style={ width: 200, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-orange.opacity(0.3, #eee)', borderRadius: 8 }>
        <span style={}>Box</span>
      </div>
      <div style={{ position: 'absolute', inset: 0, backgroundColor: '#FFA500', zIndex: 0 }} />
   
// ...
```


---
## Шаг 3: RAG Retriever

| Параметр | Значение |
|----------|----------|
| Число подобранных примеров | 3 |
| ID примеров | s1-centered-box, s1-vstack-text, s1-zstack-color |
| Длина RAG-контекста (символов) | 1553 |

### Теги по примерам

- **s1-centered-box**: layout, VStack, Spacer, Text, padding, background, S1
- **s1-vstack-text**: layout, VStack, Text, S1
- **s1-zstack-color**: layout, ZStack, Color, Text, S1


---
## Шаг 4: LLM Generator (OpenRouter)

| Параметр | Значение |
|----------|----------|
| Модель | — |
| Длина промпта (символов) | 5196 |
| Длина ответа (символов) | 3078 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 430 |
| vite.config.ts | 161 |
| tsconfig.json | 504 |
| index.html | 303 |
| src/main.tsx | 223 |
| src/App.tsx | 149 |
| src/views/ContentView.tsx | 1143 |

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