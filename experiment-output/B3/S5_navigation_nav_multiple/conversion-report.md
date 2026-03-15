# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S5_navigation/nav_multiple.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B3/S5_navigation_nav_multiple |
| Начало | 2026-03-14T23:10:58.217Z |
| Окончание | 2026-03-14T23:11:16.916Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 1751 |
| Токенов (completion) | 1193 |
| Токенов (всего) | 2944 |
| Конфигурация эксперимента | B3 |

---
## Шаг 1: SwiftUI Extractor (парсинг → UI-IR)

| Параметр | Значение |
|----------|----------|
| Количество View | 3 |
| Имена View | PageA, PageB, ContentView |
| Entry View | ContentView |

### UI-IR (полная структура)

```json
{
  "views": [
    {
      "name": "PageA",
      "params": [],
      "body": {
        "type": "Text",
        "props": {
          "content": "Page A"
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
      "name": "PageB",
      "params": [],
      "body": {
        "type": "Text",
        "props": {
          "content": "Page B"
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
            "type": "VStack",
            "props": {
              "spacing": 20
            },
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
                "type": "NavigationLink",
                "props": {},
                "modifiers": [],
                "children": []
              },
              {
                "type": "NavigationLink",
                "props": {},
                "modifiers": [],
                "children": []
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

struct PageA: View {
    var body: some View { Text("Page A") }
}

struct PageB: View {
    var body: some View { Text("Page B") }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack(spacing: 20) {
                NavigationLink("To A") { PageA() }
                NavigationLink("To B") { PageB() }
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
| Компонентов в скелете | 3 |
| Неразрешённых фрагментов | 1 |
| Entry (для App.tsx) | ContentView |

### Список unresolved

| View | Расположение | Описание |
|------|--------------|----------|
| ContentView | body.children[0] | Unresolved modifier: .navigationTitle |

### Скелет компонентов (кратко)

#### PageA

**Props interface:**
```ts
interface PageAProps {
  // no props
}
```

**State hooks:**
- нет

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <span>Page A</span>
  </div>
```

#### PageB

**Props interface:**
```ts
interface PageBProps {
  // no props
}
```

**State hooks:**
- нет

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <span>Page B</span>
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
      <div style={ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center' }>
        <a href="#">

        </a>
        <a href="#">

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
| Длина промпта (символов) | 5639 |
| Длина ответа (символов) | 3259 |
| Сгенерировано файлов | 9 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 487 |
| vite.config.ts | 161 |
| tsconfig.json | 504 |
| index.html | 302 |
| src/main.tsx | 223 |
| src/App.tsx | 149 |
| src/views/ContentView.tsx | 750 |
| src/views/PageA.tsx | 230 |
| src/views/PageB.tsx | 230 |

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