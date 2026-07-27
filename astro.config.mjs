// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite'
import sanity from '@sanity/astro'

// The @sanity/astro integration reads its config from `process.env` at
// astro.config.mjs evaluation time, which runs before Astro's own .env
// loading — load it explicitly so `npm run dev`/`build` pick up local values.
try {
  process.loadEnvFile()
} catch {
  // no .env file (e.g. production, where env vars are set by the host) — fine
}

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    react(),
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID ?? '',
      dataset: process.env.PUBLIC_SANITY_DATASET ?? 'production',
      apiVersion: process.env.SANITY_API_VERSION ?? '2024-01-01',
      studioBasePath: '/studio',
      useCdn: false,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
