# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S6_animations/offset_y.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B1/S6_animations_offset_y |
| Начало | 2026-03-14T22:13:56.154Z |
| Окончание | 2026-03-14T22:14:10.931Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 790 |
| Токенов (completion) | 878 |
| Токенов (всего) | 1668 |
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
          "content": "Drop"
        },
        "modifiers": [
          {
            "name": "offset",
            "args": [
              "y: down"
            ]
          },
          {
            "name": "animation",
            "args": [
              ".easeInOut, value: down"
            ]
          }
        ],
        "children": []
      },
      "state": {
        "stateVars": [
          {
            "name": "down",
            "type": "CGFloat",
            "initial": "0"
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
    @State private var down: CGFloat = 0
    var body: some View {
        Text("Drop").offset(y: down).animation(.easeInOut, value: down)
        Button("Drop") { down = 50 }
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
- `const [down, setDown] = useState<unknown>(0);`

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <span>Drop</span>
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
| Длина промпта (символов) | 2769 |
| Длина ответа (символов) | 2381 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 435 |
| vite.config.ts | 161 |
| tsconfig.json | 504 |
| index.html | 302 |
| src/main.tsx | 223 |
| src/App.tsx | 120 |
| src/views/ContentView.tsx | 471 |

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