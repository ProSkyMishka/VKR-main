# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | fixtures/sample.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/output-app8 |
| Начало | 2026-02-26T20:08:44.800Z |
| Окончание | 2026-02-26T20:09:19.250Z |
| Успех | Нет |
| Ошибки |  |

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
        "props": {
          "spacing": 12
        },
        "modifiers": [
          {
            "name": "padding"
          }
        ],
        "children": [
          {
            "type": "Text",
            "props": {
              "content": "Hello, SwiftUI!"
            },
            "modifiers": [],
            "children": []
          },
          {
            "type": "Button",
            "props": {
              "label": "Count: \\(count)"
            },
            "modifiers": [],
            "children": []
          }
        ]
      },
      "state": {
        "stateVars": [
          {
            "name": "count",
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
    @State private var count = 0
    var body: some View {
        VStack(spacing: 12) {
            Text("Hello, SwiftUI!")
            Button("Count: \(count)") {
                count += 1
            }
        }
        .padding()
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
- `const [count, setCount] = useState<number>(0);`

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <span>Hello, SwiftUI!</span>
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
| ID примеров | vstack-text, state-button, binding |
| Длина RAG-контекста (символов) | 908 |

### Теги по примерам

- **vstack-text**: layout, VStack, Text
- **state-button**: state, Button, @State
- **binding**: @Binding, state


---
## Шаг 4: LLM Generator (OpenRouter)

| Параметр | Значение |
|----------|----------|
| Модель | — |
| Длина промпта (символов) | 2998 |
| Длина ответа (символов) | 1018 |
| Сгенерировано файлов | 2 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| src/index.tsx | 554 |
| tsconfig.json | 420 |

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
| Всего итераций исправления | 3 |
| Лимит достигнут | Да |

### Итерации

#### Итерация 1

- **Ошибка валидации:**
```
npm error code ERESOLVE
npm error ERESOLVE unable to resolve dependency tree
npm error
npm error While resolving: vite-react-ts-project@1.0.0
npm error Found: vite@2.9.18
npm error node_modules/vite
npm error   dev vite@"^2.0.0" from the root project
npm error
npm error Could not resolve dependency:
npm error peer vite@"^4.2.0 || ^5.0.0 || ^6.0.0 || ^7.0.0" from @vitejs/plugin-react@4.7.0
npm error node_modules/@vitejs/plugin-react
npm error   dev @vitejs/plugin-react@"^4.2.0" from the root proj
...
```
- Файлов исправлено: 2
- Успех после итерации: Нет

#### Итерация 2

- **Ошибка валидации:**
```
npm error Missing script: "build"
npm error
npm error To see a list of scripts, run:
npm error   npm run
npm error A complete log of this run can be found in: /Users/mprozorskiy/.npm/_logs/2026-02-26T20_09_03_034Z-debug-0.log

```
- Файлов исправлено: 1
- Успех после итерации: Нет

#### Итерация 3

- **Ошибка валидации:**
```

```
- Файлов исправлено: 2
- Успех после итерации: Нет


---
*Конец отчёта*