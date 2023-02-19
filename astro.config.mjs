import { defineConfig } from 'astro/config';
// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  // site: 'https://astro-blog-cip.netlify.app',
  integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), react()]
});