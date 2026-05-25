# Spotlight Advertising

Production Next.js app for the Spotlight OOH outdoor advertising website.

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

Open `http://localhost:3000` after starting the dev server.

## Project Structure

```text
app/                 App Router routes, metadata, loading, error, sitemap, robots
components/          Server-first UI sections and layout components
components/forms/    Small client form island for WhatsApp lead submission
lib/site.ts          Shared site configuration and route constants
public/              Static assets served from the site root
```

## Docker

Build and run the production image:

```bash
docker compose up --build
```

The container runs the standalone Next.js server on port `3000`.

## Production Notes

- Keep shared business constants in `lib/site.ts`.
- Prefer Server Components by default; add `"use client"` only for browser-only behavior.
- Run `npm run lint` and `npm run build` before deployment.
