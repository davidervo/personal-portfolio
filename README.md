# Portfolio

Personal portfolio + blog. Next.js (App Router), Tailwind, Framer Motion +
GSAP for motion, Prismic as the CMS (not wired up yet — see status below),
deployed on Vercel.

See `CLAUDE.md` for the project's decisions log and conventions — check it
before assuming something is still open or still decided.

## Status

This is the **visual design pass**, built before any CMS wiring per the
project's agreed sequencing: nail the design first, then build Prismic's
content model to match what the design actually needs. Every page currently
renders static placeholder content from `src/lib/placeholder-data.ts` —
there is no live data, no Prismic client, and no environment variables to
set up yet.

Reference: guglieri.com (screenshots in the project history) — restrained,
editorial, white background, mixed-weight hero typography, grid-based work
cards, a label-left/content-right structural pattern (see `Section.tsx`)
used on About, a thumbnail grid under each work-experience entry, and a
masonry layout for the writing index. Explicitly **not** copied: guglieri's
kinetic word-by-word headline animation or live clock.

## Getting started

```bash
npm install
npm run dev
```

Site: http://localhost:3000

## Project structure

```
src/
  app/            Routes (App Router) — page.tsx per route, shared layout.tsx
  components/      Shared UI components
  lib/
    nav.ts               Fixed page order — nav + sequential "next" link
    placeholder-data.ts   Static content standing in for Prismic, for now
```

## Sitemap

```
Home                    hero statement + featured work grid
Work (index)            grouped Case studies / More work when featured is mixed
About                   two photos + bio ("Info") + work-experience timeline
Services                intro + offerings + CTA
Writing (index)         masonry post grid
Contact
```

Project detail, blog post detail, and the password-gate flow from the
previous (deprecated) Astro build aren't rebuilt yet — out of scope for the
visual pass, come back once the design is confirmed and Prismic is wired up.

## Next steps (not started)

- Iterate on this visual design with the user
- Once confirmed: define Prismic Custom Types/Slices to match what the
  design needs (via Prismic's hosted dashboard — no local machine available
  for Slice Machine, see CLAUDE.md)
- Wire up `@prismicio/client`, replace placeholder data with real fetches
- Rebuild project/post detail pages and the password-gate flow
