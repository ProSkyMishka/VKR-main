# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S1_layout/color_red.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B1/S1_layout_color_red |
| Начало | 2026-03-14T21:49:10.750Z |
| Окончание | 2026-03-14T21:49:20.273Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 861 |
| Токенов (completion) | 889 |
| Токенов (всего) | 1750 |
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
| Длина промпта (символов) | 3005 |
| Длина ответа (символов) | 2394 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 436 |
| vite.config.ts | 161 |
| tsconfig.json | 504 |
| index.html | 302 |
| src/main.tsx | 224 |
| src/App.tsx | 120 |
| src/views/ContentView.tsx | 482 |

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