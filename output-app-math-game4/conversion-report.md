# Отчёт конвертации SwiftUI → React+TS

## Метаданные

| Поле | Значение |
|------|---------|
| Входной файл | MathGame/ContentView.swift |
| Выходная директория | /Users/mprozorskiy/Desktop/VKR/output-app-math-game4 |
| Начало | 2026-02-26T21:14:14.201Z |
| Окончание | 2026-02-26T21:15:14.823Z |
| Успех | Да |

---
## Шаг 1: SwiftUI Extractor (парсинг → UI-IR)

| Параметр | Значение |
|----------|----------|
| Количество View | 3 |
| Имена View | ContentView, AnswerButton, SettingView |
| Entry View | SettingView |

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
        "modifiers": [
          {
            "name": "onAppear",
            "args": [
              "perform: generateAnswers"
            ]
          }
        ],
        "children": [
          {
            "type": "VStack",
            "props": {
              "spacing": 20
            },
            "modifiers": [
              {
                "name": "padding",
                "args": [
                  ".horizontal, 40"
                ]
              },
              {
                "name": "font",
                "args": [
                  ".headline"
                ]
              },
              {
                "name": "bold"
              }
            ],
            "children": [
              {
                "type": "ForEach",
                "props": {
                  "dataBinding": "0..<rows.count, id: \\.self"
                },
                "modifiers": [],
                "children": []
              }
            ]
          }
        ]
      },
      "state": {
        "stateVars": [
          {
            "name": "choiceArray",
            "type": "[Int]",
            "initial": "[]"
          },
          {
            "name": "operators",
            "type": "[String]",
            "initial": "[\"+\", \"-\", \"*\", \"/\", \"√\"]"
          },
          {
            "name": "correctAnswer",
            "type": "Int",
            "initial": "0"
          },
          {
            "name": "firstNumber",
            "type": "Int",
            "initial": "0"
          },
          {
            "name": "secondNumber",
            "type": "Int",
            "initial": "0"
          },
          {
            "name": "score",
            "type": "Int",
            "initial": "0"
          },
          {
            "name": "operatorIndex",
            "type": "Int",
            "initial": "0"
          }
        ],
        "bindings": []
      },
      "leadingBodySwift": "let title: String = {\n            if operatorIndex != 4 {\n                return \"\\(firstNumber) \\(operators[operatorIndex]) \\(secondNumber)\"\n            }\n            else {\n                return \"\\(operators[operatorIndex])\\(firstNumber)\"\n            }\n        }()\n        \n        let optionsInRow = optionCount % 3 == 0 ? 3 : 2\n        \n        let spacingBetweenOptions = optionCount % 3 == 0 ? -10.0 : 25.0\n        \n        let rows = stride(from: 0, to: choiceArray.count, by: optionsInRow).map { index -> [Int] in\n            let endIndex = min(index + optionsInRow, choiceArray.count)\n            return Array(choiceArray[index..<endIndex])\n        }"
    },
    {
      "name": "AnswerButton",
      "params": [],
      "body": {
        "type": "Custom",
        "props": {
          "raw": "Text(\"\\(number)\")\n            .frame(width: 110, height: 110)\n            .font(.system(size: 40, weight: .bold))\n            .foregroundColor(Color.white)\n            .background(Color.blue)\n            .clipShape(Circle())\n            .padding()"
        },
        "modifiers": [],
        "children": []
      },
      "state": {
        "stateVars": [],
        "bindings": []
      }
    },
    {
      "name": "SettingView",
      "params": [],
      "body": {
        "type": "NavigationView",
        "props": {},
        "modifiers": [],
        "children": [
          {
            "type": "VStack",
            "props": {
              "spacing": 40
            },
            "modifiers": [
              {
                "name": "frame",
                "args": [
                  "maxHeight: .infinity, alignment: .top"
                ]
              },
              {
                "name": "padding"
              }
            ],
            "children": [
              {
                "type": "Text",
                "props": {
                  "content": "Settings"
                },
                "modifiers": [
                  {
                    "name": "font",
                    "args": [
                      ".system(size: 35, weight: .bold"
                    ]
                  },
                  {
                    "name": "padding"
                  },
                  {
                    "name": "background",
                    "args": [
                      "Color.blue"
                    ]
                  },
                  {
                    "name": "foregroundColor",
                    "args": [
                      "Color.white"
                    ]
                  },
                  {
                    "name": "cornerRadius",
                    "args": [
                      "15"
                    ]
                  },
                  {
                    "name": "padding",
                    "args": [
                      ".top, 200"
                    ]
                  },
                  {
                    "name": "shadow",
                    "args": [
                      "radius: 5"
                    ]
                  },
                  {
                    "name": "frame",
                    "args": [
                      "width: 180, alignment: .leading"
                    ]
                  },
                  {
                    "name": "font",
                    "args": [
                      ".system(size: 25, weight: .medium"
                    ]
                  },
                  {
                    "name": "1000"
                  },
                  {
                    "name": "onChange",
                    "args": [
                      "of: difficulty"
                    ]
                  },
                  {
                    "name": "9"
                  },
                  {
                    "name": "frame",
                    "args": [
                      "width: 200, alignment: .leading"
                    ]
                  },
                  {
                    "name": "font",
                    "args": [
                      ".system(size: 25, weight: .medium"
                    ]
                  },
                  {
                    "name": "scaleEffect",
                    "args": [
                      "1 / 1.2"
                    ]
                  },
                  {
                    "name": "scaleEffect",
                    "args": [
                      "1.2"
                    ]
                  },
                  {
                    "name": "padding",
                    "args": [
                      ".leading, 12"
                    ]
                  },
                  {
                    "name": "padding",
                    "args": [
                      ".trailing, 35"
                    ]
                  },
                  {
                    "name": "padding",
                    "args": [
                      ".top, -10"
                    ]
                  },
                  {
                    "name": "30"
                  },
                  {
                    "name": "frame",
                    "args": [
                      "width: 200, alignment: .leading"
                    ]
                  },
                  {
                    "name": "font",
                    "args": [
                      ".system(size: 25, weight: .medium"
                    ]
                  },
                  {
                    "name": "scaleEffect",
                    "args": [
                      "1 / 1.2"
                    ]
                  },
                  {
                    "name": "scaleEffect",
                    "args": [
                      "1.2"
                    ]
                  },
                  {
                    "name": "padding",
                    "args": [
                      ".leading, 12"
                    ]
                  },
                  {
                    "name": "padding",
                    "args": [
                      ".trailing, 35"
                    ]
                  },
                  {
                    "name": "padding",
                    "args": [
                      ".top, -10"
                    ]
                  },
                  {
                    "name": "font",
                    "args": [
                      ".system(size: 28, weight: .bold"
                    ]
                  },
                  {
                    "name": "padding"
                  },
                  {
                    "name": "frame",
                    "args": [
                      "width: 260"
                    ]
                  },
                  {
                    "name": "background",
                    "args": [
                      "Color.green"
                    ]
                  },
                  {
                    "name": "foregroundColor",
                    "args": [
                      ".white"
                    ]
                  },
                  {
                    "name": "cornerRadius",
                    "args": [
                      "15"
                    ]
                  },
                  {
                    "name": "shadow",
                    "args": [
                      "radius: 5"
                    ]
                  }
                ],
                "children": []
              },
              {
                "type": "Text",
                "props": {
                  "content": "Options count: \\(optionsCount)"
                },
                "modifiers": [
                  {
                    "name": "frame",
                    "args": [
                      "width: 200, alignment: .leading"
                    ]
                  },
                  {
                    "name": "font",
                    "args": [
                      ".system(size: 25, weight: .medium"
                    ]
                  },
                  {
                    "name": "scaleEffect",
                    "args": [
                      "1 / 1.2"
                    ]
                  },
                  {
                    "name": "scaleEffect",
                    "args": [
                      "1.2"
                    ]
                  },
                  {
                    "name": "padding",
                    "args": [
                      ".leading, 12"
                    ]
                  },
                  {
                    "name": "padding",
                    "args": [
                      ".trailing, 35"
                    ]
                  },
                  {
                    "name": "padding",
                    "args": [
                      ".top, -10"
                    ]
                  },
                  {
                    "name": "30"
                  },
                  {
                    "name": "frame",
                    "args": [
                      "width: 200, alignment: .leading"
                    ]
                  },
                  {
                    "name": "font",
                    "args": [
                      ".system(size: 25, weight: .medium"
                    ]
                  },
                  {
                    "name": "scaleEffect",
                    "args": [
                      "1 / 1.2"
                    ]
                  },
                  {
                    "name": "scaleEffect",
                    "args": [
                      "1.2"
                    ]
                  },
                  {
                    "name": "padding",
                    "args": [
                      ".leading, 12"
                    ]
                  },
                  {
                    "name": "padding",
                    "args": [
                      ".trailing, 35"
                    ]
                  },
                  {
                    "name": "padding",
                    "args": [
                      ".top, -10"
                    ]
                  },
                  {
                    "name": "font",
                    "args": [
                      ".system(size: 28, weight: .bold"
                    ]
                  },
                  {
                    "name": "padding"
                  },
                  {
                    "name": "frame",
                    "args": [
                      "width: 260"
                    ]
                  },
                  {
                    "name": "background",
                    "args": [
                      "Color.green"
                    ]
                  },
                  {
                    "name": "foregroundColor",
                    "args": [
                      ".white"
                    ]
                  },
                  {
                    "name": "cornerRadius",
                    "args": [
                      "15"
                    ]
                  },
                  {
                    "name": "shadow",
                    "args": [
                      "radius: 5"
                    ]
                  }
                ],
                "children": []
              },
              {
                "type": "Text",
                "props": {
                  "content": "Victory score: \\(victoryScore)"
                },
                "modifiers": [
                  {
                    "name": "frame",
                    "args": [
                      "width: 200, alignment: .leading"
                    ]
                  },
                  {
                    "name": "font",
                    "args": [
                      ".system(size: 25, weight: .medium"
                    ]
                  },
                  {
                    "name": "scaleEffect",
                    "args": [
                      "1 / 1.2"
                    ]
                  },
                  {
                    "name": "scaleEffect",
                    "args": [
                      "1.2"
                    ]
                  },
                  {
                    "name": "padding",
                    "args": [
                      ".leading, 12"
                    ]
                  },
                  {
                    "name": "padding",
                    "args": [
                      ".trailing, 35"
                    ]
                  },
                  {
                    "name": "padding",
                    "args": [
                      ".top, -10"
                    ]
                  },
                  {
                    "name": "font",
                    "args": [
                      ".system(size: 28, weight: .bold"
                    ]
                  },
                  {
                    "name": "padding"
                  },
                  {
                    "name": "frame",
                    "args": [
                      "width: 260"
                    ]
                  },
                  {
                    "name": "background",
                    "args": [
                      "Color.green"
                    ]
                  },
                  {
                    "name": "foregroundColor",
                    "args": [
                      ".white"
                    ]
                  },
                  {
                    "name": "cornerRadius",
                    "args": [
                      "15"
                    ]
                  },
                  {
                    "name": "shadow",
                    "args": [
                      "radius: 5"
                    ]
                  }
                ],
                "children": []
              },
              {
                "type": "Text",
                "props": {
                  "content": "Start the game"
                },
                "modifiers": [
                  {
                    "name": "font",
                    "args": [
                      ".system(size: 28, weight: .bold"
                    ]
                  },
                  {
                    "name": "padding"
                  },
                  {
                    "name": "frame",
                    "args": [
                      "width: 260"
                    ]
                  },
                  {
                    "name": "background",
                    "args": [
                      "Color.green"
                    ]
                  },
                  {
                    "name": "foregroundColor",
                    "args": [
                      ".white"
                    ]
                  },
                  {
                    "name": "cornerRadius",
                    "args": [
                      "15"
                    ]
                  },
                  {
                    "name": "shadow",
                    "args": [
                      "radius: 5"
                    ]
                  }
                ],
                "children": []
              },
              {
                "type": "Color",
                "props": {
                  "name": "green"
                },
                "modifiers": [],
                "children": []
              }
            ]
          }
        ]
      },
      "state": {
        "stateVars": [
          {
            "name": "difficulty",
            "type": "Double",
            "initial": "20"
          },
          {
            "name": "optionsCount",
            "type": "Int",
            "initial": "4"
          },
          {
            "name": "victoryScore",
            "type": "Int",
            "initial": "10"
          }
        ],
        "bindings": []
      }
    }
  ],
  "entryViewName": "SettingView"
}
```

### Исходный Swift (фрагмент)

```swift

