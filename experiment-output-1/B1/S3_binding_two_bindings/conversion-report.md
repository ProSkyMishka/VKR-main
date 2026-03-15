# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | datasets/S3_binding/two_bindings.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B1/S3_binding_two_bindings |
| Начало | 2026-03-14T18:23:06.122Z |
| Окончание | 2026-03-14T18:23:06.742Z |
| Успех | Нет |
| Вызовов LLM | 1 |
| Конфигурация эксперимента | B1 |
| Ошибки | LLM generation: OpenRouter API error 402: {"error":{"message":"This request requires more credits, or fewer max_tokens. You requested up to 8192 tokens, but can only afford 7527. To increase, visit https://openrouter.ai/settings/credits and upgrade to a paid account","code":402,"metadata":{"provider_name":null}},"user_id":"user_3ACTuIpdW2g1KbGLjUNXYh4CxGO"} |

---
## Шаг 1: SwiftUI Extractor (парсинг → UI-IR)

| Параметр | Значение |
|----------|----------|
| Количество View | 2 |
| Имена View | FormView, ContentView |
| Entry View | ContentView |

### UI-IR (полная структура)

```json
{
  "views": [
    {
      "name": "FormView",
      "params": [],
      "body": {
        "type": "VStack",
        "props": {},
        "modifiers": [
          {
            "name": "padding"
          }
        ],
        "children": []
      },
      "state": {
        "stateVars": [],
        "bindings": [
          {
            "name": "a",
            "type": "String"
          },
          {
            "name": "b",
            "type": "String"
          }
        ]
      }
    },
    {
      "name": "ContentView",
      "params": [],
      "body": {
        "type": "Custom",
        "props": {
          "raw": "FormView(a: $a, b: $b)"
        },
        "modifiers": [],
        "children": []
      },
      "state": {
        "stateVars": [
          {
            "name": "a",
            "type": "String",
            "initial": "\"\""
          },
          {
            "name": "b",
            "type": "String",
            "initial": "\"\""
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
struct FormView: View {
    @Binding var a: String
    @Binding var b: String
    var body: some View {
        VStack {
            TextField("A", text: $a)
            TextField("B", text: $b)
        }.padding()
    }
}
struct ContentView: View {
    @State private var a = ""
    @State private var b = ""
    var body: some View { FormView(a: $a, b: $b) }
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
| ContentView | body | Custom/unparsed body |

### Скелет компонентов (кратко)

#### FormView

**Props interface:**
```ts
interface FormViewProps {
  a: string;
  onAChange?: (value: string) => void;
  b: string;
  onBChange?: (value: string) => void;
}
```

**State hooks:**
- нет

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={ display: 'flex', flexDirection: 'column', gap: 8, padding: 16 }>

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
- `const [a, setA] = useState<string>("");`
- `const [b, setB] = useState<string>("");`

**JSX skeleton (фрагмент):**
```tsx
    {/* Custom: FormView(a: $a, b: $b) */}
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