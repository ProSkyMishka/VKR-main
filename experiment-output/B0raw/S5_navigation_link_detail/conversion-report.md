# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S5_navigation/link_detail.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B0raw/S5_navigation_link_detail |
| Начало | 2026-03-14T21:09:21.178Z |
| Окончание | 2026-03-14T21:09:30.896Z |
| Успех | Нет |
| Вызовов LLM | 1 |
| Токенов (prompt) | 417 |
| Токенов (completion) | 798 |
| Токенов (всего) | 1215 |
| Конфигурация эксперимента | B0raw |
| Ошибки | > swiftui-to-vite-react@0.0.0 build > tsc && vite build  src/App.tsx(5,11): error TS2741: Property 'title' is missing in type '{}' but required in type 'DetailViewProps'. |

---
## Шаг 1: SwiftUI Extractor (парсинг → UI-IR)

| Параметр | Значение |
|----------|----------|
| Количество View | 1 |
| Имена View | DetailView |
| Entry View | DetailView |

### UI-IR (полная структура)

```json
{
  "views": [
    {
      "name": "DetailView",
      "params": [],
      "state": {
        "stateVars": [],
        "bindings": []
      },
      "body": {
        "type": "Custom",
        "props": {
          "raw": "(skipped)"
        },
        "children": [],
        "modifiers": []
      }
    }
  ],
  "entryViewName": "DetailView"
}
```

### Исходный Swift (фрагмент)

```swift
import SwiftUI
struct DetailView: View {
    let title: String
    var body: some View { Text("Detail: \(title)") }
}
struct ContentView: View {
    var body: some View {
        NavigationView {
            NavigationLink("Open") { DetailView(title: "Open") }
                .navigationTitle("Root")
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
| Entry (для App.tsx) | DetailView |

### Скелет компонентов (кратко)

#### DetailView

**Props interface:**
```ts

```

**State hooks:**
- нет

**JSX skeleton (фрагмент):**
```tsx

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
| Длина промпта (символов) | 1381 |
| Длина ответа (символов) | 2146 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 441 |
| vite.config.ts | 132 |
| tsconfig.json | 504 |
| index.html | 322 |
| src/main.tsx | 223 |
| src/App.tsx | 159 |
| src/views/DetailView.tsx | 201 |

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

src/App.tsx(5,11): error TS2741: Property 'title' is missing in type '{}' but required in type 'DetailViewProps'.
```

---
## Шаг 6: Repair Loop

| Параметр | Значение |
|----------|----------|
| Всего итераций исправления | 0 |
| Лимит достигнут | Нет |


---
*Конец отчёта*