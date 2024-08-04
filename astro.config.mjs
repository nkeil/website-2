import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://nickkeil.com',
  markdown: {
    shikiConfig: {
      theme: 'rose-pine-dawn',
      langs: ['typescript', 'sql'],
    },
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank' }]],
  },
  integrations: [sitemap()],
});
