# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S3_binding/two_bindings.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B2/S3_binding_two_bindings |
| Начало | 2026-03-14T22:32:49.523Z |
| Окончание | 2026-03-14T22:33:00.939Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 1711 |
| Токенов (completion) | 1139 |
| Токенов (всего) | 2850 |
| Конфигурация эксперимента | B2 |

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
    <div style={ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', padding: 16 }>

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
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    {/* Custom: FormView(a: $a, b: $b) */}
  </div>
```


---
## Шаг 3: RAG Retriever

| Параметр | Значение |
|----------|----------|
| Число подобранных примеров | 3 |
| ID примеров | s1-padding, s1-centered-box, s1-vstack-text |
| Длина RAG-контекста (символов) | 1292 |

### Теги по примерам

- **s1-padding**: layout, padding, VStack, S1
- **s1-centered-box**: layout, VStack, Spacer, Text, padding, background, S1
- **s1-vstack-text**: layout, VStack, Text, S1


---
## Шаг 4: LLM Generator (OpenRouter)

| Параметр | Значение |
|----------|----------|
| Модель | — |
| Длина промпта (символов) | 5436 |
| Длина ответа (символов) | 3152 |
| Сгенерировано файлов | 8 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 435 |
| vite.config.ts | 131 |
| tsconfig.json | 504 |
| index.html | 302 |
| src/main.tsx | 223 |
| src/App.tsx | 136 |
| src/views/ContentView.tsx | 486 |
| src/views/FormView.tsx | 738 |

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