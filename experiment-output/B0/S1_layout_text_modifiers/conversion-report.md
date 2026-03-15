# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S1_layout/text_modifiers.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B0/S1_layout_text_modifiers |
| Начало | 2026-03-14T21:21:23.433Z |
| Окончание | 2026-03-14T21:21:34.220Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 458 |
| Токенов (completion) | 857 |
| Токенов (всего) | 1315 |
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
| Число подобранных примеров | 0 |
| ID примеров | — |
| Длина RAG-контекста (символов) | 22 |


---
## Шаг 4: LLM Generator (OpenRouter)

| Параметр | Значение |
|----------|----------|
| Модель | — |
| Длина промпта (символов) | 1548 |
| Длина ответа (символов) | 2291 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 436 |
| vite.config.ts | 132 |
| tsconfig.json | 504 |
| index.html | 302 |
| src/main.tsx | 224 |
| src/App.tsx | 136 |
| src/views/ContentView.tsx | 392 |

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