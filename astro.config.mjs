import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }), 
    react()
  ],
  site: 'https://lawnsallday.com',
  output: 'static',
  build: {
    format: 'directory'
  }
});