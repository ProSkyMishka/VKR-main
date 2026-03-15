# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S1_layout/zstack_overlay.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B0/S1_layout_zstack_overlay |
| Начало | 2026-03-14T21:22:56.960Z |
| Окончание | 2026-03-14T21:23:07.048Z |
| Успех | Нет |
| Вызовов LLM | 1 |
| Токенов (prompt) | 393 |
| Токенов (completion) | 926 |
| Токенов (всего) | 1319 |
| Конфигурация эксперимента | B0 |
| Ошибки | > swiftui-to-vite-react@0.0.0 build > tsc && vite build  src/views/ContentView.tsx(2,40): error TS2307: Cannot find module 'react-native-web' or its corresponding type declarations. |

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
              "name": "blue"
            },
            "modifiers": [
              {
                "name": "ignoresSafeArea"
              }
            ],
            "children": []
          },
          {
            "type": "Text",
            "props": {
              "content": "Overlay"
            },
            "modifiers": [
              {
                "name": "foregroundColor",
                "args": [
                  ".white"
                ]
              },
              {
                "name": "font",
                "args": [
                  ".title"
                ]
              }
            ],
            "children": []
          }
        ]
      },
      "state": {
        "stateVars": [],
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
    var body: some View {
        ZStack {
            Color.blue.ignoresSafeArea()
            Text("Overlay")
                .foregroundColor(.white)
                .font(.title)
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
- нет

**JSX skeleton (фрагмент):**
```tsx
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundColor: '#0000FF', zIndex: 0 }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
      <span style={ color: '#FFFFFF' }>Overlay</span>
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
| Длина промпта (символов) | 1307 |
| Длина ответа (символов) | 2503 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 441 |
| vite.config.ts | 132 |
| tsconfig.json | 504 |
| index.html | 322 |
| src/main.tsx | 223 |
| src/App.tsx | 146 |
| src/views/ContentView.tsx | 570 |

---
## Шаг 5: Validator

| Параметр | Значение |
|----------|----------|
| Успех | Нет |
| Сборка (npm run build) | Ошибка |

### Вывод сборки (ошибка)

```
> swiftui-to-vite-react@0.0.0 build
> tsc && vite build

src/views/ContentView.tsx(2,40): error TS2307: Cannot find module 'react-native-web' or its corresponding type declarations.
```

---
## Шаг 6: Repair Loop

| Параметр | Значение |
|----------|----------|
| Всего итераций исправления | 0 |
| Лимит достигнут | Нет |


---
*Конец отчёта*