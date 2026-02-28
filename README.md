# RaisaRegress

Мультимовний вебсайт для приватної практики регресивної терапії з адміністративною панеллю для керування цінами та зображеннями.

## Про проєкт

Сайт реалізований на Next.js (App Router) з локалізацією `uk/en/it`, SEO-оптимізацією та серверними діями для безпечного редагування контенту з адмінки.

## Основні можливості

- Публічний лендинг для трьох мов: `uk`, `en`, `it`
- Адмін-панель з авторизацією через `better-auth`
- Оновлення цін через серверні дії
- Збереження цін у PostgreSQL (Neon) через `drizzle-orm`
- Збереження зображень у `public/uploads`
- Кешування контенту через Next.js cache components (`use cache`, `cacheTag`, `updateTag`)
- Генерація `sitemap.xml` та `robots.txt` через `next-sitemap`

## Технології

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- next-intl
- better-auth
- drizzle-orm
- @neondatabase/serverless

## Зберігання даних

- `site_prices` (PostgreSQL): ціни послуг по мовах
- `data/site-content.json`: тільки `updatedAt` та шляхи до зображень
- `public/uploads`: завантажені файли з адмінки

## Змінні середовища

Для локального запуску потрібні змінні в `.env.local`:

- `ADMIN_LOGIN`
- `ADMIN_PASSWORD`
- `BETTER_AUTH_SECRET`
- `BETTER_AUTH_URL`
- `DATABASE_URL`

Додатково можуть бути присутні `POSTGRES_*` / `PG*` змінні від провайдера.

## Локальний запуск

```bash
npm install
npm run dev
```

Відкриття у браузері:

- Публічний сайт: `http://localhost:3000/uk` (або `/en`, `/it`)
- Адмінка: `http://localhost:3000/uk/admin`

## Скрипти

- `npm run dev` - локальний режим
- `npm run build` - production build
- `npm run start` - запуск production build
- `npm run postbuild` - генерація sitemap/robots

## SEO

Реалізовано:

- canonical + hreflang для локалей
- metadata для ключових сторінок
- structured data (JSON-LD) на головній
- sitemap і robots

## Розробник

**Serhii Oberemchuk**

- LinkedIn: https://www.linkedin.com/in/serhii-oberemchuk
