# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S3_binding/child_bool.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B0/S3_binding_child_bool |
| Начало | 2026-03-14T21:30:14.591Z |
| Окончание | 2026-03-14T21:30:26.657Z |
| Успех | Да |
| Вызовов LLM | 1 |
| Токенов (prompt) | 412 |
| Токенов (completion) | 958 |
| Токенов (всего) | 1370 |
| Конфигурация эксперимента | B0 |

---
## Шаг 1: SwiftUI Extractor (парсинг → UI-IR)

| Параметр | Значение |
|----------|----------|
| Количество View | 2 |
| Имена View | CheckView, ContentView |
| Entry View | ContentView |

### UI-IR (полная структура)

```json
{
  "views": [
    {
      "name": "CheckView",
      "params": [],
      "body": {
        "type": "Custom",
        "props": {
          "raw": "Toggle(\"Check\", isOn: $checked)"
        },
        "modifiers": [],
        "children": []
      },
      "state": {
        "stateVars": [],
        "bindings": [
          {
            "name": "checked",
            "type": "Bool"
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
          "raw": "CheckView(checked: $checked)"
        },
        "modifiers": [],
        "children": []
      },
      "state": {
        "stateVars": [
          {
            "name": "checked",
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
struct CheckView: View {
    @Binding var checked: Bool
    var body: some View {
        Toggle("Check", isOn: $checked)
    }
}
struct ContentView: View {
    @State private var checked = false
    var body: some View {
        CheckView(checked: $checked)
    }
}

```

---
## Шаг 2: Rule Mapper (UI-IR → скелет + unresolved)

| Параметр | Значение |
|----------|----------|
| Компонентов в скелете | 2 |
| Неразрешённых фрагментов | 2 |
| Entry (для App.tsx) | ContentView |

### Список unresolved

| View | Расположение | Описание |
|------|--------------|----------|
| CheckView | body | Custom/unparsed body |
| ContentView | body | Custom/unparsed body |

### Скелет компонентов (кратко)

#### CheckView

**Props interface:**
```ts
interface CheckViewProps {
  checked: boolean;
  onCheckedChange?: (value: boolean) => void;
}
```

**State hooks:**
- нет

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    {/* Custom: Toggle("Check", isOn: $checked) */}
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
- `const [checked, setChecked] = useState<boolean>(false);`

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    {/* Custom: CheckView(checked: $checked) */}
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
| Длина промпта (символов) | 1356 |
| Длина ответа (символов) | 2670 |
| Сгенерировано файлов | 8 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 440 |
| vite.config.ts | 132 |
| tsconfig.json | 504 |
| index.html | 314 |
| src/main.tsx | 223 |
| src/App.tsx | 136 |
| src/views/CheckView.tsx | 427 |
| src/views/ContentView.tsx | 296 |

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