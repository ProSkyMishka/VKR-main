# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | datasets/S3_binding/three_way.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B3/S3_binding_three_way |
| Начало | 2026-03-14T18:24:40.230Z |
| Окончание | 2026-03-14T18:24:40.386Z |
| Успех | Нет |
| Вызовов LLM | 1 |
| Конфигурация эксперимента | B3 |
| Ошибки | LLM generation: OpenRouter API error 402: {"error":{"message":"This request requires more credits, or fewer max_tokens. You requested up to 8192 tokens, but can only afford 7527. To increase, visit https://openrouter.ai/settings/credits and upgrade to a paid account","code":402,"metadata":{"provider_name":null}},"user_id":"user_3ACTuIpdW2g1KbGLjUNXYh4CxGO"} |

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
    <div style={ display: 'flex', flexDirection: 'row', gap: 8 }>
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
    <div style={ display: 'flex', flexDirection: 'column', gap: 8 }>
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
| Длина RAG-контекста (символов) | 0 |


---
## Шаг 4: LLM Generator (OpenRouter)

| Параметр | Значение |
|----------|----------|
| Модель | — |
| Длина промпта (символов) | 0 |
| Длина ответа (символов) | 0 |
| Сгенерировано файлов | 0 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|

---
## Шаг 5: Validator

| Параметр | Значение |
|----------|----------|
| Успех | Нет |
| Сборка (npm run build) | Ошибка |

---
## Шаг 6: Repair Loop

| Параметр | Значение |
|----------|----------|
| Всего итераций исправления | 0 |
| Лимит достигнут | Нет |


---
*Конец отчёта*