// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');

if (!env.SITE_URL) {
    throw new Error('Missing SITE_URL environment variable. Please set it in a .env file or as an environment variable.');
}

export default defineConfig({
  site: env.SITE_URL,
  base: env.SITE_BASE || '/',
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});