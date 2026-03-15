# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S3_binding/three_way.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B1/S3_binding_three_way |
| Начало | 2026-03-14T22:02:51.818Z |
| Окончание | 2026-03-14T22:03:03.919Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 1379 |
| Токенов (completion) | 1209 |
| Токенов (всего) | 2588 |
| Конфигурация эксперимента | B1 |

---
## Шаг 1: SwiftUI Extractor (парсинг → UI-IR)

| Параметр | Значение |
|----------|----------|
| Количество View | 2 |
| Имена View | ABView, ContentView |
| Entry View | ContentView |

### UI-IR (полная структура)

```json
{
  "views": [
    {
      "name": "ABView",
      "params": [],
      "body": {
        "type": "HStack",
        "props": {},
        "modifiers": [],
        "children": [
          {
            "type": "Button",
            "props": {
              "label": "A"
            },
            "modifiers": [],
            "children": []
          },
          {
            "type": "Button",
            "props": {
              "label": "B"
            },
            "modifiers": [],
            "children": []
          }
        ]
      },
      "state": {
        "stateVars": [],
        "bindings": [
          {
            "name": "a",
            "type": "Int"
          },
          {
            "name": "b",
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
              "content": "a=\\(a) b=\\(b)"
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
struct ABView: View {
    @Binding var a: Int
    @Binding var b: Int
    var body: some View {
        HStack {
            Button("A") { a += 1 }
            Button("B") { b += 1 }
        }
    }
}
struct ContentView: View {
    @State private var a = 0
    @State private var b = 0
    var body: some View {
        VStack {
            Text("a=\(a) b=\(b)")
            ABView(a: $a, b: $b)
        }
    }
}

```

---
## Шаг 2: Rule Mapper (UI-IR → скелет + unresolved)

| Параметр | Значение |
|----------|----------|
| Компонентов в скелете | 2 |
| Неразрешённых фрагментов | 0 |
| Entry (для App.tsx) | ContentView |

### Скелет компонентов (кратко)

#### ABView

**Props interface:**
```ts
interface ABViewProps {
  a: number;
  onAChange?: (value: number) => void;
  b: number;
  onBChange?: (value: number) => void;
}
```

**State hooks:**
- нет

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={ display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'center' }>
      <button type="button" onClick={() => {}} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>

      </button>
      <button type="button" onClick={() => {}} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>

      </button>
    </div>
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
- `const [a, setA] = useState<number>(0);`
- `const [b, setB] = useState<number>(0);`

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }>
      <span>a=\(a) b=\(b)</span>
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
| Длина промпта (символов) | 4553 |
| Длина ответа (символов) | 3282 |
| Сгенерировано файлов | 8 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 455 |
| vite.config.ts | 132 |
| tsconfig.json | 504 |
| index.html | 302 |
| src/main.tsx | 224 |
| src/App.tsx | 149 |
| src/views/ContentView.tsx | 547 |
| src/views/ABView.tsx | 774 |

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