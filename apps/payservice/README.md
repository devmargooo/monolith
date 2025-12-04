# Pay service

## Содержание

1. [О проекте](#о-проекте)
2. [Установка](#установка)
3. [Запуск](#запуск)
4. [Тестирование](#тестирование)
5. [Документация](#документация)
6. [Лицензия](#лицензия)

## О проекте

Сервис приема платежей с использованием YooMoney.

Стек:

- **Nx** – монорепозиторий для управления проектом
- **NestJS** – бэкенд на Node.js

Основные возможности:  
✅ Прием платежей через YooMoney API

## Установка

```bash
   git clone git@github.com:devmargooo/monolith.git
   cd monolith
   npm i
```

## Запуск

```bash
   npx nx serve payservice
```

## Тестирование

```bash
   npx nx test payservice
```

## Документация

- [Architecture Decisions](docs/adr/)

## Лицензия

[MIT](https://mit-license.org/)
