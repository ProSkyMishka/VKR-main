# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S3_binding/three_way.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B0raw/S3_binding_three_way |
| Начало | 2026-03-14T21:02:53.547Z |
| Окончание | 2026-03-14T21:03:05.181Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 480 |
| Токенов (completion) | 965 |
| Токенов (всего) | 1445 |
| Конфигурация эксперимента | B0raw |

---
## Шаг 1: SwiftUI Extractor (парсинг → UI-IR)

| Параметр | Значение |
|----------|----------|
| Количество View | 1 |
| Имена View | ABView |
| Entry View | ABView |

### UI-IR (полная структура)

```json
{
  "views": [
    {
      "name": "ABView",
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
  "entryViewName": "ABView"
}
```

### Исходный Swift (фрагмент)

```swift
import SwiftUI
struct ABView: View {
    @Binding var a: Int
    @Binding var b: Int
    var body: some View {
        HStack {
            Button("A") { a += 1 }
            Button("B") { b += 1 }
        }
    }
}
struct ContentView: View {
    @State private var a = 0
    @State private var b = 0
    var body: some View {
        VStack {
            Text("a=\(a) b=\(b)")
            ABView(a: $a, b: $b)
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
| Entry (для App.tsx) | ABView |

### Скелет компонентов (кратко)

#### ABView

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
| Длина промпта (символов) | 1482 |
| Длина ответа (символов) | 2511 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 435 |
| vite.config.ts | 132 |
| tsconfig.json | 504 |
| index.html | 302 |
| src/main.tsx | 223 |
| src/App.tsx | 134 |
| src/views/ABView.tsx | 621 |

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