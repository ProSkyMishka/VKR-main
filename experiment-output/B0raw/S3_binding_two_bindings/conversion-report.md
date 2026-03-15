# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S3_binding/two_bindings.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B0raw/S3_binding_two_bindings |
| Начало | 2026-03-14T21:03:10.584Z |
| Окончание | 2026-03-14T21:03:25.811Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 448 |
| Токенов (completion) | 1004 |
| Токенов (всего) | 1452 |
| Конфигурация эксперимента | B0raw |

---
## Шаг 1: SwiftUI Extractor (парсинг → UI-IR)

| Параметр | Значение |
|----------|----------|
| Количество View | 1 |
| Имена View | FormView |
| Entry View | FormView |

### UI-IR (полная структура)

```json
{
  "views": [
    {
      "name": "FormView",
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
  "entryViewName": "FormView"
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
| Компонентов в скелете | 1 |
| Неразрешённых фрагментов | 0 |
| Entry (для App.tsx) | FormView |

### Скелет компонентов (кратко)

#### FormView

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
| Длина промпта (символов) | 1435 |
| Длина ответа (символов) | 2720 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 435 |
| vite.config.ts | 131 |
| tsconfig.json | 504 |
| index.html | 302 |
| src/main.tsx | 223 |
| src/App.tsx | 140 |
| src/views/FormView.tsx | 823 |

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