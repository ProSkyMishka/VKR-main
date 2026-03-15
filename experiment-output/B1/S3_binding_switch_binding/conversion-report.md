# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S3_binding/switch_binding.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B1/S3_binding_switch_binding |
| Начало | 2026-03-14T22:02:36.624Z |
| Окончание | 2026-03-14T22:02:47.983Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 1188 |
| Токенов (completion) | 1123 |
| Токенов (всего) | 2311 |
| Конфигурация эксперимента | B1 |

---
## Шаг 1: SwiftUI Extractor (парсинг → UI-IR)

| Параметр | Значение |
|----------|----------|
| Количество View | 2 |
| Имена View | SwitchView, ContentView |
| Entry View | ContentView |

### UI-IR (полная структура)

```json
{
  "views": [
    {
      "name": "SwitchView",
      "params": [],
      "body": {
        "type": "Custom",
        "props": {
          "raw": "Toggle(\"Switch\", isOn: $on)"
        },
        "modifiers": [],
        "children": []
      },
      "state": {
        "stateVars": [],
        "bindings": [
          {
            "name": "on",
            "type": "Bool"
          }
        ]
      }
    },
    {
      "name": "ContentView",
      "params": [],
      "body": {
        "type": "VStack",
        "props": {},
        "modifiers": [
          {
            "name": "padding"
          }
        ],
        "children": []
      },
      "state": {
        "stateVars": [
          {
            "name": "on",
            "type": "Bool",
            "initial": "false"
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
struct SwitchView: View {
    @Binding var on: Bool
    var body: some View {
        Toggle("Switch", isOn: $on)
    }
}
struct ContentView: View {
    @State private var on = false
    var body: some View {
        VStack {
            SwitchView(on: $on)
            Text(on ? "On" : "Off")
        }.padding()
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
| SwitchView | body | Custom/unparsed body |

### Скелет компонентов (кратко)

#### SwitchView

**Props interface:**
```ts
interface SwitchViewProps {
  on: boolean;
  onOnChange?: (value: boolean) => void;
}
```

**State hooks:**
- нет

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    {/* Custom: Toggle("Switch", isOn: $on) */}
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
- `const [on, setOn] = useState<boolean>(false);`

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', padding: 16 }>

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
| Длина промпта (символов) | 4058 |
| Длина ответа (символов) | 3063 |
| Сгенерировано файлов | 8 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| src/main.tsx | 223 |
| src/App.tsx | 149 |
| src/views/ContentView.tsx | 526 |
| src/views/SwitchView.tsx | 512 |
| package.json | 432 |
| vite.config.ts | 161 |
| tsconfig.json | 558 |
| index.html | 303 |

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