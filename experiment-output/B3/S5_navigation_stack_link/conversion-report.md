# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | /Users/mprozorskiy/Desktop/VKR/datasets/S5_navigation/stack_link.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/experiment-output/B3/S5_navigation_stack_link |
| Начало | 2026-03-14T23:12:40.272Z |
| Окончание | 2026-03-14T23:13:12.014Z |
| Успех | Нет |
| Вызовов LLM | 4 |
| Токенов (prompt) | 2867 |
| Токенов (completion) | 2039 |
| Токенов (всего) | 4906 |
| Конфигурация эксперимента | B3 |
| Ошибки | > vite-react-ts@0.0.0 build > tsc && vite build  src/App.tsx(6,6): error TS2741: Property 'onPress' is missing in type '{}' but required in type 'ContentViewProps'. |

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
        "type": "Custom",
        "props": {
          "raw": "NavigationStack {\n            NavigationLink(\"Next\") { Text(\"Next\") }\n                .navigationTitle(\"Stack\")\n        }"
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
    var body: some View {
        NavigationStack {
            NavigationLink("Next") { Text("Next") }
                .navigationTitle("Stack")
        }
    }
}

```

---
## Шаг 2: Rule Mapper (UI-IR → скелет + unresolved)

| Параметр | Значение |
|----------|----------|
| Компонентов в скелете | 1 |
| Неразрешённых фрагментов | 1 |
| Entry (для App.tsx) | ContentView |

### Список unresolved

| View | Расположение | Описание |
|------|--------------|----------|
| ContentView | body | Custom/unparsed body |

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
    {/* Custom: NavigationStack {
            NavigationLink("Next") { Text("Next") }
           */}
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
| Длина промпта (символов) | 4065 |
| Длина ответа (символов) | 1435 |
| Сгенерировано файлов | 1 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| typescript | 281 |

---
## Шаг 5: Validator

| Параметр | Значение |
|----------|----------|
| Успех | Нет |
| Сборка (npm run build) | Ошибка |

### Вывод сборки (ошибка)

```
> vite-react-ts@0.0.0 build
> tsc && vite build

src/App.tsx(6,6): error TS2741: Property 'onPress' is missing in type '{}' but required in type 'ContentViewProps'.
```

---
## Шаг 6: Repair Loop

| Параметр | Значение |
|----------|----------|
| Всего итераций исправления | 3 |
| Лимит достигнут | Да |

### Итерации

#### Итерация 1

- **Ошибка валидации:**
```
> vite-react-ts@0.0.0 build
> tsc && vite build

src/views/ContentView.tsx(35,8): error TS2322: Type '{ children: string; onPress: () => void; }' is not assignable to type 'IntrinsicAttributes & { onPress: () => void; }'.
  Property 'children' does not exist on type 'IntrinsicAttributes & { onPress: () => void; }'.
src/views/ContentView.tsx(41,71): error TS2339: Property 'children' does not exist on type '{ onPress: () => void; }'.
```
- Файлов исправлено: 1
- Успех после итерации: Нет

#### Итерация 2

- **Ошибка валидации:**
```
> vite-react-ts@0.0.0 build
> tsc && vite build

src/App.tsx(6,6): error TS2741: Property 'onPress' is missing in type '{}' but required in type 'ContentViewProps'.
```
- Файлов исправлено: 1
- Успех после итерации: Нет

#### Итерация 3

- **Ошибка валидации:**
```
> vite-react-ts@0.0.0 build
> tsc && vite build

src/App.tsx(6,6): error TS2741: Property 'onPress' is missing in type '{}' but required in type 'ContentViewProps'.
```
- Файлов исправлено: 2
- Успех после итерации: Нет


---
*Конец отчёта*