# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | fixtures/sample2.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/output-app6 |
| Начало | 2026-02-26T20:01:43.991Z |
| Окончание | 2026-02-26T20:02:28.285Z |
| Успех | Нет |
| Ошибки | Could not resolve './src/main.tsx' from index.html error during build: Error: Could not resolve './src/main.tsx' from index.html     at error (file:///Users/mprozorskiy/Desktop/VKR/output-app6/node_modules/rollup/dist/es/shared/rollup.js:1858:30)     at ModuleLoader.handleResolveId (file:///Users/mprozorskiy/Desktop/VKR/output-app6/node_modules/rollup/dist/es/shared/rollup.js:22186:24)     at file:///Users/mprozorskiy/Desktop/VKR/output-app6/node_modules/rollup/dist/es/shared/rollup.js:22149:26  |

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
        "type": "ZStack",
        "props": {},
        "modifiers": [],
        "children": [
          {
            "type": "Color",
            "props": {
              "name": "brown"
            },
            "modifiers": [
              {
                "name": "ignoresSafeArea"
              }
            ],
            "children": []
          },
          {
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
        ZStack {
            Color.brown.ignoresSafeArea()

            VStack(spacing: 12) {
                Text("Hello, SwiftUI!")
                Button("Count: \(count)") {
                    count += 1
                }
            }
            .padding()
        }
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
| ContentView | body.children[0] | Unresolved modifier: .ignoresSafeArea |

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
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundColor: '#8B4513', zIndex: 0 }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <span>Hello, SwiftUI!</span>
        <button type="button" onClick={() => {}} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>

        </button>
      </div>
      </div>
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
| Длина ответа (символов) | 569 |
| Сгенерировано файлов | 2 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| index.html | 315 |
| typescript | 206 |

---
## Шаг 5: Validator

| Параметр | Значение |
|----------|----------|
| Успех | Нет |
| Сборка (npm run build) | Ошибка |

### Вывод сборки (ошибка)

```
Could not resolve './src/main.tsx' from index.html
error during build:
Error: Could not resolve './src/main.tsx' from index.html
    at error (file:///Users/mprozorskiy/Desktop/VKR/output-app6/node_modules/rollup/dist/es/shared/rollup.js:1858:30)
    at ModuleLoader.handleResolveId (file:///Users/mprozorskiy/Desktop/VKR/output-app6/node_modules/rollup/dist/es/shared/rollup.js:22186:24)
    at file:///Users/mprozorskiy/Desktop/VKR/output-app6/node_modules/rollup/dist/es/shared/rollup.js:22149:26

```

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
Could not resolve './src/main.tsx' from index.html
error during build:
Error: Could not resolve './src/main.tsx' from index.html
    at error (file:///Users/mprozorskiy/Desktop/VKR/output-app6/node_modules/rollup/dist/es/shared/rollup.js:1858:30)
    at ModuleLoader.handleResolveId (file:///Users/mprozorskiy/Desktop/VKR/output-app6/node_modules/rollup/dist/es/shared/rollup.js:22186:24)
    at file:///Users/mprozorskiy/Desktop/VKR/output-app6/node_modules/rollup/dist/es/shared/rollup.js:22149:26

```
- Файлов исправлено: 2
- Успех после итерации: Нет

#### Итерация 2

- **Ошибка валидации:**
```
Could not resolve './src/main.tsx' from index.html
error during build:
Error: Could not resolve './src/main.tsx' from index.html
    at error (file:///Users/mprozorskiy/Desktop/VKR/output-app6/node_modules/rollup/dist/es/shared/rollup.js:1858:30)
    at ModuleLoader.handleResolveId (file:///Users/mprozorskiy/Desktop/VKR/output-app6/node_modules/rollup/dist/es/shared/rollup.js:22186:24)
    at file:///Users/mprozorskiy/Desktop/VKR/output-app6/node_modules/rollup/dist/es/shared/rollup.js:22149:26

```
- Файлов исправлено: 2
- Успех после итерации: Нет

#### Итерация 3

- **Ошибка валидации:**
```
Could not resolve './src/main.tsx' from index.html
error during build:
Error: Could not resolve './src/main.tsx' from index.html
    at error (file:///Users/mprozorskiy/Desktop/VKR/output-app6/node_modules/rollup/dist/es/shared/rollup.js:1858:30)
    at ModuleLoader.handleResolveId (file:///Users/mprozorskiy/Desktop/VKR/output-app6/node_modules/rollup/dist/es/shared/rollup.js:22186:24)
    at file:///Users/mprozorskiy/Desktop/VKR/output-app6/node_modules/rollup/dist/es/shared/rollup.js:22149:26

```
- Файлов исправлено: 2
- Успех после итерации: Нет


---
*Конец отчёта*