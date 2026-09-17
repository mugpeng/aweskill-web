import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://aweskill.wehuman.top',
  vite: {
    plugins: [tailwindcss()],
  },
});
