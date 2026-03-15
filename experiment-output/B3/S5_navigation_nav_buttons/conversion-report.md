# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S5_navigation/nav_buttons.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B3/S5_navigation_nav_buttons |
| Начало | 2026-03-14T23:09:16.318Z |
| Окончание | 2026-03-14T23:09:27.327Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 1371 |
| Токенов (completion) | 944 |
| Токенов (всего) | 2315 |
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
| Число подобранных примеров | 3 |
| ID примеров | s1-vstack-text, s1-centered-box, vstack-text |
| Длина RAG-контекста (символов) | 1326 |

### Теги по примерам

- **s1-vstack-text**: layout, VStack, Text, S1
- **s1-centered-box**: layout, VStack, Spacer, Text, padding, background, S1
- **vstack-text**: layout, VStack, Text


---
## Шаг 4: LLM Generator (OpenRouter)

| Параметр | Значение |
|----------|----------|
| Модель | — |
| Длина промпта (символов) | 4434 |
| Длина ответа (символов) | 2606 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 431 |
| vite.config.ts | 161 |
| tsconfig.json | 504 |
| index.html | 303 |
| src/main.tsx | 224 |
| src/App.tsx | 120 |
| src/views/ContentView.tsx | 698 |

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