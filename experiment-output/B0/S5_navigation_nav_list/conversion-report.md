# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S5_navigation/nav_list.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B0/S5_navigation_nav_list |
| Начало | 2026-03-14T21:42:30.458Z |
| Окончание | 2026-03-14T21:42:41.565Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 383 |
| Токенов (completion) | 954 |
| Токенов (всего) | 1337 |
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
            "type": "Text",
            "props": {
              "content": "Row 1"
            },
            "modifiers": [
              {
                "name": "navigationTitle",
                "args": [
                  "\"List\""
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
            List { Text("Row 1"); Text("Row 2") }
                .navigationTitle("List")
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
      <span>Row 1</span>
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
| Длина промпта (символов) | 1265 |
| Длина ответа (символов) | 2619 |
| Сгенерировано файлов | 8 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 435 |
| vite.config.ts | 132 |
| tsconfig.json | 504 |
| index.html | 302 |
| src/main.tsx | 223 |
| src/App.tsx | 136 |
| src/views/ContentView.tsx | 302 |
| src/views/ContentViewComponents.tsx | 375 |

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