# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S3_binding/two_way.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B3/S3_binding_two_way |
| Начало | 2026-03-14T23:02:48.325Z |
| Окончание | 2026-03-14T23:03:01.069Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 1662 |
| Токенов (completion) | 1079 |
| Токенов (всего) | 2741 |
| Конфигурация эксперимента | B3 |

---
## Шаг 1: SwiftUI Extractor (парсинг → UI-IR)

| Параметр | Значение |
|----------|----------|
| Количество View | 2 |
| Имена View | SliderView, ContentView |
| Entry View | ContentView |

### UI-IR (полная структура)

```json
{
  "views": [
    {
      "name": "SliderView",
      "params": [],
      "body": {
        "type": "VStack",
        "props": {},
        "modifiers": [],
        "children": []
      },
      "state": {
        "stateVars": [],
        "bindings": [
          {
            "name": "value",
            "type": "Double"
          }
        ]
      }
    },
    {
      "name": "ContentView",
      "params": [],
      "body": {
        "type": "Custom",
        "props": {
          "raw": "SliderView(value: $value)"
        },
        "modifiers": [],
        "children": []
      },
      "state": {
        "stateVars": [
          {
            "name": "value",
            "type": "Double",
            "initial": "50"
          }
        ],
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

struct SliderView: View {
    @Binding var value: Double

    var body: some View {
        VStack {
            Text("\(value, specifier: "%.1f")")
            Slider(value: $value, in: 0...100)
        }
    }
}

struct ContentView: View {
    @State private var value: Double = 50

    var body: some View {
        SliderView(value: $value)
    }
}

```

---
## Шаг 2: Rule Mapper (UI-IR → скелет + unresolved)

| Параметр | Значение |
|----------|----------|
| Компонентов в скелете | 2 |
| Неразрешённых фрагментов | 1 |
| Entry (для App.tsx) | ContentView |

### Список unresolved

| View | Расположение | Описание |
|------|--------------|----------|
| ContentView | body | Custom/unparsed body |

### Скелет компонентов (кратко)

#### SliderView

**Props interface:**
```ts
interface SliderViewProps {
  value: number;
  onValueChange?: (value: number) => void;
}
```

**State hooks:**
- нет

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }>

    </div>
  </div>
```

#### ContentView

**Props interface:**
```ts
interface ContentViewProps {
  // no props
}
```

**State hooks:**
- `const [value, setValue] = useState<number>(50);`

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    {/* Custom: SliderView(value: $value) */}
  </div>
```


---
## Шаг 3: RAG Retriever

| Параметр | Значение |
|----------|----------|
| Число подобранных примеров | 3 |
| ID примеров | s1-vstack-text, s1-padding, s1-centered-box |
| Длина RAG-контекста (символов) | 1292 |

### Теги по примерам

- **s1-vstack-text**: layout, VStack, Text, S1
- **s1-padding**: layout, padding, VStack, S1
- **s1-centered-box**: layout, VStack, Spacer, Text, padding, background, S1


---
## Шаг 4: LLM Generator (OpenRouter)

| Параметр | Значение |
|----------|----------|
| Модель | — |
| Длина промпта (символов) | 5350 |
| Длина ответа (символов) | 3004 |
| Сгенерировано файлов | 8 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 435 |
| vite.config.ts | 161 |
| tsconfig.json | 504 |
| index.html | 302 |
| src/main.tsx | 223 |
| src/App.tsx | 146 |
| src/views/ContentView.tsx | 452 |
| src/views/SliderView.tsx | 582 |

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