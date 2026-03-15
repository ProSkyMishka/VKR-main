# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | datasets/S4_list_foreach/foreach_range.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B3/S4_list_foreach_foreach_range |
| Начало | 2026-03-14T18:24:43.139Z |
| Окончание | 2026-03-14T18:24:43.640Z |
| Успех | Нет |
| Вызовов LLM | 1 |
| Конфигурация эксперимента | B3 |
| Ошибки | LLM generation: OpenRouter API error 402: {"error":{"message":"This request requires more credits, or fewer max_tokens. You requested up to 8192 tokens, but can only afford 7527. To increase, visit https://openrouter.ai/settings/credits and upgrade to a paid account","code":402,"metadata":{"provider_name":null}},"user_id":"user_3ACTuIpdW2g1KbGLjUNXYh4CxGO"} |

---
## Шаг 1: SwiftUI Extractor (парсинг → UI-IR)

| Параметр | Значение |
|----------|----------|
| Количество View | 1 |
| Имена View | ContentView |
| Entry View | ContentView |

### UI-IR (полная структура)

```json
{
  "views": [
    {
      "name": "ContentView",
      "params": [],
      "body": {
        "type": "Custom",
        "props": {
          "raw": "List {\n            ForEach(0..<5, id: \\.self) { i in\n                Text(\"Item \\(i)\")\n            }\n        }"
        },
        "modifiers": [],
        "children": []
      },
      "state": {
        "stateVars": [],
        "bindings": []
      }
    }
  ],
  "entryViewName": "ContentView"
}
```

### Исходный Swift (фрагмент)

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            ForEach(0..<5, id: \.self) { i in
                Text("Item \(i)")
            }
        }
    }
}

```

---
## Шаг 2: Rule Mapper (UI-IR → скелет + unresolved)

| Параметр | Значение |
|----------|----------|
| Компонентов в скелете | 1 |
| Неразрешённых фрагментов | 1 |
| Entry (для App.tsx) | ContentView |

### Список unresolved

| View | Расположение | Описание |
|------|--------------|----------|
| ContentView | body | Custom/unparsed body |

### Скелет компонентов (кратко)

#### ContentView

**Props interface:**
```ts
interface ContentViewProps {
  // no props
}
```

**State hooks:**
- нет

**JSX skeleton (фрагмент):**
```tsx
    {/* Custom: List {
            ForEach(0..<5, id: \.self) { i in
                Text("Item  */}
```


---
## Шаг 3: RAG Retriever

| Параметр | Значение |
|----------|----------|
| Число подобранных примеров | 0 |
| ID примеров | — |
| Длина RAG-контекста (символов) | 0 |


---
## Шаг 4: LLM Generator (OpenRouter)

| Параметр | Значение |
|----------|----------|
| Модель | — |
| Длина промпта (символов) | 0 |
| Длина ответа (символов) | 0 |
| Сгенерировано файлов | 0 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|

---
## Шаг 5: Validator

| Параметр | Значение |
|----------|----------|
| Успех | Нет |
| Сборка (npm run build) | Ошибка |

---
## Шаг 6: Repair Loop

| Параметр | Значение |
|----------|----------|
| Всего итераций исправления | 0 |
| Лимит достигнут | Нет |


---
*Конец отчёта*