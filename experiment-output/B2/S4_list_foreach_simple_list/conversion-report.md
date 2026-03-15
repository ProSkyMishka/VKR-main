# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S4_list_foreach/simple_list.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B2/S4_list_foreach_simple_list |
| Начало | 2026-03-14T22:38:10.695Z |
| Окончание | 2026-03-14T22:38:20.849Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 1240 |
| Токенов (completion) | 942 |
| Токенов (всего) | 2182 |
| Конфигурация эксперимента | B2 |

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
        "type": "List",
        "props": {
          "dataBinding": "items"
        },
        "modifiers": [],
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

struct Item: Identifiable {
    let id = UUID()
    let name: String
}

struct ContentView: View {
    let items = [
        Item(name: "Apple"),
        Item(name: "Banana"),
        Item(name: "Cherry")
    ]

    var body: some View {
        List(items) { item in
            Text(item.name)
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
    <ul>

    </ul>
  </div>
```


---
## Шаг 3: RAG Retriever

| Параметр | Значение |
|----------|----------|
| Число подобранных примеров | 3 |
| ID примеров | s1-vstack-text, s1-hstack, s1-zstack-color |
| Длина RAG-контекста (символов) | 1110 |

### Теги по примерам

- **s1-vstack-text**: layout, VStack, Text, S1
- **s1-hstack**: layout, HStack, Text, S1
- **s1-zstack-color**: layout, ZStack, Color, Text, S1


---
## Шаг 4: LLM Generator (OpenRouter)

| Параметр | Значение |
|----------|----------|
| Модель | — |
| Длина промпта (символов) | 3914 |
| Длина ответа (символов) | 2511 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 432 |
| vite.config.ts | 161 |
| tsconfig.json | 504 |
| index.html | 303 |
| src/main.tsx | 223 |
| src/App.tsx | 110 |
| src/views/ContentView.tsx | 613 |

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