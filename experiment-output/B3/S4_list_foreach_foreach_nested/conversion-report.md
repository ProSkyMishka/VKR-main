# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S4_list_foreach/foreach_nested.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B3/S4_list_foreach_foreach_nested |
| Начало | 2026-03-14T23:04:08.914Z |
| Окончание | 2026-03-14T23:04:19.959Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 1145 |
| Токенов (completion) | 920 |
| Токенов (всего) | 2065 |
| Конфигурация эксперимента | B3 |

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
          "dataBinding": "0..<groups.count, id: \\.self"
        },
        "modifiers": [],
        "children": [
          {
            "type": "ForEach",
            "props": {
              "dataBinding": "groups[i], id: \\.self"
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
    let groups = [["a", "b"], ["c", "d"]]
    var body: some View {
        List(0..<groups.count, id: \.self) { i in
            ForEach(groups[i], id: \.self) { s in Text(s) }
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
      {/* ForEach */}

    </ul>
  </div>
```


---
## Шаг 3: RAG Retriever

| Параметр | Значение |
|----------|----------|
| Число подобранных примеров | 3 |
| ID примеров | s4-foreach-identifiable, s1-vstack-text, s1-hstack |
| Длина RAG-контекста (символов) | 845 |

### Теги по примерам

- **s4-foreach-identifiable**: ForEach, List, S4
- **s1-vstack-text**: layout, VStack, Text, S1
- **s1-hstack**: layout, HStack, Text, S1


---
## Шаг 4: LLM Generator (OpenRouter)

| Параметр | Значение |
|----------|----------|
| Модель | — |
| Длина промпта (символов) | 3579 |
| Длина ответа (символов) | 2490 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 435 |
| vite.config.ts | 161 |
| tsconfig.json | 504 |
| index.html | 302 |
| src/main.tsx | 223 |
| src/App.tsx | 146 |
| src/views/ContentView.tsx | 554 |

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