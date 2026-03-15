# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | datasets/S3_binding/child_count.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B1/S3_binding_child_count |
| Начало | 2026-03-14T18:23:02.706Z |
| Окончание | 2026-03-14T18:23:03.069Z |
| Успех | Нет |
| Вызовов LLM | 1 |
| Конфигурация эксперимента | B1 |
| Ошибки | LLM generation: OpenRouter API error 402: {"error":{"message":"This request requires more credits, or fewer max_tokens. You requested up to 8192 tokens, but can only afford 7527. To increase, visit https://openrouter.ai/settings/credits and upgrade to a paid account","code":402,"metadata":{"provider_name":null}},"user_id":"user_3ACTuIpdW2g1KbGLjUNXYh4CxGO"} |

---
## Шаг 1: SwiftUI Extractor (парсинг → UI-IR)

| Параметр | Значение |
|----------|----------|
| Количество View | 2 |
| Имена View | ChildView, ContentView |
| Entry View | ContentView |

### UI-IR (полная структура)

```json
{
  "views": [
    {
      "name": "ChildView",
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
            "name": "count",
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
              "content": "\\(count)"
            },
            "modifiers": [],
            "children": []
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
struct ChildView: View {
    @Binding var count: Int
    var body: some View {
        Button("Child +1") { count += 1 }
    }
}
struct ContentView: View {
    @State private var count = 0
    var body: some View {
        VStack {
            Text("\(count)")
            ChildView(count: $count)
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

#### ChildView

**Props interface:**
```ts
interface ChildViewProps {
  count: number;
  onCountChange?: (value: number) => void;
}
```

**State hooks:**
- нет

**JSX skeleton (фрагмент):**
```tsx
    <button type="button" onClick={() => {}} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>

    </button>
```

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
    <div style={ display: 'flex', flexDirection: 'column', gap: 8 }>
      <span>\(count)</span>
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