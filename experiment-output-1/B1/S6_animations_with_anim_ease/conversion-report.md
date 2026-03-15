# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | datasets/S6_animations/with_anim_ease.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B1/S6_animations_with_anim_ease |
| Начало | 2026-03-14T18:23:27.721Z |
| Окончание | 2026-03-14T18:23:27.873Z |
| Успех | Нет |
| Вызовов LLM | 1 |
| Конфигурация эксперимента | B1 |
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
        "type": "VStack",
        "props": {},
        "modifiers": [],
        "children": [
          {
            "type": "Text",
            "props": {
              "content": "Anim"
            },
            "modifiers": [
              {
                "name": "scaleEffect",
                "args": [
                  "scale"
                ]
              },
              {
                "name": "easeInOut"
              },
              {
                "name": "5"
              }
            ],
            "children": []
          },
          {
            "type": "Button",
            "props": {
              "label": "Animate"
            },
            "modifiers": [],
            "children": []
          }
        ]
      },
      "state": {
        "stateVars": [
          {
            "name": "scale",
            "type": "CGFloat",
            "initial": "1"
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
    @State private var scale: CGFloat = 1
    var body: some View {
        VStack {
            Text("Anim").scaleEffect(scale)
            Button("Animate") {
                withAnimation(.easeInOut) { scale = scale == 1 ? 1.5 : 1 }
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
| Неразрешённых фрагментов | 2 |
| Entry (для App.tsx) | ContentView |

### Список unresolved

| View | Расположение | Описание |
|------|--------------|----------|
| ContentView | body.children[0] | Unresolved modifier: .easeInOut |
| ContentView | body.children[0] | Unresolved modifier: .5 |

### Скелет компонентов (кратко)

#### ContentView

**Props interface:**
```ts
interface ContentViewProps {
  // no props
}
```

**State hooks:**
- `const [scale, setScale] = useState<unknown>(1);`

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={ display: 'flex', flexDirection: 'column', gap: 8 }>
      <span>Anim</span>
      <button type="button" onClick={() => {}} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>

      </button>
    </div>
  </div>
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