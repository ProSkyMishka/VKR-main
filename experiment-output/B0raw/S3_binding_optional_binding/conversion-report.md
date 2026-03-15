# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S3_binding/optional_binding.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B0raw/S3_binding_optional_binding |
| Начало | 2026-03-14T21:01:50.692Z |
| Окончание | 2026-03-14T21:02:01.305Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 434 |
| Токенов (completion) | 873 |
| Токенов (всего) | 1307 |
| Конфигурация эксперимента | B0raw |

---
## Шаг 1: SwiftUI Extractor (парсинг → UI-IR)

| Параметр | Значение |
|----------|----------|
| Количество View | 1 |
| Имена View | EditField |
| Entry View | EditField |

### UI-IR (полная структура)

```json
{
  "views": [
    {
      "name": "EditField",
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
  "entryViewName": "EditField"
}
```

### Исходный Swift (фрагмент)

```swift
import SwiftUI
struct EditField: View {
    @Binding var text: String
    var body: some View {
        TextField("", text: $text).padding(8)
    }
}
struct ContentView: View {
    @State private var text = "Edit me"
    var body: some View {
        VStack {
            EditField(text: $text)
            Text("Length: \(text.count)")
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
| Entry (для App.tsx) | EditField |

### Скелет компонентов (кратко)

#### EditField

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
| Длина промпта (символов) | 1414 |
| Длина ответа (символов) | 2370 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 435 |
| vite.config.ts | 132 |
| tsconfig.json | 504 |
| index.html | 302 |
| src/main.tsx | 223 |
| src/App.tsx | 143 |
| src/views/EditField.tsx | 468 |

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