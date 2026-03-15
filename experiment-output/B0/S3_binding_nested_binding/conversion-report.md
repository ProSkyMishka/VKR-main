# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S3_binding/nested_binding.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B0/S3_binding_nested_binding |
| Начало | 2026-03-14T21:31:01.957Z |
| Окончание | 2026-03-14T21:31:14.827Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 472 |
| Токенов (completion) | 1066 |
| Токенов (всего) | 1538 |
| Конфигурация эксперимента | B0 |

---
## Шаг 1: SwiftUI Extractor (парсинг → UI-IR)

| Параметр | Значение |
|----------|----------|
| Количество View | 3 |
| Имена View | InnerView, MiddleView, ContentView |
| Entry View | ContentView |

### UI-IR (полная структура)

```json
{
  "views": [
    {
      "name": "InnerView",
      "params": [],
      "body": {
        "type": "Button",
        "props": {},
        "modifiers": [],
        "children": []
      },
      "state": {
        "stateVars": [],
        "bindings": [
          {
            "name": "x",
            "type": "Int"
          }
        ]
      }
    },
    {
      "name": "MiddleView",
      "params": [],
      "body": {
        "type": "Custom",
        "props": {
          "raw": "InnerView(x: $x)"
        },
        "modifiers": [],
        "children": []
      },
      "state": {
        "stateVars": [],
        "bindings": [
          {
            "name": "x",
            "type": "Int"
          }
        ]
      }
    },
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
              "content": "\\(x)"
            },
            "modifiers": [],
            "children": []
          }
        ]
      },
      "state": {
        "stateVars": [
          {
            "name": "x",
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
struct InnerView: View {
    @Binding var x: Int
    var body: some View { Button("Inner") { x += 1 } }
}
struct MiddleView: View {
    @Binding var x: Int
    var body: some View { InnerView(x: $x) }
}
struct ContentView: View {
    @State private var x = 0
    var body: some View {
        VStack {
            Text("\(x)")
            MiddleView(x: $x)
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
| MiddleView | body | Custom/unparsed body |

### Скелет компонентов (кратко)

#### InnerView

**Props interface:**
```ts
interface InnerViewProps {
  x: number;
  onXChange?: (value: number) => void;
}
```

**State hooks:**
- нет

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <button type="button" onClick={() => {}} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>

    </button>
  </div>
```

#### MiddleView

**Props interface:**
```ts
interface MiddleViewProps {
  x: number;
  onXChange?: (value: number) => void;
}
```

**State hooks:**
- нет

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    {/* Custom: InnerView(x: $x) */}
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
- `const [x, setX] = useState<number>(0);`

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }>
      <span>\(x)</span>
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
| Длина промпта (символов) | 1476 |
| Длина ответа (символов) | 2855 |
| Сгенерировано файлов | 9 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 435 |
| vite.config.ts | 131 |
| tsconfig.json | 504 |
| index.html | 302 |
| src/main.tsx | 223 |
| src/App.tsx | 136 |
| src/views/InnerView.tsx | 300 |
| src/views/MiddleView.tsx | 321 |
| src/views/ContentView.tsx | 271 |

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