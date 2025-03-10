// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

import tailwind from '@astrojs/tailwind';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind()],
  adapter: cloudflare(),
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    fallback: {
      en: 'es'
    },
    routing: {
      fallbackType: 'rewrite'
    }
  }
});