# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S4_list_foreach/foreach_buttons.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B1/S4_list_foreach_foreach_buttons |
| Начало | 2026-03-14T22:03:38.825Z |
| Окончание | 2026-03-14T22:03:48.950Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 807 |
| Токенов (completion) | 923 |
| Токенов (всего) | 1730 |
| Конфигурация эксперимента | B1 |

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
        "type": "List",
        "props": {
          "dataBinding": "options, id: \\.self"
        },
        "modifiers": [],
        "children": []
      },
      "state": {
        "stateVars": [
          {
            "name": "selected",
            "type": "String",
            "initial": "\"\""
          }
        ],
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
    let options = ["One", "Two", "Three"]
    @State private var selected = ""

    var body: some View {
        List(options, id: \.self) { opt in
            Button(opt) {
                selected = opt
            }
        }
        Text("Selected: \(selected)")
    }
}

```

---
## Шаг 2: Rule Mapper (UI-IR → скелет + unresolved)

| Параметр | Значение |
|----------|----------|
| Компонентов в скелете | 1 |
| Неразрешённых фрагментов | 0 |
| Entry (для App.tsx) | ContentView |

### Скелет компонентов (кратко)

#### ContentView

**Props interface:**
```ts
interface ContentViewProps {
  // no props
}
```

**State hooks:**
- `const [selected, setSelected] = useState<string>("");`

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <ul>

    </ul>
  </div>
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
| Длина промпта (символов) | 2868 |
| Длина ответа (символов) | 2540 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 455 |
| vite.config.ts | 131 |
| tsconfig.json | 504 |
| index.html | 302 |
| src/main.tsx | 223 |
| src/App.tsx | 146 |
| src/views/ContentView.tsx | 614 |

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