# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S2_state_events/button_style.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B3/S2_state_events_button_style |
| Начало | 2026-03-14T22:53:27.216Z |
| Окончание | 2026-03-14T22:53:37.118Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 1302 |
| Токенов (completion) | 932 |
| Токенов (всего) | 2234 |
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
        "type": "Button",
        "props": {},
        "modifiers": [
          {
            "name": "padding"
          }
        ],
        "children": []
      },
      "state": {
        "stateVars": [
          {
            "name": "tapped",
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
    @State private var tapped = false
    var body: some View {
        Button(tapped ? "Done" : "Tap") {
            tapped = true
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
- `const [tapped, setTapped] = useState<boolean>(false);`

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <button type="button" onClick={() => {}} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>

    </button>
  </div>
```


---
## Шаг 3: RAG Retriever

| Параметр | Значение |
|----------|----------|
| Число подобранных примеров | 3 |
| ID примеров | s1-padding, s1-centered-box, s2-state-button |
| Длина RAG-контекста (символов) | 1298 |

### Теги по примерам

- **s1-padding**: layout, padding, VStack, S1
- **s1-centered-box**: layout, VStack, Spacer, Text, padding, background, S1
- **s2-state-button**: state, Button, @State, S2


---
## Шаг 4: LLM Generator (OpenRouter)

| Параметр | Значение |
|----------|----------|
| Модель | — |
| Длина промпта (символов) | 4185 |
| Длина ответа (символов) | 2555 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 432 |
| vite.config.ts | 131 |
| tsconfig.json | 504 |
| index.html | 303 |
| src/main.tsx | 209 |
| src/App.tsx | 120 |
| src/views/ContentView.tsx | 691 |

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