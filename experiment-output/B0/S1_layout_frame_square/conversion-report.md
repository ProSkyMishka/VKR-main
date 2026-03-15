# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S1_layout/frame_square.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B0/S1_layout_frame_square |
| Начало | 2026-03-14T21:18:24.212Z |
| Окончание | 2026-03-14T21:18:34.824Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 385 |
| Токенов (completion) | 825 |
| Токенов (всего) | 1210 |
| Конфигурация эксперимента | B0 |

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
        "type": "Text",
        "props": {
          "content": "Box"
        },
        "modifiers": [
          {
            "name": "frame",
            "args": [
              "width: 100, height: 100"
            ]
          },
          {
            "name": "background",
            "args": [
              "Color.blue.opacity(0.2"
            ]
          }
        ],
        "children": []
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
        Text("Box")
            .frame(width: 100, height: 100)
            .background(Color.blue.opacity(0.2))
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
- нет

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={ width: 100, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-blue.opacity(0.2, #eee)' }>
      <span style={}>Box</span>
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
| Длина промпта (символов) | 1252 |
| Длина ответа (символов) | 2183 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 435 |
| vite.config.ts | 132 |
| tsconfig.json | 504 |
| index.html | 302 |
| src/main.tsx | 209 |
| src/App.tsx | 169 |
| src/views/ContentView.tsx | 267 |

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