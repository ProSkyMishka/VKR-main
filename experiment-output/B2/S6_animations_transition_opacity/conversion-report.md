# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S6_animations/transition_opacity.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B2/S6_animations_transition_opacity |
| Начало | 2026-03-14T22:45:43.562Z |
| Окончание | 2026-03-14T22:45:54.009Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 1402 |
| Токенов (completion) | 976 |
| Токенов (всего) | 2378 |
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
              "content": "Content"
            },
            "modifiers": [
              {
                "name": "transition",
                "args": [
                  ".opacity"
                ]
              },
              {
                "name": "toggle"
              }
            ],
            "children": []
          },
          {
            "type": "Button",
            "props": {
              "label": "Toggle"
            },
            "modifiers": [],
            "children": []
          }
        ]
      },
      "state": {
        "stateVars": [
          {
            "name": "show",
            "type": "Bool",
            "initial": "true"
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
    @State private var show = true
    var body: some View {
        VStack {
            if show { Text("Content").transition(.opacity) }
            Button("Toggle") { withAnimation { show.toggle() } }
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
| ContentView | body.children[0] | Unresolved modifier: .transition |
| ContentView | body.children[0] | Unresolved modifier: .toggle |

### Скелет компонентов (кратко)

#### ContentView

**Props interface:**
```ts
interface ContentViewProps {
  // no props
}
```

**State hooks:**
- `const [show, setShow] = useState<boolean>(true);`

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }>
      <span>Content</span>
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
| Длина промпта (символов) | 4524 |
| Длина ответа (символов) | 2685 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 441 |
| vite.config.ts | 131 |
| tsconfig.json | 504 |
| index.html | 303 |
| src/main.tsx | 224 |
| src/App.tsx | 159 |
| src/views/ContentView.tsx | 758 |

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