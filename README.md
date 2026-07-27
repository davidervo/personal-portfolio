# Portfolio

Personal portfolio + blog. Astro, Tailwind, React islands (Framer Motion, GSAP
for scroll-driven case studies), Sanity Studio embedded at `/studio`, deployed
on Vercel.

## Getting started

```bash
npm install
cp .env.example .env   # fill in your Sanity project ID (see below)
npm run dev
```

- Site: http://localhost:4321
- Sanity Studio: http://localhost:4321/studio

## Sanity project setup

This repo doesn't include a Sanity project — create one and point the app at it:

1. [Create a Sanity project](https://www.sanity.io/manage) (or `npx sanity@latest init` from this
   folder, which can also scaffold the dataset for you).
2. Copy `.env.example` to `.env` and fill in `PUBLIC_SANITY_PROJECT_ID` and
   `PUBLIC_SANITY_DATASET` (defaults to `production`). These are `PUBLIC_`-
   prefixed on purpose — the embedded Studio runs client-side in the browser,
   so its project ID/dataset need to be in the browser bundle. That's fine:
   neither is a secret (Sanity's client-side API is designed to be called
   from the browser with just these two values).
3. In the Sanity project's [CORS settings](https://www.sanity.io/manage), add
   `http://localhost:4321` (and your deployed domain later) as an allowed
   origin, with credentials enabled — required for the embedded Studio to
   authenticate.
4. Run `npm run dev` and open `/studio` to sign in and start adding content.
   `About`, `Home`, and `Services` are pinned as singletons — there's no
   "Create" button for them, only one of each can exist.

Schema source lives in `/schemas` (`project.ts`, `about.ts`,
`experienceEntry.ts`, `home.ts`, `post.ts`, `services.ts`), registered in
`sanity.config.ts` at the repo root. The desk structure that pins the
singletons is in `deskStructure.ts`.

## Environment variables

```
PUBLIC_SANITY_PROJECT_ID= # from sanity.io/manage — not a secret, safe client-side
PUBLIC_SANITY_DATASET=production
SANITY_API_VERSION=2024-01-01
PORTFOLIO_PASSWORD=       # sitewide password for protected case studies — server-only, keep unprefixed
```

Set the same values in the Vercel project's Environment Variables (Settings →
Environment Variables), checked for whichever environments you deploy to
(Production and/or Preview). Changing env vars doesn't rebuild an existing
deployment — redeploy after adding/editing them.

## Password-protected case studies

Projects with `visibility: protected` render a password gate
(`src/components/PasswordGate.astro`) instead of the case study. Submitting
the form posts to `src/pages/api/unlock.ts`, which checks the password
against the project's `password` override field if set, otherwise the
sitewide `PORTFOLIO_PASSWORD`, and sets an httpOnly cookie on success. Because
of this, the app runs in `server` output mode (see `astro.config.mjs`) rather
than static — the whole site is server-rendered on Vercel, not just the
gated pages.

## Project structure

```
schemas/            Sanity schema types (project, about, experienceEntry,
                     home, post, services)
sanity.config.ts     Sanity Studio config (root, per @sanity/astro convention)
deskStructure.ts     Desk structure — pins about/home/services as singletons
src/
  layouts/           Base page layout (header, footer, next-page link)
  components/        Shared Astro/React components
  lib/                Sanity client, GROQ queries, shared types
  pages/              Routes — see sitemap below
```

## Sitemap

```
Home                    hero (home.ts singleton) + featured work grid
Work (index)            grouped Case studies / More work when `featured` is mixed
  └─ Project detail     case study template (teaser / public / protected)
About                   bio + work-experience timeline (thumbnail grid per role)
Services                intro + offerings + CTA (services.ts singleton)
Writing (index)         masonry post grid
  └─ Blog post          post.ts: title, slug, cover, excerpt, body, tags, date
Contact
```

Home, Services, and the blog (`post.ts`) are first, reasonable versions built
from guglieri.com as a structural reference (hero typography, featured-work
grid, timeline thumbnails, masonry writing index) — **not** its kinetic
word-by-word headline animation or live clock, which the brief explicitly
rejected. Services has no direct reference on that site (no equivalent page
there) — its copy/structure is the least-grounded piece here and the most
worth revisiting.

## Open decisions

Confirm before finalizing:

- Services page copy and structure (built generic — intro, offerings, CTA)
- Home hero copy (`home` singleton — currently empty/fallback until filled in via Studio)
- Visual design tokens: color palette, typeface pairing, spacing scale (the
  current styling is placeholder — `src/styles/global.css`)
