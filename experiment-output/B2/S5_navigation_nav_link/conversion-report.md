# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S5_navigation/nav_link.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B2/S5_navigation_nav_link |
| Начало | 2026-03-14T22:39:54.961Z |
| Окончание | 2026-03-14T22:40:06.805Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 1525 |
| Токенов (completion) | 1042 |
| Токенов (всего) | 2567 |
| Конфигурация эксперимента | B2 |

---
## Шаг 1: SwiftUI Extractor (парсинг → UI-IR)

| Параметр | Значение |
|----------|----------|
| Количество View | 2 |
| Имена View | DetailView, ContentView |
| Entry View | ContentView |

### UI-IR (полная структура)

```json
{
  "views": [
    {
      "name": "DetailView",
      "params": [],
      "body": {
        "type": "Text",
        "props": {
          "content": "Detail"
        },
        "modifiers": [],
        "children": []
      },
      "state": {
        "stateVars": [],
        "bindings": []
      }
    },
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
                  "\"Root\""
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

struct DetailView: View {
    var body: some View {
        Text("Detail")
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                NavigationLink("Go to Detail") {
                    DetailView()
                }
            }
            .navigationTitle("Root")
        }
    }
}

```

---
## Шаг 2: Rule Mapper (UI-IR → скелет + unresolved)

| Параметр | Значение |
|----------|----------|
| Компонентов в скелете | 2 |
| Неразрешённых фрагментов | 1 |
| Entry (для App.tsx) | ContentView |

### Список unresolved

| View | Расположение | Описание |
|------|--------------|----------|
| ContentView | body.children[0] | Unresolved modifier: .navigationTitle |

### Скелет компонентов (кратко)

#### DetailView

**Props interface:**
```ts
interface DetailViewProps {
  // no props
}
```

**State hooks:**
- нет

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <span>Detail</span>
  </div>
```

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

      </a>
    </div>
  </div>
```


---
## Шаг 3: RAG Retriever

| Параметр | Значение |
|----------|----------|
| Число подобранных примеров | 3 |
| ID примеров | s1-vstack-text, s1-hstack, s1-zstack-color |
| Длина RAG-контекста (символов) | 1110 |

### Теги по примерам

- **s1-vstack-text**: layout, VStack, Text, S1
- **s1-hstack**: layout, HStack, Text, S1
- **s1-zstack-color**: layout, ZStack, Color, Text, S1


---
## Шаг 4: LLM Generator (OpenRouter)

| Параметр | Значение |
|----------|----------|
| Модель | — |
| Длина промпта (символов) | 4985 |
| Длина ответа (символов) | 2922 |
| Сгенерировано файлов | 8 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 436 |
| vite.config.ts | 161 |
| tsconfig.json | 504 |
| index.html | 302 |
| src/main.tsx | 224 |
| src/App.tsx | 146 |
| src/views/ContentView.tsx | 638 |
| src/views/DetailView.tsx | 312 |

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