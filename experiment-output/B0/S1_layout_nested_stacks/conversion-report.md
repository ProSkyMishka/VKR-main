# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S1_layout/nested_stacks.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B0/S1_layout_nested_stacks |
| Начало | 2026-03-14T21:20:22.399Z |
| Окончание | 2026-03-14T21:20:32.866Z |
| Успех | Нет |
| Вызовов LLM | 1 |
| Токенов (prompt) | 423 |
| Токенов (completion) | 999 |
| Токенов (всего) | 1422 |
| Конфигурация эксперимента | B0 |
| Ошибки | > swiftui-to-vite-react@0.0.0 build > tsc && vite build  src/views/ContentView.tsx(5,6): error TS2322: Type '{ children: Element[]; spacing: number; }' is not assignable to type 'IntrinsicAttributes & { spacing: number; }'.   Property 'children' does not exist on type 'IntrinsicAttributes & { spacing: number; }'. src/views/ContentView.tsx(6,8): error TS2559: Type '{ children: Element[]; }' has no properties in common with type 'IntrinsicAttributes'. src/views/ContentView.tsx(7,10): error TS2559: Type '{ children: string; }' has no properties in common with type 'IntrinsicAttributes'. src/views/ContentView.tsx(8,10): error TS2559: Type '{ children: string; }' has no properties in common with type 'IntrinsicAttributes'. src/views/ContentView.tsx(10,8): error TS2559: Type '{ children: Element[]; }' has no properties in common with type 'IntrinsicAttributes'. src/views/ContentView.tsx(11,10): error TS2559: Type '{ children: string; }' has no properties in common with type 'IntrinsicAttributes'. src/views/ContentView.tsx(12,10): error TS2559: Type '{ children: string; }' has no properties in common with type 'IntrinsicAttributes'. src/views/ContentView.tsx(18,50): error TS2339: Property 'children' does not exist on type '{ spacing: number; }'. src/views/ContentView.tsx(26,29): error TS2339: Property 'children' does not exist on type '{}'. src/views/ContentView.tsx(34,27): error TS2339: Property 'children' does not exist on type '{}'. |

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
          "spacing": 20
        },
        "modifiers": [
          {
            "name": "padding",
            "args": [
              ".horizontal, 40"
            ]
          },
          {
            "name": "padding",
            "args": [
              ".vertical, 20"
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
          },
          {
            "type": "Text",
            "props": {
              "content": "D"
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
        VStack(spacing: 20) {
            HStack {
                Text("A")
                Text("B")
            }
            HStack {
                Text("C")
                Text("D")
            }
        }
        .padding(.horizontal, 40)
        .padding(.vertical, 20)
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
    <div style={ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center', padding: 16 }>
      <span>A</span>
      <span>B</span>
      <span>C</span>
      <span>D</span>
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
| Длина промпта (символов) | 1420 |
| Длина ответа (символов) | 2693 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 441 |
| vite.config.ts | 132 |
| tsconfig.json | 504 |
| index.html | 322 |
| src/main.tsx | 223 |
| src/App.tsx | 136 |
| src/views/ContentView.tsx | 770 |

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

src/views/ContentView.tsx(5,6): error TS2322: Type '{ children: Element[]; spacing: number; }' is not assignable to type 'IntrinsicAttributes & { spacing: number; }'.
  Property 'children' does not exist on type 'IntrinsicAttributes & { spacing: number; }'.
src/views/ContentView.tsx(6,8): error TS2559: Type '{ children: Element[]; }' has no properties in common with type 'IntrinsicAttributes'.
src/views/ContentView.tsx(7,10): error TS2559: Type '{ children: string; }' has no properties in common with type 'IntrinsicAttributes'.
src/views/ContentView.tsx(8,10): error TS2559: Type '{ children: string; }' has no properties in common with type 'IntrinsicAttributes'.
src/views/ContentView.tsx(10,8): error TS2559: Type '{ children: Element[]; }' has no properties in common with type 'IntrinsicAttributes'.
src/views/ContentView.tsx(11,10): error TS2559: Type '{ children: string; }' has no properties in common with type 'IntrinsicAttributes'.
src/views/ContentView.tsx(12,10): error TS2559: Type '{ children: string; }' has no properties in common with type 'IntrinsicAttributes'.
src/views/ContentView.tsx(18,50): error TS2339: Property 'children' does not exist on type '{ spacing: number; }'.
src/views/ContentView.tsx(26,29): error TS2339: Property 'children' does not exist on type '{}'.
src/views/ContentView.tsx(34,27): error TS2339: Property 'children' does not exist on type '{}'.
```

---
## Шаг 6: Repair Loop

| Параметр | Значение |
|----------|----------|
| Всего итераций исправления | 0 |
| Лимит достигнут | Нет |


---
*Конец отчёта*