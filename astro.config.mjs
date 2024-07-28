import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'rose-pine-dawn',
      langs: ['typescript', 'sql'],
    },
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank' }]],
  },
});
