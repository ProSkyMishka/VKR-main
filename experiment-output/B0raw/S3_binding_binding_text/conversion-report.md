# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S3_binding/binding_text.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B0raw/S3_binding_binding_text |
| Начало | 2026-03-14T21:00:13.886Z |
| Окончание | 2026-03-14T21:00:25.873Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 431 |
| Токенов (completion) | 945 |
| Токенов (всего) | 1376 |
| Конфигурация эксперимента | B0raw |

---
## Шаг 1: SwiftUI Extractor (парсинг → UI-IR)

| Параметр | Значение |
|----------|----------|
| Количество View | 1 |
| Имена View | EditView |
| Entry View | EditView |

### UI-IR (полная структура)

```json
{
  "views": [
    {
      "name": "EditView",
      "params": [],
      "state": {
        "stateVars": [],
        "bindings": []
      },
      "body": {
        "type": "Custom",
        "props": {
          "raw": "(skipped)"
        },
        "children": [],
        "modifiers": []
      }
    }
  ],
  "entryViewName": "EditView"
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
| Компонентов в скелете | 1 |
| Неразрешённых фрагментов | 0 |
| Entry (для App.tsx) | EditView |

### Скелет компонентов (кратко)

#### EditView

**Props interface:**
```ts

```

**State hooks:**
- нет

**JSX skeleton (фрагмент):**
```tsx

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
| Длина промпта (символов) | 1416 |
| Длина ответа (символов) | 2567 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 441 |
| vite.config.ts | 132 |
| tsconfig.json | 504 |
| index.html | 322 |
| src/main.tsx | 224 |
| src/App.tsx | 140 |
| src/views/EditView.tsx | 642 |

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