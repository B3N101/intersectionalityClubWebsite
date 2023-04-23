import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import sanity from 'astro-sanity';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-sanity-minimal-starter.netlify.app/",
  // Your public domain, e.g.: https://my-site.dev/
  integrations: [sitemap(), react(), sanity({
    projectId: "e5w2c1ol",
    dataset: "production",
    apiVersion: "v2021-03-25",
    useCdn: true
  }), tailwind()]
});