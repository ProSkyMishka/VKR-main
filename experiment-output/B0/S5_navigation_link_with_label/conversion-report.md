# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S5_navigation/link_with_label.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B0/S5_navigation_link_with_label |
| Начало | 2026-03-14T21:40:54.208Z |
| Окончание | 2026-03-14T21:41:11.555Z |
| Успех | Нет |
| Вызовов LLM | 1 |
| Токенов (prompt) | 389 |
| Токенов (completion) | 846 |
| Токенов (всего) | 1235 |
| Конфигурация эксперимента | B0 |
| Ошибки | > swiftui-to-vite-react@0.0.0 build > tsc && vite build  src/views/ContentView.tsx(2,54): error TS2307: Cannot find module 'react-native-web' or its corresponding type declarations. |

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
              "content": "Dest"
            },
            "modifiers": [
              {
                "name": "navigationTitle",
                "args": [
                  "\"Link\""
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
            NavigationLink(destination: Text("Dest")) {
                Text("Go")
            }
            .navigationTitle("Link")
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
      <span>Dest</span>
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
| Длина промпта (символов) | 1308 |
| Длина ответа (символов) | 2301 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 441 |
| vite.config.ts | 132 |
| tsconfig.json | 504 |
| index.html | 322 |
| src/main.tsx | 223 |
| src/App.tsx | 136 |
| src/views/ContentView.tsx | 378 |

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

src/views/ContentView.tsx(2,54): error TS2307: Cannot find module 'react-native-web' or its corresponding type declarations.
```

---
## Шаг 6: Repair Loop

| Параметр | Значение |
|----------|----------|
| Всего итераций исправления | 0 |
| Лимит достигнут | Нет |


---
*Конец отчёта*