# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S2_state_events/multiple_state.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B0/S2_state_events_multiple_state |
| Начало | 2026-03-14T21:26:02.636Z |
| Окончание | 2026-03-14T21:26:13.364Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 448 |
| Токенов (completion) | 915 |
| Токенов (всего) | 1363 |
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
        "type": "VStack",
        "props": {},
        "modifiers": [],
        "children": [
          {
            "type": "Text",
            "props": {
              "content": "a: \\(a)"
            },
            "modifiers": [
              {
                "name": "toggle"
              }
            ],
            "children": []
          },
          {
            "type": "Text",
            "props": {
              "content": "b: \\(b)"
            },
            "modifiers": [
              {
                "name": "toggle"
              }
            ],
            "children": []
          },
          {
            "type": "Button",
            "props": {
              "label": "Update"
            },
            "modifiers": [],
            "children": []
          }
        ]
      },
      "state": {
        "stateVars": [
          {
            "name": "a",
            "type": "Int",
            "initial": "0"
          },
          {
            "name": "b",
            "type": "String",
            "initial": "\"\""
          },
          {
            "name": "flag",
            "type": "Bool",
            "initial": "false"
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
    @State private var a = 0
    @State private var b = ""
    @State private var flag = false

    var body: some View {
        VStack {
            Text("a: \(a)")
            Text("b: \(b)")
            Text(flag ? "Yes" : "No")
            Button("Update") {
                a += 1
                b = "\(a)"
                flag.toggle()
            }
        }
    }
}

```

---
## Шаг 2: Rule Mapper (UI-IR → скелет + unresolved)

| Параметр | Значение |
|----------|----------|
| Компонентов в скелете | 1 |
| Неразрешённых фрагментов | 2 |
| Entry (для App.tsx) | ContentView |

### Список unresolved

| View | Расположение | Описание |
|------|--------------|----------|
| ContentView | body.children[0] | Unresolved modifier: .toggle |
| ContentView | body.children[1] | Unresolved modifier: .toggle |

### Скелет компонентов (кратко)

#### ContentView

**Props interface:**
```ts
interface ContentViewProps {
  // no props
}
```

**State hooks:**
- `const [a, setA] = useState<number>(0);`
- `const [b, setB] = useState<string>("");`
- `const [flag, setFlag] = useState<boolean>(false);`

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }>
      <span>a: \(a)</span>
      <span>b: \(b)</span>
      <button type="button" onClick={() => {}} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>

      </button>
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
| Длина промпта (символов) | 1482 |
| Длина ответа (символов) | 2398 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 436 |
| vite.config.ts | 131 |
| tsconfig.json | 504 |
| index.html | 302 |
| src/main.tsx | 223 |
| src/App.tsx | 169 |
| src/views/ContentView.tsx | 468 |

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