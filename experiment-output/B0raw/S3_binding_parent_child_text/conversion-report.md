# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S3_binding/parent_child_text.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B0raw/S3_binding_parent_child_text |
| Начало | 2026-03-14T21:02:05.856Z |
| Окончание | 2026-03-14T21:02:16.515Z |
| Успех | Нет |
| Вызовов LLM | 1 |
| Токенов (prompt) | 429 |
| Токенов (completion) | 870 |
| Токенов (всего) | 1299 |
| Конфигурация эксперимента | B0raw |
| Ошибки | > swiftui-to-react@0.0.0 build > tsc && vite build  src/App.tsx(5,11): error TS2739: Type '{}' is missing the following properties from type 'InputViewProps': value, onChange |

---
## Шаг 1: SwiftUI Extractor (парсинг → UI-IR)

| Параметр | Значение |
|----------|----------|
| Количество View | 1 |
| Имена View | InputView |
| Entry View | InputView |

### UI-IR (полная структура)

```json
{
  "views": [
    {
      "name": "InputView",
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
  "entryViewName": "InputView"
}
```

### Исходный Swift (фрагмент)

```swift
import SwiftUI
struct InputView: View {
    @Binding var value: String
    var body: some View {
        TextField("Enter", text: $value).padding()
    }
}
struct ContentView: View {
    @State private var value = ""
    var body: some View {
        VStack {
            InputView(value: $value)
            Text("You wrote: \(value)")
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
| Entry (для App.tsx) | InputView |

### Скелет компонентов (кратко)

#### InputView

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
| Длина ответа (символов) | 2374 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 436 |
| vite.config.ts | 132 |
| tsconfig.json | 504 |
| index.html | 302 |
| src/main.tsx | 224 |
| src/App.tsx | 143 |
| src/views/InputView.tsx | 470 |

---
## Шаг 5: Validator

| Параметр | Значение |
|----------|----------|
| Успех | Нет |
| Сборка (npm run build) | Ошибка |

### Вывод сборки (ошибка)

```
> swiftui-to-react@0.0.0 build
> tsc && vite build

src/App.tsx(5,11): error TS2739: Type '{}' is missing the following properties from type 'InputViewProps': value, onChange
```

---
## Шаг 6: Repair Loop

| Параметр | Значение |
|----------|----------|
| Всего итераций исправления | 0 |
| Лимит достигнут | Нет |


---
*Конец отчёта*