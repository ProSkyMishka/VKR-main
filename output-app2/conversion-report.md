# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | fixtures/sample2.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/output-app2 |
| Начало | 2026-02-26T19:46:00.612Z |
| Окончание | 2026-02-26T19:46:18.060Z |
| Успех | Да |

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
        "type": "ZStack",
        "props": {},
        "modifiers": [],
        "children": [
          {
            "type": "VStack",
            "props": {
              "spacing": 12
            },
            "modifiers": [
              {
                "name": "padding"
              }
            ],
            "children": [
              {
                "type": "Text",
                "props": {
                  "content": "Hello, SwiftUI!"
                },
                "modifiers": [],
                "children": []
              },
              {
                "type": "Button",
                "props": {
                  "label": "Count: \\(count)"
                },
                "modifiers": [],
                "children": []
              }
            ]
          }
        ]
      },
      "state": {
        "stateVars": [
          {
            "name": "count",
            "type": "Int",
            "initial": "0"
          }
        ],
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
    @State private var count = 0

    var body: some View {
        ZStack {
            Color.brown.ignoresSafeArea()

            VStack(spacing: 12) {
                Text("Hello, SwiftUI!")
                Button("Count: \(count)") {
                    count += 1
                }
            }
            .padding()
        }
    }
}

```

---
## Шаг 2: Rule Mapper (UI-IR → скелет + unresolved)

| Параметр | Значение |
|----------|----------|
| Компонентов в скелете | 1 |
| Неразрешённых фрагментов | 0 |
| Entry (для App.tsx) | ContentView |

### Скелет компонентов (кратко)

#### ContentView

**Props interface:**
```ts
interface ContentViewProps {
  // no props
}
```

**State hooks:**
- `const [count, setCount] = useState<number>(0);`

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ position: 'relative' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <span>Hello, SwiftUI!</span>
        <button type="button" onClick={() => {}} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>

        </button>
      </div>
    </div>
  </div>
```


---
## Шаг 3: RAG Retriever

| Параметр | Значение |
|----------|----------|
| Число подобранных примеров | 3 |
| ID примеров | vstack-text, state-button, binding |
| Длина RAG-контекста (символов) | 908 |

### Теги по примерам

- **vstack-text**: layout, VStack, Text
- **state-button**: state, Button, @State
- **binding**: @Binding, state


---
## Шаг 4: LLM Generator (OpenRouter)

| Параметр | Значение |
|----------|----------|
| Модель | — |
| Длина промпта (символов) | 3161 |
| Длина ответа (символов) | 2373 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 326 |
| vite.config.ts | 135 |
| tsconfig.json | 336 |
| index.html | 298 |
| src/main.tsx | 205 |
| src/views/View5.tsx | 113 |
| src/App.tsx | 765 |

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