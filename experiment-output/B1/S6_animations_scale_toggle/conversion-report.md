# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S6_animations/scale_toggle.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B1/S6_animations_scale_toggle |
| Начало | 2026-03-14T22:15:03.889Z |
| Окончание | 2026-03-14T22:15:17.228Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 816 |
| Токенов (completion) | 902 |
| Токенов (всего) | 1718 |
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
        "type": "Text",
        "props": {
          "content": "Scale"
        },
        "modifiers": [
          {
            "name": "scaleEffect",
            "args": [
              "big ? 2 : 1"
            ]
          },
          {
            "name": "animation",
            "args": [
              ".easeInOut, value: big"
            ]
          },
          {
            "name": "toggle"
          }
        ],
        "children": []
      },
      "state": {
        "stateVars": [
          {
            "name": "big",
            "type": "Bool",
            "initial": "false"
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
    @State private var big = false
    var body: some View {
        Text("Scale")
            .scaleEffect(big ? 2 : 1)
            .animation(.easeInOut, value: big)
        Button("Toggle") { big.toggle() }
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
| ContentView | body | Unresolved modifier: .toggle |

### Скелет компонентов (кратко)

#### ContentView

**Props interface:**
```ts
interface ContentViewProps {
  // no props
}
```

**State hooks:**
- `const [big, setBig] = useState<boolean>(false);`

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <span>Scale</span>
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
| Длина промпта (символов) | 2879 |
| Длина ответа (символов) | 2453 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 441 |
| vite.config.ts | 161 |
| tsconfig.json | 504 |
| index.html | 311 |
| src/main.tsx | 224 |
| src/App.tsx | 120 |
| src/views/ContentView.tsx | 527 |

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