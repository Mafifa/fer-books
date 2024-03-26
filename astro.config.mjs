import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless';

const LIVE_URL = 'http://fer-books.github.io/'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: vercel(),
  site: LIVE_URL,
  base: 'fer-books',
})
