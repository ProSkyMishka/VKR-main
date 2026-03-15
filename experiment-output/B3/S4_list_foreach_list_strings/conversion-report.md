# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S4_list_foreach/list_strings.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B3/S4_list_foreach_list_strings |
| Начало | 2026-03-14T23:06:18.032Z |
| Окончание | 2026-03-14T23:06:27.872Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 1198 |
| Токенов (completion) | 878 |
| Токенов (всего) | 2076 |
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
          "dataBinding": "words, id: \\.self"
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
struct ContentView: View {
    let words = ["Apple", "Banana", "Cherry", "Date"]
    var body: some View {
        List(words, id: \.self) { w in Text(w) }
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
| Длина промпта (символов) | 3763 |
| Длина ответа (символов) | 2350 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 433 |
| vite.config.ts | 161 |
| tsconfig.json | 504 |
| index.html | 303 |
| src/main.tsx | 224 |
| src/App.tsx | 120 |
| src/views/ContentView.tsx | 440 |

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