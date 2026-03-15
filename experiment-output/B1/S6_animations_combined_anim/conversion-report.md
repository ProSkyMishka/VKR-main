# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S6_animations/combined_anim.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B1/S6_animations_combined_anim |
| Начало | 2026-03-14T22:12:56.404Z |
| Окончание | 2026-03-14T22:13:07.493Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 836 |
| Токенов (completion) | 923 |
| Токенов (всего) | 1759 |
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
          "content": "Combo"
        },
        "modifiers": [
          {
            "name": "opacity",
            "args": [
              "on ? 1 : 0.5"
            ]
          },
          {
            "name": "scaleEffect",
            "args": [
              "on ? 1.2 : 1"
            ]
          },
          {
            "name": "animation",
            "args": [
              ".easeInOut, value: on"
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
            "name": "on",
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
    @State private var on = false
    var body: some View {
        Text("Combo")
            .opacity(on ? 1 : 0.5)
            .scaleEffect(on ? 1.2 : 1)
            .animation(.easeInOut, value: on)
        Button("Toggle") { on.toggle() }
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
- `const [on, setOn] = useState<boolean>(false);`

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <span>Combo</span>
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
| Длина промпта (символов) | 2910 |
| Длина ответа (символов) | 2468 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 455 |
| vite.config.ts | 132 |
| tsconfig.json | 504 |
| index.html | 302 |
| src/main.tsx | 224 |
| src/App.tsx | 120 |
| src/views/ContentView.tsx | 566 |

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