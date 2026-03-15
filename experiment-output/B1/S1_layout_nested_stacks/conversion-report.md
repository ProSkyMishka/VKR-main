# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S1_layout/nested_stacks.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B1/S1_layout_nested_stacks |
| Начало | 2026-03-14T21:51:14.332Z |
| Окончание | 2026-03-14T21:51:24.558Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 870 |
| Токенов (completion) | 888 |
| Токенов (всего) | 1758 |
| Конфигурация эксперимента | B1 |

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
          "spacing": 20
        },
        "modifiers": [
          {
            "name": "padding",
            "args": [
              ".horizontal, 40"
            ]
          },
          {
            "name": "padding",
            "args": [
              ".vertical, 20"
            ]
          }
        ],
        "children": [
          {
            "type": "Text",
            "props": {
              "content": "A"
            },
            "modifiers": [],
            "children": []
          },
          {
            "type": "Text",
            "props": {
              "content": "B"
            },
            "modifiers": [],
            "children": []
          },
          {
            "type": "Text",
            "props": {
              "content": "C"
            },
            "modifiers": [],
            "children": []
          },
          {
            "type": "Text",
            "props": {
              "content": "D"
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
        VStack(spacing: 20) {
            HStack {
                Text("A")
                Text("B")
            }
            HStack {
                Text("C")
                Text("D")
            }
        }
        .padding(.horizontal, 40)
        .padding(.vertical, 20)
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
    <div style={ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center', padding: 16 }>
      <span>A</span>
      <span>B</span>
      <span>C</span>
      <span>D</span>
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
| Длина промпта (символов) | 3033 |
| Длина ответа (символов) | 2381 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 436 |
| vite.config.ts | 161 |
| tsconfig.json | 504 |
| index.html | 302 |
| src/main.tsx | 224 |
| src/App.tsx | 149 |
| src/views/ContentView.tsx | 440 |

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