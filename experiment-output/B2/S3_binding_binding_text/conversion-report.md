# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S3_binding/binding_text.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B2/S3_binding_binding_text |
| Начало | 2026-03-14T22:29:32.113Z |
| Окончание | 2026-03-14T22:29:45.382Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 1677 |
| Токенов (completion) | 1097 |
| Токенов (всего) | 2774 |
| Конфигурация эксперимента | B2 |

---
## Шаг 1: SwiftUI Extractor (парсинг → UI-IR)

| Параметр | Значение |
|----------|----------|
| Количество View | 2 |
| Имена View | EditView, ContentView |
| Entry View | ContentView |

### UI-IR (полная структура)

```json
{
  "views": [
    {
      "name": "EditView",
      "params": [],
      "body": {
        "type": "Custom",
        "props": {
          "raw": "TextField(\"Name\", text: $text)\n            .padding()"
        },
        "modifiers": [],
        "children": []
      },
      "state": {
        "stateVars": [],
        "bindings": [
          {
            "name": "text",
            "type": "String"
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
              "content": "Hello, \\(name)"
            },
            "modifiers": [],
            "children": []
          }
        ]
      },
      "state": {
        "stateVars": [
          {
            "name": "name",
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

struct EditView: View {
    @Binding var text: String

    var body: some View {
        TextField("Name", text: $text)
            .padding()
    }
}

struct ContentView: View {
    @State private var name = ""

    var body: some View {
        VStack {
            EditView(text: $name)
            Text("Hello, \(name)")
        }
    }
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
| EditView | body | Custom/unparsed body |

### Скелет компонентов (кратко)

#### EditView

**Props interface:**
```ts
interface EditViewProps {
  text: string;
  onTextChange?: (value: string) => void;
}
```

**State hooks:**
- нет

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    {/* Custom: TextField("Name", text: $text)
            .padding() */}
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
- `const [name, setName] = useState<string>("");`

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }>
      <span>Hello, \(name)</span>
    </div>
  </div>
```


---
## Шаг 3: RAG Retriever

| Параметр | Значение |
|----------|----------|
| Число подобранных примеров | 3 |
| ID примеров | s1-vstack-text, s1-centered-box, vstack-text |
| Длина RAG-контекста (символов) | 1326 |

### Теги по примерам

- **s1-vstack-text**: layout, VStack, Text, S1
- **s1-centered-box**: layout, VStack, Spacer, Text, padding, background, S1
- **vstack-text**: layout, VStack, Text


---
## Шаг 4: LLM Generator (OpenRouter)

| Параметр | Значение |
|----------|----------|
| Модель | — |
| Длина промпта (символов) | 5450 |
| Длина ответа (символов) | 3046 |
| Сгенерировано файлов | 8 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 432 |
| vite.config.ts | 161 |
| tsconfig.json | 504 |
| index.html | 303 |
| src/main.tsx | 223 |
| src/App.tsx | 146 |
| src/views/ContentView.tsx | 585 |
| src/views/EditView.tsx | 495 |

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