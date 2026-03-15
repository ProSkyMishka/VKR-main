# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S5_navigation/nav_multiple.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B0/S5_navigation_nav_multiple |
| Начало | 2026-03-14T21:42:59.149Z |
| Окончание | 2026-03-14T21:43:10.081Z |
| Успех | Нет |
| Вызовов LLM | 1 |
| Токенов (prompt) | 460 |
| Токенов (completion) | 1083 |
| Токенов (всего) | 1543 |
| Конфигурация эксперимента | B0 |
| Ошибки | > swiftui-to-vite-react@0.0.0 build > tsc && vite build  src/views/ContentView.tsx(8,8): error TS2304: Cannot find name 'VStack'. src/views/ContentView.tsx(15,9): error TS2304: Cannot find name 'VStack'. |

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
| Число подобранных примеров | 0 |
| ID примеров | — |
| Длина RAG-контекста (символов) | 22 |


---
## Шаг 4: LLM Generator (OpenRouter)

| Параметр | Значение |
|----------|----------|
| Модель | — |
| Длина промпта (символов) | 1510 |
| Длина ответа (символов) | 3035 |
| Сгенерировано файлов | 9 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 440 |
| vite.config.ts | 132 |
| tsconfig.json | 504 |
| index.html | 322 |
| src/main.tsx | 209 |
| src/App.tsx | 136 |
| src/views/ContentView.tsx | 877 |
| src/views/PageA.tsx | 96 |
| src/views/PageB.tsx | 96 |

---
## Шаг 5: Validator

| Параметр | Значение |
|----------|----------|
| Успех | Нет |
| Сборка (npm run build) | Ошибка |

### Вывод сборки (ошибка)

```
> swiftui-to-vite-react@0.0.0 build
> tsc && vite build

src/views/ContentView.tsx(8,8): error TS2304: Cannot find name 'VStack'.
src/views/ContentView.tsx(15,9): error TS2304: Cannot find name 'VStack'.
```

---
## Шаг 6: Repair Loop

| Параметр | Значение |
|----------|----------|
| Всего итераций исправления | 0 |
| Лимит достигнут | Нет |


---
*Конец отчёта*