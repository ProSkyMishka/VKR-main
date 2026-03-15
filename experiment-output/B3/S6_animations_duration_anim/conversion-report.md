# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S6_animations/duration_anim.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B3/S6_animations_duration_anim |
| Начало | 2026-03-14T23:14:06.373Z |
| Окончание | 2026-03-14T23:14:18.590Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 1283 |
| Токенов (completion) | 900 |
| Токенов (всего) | 2183 |
| Конфигурация эксперимента | B3 |

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
          "content": "Duration"
        },
        "modifiers": [
          {
            "name": "opacity",
            "args": [
              "opacity"
            ]
          },
          {
            "name": "animation",
            "args": [
              ".easeInOut(duration: 0.5"
            ]
          },
          {
            "name": "5"
          },
          {
            "name": "5"
          }
        ],
        "children": []
      },
      "state": {
        "stateVars": [
          {
            "name": "opacity",
            "type": "Double",
            "initial": "0.5"
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
    @State private var opacity: Double = 0.5
    var body: some View {
        Text("Duration")
            .opacity(opacity)
            .animation(.easeInOut(duration: 0.5), value: opacity)
        Button("Change") { opacity = opacity == 0.5 ? 1 : 0.5 }
    }
}

```

---
## Шаг 2: Rule Mapper (UI-IR → скелет + unresolved)

| Параметр | Значение |
|----------|----------|
| Компонентов в скелете | 1 |
| Неразрешённых фрагментов | 2 |
| Entry (для App.tsx) | ContentView |

### Список unresolved

| View | Расположение | Описание |
|------|--------------|----------|
| ContentView | body | Unresolved modifier: .5 |
| ContentView | body | Unresolved modifier: .5 |

### Скелет компонентов (кратко)

#### ContentView

**Props interface:**
```ts
interface ContentViewProps {
  // no props
}
```

**State hooks:**
- `const [opacity, setOpacity] = useState<number>(0.5);`

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <span>Duration</span>
  </div>
```


---
## Шаг 3: RAG Retriever

| Параметр | Значение |
|----------|----------|
| Число подобранных примеров | 3 |
| ID примеров | s1-vstack-text, s1-hstack, s1-zstack-color |
| Длина RAG-контекста (символов) | 1110 |

### Теги по примерам

- **s1-vstack-text**: layout, VStack, Text, S1
- **s1-hstack**: layout, HStack, Text, S1
- **s1-zstack-color**: layout, ZStack, Color, Text, S1


---
## Шаг 4: LLM Generator (OpenRouter)

| Параметр | Значение |
|----------|----------|
| Модель | — |
| Длина промпта (символов) | 4055 |
| Длина ответа (символов) | 2443 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 432 |
| vite.config.ts | 131 |
| tsconfig.json | 504 |
| index.html | 303 |
| src/main.tsx | 223 |
| src/App.tsx | 110 |
| src/views/ContentView.tsx | 575 |

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