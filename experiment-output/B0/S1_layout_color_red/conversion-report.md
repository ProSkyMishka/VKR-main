# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S1_layout/color_red.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B0/S1_layout_color_red |
| Начало | 2026-03-14T21:18:06.686Z |
| Окончание | 2026-03-14T21:18:18.122Z |
| Успех | Нет |
| Вызовов LLM | 1 |
| Токенов (prompt) | 382 |
| Токенов (completion) | 1058 |
| Токенов (всего) | 1440 |
| Конфигурация эксперимента | B0 |
| Ошибки | > swiftui-to-vite-react@0.0.0 build > tsc && vite build  src/views/ContentViewStyles.tsx(1,20): error TS2307: Cannot find module 'styled-components' or its corresponding type declarations. src/views/ContentViewStyles.tsx(15,23): error TS7006: Parameter 'props' implicitly has an 'any' type. src/views/ContentViewStyles.tsx(18,5): error TS7006: Parameter 'props' implicitly has an 'any' type. src/views/ContentViewStyles.tsx(28,12): error TS7006: Parameter 'props' implicitly has an 'any' type. |

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
              "name": "red"
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
              "content": "Red"
            },
            "modifiers": [
              {
                "name": "foregroundColor",
                "args": [
                  ".white"
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
            Color.red.ignoresSafeArea()
            Text("Red").foregroundColor(.white)
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
      <div style={{ position: 'absolute', inset: 0, backgroundColor: '#FF0000', zIndex: 0 }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
      <span style={ color: '#FFFFFF' }>Red</span>
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
| Длина промпта (символов) | 1254 |
| Длина ответа (символов) | 2846 |
| Сгенерировано файлов | 8 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 440 |
| vite.config.ts | 132 |
| tsconfig.json | 504 |
| index.html | 322 |
| src/main.tsx | 209 |
| src/App.tsx | 146 |
| src/views/ContentView.tsx | 262 |
| src/views/ContentViewStyles.tsx | 625 |

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

src/views/ContentViewStyles.tsx(1,20): error TS2307: Cannot find module 'styled-components' or its corresponding type declarations.
src/views/ContentViewStyles.tsx(15,23): error TS7006: Parameter 'props' implicitly has an 'any' type.
src/views/ContentViewStyles.tsx(18,5): error TS7006: Parameter 'props' implicitly has an 'any' type.
src/views/ContentViewStyles.tsx(28,12): error TS7006: Parameter 'props' implicitly has an 'any' type.
```

---
## Шаг 6: Repair Loop

| Параметр | Значение |
|----------|----------|
| Всего итераций исправления | 0 |
| Лимит достигнут | Нет |


---
*Конец отчёта*