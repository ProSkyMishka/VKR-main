# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | datasets/S5_navigation/nav_buttons.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B2/S5_navigation_nav_buttons |
| Начало | 2026-03-14T18:24:03.806Z |
| Окончание | 2026-03-14T18:24:04.161Z |
| Успех | Нет |
| Вызовов LLM | 1 |
| Конфигурация эксперимента | B2 |
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
        "type": "NavigationView",
        "props": {},
        "modifiers": [],
        "children": [
          {
            "type": "VStack",
            "props": {
              "spacing": 16
            },
            "modifiers": [
              {
                "name": "navigationTitle",
                "args": [
                  "\"Buttons\""
                ]
              }
            ],
            "children": [
              {
                "type": "NavigationLink",
                "props": {},
                "modifiers": [],
                "children": [
                  {
                    "type": "Text",
                    "props": {
                      "content": "First"
                    },
                    "modifiers": [],
                    "children": []
                  }
                ]
              },
              {
                "type": "NavigationLink",
                "props": {},
                "modifiers": [],
                "children": [
                  {
                    "type": "Text",
                    "props": {
                      "content": "Second"
                    },
                    "modifiers": [],
                    "children": []
                  }
                ]
              }
            ]
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
        NavigationView {
            VStack(spacing: 16) {
                NavigationLink("First") { Text("First") }
                NavigationLink("Second") { Text("Second") }
            }
            .navigationTitle("Buttons")
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
| ContentView | body.children[0] | Unresolved modifier: .navigationTitle |

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
    <div>
      <div style={ display: 'flex', flexDirection: 'column', gap: 16 }>
        <a href="#">
          <span>First</span>
        </a>
        <a href="#">
          <span>Second</span>
        </a>
      </div>
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