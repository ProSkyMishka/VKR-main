# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | datasets/S3_binding/binding_int.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B0/S3_binding_binding_int |
| Начало | 2026-03-14T18:22:11.758Z |
| Окончание | 2026-03-14T18:22:12.069Z |
| Успех | Нет |
| Вызовов LLM | 1 |
| Конфигурация эксперимента | B0 |
| Ошибки | LLM generation: OpenRouter API error 402: {"error":{"message":"This request requires more credits, or fewer max_tokens. You requested up to 8192 tokens, but can only afford 7527. To increase, visit https://openrouter.ai/settings/credits and upgrade to a paid account","code":402,"metadata":{"provider_name":null}},"user_id":"user_3ACTuIpdW2g1KbGLjUNXYh4CxGO"} |

---
## Шаг 1: SwiftUI Extractor (парсинг → UI-IR)

| Параметр | Значение |
|----------|----------|
| Количество View | 2 |
| Имена View | StepperView, ContentView |
| Entry View | ContentView |

### UI-IR (полная структура)

```json
{
  "views": [
    {
      "name": "StepperView",
      "params": [],
      "body": {
        "type": "Custom",
        "props": {
          "raw": "Stepper(\"N\", value: $n, in: 0...100)\n        Text(\"\\(n)\")"
        },
        "modifiers": [],
        "children": []
      },
      "state": {
        "stateVars": [],
        "bindings": [
          {
            "name": "n",
            "type": "Int"
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
          "raw": "StepperView(n: $n).padding()"
        },
        "modifiers": [],
        "children": []
      },
      "state": {
        "stateVars": [
          {
            "name": "n",
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
struct StepperView: View {
    @Binding var n: Int
    var body: some View {
        Stepper("N", value: $n, in: 0...100)
        Text("\(n)")
    }
}
struct ContentView: View {
    @State private var n = 0
    var body: some View { StepperView(n: $n).padding() }
}

```

---
## Шаг 2: Rule Mapper (UI-IR → скелет + unresolved)

| Параметр | Значение |
|----------|----------|
| Компонентов в скелете | 2 |
| Неразрешённых фрагментов | 2 |
| Entry (для App.tsx) | ContentView |

### Список unresolved

| View | Расположение | Описание |
|------|--------------|----------|
| StepperView | body | Custom/unparsed body |
| ContentView | body | Custom/unparsed body |

### Скелет компонентов (кратко)

#### StepperView

**Props interface:**
```ts
interface StepperViewProps {
  n: number;
  onNChange?: (value: number) => void;
}
```

**State hooks:**
- нет

**JSX skeleton (фрагмент):**
```tsx
    {/* Custom: Stepper("N", value: $n, in: 0...100)
        Text("\(n)") */}
```

#### ContentView

**Props interface:**
```ts
interface ContentViewProps {
  // no props
}
```

**State hooks:**
- `const [n, setN] = useState<number>(0);`

**JSX skeleton (фрагмент):**
```tsx
    {/* Custom: StepperView(n: $n).padding() */}
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