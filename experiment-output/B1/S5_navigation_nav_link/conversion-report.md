# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S5_navigation/nav_link.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B1/S5_navigation_nav_link |
| Начало | 2026-03-14T22:10:13.148Z |
| Окончание | 2026-03-14T22:10:24.874Z |
| Успех | Нет |
| Вызовов LLM | 1 |
| Токенов (prompt) | 1092 |
| Токенов (completion) | 1316 |
| Токенов (всего) | 2408 |
| Конфигурация эксперимента | B1 |
| Ошибки | npm error code ERESOLVE npm error ERESOLVE could not resolve npm error npm error While resolving: react-scripts@5.0.1 npm error Found: typescript@5.9.3 npm error node_modules/typescript npm error   dev typescript@"^5.3.0" from the root project npm error npm error Could not resolve dependency: npm error peerOptional typescript@"^3.2.1 \|\| ^4" from react-scripts@5.0.1 npm error node_modules/react-scripts npm error   react-scripts@"5.0.1" from the root project npm error npm error Conflicting peer dependency: typescript@4.9.5 npm error node_modules/typescript npm error   peerOptional typescript@"^3.2.1 \|\| ^4" from react-scripts@5.0.1 npm error   node_modules/react-scripts npm error     react-scripts@"5.0.1" from the root project npm error npm error Fix the upstream dependency conflict, or retry npm error this command with --force or --legacy-peer-deps npm error to accept an incorrect (and potentially broken) dependency resolution. npm error npm error npm error For a full report see: npm error /Users/mprozorskiy/.npm/_logs/2026-03-14T22_10_23_635Z-eresolve-report.txt npm error A complete log of this run can be found in: /Users/mprozorskiy/.npm/_logs/2026-03-14T22_10_23_635Z-debug-0.log  |

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
| Число подобранных примеров | 0 |
| ID примеров | — |
| Длина RAG-контекста (символов) | 22 |


---
## Шаг 4: LLM Generator (OpenRouter)

| Параметр | Значение |
|----------|----------|
| Модель | — |
| Длина промпта (символов) | 3897 |
| Длина ответа (символов) | 3593 |
| Сгенерировано файлов | 8 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 1066 |
| vite.config.ts | 162 |
| tsconfig.json | 558 |
| index.html | 302 |
| src/main.tsx | 210 |
| src/App.tsx | 146 |
| src/views/ContentView.tsx | 638 |
| src/views/DetailView.tsx | 312 |

---
## Шаг 5: Validator

| Параметр | Значение |
|----------|----------|
| Успех | Нет |
| Сборка (npm run build) | Ошибка |

### Вывод сборки (ошибка)

```
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-scripts@5.0.1
npm error Found: typescript@5.9.3
npm error node_modules/typescript
npm error   dev typescript@"^5.3.0" from the root project
npm error
npm error Could not resolve dependency:
npm error peerOptional typescript@"^3.2.1 || ^4" from react-scripts@5.0.1
npm error node_modules/react-scripts
npm error   react-scripts@"5.0.1" from the root project
npm error
npm error Conflicting peer dependency: typescript@4.9.5
npm error node_modules/typescript
npm error   peerOptional typescript@"^3.2.1 || ^4" from react-scripts@5.0.1
npm error   node_modules/react-scripts
npm error     react-scripts@"5.0.1" from the root project
npm error
npm error Fix the upstream dependency conflict, or retry
npm error this command with --force or --legacy-peer-deps
npm error to accept an incorrect (and potentially broken) dependency resolution.
npm error
npm error
npm error For a full report see:
npm error /Users/mprozorskiy/.npm/_logs/2026-03-14T22_10_23_635Z-eresolve-report.txt
npm error A complete log of this run can be found in: /Users/mprozorskiy/.npm/_logs/2026-03-14T22_10_23_635Z-debug-0.log

```

---
## Шаг 6: Repair Loop

| Параметр | Значение |
|----------|----------|
| Всего итераций исправления | 0 |
| Лимит достигнут | Нет |


---
*Конец отчёта*