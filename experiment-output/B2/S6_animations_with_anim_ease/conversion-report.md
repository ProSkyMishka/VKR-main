# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S6_animations/with_anim_ease.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B2/S6_animations_with_anim_ease |
| Начало | 2026-03-14T22:46:12.942Z |
| Окончание | 2026-03-14T22:46:25.191Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 1435 |
| Токенов (completion) | 994 |
| Токенов (всего) | 2429 |
| Конфигурация эксперимента | B2 |

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
    <div style={ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }>
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
| Число подобранных примеров | 3 |
| ID примеров | s1-vstack-text, s1-centered-box, vstack-text |
| Длина RAG-контекста (символов) | 1326 |

### Теги по примерам

- **s1-vstack-text**: layout, VStack, Text, S1
- **s1-centered-box**: layout, VStack, Spacer, Text, padding, background, S1
- **vstack-text**: layout, VStack, Text


---
## Шаг 4: LLM Generator (OpenRouter)

| Параметр | Значение |
|----------|----------|
| Модель | — |
| Длина промпта (символов) | 4560 |
| Длина ответа (символов) | 2723 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 435 |
| vite.config.ts | 161 |
| tsconfig.json | 504 |
| index.html | 302 |
| src/main.tsx | 223 |
| src/App.tsx | 149 |
| src/views/ContentView.tsx | 784 |

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