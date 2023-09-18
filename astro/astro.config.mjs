import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://intersectionalityclub.com/",
  // Your public domain, e.g.: https://my-site.dev/
  integrations: [sitemap(), react(), tailwind()]
});