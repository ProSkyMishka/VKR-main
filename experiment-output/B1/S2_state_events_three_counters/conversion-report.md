# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S2_state_events/three_counters.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B1/S2_state_events_three_counters |
| Начало | 2026-03-14T21:58:20.580Z |
| Окончание | 2026-03-14T21:58:32.488Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 1103 |
| Токенов (completion) | 1123 |
| Токенов (всего) | 2226 |
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
        "type": "VStack",
        "props": {},
        "modifiers": [],
        "children": [
          {
            "type": "Text",
            "props": {
              "content": "a:\\(a) b:\\(b) c:\\(c)"
            },
            "modifiers": [],
            "children": []
          },
          {
            "type": "Button",
            "props": {
              "label": "A+"
            },
            "modifiers": [],
            "children": []
          },
          {
            "type": "Button",
            "props": {
              "label": "B+"
            },
            "modifiers": [],
            "children": []
          },
          {
            "type": "Button",
            "props": {
              "label": "C+"
            },
            "modifiers": [],
            "children": []
          }
        ]
      },
      "state": {
        "stateVars": [
          {
            "name": "a",
            "type": "Int",
            "initial": "0"
          },
          {
            "name": "b",
            "type": "Int",
            "initial": "0"
          },
          {
            "name": "c",
            "type": "Int",
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
    @State private var a = 0
    @State private var b = 0
    @State private var c = 0
    var body: some View {
        VStack {
            Text("a:\(a) b:\(b) c:\(c)")
            HStack {
                Button("A+") { a += 1 }
                Button("B+") { b += 1 }
                Button("C+") { c += 1 }
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
- `const [a, setA] = useState<number>(0);`
- `const [b, setB] = useState<number>(0);`
- `const [c, setC] = useState<number>(0);`

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }>
      <span>a:\(a) b:\(b) c:\(c)</span>
      <button type="button" onClick={() => {}} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>

      </button>
      <button type="button" onClick={() => {}} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>

      </button>
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
| Длина RAG-контекста (символов) | 22 |


---
## Шаг 4: LLM Generator (OpenRouter)

| Параметр | Значение |
|----------|----------|
| Модель | — |
| Длина промпта (символов) | 3666 |
| Длина ответа (символов) | 3082 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 440 |
| vite.config.ts | 161 |
| tsconfig.json | 504 |
| index.html | 311 |
| src/main.tsx | 223 |
| src/App.tsx | 120 |
| src/views/ContentView.tsx | 1158 |

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