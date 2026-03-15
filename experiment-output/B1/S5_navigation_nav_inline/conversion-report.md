# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S5_navigation/nav_inline.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B1/S5_navigation_nav_inline |
| Начало | 2026-03-14T22:09:56.531Z |
| Окончание | 2026-03-14T22:10:09.913Z |
| Успех | Нет |
| Вызовов LLM | 1 |
| Токенов (prompt) | 819 |
| Токенов (completion) | 1175 |
| Токенов (всего) | 1994 |
| Конфигурация эксперимента | B1 |
| Ошибки | npm error code ERESOLVE npm error ERESOLVE could not resolve npm error npm error While resolving: react-scripts@5.0.1 npm error Found: typescript@5.9.3 npm error node_modules/typescript npm error   dev typescript@"^5.3.0" from the root project npm error npm error Could not resolve dependency: npm error peerOptional typescript@"^3.2.1 \|\| ^4" from react-scripts@5.0.1 npm error node_modules/react-scripts npm error   react-scripts@"5.0.1" from the root project npm error npm error Conflicting peer dependency: typescript@4.9.5 npm error node_modules/typescript npm error   peerOptional typescript@"^3.2.1 \|\| ^4" from react-scripts@5.0.1 npm error   node_modules/react-scripts npm error     react-scripts@"5.0.1" from the root project npm error npm error Fix the upstream dependency conflict, or retry npm error this command with --force or --legacy-peer-deps npm error to accept an incorrect (and potentially broken) dependency resolution. npm error npm error npm error For a full report see: npm error /Users/mprozorskiy/.npm/_logs/2026-03-14T22_10_05_830Z-eresolve-report.txt npm error A complete log of this run can be found in: /Users/mprozorskiy/.npm/_logs/2026-03-14T22_10_05_830Z-debug-0.log  |

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
                  "\"Inline\""
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
            List {
                NavigationLink("A") { Text("A") }
                NavigationLink("B") { Text("B") }
            }
            .navigationTitle("Inline")
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
      <a href="#">
        <span>A</span>
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
| Длина промпта (символов) | 2915 |
| Длина ответа (символов) | 3146 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 1066 |
| vite.config.ts | 161 |
| tsconfig.json | 504 |
| index.html | 302 |
| src/main.tsx | 209 |
| src/App.tsx | 146 |
| src/views/ContentView.tsx | 593 |

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
npm error /Users/mprozorskiy/.npm/_logs/2026-03-14T22_10_05_830Z-eresolve-report.txt
npm error A complete log of this run can be found in: /Users/mprozorskiy/.npm/_logs/2026-03-14T22_10_05_830Z-debug-0.log

```

---
## Шаг 6: Repair Loop

| Параметр | Значение |
|----------|----------|
| Всего итераций исправления | 0 |
| Лимит достигнут | Нет |


---
*Конец отчёта*