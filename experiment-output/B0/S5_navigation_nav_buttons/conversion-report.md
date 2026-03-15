# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S5_navigation/nav_buttons.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B0/S5_navigation_nav_buttons |
| Начало | 2026-03-14T21:41:25.761Z |
| Окончание | 2026-03-14T21:41:38.933Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 409 |
| Токенов (completion) | 1089 |
| Токенов (всего) | 1498 |
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
      <div style={ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }>
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
| Длина RAG-контекста (символов) | 22 |


---
## Шаг 4: LLM Generator (OpenRouter)

| Параметр | Значение |
|----------|----------|
| Модель | — |
| Длина промпта (символов) | 1380 |
| Длина ответа (символов) | 3098 |
| Сгенерировано файлов | 8 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 440 |
| vite.config.ts | 131 |
| tsconfig.json | 504 |
| index.html | 322 |
| src/main.tsx | 223 |
| src/App.tsx | 136 |
| src/views/ContentView.tsx | 454 |
| src/views/ContentViewComponents.tsx | 678 |

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