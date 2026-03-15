# Датасеты для экспериментов конвертации SwiftUI → React

**Всего: 100+ примеров** (по сценариям S1–S6).

Каждая папка соответствует сценарию проверки:

| Сценарий | Папка | Описание |
|----------|--------|----------|
| **S1** | `S1_layout/` | Только UI-отображение: VStack, HStack, ZStack, Text, Image, модификаторы (padding, frame, font, цвета). |
| **S2** | `S2_state_events/` | Состояния и события: @State, Button, Toggle, onAppear. |
| **S3** | `S3_binding/` | Привязки: @Binding, родитель–дочерний обмен данными. |
| **S4** | `S4_list_foreach/` | Списки: List, ForEach, секции. |
| **S5** | `S5_navigation/` | Навигация: NavigationView, NavigationLink. |
| **S6** | `S6_animations/` | Простые анимации: withAnimation, opacity, offset, scaleEffect. |

**Количество примеров по сценариям:** S1_layout: 22, S2_state_events: 20, S3_binding: 15, S4_list_foreach: 20, S5_navigation: 15, S6_animations: 15 — **всего 107**.

Запуск конвертации по сценарию (пример для S1):

```bash
node dist/cli.js datasets/S1_layout/vstack_simple.swift --out output-s1-1
```

Или пакетно по всем файлам сценария (скрипт можно добавить в package.json).
