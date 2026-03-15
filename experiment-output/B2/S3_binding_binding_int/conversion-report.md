# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S3_binding/binding_int.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B2/S3_binding_binding_int |
| Начало | 2026-03-14T22:29:14.827Z |
| Окончание | 2026-03-14T22:29:27.656Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 1584 |
| Токенов (completion) | 1101 |
| Токенов (всего) | 2685 |
| Конфигурация эксперимента | B2 |

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
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    {/* Custom: Stepper("N", value: $n, in: 0...100)
        Text("\(n)") */}
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
- `const [n, setN] = useState<number>(0);`

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    {/* Custom: StepperView(n: $n).padding() */}
  </div>
```


---
## Шаг 3: RAG Retriever

| Параметр | Значение |
|----------|----------|
| Число подобранных примеров | 3 |
| ID примеров | s3-binding-child, s3-binding-parent, binding |
| Длина RAG-контекста (символов) | 1102 |

### Теги по примерам

- **s3-binding-child**: @Binding, state, S3
- **s3-binding-parent**: @Binding, state, S3
- **binding**: @Binding, state


---
## Шаг 4: LLM Generator (OpenRouter)

| Параметр | Значение |
|----------|----------|
| Модель | — |
| Длина промпта (символов) | 5140 |
| Длина ответа (символов) | 2984 |
| Сгенерировано файлов | 8 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 435 |
| vite.config.ts | 161 |
| tsconfig.json | 504 |
| index.html | 302 |
| src/main.tsx | 223 |
| src/App.tsx | 278 |
| src/views/ContentView.tsx | 366 |
| src/views/StepperView.tsx | 515 |

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