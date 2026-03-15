# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S3_binding/checkbox_parent.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B0raw/S3_binding_checkbox_parent |
| Начало | 2026-03-14T21:00:30.592Z |
| Окончание | 2026-03-14T21:00:42.161Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 425 |
| Токенов (completion) | 947 |
| Токенов (всего) | 1372 |
| Конфигурация эксперимента | B0raw |

---
## Шаг 1: SwiftUI Extractor (парсинг → UI-IR)

| Параметр | Значение |
|----------|----------|
| Количество View | 1 |
| Имена View | CheckboxView |
| Entry View | CheckboxView |

### UI-IR (полная структура)

```json
{
  "views": [
    {
      "name": "CheckboxView",
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
  "entryViewName": "CheckboxView"
}
```

### Исходный Swift (фрагмент)

```swift
import SwiftUI
struct CheckboxView: View {
    @Binding var isChecked: Bool
    var body: some View {
        Toggle("Item", isOn: $isChecked)
    }
}
struct ContentView: View {
    @State private var isChecked = false
    var body: some View {
        CheckboxView(isChecked: $isChecked).padding()
    }
}

```

---
## Шаг 2: Rule Mapper (UI-IR → скелет + unresolved)

| Параметр | Значение |
|----------|----------|
| Компонентов в скелете | 1 |
| Неразрешённых фрагментов | 0 |
| Entry (для App.tsx) | CheckboxView |

### Скелет компонентов (кратко)

#### CheckboxView

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
| Длина промпта (символов) | 1372 |
| Длина ответа (символов) | 2606 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 436 |
| vite.config.ts | 132 |
| tsconfig.json | 504 |
| index.html | 302 |
| src/main.tsx | 223 |
| src/App.tsx | 152 |
| src/views/CheckboxView.tsx | 691 |

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