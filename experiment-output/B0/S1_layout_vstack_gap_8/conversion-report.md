# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S1_layout/vstack_gap_8.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B0/S1_layout_vstack_gap_8 |
| Начало | 2026-03-14T21:22:26.638Z |
| Окончание | 2026-03-14T21:22:36.554Z |
| Успех | Нет |
| Вызовов LLM | 1 |
| Токенов (prompt) | 385 |
| Токенов (completion) | 841 |
| Токенов (всего) | 1226 |
| Конфигурация эксперимента | B0 |
| Ошибки | > swiftui-to-vite-react@0.0.0 build > tsc && vite build  src/views/ContentView.tsx(6,21): error TS2322: Type '{ spacing: string; }' is not assignable to type 'Properties<string \| number, string & {}>'.   Object literal may only specify known properties, and 'spacing' does not exist in type 'Properties<string \| number, string & {}>'. |

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
          "spacing": 8
        },
        "modifiers": [
          {
            "name": "padding",
            "args": [
              "12"
            ]
          }
        ],
        "children": [
          {
            "type": "Text",
            "props": {
              "content": "A"
            },
            "modifiers": [],
            "children": []
          },
          {
            "type": "Text",
            "props": {
              "content": "B"
            },
            "modifiers": [],
            "children": []
          },
          {
            "type": "Text",
            "props": {
              "content": "C"
            },
            "modifiers": [],
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
        VStack(spacing: 8) {
            Text("A")
            Text("B")
            Text("C")
        }.padding(12)
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
    <div style={ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', padding: 12 }>
      <span>A</span>
      <span>B</span>
      <span>C</span>
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
| Длина промпта (символов) | 1256 |
| Длина ответа (символов) | 2214 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 440 |
| vite.config.ts | 132 |
| tsconfig.json | 504 |
| index.html | 322 |
| src/main.tsx | 209 |
| src/App.tsx | 169 |
| src/views/ContentView.tsx | 273 |

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

src/views/ContentView.tsx(6,21): error TS2322: Type '{ spacing: string; }' is not assignable to type 'Properties<string | number, string & {}>'.
  Object literal may only specify known properties, and 'spacing' does not exist in type 'Properties<string | number, string & {}>'.
```

---
## Шаг 6: Repair Loop

| Параметр | Значение |
|----------|----------|
| Всего итераций исправления | 0 |
| Лимит достигнут | Нет |


---
*Конец отчёта*