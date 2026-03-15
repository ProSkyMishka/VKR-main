# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S1_layout/hstack_colors.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B2/S1_layout_hstack_colors |
| Начало | 2026-03-14T22:18:27.440Z |
| Окончание | 2026-03-14T22:18:38.088Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 1121 |
| Токенов (completion) | 916 |
| Токенов (всего) | 2037 |
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
          "spacing": 12
        },
        "modifiers": [
          {
            "name": "font",
            "args": [
              ".title"
            ]
          }
        ],
        "children": [
          {
            "type": "Text",
            "props": {
              "content": "R"
            },
            "modifiers": [
              {
                "name": "foregroundColor",
                "args": [
                  ".red"
                ]
              },
              {
                "name": "foregroundColor",
                "args": [
                  ".green"
                ]
              },
              {
                "name": "foregroundColor",
                "args": [
                  ".blue"
                ]
              }
            ],
            "children": []
          },
          {
            "type": "Text",
            "props": {
              "content": "B"
            },
            "modifiers": [
              {
                "name": "foregroundColor",
                "args": [
                  ".blue"
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
        HStack(spacing: 12) {
            Text("R").foregroundColor(.red)
            Text("G").foregroundColor(.green)
            Text("B").foregroundColor(.blue)
        }.font(.title)
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
    <div style={ display: 'flex', flexDirection: 'row', gap: 12, alignItems: 'center' }>
      <span style={ color: '#0000FF' }>R</span>
      <span style={ color: '#0000FF' }>B</span>
    </div>
  </div>
```


---
## Шаг 3: RAG Retriever

| Параметр | Значение |
|----------|----------|
| Число подобранных примеров | 3 |
| ID примеров | s1-hstack, s1-font, s1-foregroundColor |
| Длина RAG-контекста (символов) | 691 |

### Теги по примерам

- **s1-hstack**: layout, HStack, Text, S1
- **s1-font**: layout, font, Text, S1
- **s1-foregroundColor**: layout, foregroundColor, Text, S1


---
## Шаг 4: LLM Generator (OpenRouter)

| Параметр | Значение |
|----------|----------|
| Модель | — |
| Длина промпта (символов) | 3605 |
| Длина ответа (символов) | 2460 |
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
| src/views/ContentView.tsx | 552 |

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