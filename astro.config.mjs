import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

const LIVE_URL = 'http://fer-books.github.io/'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  site: LIVE_URL,
  base: 'fer-books',
})
