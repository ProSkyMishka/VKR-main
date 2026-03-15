# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S3_binding/two_way.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B0raw/S3_binding_two_way |
| Начало | 2026-03-14T21:03:40.218Z |
| Окончание | 2026-03-14T21:03:50.944Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 445 |
| Токенов (completion) | 930 |
| Токенов (всего) | 1375 |
| Конфигурация эксперимента | B0raw |

---
## Шаг 1: SwiftUI Extractor (парсинг → UI-IR)

| Параметр | Значение |
|----------|----------|
| Количество View | 1 |
| Имена View | SliderView |
| Entry View | SliderView |

### UI-IR (полная структура)

```json
{
  "views": [
    {
      "name": "SliderView",
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
  "entryViewName": "SliderView"
}
```

### Исходный Swift (фрагмент)

```swift
import SwiftUI

struct SliderView: View {
    @Binding var value: Double

    var body: some View {
        VStack {
            Text("\(value, specifier: "%.1f")")
            Slider(value: $value, in: 0...100)
        }
    }
}

struct ContentView: View {
    @State private var value: Double = 50

    var body: some View {
        SliderView(value: $value)
    }
}

```

---
## Шаг 2: Rule Mapper (UI-IR → скелет + unresolved)

| Параметр | Значение |
|----------|----------|
| Компонентов в скелете | 1 |
| Неразрешённых фрагментов | 0 |
| Entry (для App.tsx) | SliderView |

### Скелет компонентов (кратко)

#### SliderView

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
| Длина промпта (символов) | 1430 |
| Длина ответа (символов) | 2524 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 436 |
| vite.config.ts | 132 |
| tsconfig.json | 504 |
| index.html | 302 |
| src/main.tsx | 223 |
| src/App.tsx | 166 |
| src/views/SliderView.tsx | 597 |

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