import SwiftUI

struct ContentView: View
{
    @State private var correctAnswer = 0
    @State private var firstNumber = 0
    @State private var secondNumber = 0
    @State private var score = 0
    @State private var choiceArray: [Int] = []
    @State private var operators: [String] = ["+", "-", "*", "/", "√"]
    @State private var operatorIndex = 0
    
    private var difficulty = 100
    private var optionCount = 4
    private var victoryScore = 15
    
    init(_ difficulty: Int, _ optionCount: Int, _ victoryScore: Int) {
        self.difficulty = difficulty
        self.optionCount = optionCount
        self.victoryScore = victoryScore
        operatorIndex = Int.random(in: 0...4)
    }
    
    var body: some View {
        let title: String = {
            if operatorIndex != 4 {
                return "\(firstNumber) \(operators[operatorIndex]) \(secondNumber)"
            }
            else {
                return "\(operators[operatorIndex])\(firstNumber)"
            }
        }()
        
        let optionsInRow = optionCount % 3 == 0 ? 3 : 2
        
        let spacingBetweenOptions = optionCount % 3 == 0 ? -10.0 : 25.0
        
        let rows = stride(from: 0, to: choiceArray.count, by: optionsInRow).map { index -> [Int] in
            let endIndex = min(index + optionsInRow, choiceArray.count)
            return Array(choiceArray[index..<endIndex])
        }
        
        VStack {
            Text(title)
                .font(.largeTitle)
                .bold()
            
            VStack(spacing: 20) {
                ForEach(0..<rows.count, id: \.self) { rowIndex in
                    HStack(spacing: spacingBetweenOptions) {
                        if rows[rowIndex].count == 1 {
                            Spacer()
                            Button {
                                answerIsCorrect(answer: rows[rowIndex][0])
                                generateAnswers()
                            } label: {
                   
```

---
## Шаг 2: Rule Mapper (UI-IR → скелет + unresolved)

| Параметр | Значение |
|----------|----------|
| Компонентов в скелете | 3 |
| Неразрешённых фрагментов | 45 |
| Entry (для App.tsx) | SettingView |

### Список unresolved

| View | Расположение | Описание |
|------|--------------|----------|
| ContentView | body | Unresolved modifier: .onAppear |
| ContentView | body.children[0] | Unresolved modifier: .font |
| ContentView | body.children[0] | Unresolved modifier: .bold |
| AnswerButton | body | Custom/unparsed body |
| SettingView | body.children[0].children[0] | Unresolved modifier: .font |
| SettingView | body.children[0].children[0] | Unresolved modifier: .foregroundColor |
| SettingView | body.children[0].children[0] | Unresolved modifier: .cornerRadius |
| SettingView | body.children[0].children[0] | Unresolved modifier: .shadow |
| SettingView | body.children[0].children[0] | Unresolved modifier: .font |
| SettingView | body.children[0].children[0] | Unresolved modifier: .1000 |
| SettingView | body.children[0].children[0] | Unresolved modifier: .onChange |
| SettingView | body.children[0].children[0] | Unresolved modifier: .9 |
| SettingView | body.children[0].children[0] | Unresolved modifier: .font |
| SettingView | body.children[0].children[0] | Unresolved modifier: .scaleEffect |
| SettingView | body.children[0].children[0] | Unresolved modifier: .scaleEffect |
| SettingView | body.children[0].children[0] | Unresolved modifier: .30 |
| SettingView | body.children[0].children[0] | Unresolved modifier: .font |
| SettingView | body.children[0].children[0] | Unresolved modifier: .scaleEffect |
| SettingView | body.children[0].children[0] | Unresolved modifier: .scaleEffect |
| SettingView | body.children[0].children[0] | Unresolved modifier: .font |
| SettingView | body.children[0].children[0] | Unresolved modifier: .foregroundColor |
| SettingView | body.children[0].children[0] | Unresolved modifier: .cornerRadius |
| SettingView | body.children[0].children[0] | Unresolved modifier: .shadow |
| SettingView | body.children[0].children[1] | Unresolved modifier: .font |
| SettingView | body.children[0].children[1] | Unresolved modifier: .scaleEffect |
| SettingView | body.children[0].children[1] | Unresolved modifier: .scaleEffect |
| SettingView | body.children[0].children[1] | Unresolved modifier: .30 |
| SettingView | body.children[0].children[1] | Unresolved modifier: .font |
| SettingView | body.children[0].children[1] | Unresolved modifier: .scaleEffect |
| SettingView | body.children[0].children[1] | Unresolved modifier: .scaleEffect |
| SettingView | body.children[0].children[1] | Unresolved modifier: .font |
| SettingView | body.children[0].children[1] | Unresolved modifier: .foregroundColor |
| SettingView | body.children[0].children[1] | Unresolved modifier: .cornerRadius |
| SettingView | body.children[0].children[1] | Unresolved modifier: .shadow |
| SettingView | body.children[0].children[2] | Unresolved modifier: .font |
| SettingView | body.children[0].children[2] | Unresolved modifier: .scaleEffect |
| SettingView | body.children[0].children[2] | Unresolved modifier: .scaleEffect |
| SettingView | body.children[0].children[2] | Unresolved modifier: .font |
| SettingView | body.children[0].children[2] | Unresolved modifier: .foregroundColor |
| SettingView | body.children[0].children[2] | Unresolved modifier: .cornerRadius |
| SettingView | body.children[0].children[2] | Unresolved modifier: .shadow |
| SettingView | body.children[0].children[3] | Unresolved modifier: .font |
| SettingView | body.children[0].children[3] | Unresolved modifier: .foregroundColor |
| SettingView | body.children[0].children[3] | Unresolved modifier: .cornerRadius |
| SettingView | body.children[0].children[3] | Unresolved modifier: .shadow |

### Скелет компонентов (кратко)

#### ContentView

**Props interface:**
```ts
interface ContentViewProps {
  // no props
}
```

**State hooks:**
- `const [choiceArray, setChoiceArray] = useState<unknown>([]);`
- `const [operators, setOperators] = useState<unknown>(["+", "-", "*", "/", "√"]);`
- `const [correctAnswer, setCorrectAnswer] = useState<number>(0);`
- `const [firstNumber, setFirstNumber] = useState<number>(0);`
- `const [secondNumber, setSecondNumber] = useState<number>(0);`
- `const [score, setScore] = useState<number>(0);`
- `const [operatorIndex, setOperatorIndex] = useState<number>(0);`

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* ForEach */}

      </div>
    </div>
  </div>
```

#### AnswerButton

**Props interface:**
```ts
interface AnswerButtonProps {
  // no props
}
```

**State hooks:**
- нет

**JSX skeleton (фрагмент):**
```tsx
    {/* Custom: Text("\(number)")
            .frame(width: 110, height: 110)
            .font( */}
```

#### SettingView

**Props interface:**
```ts
interface SettingViewProps {
  // no props
}
```

**State hooks:**
- `const [difficulty, setDifficulty] = useState<number>(20);`
- `const [optionsCount, setOptionsCount] = useState<number>(4);`
- `const [victoryScore, setVictoryScore] = useState<number>(10);`

**JSX skeleton (фрагмент):**
```tsx
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        <span>Settings</span>
        <span>Options count: \(optionsCount)</span>
        <span>Victory score: \(victoryScore)</span>
        <span>Start the game</span>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: '#008000', zIndex: 0 }} />
      </div>
    </div>
  </div>
```


---
## Шаг 3: RAG Retriever

| Параметр | Значение |
|----------|----------|
| Число подобранных примеров | 3 |
| ID примеров | vstack-text, state-button, binding |
| Длина RAG-контекста (символов) | 908 |

### Теги по примерам

- **vstack-text**: layout, VStack, Text
- **state-button**: state, Button, @State
- **binding**: @Binding, state


---
## Шаг 4: LLM Generator (OpenRouter)

| Параметр | Значение |
|----------|----------|
| Модель | — |
| Длина промпта (символов) | 16043 |
| Длина ответа (символов) | 7698 |
| Сгенерировано файлов | 9 |

### Список сгенерированных файлов

| Путь | Размер (символов) |
|------|-------------------|
| package.json | 314 |
| vite.config.ts | 135 |
| tsconfig.json | 244 |
| index.html | 282 |
| src/main.tsx | 205 |
| src/App.tsx | 154 |
| src/views/ContentView.tsx | 1131 |
| src/views/AnswerButton.tsx | 4684 |
| src/views/SettingView.tsx | 432 |

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