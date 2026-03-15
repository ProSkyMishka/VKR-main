# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S3_binding/child_toggle.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B0raw/S3_binding_child_toggle |
| Начало | 2026-03-14T21:01:18.355Z |
| Окончание | 2026-03-14T21:01:30.039Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 445 |
| Токенов (completion) | 961 |
| Токенов (всего) | 1406 |
| Конфигурация эксперимента | B0raw |

---
## Шаг 1: SwiftUI Extractor (парсинг → UI-IR)

| Параметр | Значение |
|----------|----------|
| Количество View | 1 |
| Имена View | ChildView |
| Entry View | ChildView |

### UI-IR (полная структура)

```json
{
  "views": [
    {
      "name": "ChildView",
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
  "entryViewName": "ChildView"
}
```

### Исходный Swift (фрагмент)

```swift
import SwiftUI

struct ChildView: View {
    @Binding var isOn: Bool

    var body: some View {
        Toggle("Child", isOn: $isOn)
    }
}

struct ContentView: View {
    @State private var isOn = false

    var body: some View {
        VStack {
            ChildView(isOn: $isOn)
            Text("Parent: \(isOn ? "On" : "Off")")
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
| Entry (для App.tsx) | ChildView |

### Скелет компонентов (кратко)

#### ChildView

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
| Длина промпта (символов) | 1412 |
| Длина ответа (символов) | 2543 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 435 |
| vite.config.ts | 132 |
| tsconfig.json | 504 |
| index.html | 302 |
| src/main.tsx | 223 |
| src/App.tsx | 163 |
| src/views/ChildView.tsx | 621 |

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