# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | fixtures/sample2.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/output-app4 |
| Начало | 2026-02-26T19:54:53.552Z |
| Окончание | 2026-02-26T19:55:27.706Z |
| Успех | Нет |
| Ошибки | [vite]: Rollup failed to resolve import "/src/main.tsx" from "/Users/mprozorskiy/Desktop/VKR/output-app4/index.html". This is most likely unintended because it can break your application at runtime. If you do want to externalize this module explicitly add it to `build.rollupOptions.external` error during build: Error: [vite]: Rollup failed to resolve import "/src/main.tsx" from "/Users/mprozorskiy/Desktop/VKR/output-app4/index.html". This is most likely unintended because it can break your application at runtime. If you do want to externalize this module explicitly add it to `build.rollupOptions.external`     at viteWarn (file:///Users/mprozorskiy/Desktop/VKR/output-app4/node_modules/vite/dist/node/chunks/dep-827b23df.js:48272:27)     at onRollupWarning (file:///Users/mprozorskiy/Desktop/VKR/output-app4/node_modules/vite/dist/node/chunks/dep-827b23df.js:48304:9)     at onwarn (file:///Users/mprozorskiy/Desktop/VKR/output-app4/node_modules/vite/dist/node/chunks/dep-827b23df.js:48032:13)     at file:///Users/mprozorskiy/Desktop/VKR/output-app4/node_modules/rollup/dist/es/shared/node-entry.js:24305:13     at Object.logger [as onLog] (file:///Users/mprozorskiy/Desktop/VKR/output-app4/node_modules/rollup/dist/es/shared/node-entry.js:25979:9)     at ModuleLoader.handleInvalidResolvedId (file:///Users/mprozorskiy/Desktop/VKR/output-app4/node_modules/rollup/dist/es/shared/node-entry.js:24891:26)     at file:///Users/mprozorskiy/Desktop/VKR/output-app4/node_modules/rollup/dist/es/shared/node-entry.js:24851:26  |

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
      <div style={{ position: 'absolute', inset: 0, backgroundColor: '#8B4513' }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <span>Hello, SwiftUI!</span>
        <button type="button" onClick={() => {}} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>

        </button>
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
| Длина ответа (символов) | 309 |
| Сгенерировано файлов | 2 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| plaintext | 15 |
| typescript | 257 |

---
## Шаг 5: Validator

| Параметр | Значение |
|----------|----------|
| Успех | Нет |
| Сборка (npm run build) | Ошибка |

### Вывод сборки (ошибка)

```
[vite]: Rollup failed to resolve import "/src/main.tsx" from "/Users/mprozorskiy/Desktop/VKR/output-app4/index.html".
This is most likely unintended because it can break your application at runtime.
If you do want to externalize this module explicitly add it to
`build.rollupOptions.external`
error during build:
Error: [vite]: Rollup failed to resolve import "/src/main.tsx" from "/Users/mprozorskiy/Desktop/VKR/output-app4/index.html".
This is most likely unintended because it can break your application at runtime.
If you do want to externalize this module explicitly add it to
`build.rollupOptions.external`
    at viteWarn (file:///Users/mprozorskiy/Desktop/VKR/output-app4/node_modules/vite/dist/node/chunks/dep-827b23df.js:48272:27)
    at onRollupWarning (file:///Users/mprozorskiy/Desktop/VKR/output-app4/node_modules/vite/dist/node/chunks/dep-827b23df.js:48304:9)
    at onwarn (file:///Users/mprozorskiy/Desktop/VKR/output-app4/node_modules/vite/dist/node/chunks/dep-827b23df.js:48032:13)
    at file:///Users/mprozorskiy/Desktop/VKR/output-app4/node_modules/rollup/dist/es/shared/node-entry.js:24305:13
    at Object.logger [as onLog] (file:///Users/mprozorskiy/Desktop/VKR/output-app4/node_modules/rollup/dist/es/shared/node-entry.js:25979:9)
    at ModuleLoader.handleInvalidResolvedId (file:///Users/mprozorskiy/Desktop/VKR/output-app4/node_modules/rollup/dist/es/shared/node-entry.js:24891:26)
    at file:///Users/mprozorskiy/Desktop/VKR/output-app4/node_modules/rollup/dist/es/shared/node-entry.js:24851:26

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
[vite]: Rollup failed to resolve import "/src/main.tsx" from "/Users/mprozorskiy/Desktop/VKR/output-app4/index.html".
This is most likely unintended because it can break your application at runtime.
If you do want to externalize this module explicitly add it to
`build.rollupOptions.external`
error during build:
Error: [vite]: Rollup failed to resolve import "/src/main.tsx" from "/Users/mprozorskiy/Desktop/VKR/output-app4/index.html".
This is most likely unintended because it can break your appli
...
```
- Файлов исправлено: 4
- Успех после итерации: Нет

#### Итерация 2

- **Ошибка валидации:**
```
[vite]: Rollup failed to resolve import "/src/main.tsx" from "/Users/mprozorskiy/Desktop/VKR/output-app4/index.html".
This is most likely unintended because it can break your application at runtime.
If you do want to externalize this module explicitly add it to
`build.rollupOptions.external`
error during build:
Error: [vite]: Rollup failed to resolve import "/src/main.tsx" from "/Users/mprozorskiy/Desktop/VKR/output-app4/index.html".
This is most likely unintended because it can break your appli
...
```
- Файлов исправлено: 2
- Успех после итерации: Нет

#### Итерация 3

- **Ошибка валидации:**
```
[vite]: Rollup failed to resolve import "/src/main.tsx" from "/Users/mprozorskiy/Desktop/VKR/output-app4/index.html".
This is most likely unintended because it can break your application at runtime.
If you do want to externalize this module explicitly add it to
`build.rollupOptions.external`
error during build:
Error: [vite]: Rollup failed to resolve import "/src/main.tsx" from "/Users/mprozorskiy/Desktop/VKR/output-app4/index.html".
This is most likely unintended because it can break your appli
...
```
- Файлов исправлено: 2
- Успех после итерации: Нет


---
*Конец отчёта*