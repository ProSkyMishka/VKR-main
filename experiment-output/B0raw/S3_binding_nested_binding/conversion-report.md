# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S3_binding/nested_binding.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B0raw/S3_binding_nested_binding |
| Начало | 2026-03-14T21:01:34.714Z |
| Окончание | 2026-03-14T21:01:46.028Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 465 |
| Токенов (completion) | 967 |
| Токенов (всего) | 1432 |
| Конфигурация эксперимента | B0raw |

---
## Шаг 1: SwiftUI Extractor (парсинг → UI-IR)

| Параметр | Значение |
|----------|----------|
| Количество View | 1 |
| Имена View | InnerView |
| Entry View | InnerView |

### UI-IR (полная структура)

```json
{
  "views": [
    {
      "name": "InnerView",
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
  "entryViewName": "InnerView"
}
```

### Исходный Swift (фрагмент)

```swift
import SwiftUI
struct InnerView: View {
    @Binding var x: Int
    var body: some View { Button("Inner") { x += 1 } }
}
struct MiddleView: View {
    @Binding var x: Int
    var body: some View { InnerView(x: $x) }
}
struct ContentView: View {
    @State private var x = 0
    var body: some View {
        VStack {
            Text("\(x)")
            MiddleView(x: $x)
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
| Entry (для App.tsx) | InnerView |

### Скелет компонентов (кратко)

#### InnerView

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
| Длина промпта (символов) | 1449 |
| Длина ответа (символов) | 2553 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 436 |
| vite.config.ts | 132 |
| tsconfig.json | 504 |
| index.html | 302 |
| src/main.tsx | 223 |
| src/App.tsx | 143 |
| src/views/InnerView.tsx | 650 |

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