# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S1_layout/zstack_three.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B2/S1_layout_zstack_three |
| Начало | 2026-03-14T22:23:12.038Z |
| Окончание | 2026-03-14T22:23:23.110Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 1212 |
| Токенов (completion) | 952 |
| Токенов (всего) | 2164 |
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
        "type": "ZStack",
        "props": {},
        "modifiers": [],
        "children": [
          {
            "type": "Color",
            "props": {
              "name": "gray"
            },
            "modifiers": [
              {
                "name": "opacity",
                "args": [
                  "0.2"
                ]
              }
            ],
            "children": []
          },
          {
            "type": "Text",
            "props": {
              "content": "Middle"
            },
            "modifiers": [
              {
                "name": "font",
                "args": [
                  ".caption"
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
            Color.gray.opacity(0.2)
            Text("Middle")
            Text("Top").font(.caption)
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
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundColor: '#808080', zIndex: 0 }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
      <span>Middle</span>
      </div>
    </div>
```


---
## Шаг 3: RAG Retriever

| Параметр | Значение |
|----------|----------|
| Число подобранных примеров | 3 |
| ID примеров | s1-zstack-color, s1-font, s1-vstack-text |
| Длина RAG-контекста (символов) | 1033 |

### Теги по примерам

- **s1-zstack-color**: layout, ZStack, Color, Text, S1
- **s1-font**: layout, font, Text, S1
- **s1-vstack-text**: layout, VStack, Text, S1


---
## Шаг 4: LLM Generator (OpenRouter)

| Параметр | Значение |
|----------|----------|
| Модель | — |
| Длина промпта (символов) | 3924 |
| Длина ответа (символов) | 2572 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| src/App.tsx | 173 |
| src/main.tsx | 213 |
| src/views/ContentView.tsx | 625 |
| package.json | 455 |
| vite.config.ts | 135 |
| tsconfig.json | 504 |
| index.html | 302 |

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