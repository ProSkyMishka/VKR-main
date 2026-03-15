# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S3_binding/switch_binding.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B0raw/S3_binding_switch_binding |
| Начало | 2026-03-14T21:02:37.995Z |
| Окончание | 2026-03-14T21:02:48.998Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 440 |
| Токенов (completion) | 967 |
| Токенов (всего) | 1407 |
| Конфигурация эксперимента | B0raw |

---
## Шаг 1: SwiftUI Extractor (парсинг → UI-IR)

| Параметр | Значение |
|----------|----------|
| Количество View | 1 |
| Имена View | SwitchView |
| Entry View | SwitchView |

### UI-IR (полная структура)

```json
{
  "views": [
    {
      "name": "SwitchView",
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
  "entryViewName": "SwitchView"
}
```

### Исходный Swift (фрагмент)

```swift
import SwiftUI
struct SwitchView: View {
    @Binding var on: Bool
    var body: some View {
        Toggle("Switch", isOn: $on)
    }
}
struct ContentView: View {
    @State private var on = false
    var body: some View {
        VStack {
            SwitchView(on: $on)
            Text(on ? "On" : "Off")
        }.padding()
    }
}

```

---
## Шаг 2: Rule Mapper (UI-IR → скелет + unresolved)

| Параметр | Значение |
|----------|----------|
| Компонентов в скелете | 1 |
| Неразрешённых фрагментов | 0 |
| Entry (для App.tsx) | SwitchView |

### Скелет компонентов (кратко)

#### SwitchView

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
| Длина промпта (символов) | 1398 |
| Длина ответа (символов) | 2554 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 435 |
| vite.config.ts | 131 |
| tsconfig.json | 504 |
| index.html | 302 |
| src/main.tsx | 209 |
| src/App.tsx | 166 |
| src/views/SwitchView.tsx | 643 |

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