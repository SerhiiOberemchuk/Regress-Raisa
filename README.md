# RaisaRegress

Multilingual website for a private regression therapy practice.

## Project Overview

This project is built with Next.js App Router and contains:

- public marketing website in 3 locales: `uk`, `en`, `it`
- admin authentication with `better-auth`
- admin panel for service prices management
- service prices stored in PostgreSQL (Neon) via `drizzle-orm`
- SEO setup: metadata, hreflang/canonical, sitemap, robots

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- next-intl
- better-auth
- drizzle-orm
- @neondatabase/serverless

## Data Storage

- `site_prices` (PostgreSQL): all service prices per locale
- images are static defaults in code/public assets

## Environment Variables

Required in `.env.local`:

- `ADMIN_LOGIN`
- `ADMIN_PASSWORD`
- `BETTER_AUTH_SECRET`
- `BETTER_AUTH_URL`
- `DATABASE_URL`

Provider-specific `POSTGRES_*` / `PG*` variables can also be present.

## Local Development

```bash
npm install
npm run dev
```

Open:

- website: `http://localhost:3000/uk` (or `/en`, `/it`)
- admin: `http://localhost:3000/uk/admin`

## Scripts

- `npm run dev` - development
- `npm run build` - production build
- `npm run start` - run production build
- `npm run postbuild` - generate sitemap/robots

## Developer

**Serhii Oberemchuk**

- LinkedIn: https://www.linkedin.com/in/serhii-oberemchuk
