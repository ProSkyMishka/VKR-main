# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S5_navigation/nav_three_links.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B1/S5_navigation_nav_three_links |
| Начало | 2026-03-14T22:11:43.369Z |
| Окончание | 2026-03-14T22:11:55.444Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 891 |
| Токенов (completion) | 934 |
| Токенов (всего) | 1825 |
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
        "type": "NavigationView",
        "props": {},
        "modifiers": [],
        "children": [
          {
            "type": "NavigationLink",
            "props": {},
            "modifiers": [
              {
                "name": "navigationTitle",
                "args": [
                  "\"Menu\""
                ]
              }
            ],
            "children": [
              {
                "type": "Text",
                "props": {
                  "content": "Page 1"
                },
                "modifiers": [],
                "children": []
              }
            ]
          },
          {
            "type": "Text",
            "props": {
              "content": "Page 2"
            },
            "modifiers": [
              {
                "name": "navigationTitle",
                "args": [
                  "\"Menu\""
                ]
              }
            ],
            "children": []
          },
          {
            "type": "Text",
            "props": {
              "content": "Page 3"
            },
            "modifiers": [
              {
                "name": "navigationTitle",
                "args": [
                  "\"Menu\""
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
        NavigationView {
            VStack {
                NavigationLink("One") { Text("Page 1") }
                NavigationLink("Two") { Text("Page 2") }
                NavigationLink("Three") { Text("Page 3") }
            }
            .navigationTitle("Menu")
        }
    }
}

```

---
## Шаг 2: Rule Mapper (UI-IR → скелет + unresolved)

| Параметр | Значение |
|----------|----------|
| Компонентов в скелете | 1 |
| Неразрешённых фрагментов | 3 |
| Entry (для App.tsx) | ContentView |

### Список unresolved

| View | Расположение | Описание |
|------|--------------|----------|
| ContentView | body.children[0] | Unresolved modifier: .navigationTitle |
| ContentView | body.children[1] | Unresolved modifier: .navigationTitle |
| ContentView | body.children[2] | Unresolved modifier: .navigationTitle |

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
      <a href="#">
        <span>Page 1</span>
      </a>
      <span>Page 2</span>
      <span>Page 3</span>
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
| Длина промпта (символов) | 3151 |
| Длина ответа (символов) | 2553 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 435 |
| vite.config.ts | 161 |
| tsconfig.json | 504 |
| index.html | 302 |
| src/main.tsx | 223 |
| src/App.tsx | 120 |
| src/views/ContentView.tsx | 643 |

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