# Cat Facts App

React + TypeScript приложение для отображения интересных фактов о котах с использованием Cat Facts API.

## Структура проекта
├── components/ # React компоненты
│ ├── common/ # Переиспользуемые UI компоненты
│ │ ├── Button/ # Кнопка
│ │ └── Error/ # Компонент ошибок
│ ├── api-button
│ │ └── ApiButton/ # Главный компонент с логикой API
│ ├── api-data
│ │ └── ApiData/ # Компонент отображения данных
├── hooks/ # Кастомные React хуки
│ └── useApi.ts # Логика получения данных API
├── services/ # API сервисы
│ └── CatApi.ts # Интеграция с Cat Facts API
├── types/ # TypeScript типы
│ └── api.ts # Типы для API
├── constants/ # Константы приложения
│ └── api.ts # URL API и конфигурация
└── 