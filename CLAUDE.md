# Project conventions

- **No workarounds without explicit approval.** If the "correct"/native way to
  do something isn't available (missing official support, a tool doesn't
  cover this framework, etc.), do not silently reach for a workaround or
  hack. Stop, explain the gap and the real options, and let the user choose.
  Workarounds are only acceptable when the user has explicitly approved one
  for that specific situation — never the default.

- **State the plan, wait for explicit go-ahead, before executing anything
  non-trivial.** This includes schema changes, framework/CMS decisions, and
  anything else with real cost if wrong — not just large migrations. Don't
  build speculatively to "show" an option; describe it first.

- **Never silently reverse or drop a previous decision.** If new information
  means an earlier decision (yours or the user's) should change, say so
  explicitly — name the decision, name what changes, and why — before acting
  on the new direction. Don't let two threads (e.g. a framework choice and a
  CMS choice) stay silently coupled or silently decoupled.

## Decisions log

Check this before saying anything that touches these — do not re-litigate or
re-open an item marked Decided without the user raising it first.

- **CMS: Prismic.** Decided. Sanity is ruled out — not conditional on
  anything, not up for re-evaluation based on what the visual design turns
  out to need. Reason: Sanity's Portable Text (even extended with custom
  block types) was too restrictive/form-based for the flexible case-study
  composition wanted.
- **Framework: Next.js.** Decided, coupled to the CMS decision — Prismic's
  Slice Machine (visual block-authoring tool) has no official Astro adapter,
  only Next.js/Nuxt/SvelteKit. The current Astro+Sanity app is deprecated;
  the rebuild happens on a separate branch.
- **Sequencing: visual design first, then build Prismic's content model
  (Custom Types/Slices) to match what the design actually needs** — not the
  other way around. Don't build CMS schema speculatively ahead of the
  design.
- **Slice Machine local access:** the user has no local machine to run
  `npx slicemachine` on. Custom Types/Slices will need to be defined via
  Prismic's hosted web dashboard (Custom Type builder) instead of Slice
  Machine's local tool — this is a first-party, fully-supported alternative,
  not a workaround. Confirm with the user before assuming this is still the
  case if it comes up again.
- **Visual design reference:** guglieri.com (screenshots shared in this
  conversation: About page, Home/Work page, Feed/archive page) — restrained,
  editorial, white background, generous whitespace. Not yet started as of
  this writing.
