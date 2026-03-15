# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | datasets/S1_layout/centered_box.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/out-centered |
| Начало | 2026-03-14T20:11:06.790Z |
| Окончание | 2026-03-14T20:11:17.057Z |
| Успех | Да |
| Вызовов LLM | 1 |
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
        "type": "VStack",
        "props": {},
        "modifiers": [],
        "children": [
          {
            "type": "Spacer",
            "props": {},
            "modifiers": [],
            "children": []
          },
          {
            "type": "Text",
            "props": {
              "content": "Center"
            },
            "modifiers": [
              {
                "name": "padding",
                "args": [
                  "24"
                ]
              },
              {
                "name": "background",
                "args": [
                  "Color.orange.opacity(0.3"
                ]
              },
              {
                "name": "cornerRadius",
                "args": [
                  "8"
                ]
              }
            ],
            "children": []
          },
          {
            "type": "Spacer",
            "props": {},
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
        VStack {
            Spacer()
            Text("Center").padding(24).background(Color.orange.opacity(0.3)).cornerRadius(8)
            Spacer()
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
    <div style={ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }>
      <div style={{ flex: 1, minWidth: 0, minHeight: 0 }} />
      <span style={ padding: 24, backgroundColor: 'var(--bg-orange.opacity(0.3, #eee)', borderRadius: 8 }>Center</span>
      <div style={{ flex: 1, minWidth: 0, minHeight: 0 }} />
    </div>
  </div>
```


---
## Шаг 3: RAG Retriever

| Параметр | Значение |
|----------|----------|
| Число подобранных примеров | 3 |
| ID примеров | s1-centered-box, s1-vstack-text, s1-padding |
| Длина RAG-контекста (символов) | 1292 |

### Теги по примерам

- **s1-centered-box**: layout, VStack, Spacer, Text, padding, background, S1
- **s1-vstack-text**: layout, VStack, Text, S1
- **s1-padding**: layout, padding, VStack, S1


---
## Шаг 4: LLM Generator (OpenRouter)

| Параметр | Значение |
|----------|----------|
| Модель | — |
| Длина промпта (символов) | 4328 |
| Длина ответа (символов) | 2481 |
| Сгенерировано файлов | 7 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 435 |
| vite.config.ts | 161 |
| tsconfig.json | 504 |
| index.html | 303 |
| src/main.tsx | 224 |
| src/App.tsx | 120 |
| src/views/ContentView.tsx | 569 |

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