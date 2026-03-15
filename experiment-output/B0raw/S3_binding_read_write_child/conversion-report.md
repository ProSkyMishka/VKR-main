# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S3_binding/read_write_child.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B0raw/S3_binding_read_write_child |
| Начало | 2026-03-14T21:02:22.585Z |
| Окончание | 2026-03-14T21:02:33.386Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 430 |
| Токенов (completion) | 870 |
| Токенов (всего) | 1300 |
| Конфигурация эксперимента | B0raw |

---
## Шаг 1: SwiftUI Extractor (парсинг → UI-IR)

| Параметр | Значение |
|----------|----------|
| Количество View | 1 |
| Имена View | CounterChild |
| Entry View | CounterChild |

### UI-IR (полная структура)

```json
{
  "views": [
    {
      "name": "CounterChild",
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
  "entryViewName": "CounterChild"
}
```

### Исходный Swift (фрагмент)

```swift
import SwiftUI
struct CounterChild: View {
    @Binding var count: Int
    var body: some View {
        VStack {
            Text("\(count)")
            Button("+") { count += 1 }
        }
    }
}
struct ContentView: View {
    @State private var count = 0
    var body: some View {
        CounterChild(count: $count)
    }
}

```

---
## Шаг 2: Rule Mapper (UI-IR → скелет + unresolved)

| Параметр | Значение |
|----------|----------|
| Компонентов в скелете | 1 |
| Неразрешённых фрагментов | 0 |
| Entry (для App.tsx) | CounterChild |

### Скелет компонентов (кратко)

#### CounterChild

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
| Длина промпта (символов) | 1395 |
| Длина ответа (символов) | 2341 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 441 |
| vite.config.ts | 132 |
| tsconfig.json | 504 |
| index.html | 322 |
| src/main.tsx | 224 |
| src/App.tsx | 172 |
| src/views/CounterChild.tsx | 380 |

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