import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// Rehype plugin: rewrites inline markdown <img src="/assets/..."> to use
// Vercel's /_vercel/image endpoint so they're served as WebP with CDN caching.
function rehypeVercelImages() {
  return (tree) => {
    function walk(node) {
      if (
        node.tagName === 'img' &&
        typeof node.properties?.src === 'string' &&
        node.properties.src.startsWith('/assets/')
      ) {
        const src = encodeURIComponent(node.properties.src);
        node.properties.src = `/_vercel/image?url=${src}&w=1200&q=80`;
        node.properties.loading = node.properties.loading ?? 'lazy';
        node.properties.decoding = 'async';
      }
      if (Array.isArray(node.children)) node.children.forEach(walk);
    }
    walk(tree);
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://dennisozmen.com',
  output: 'static',
  adapter: vercel({
    imageService: true,
  }),
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [rehypeVercelImages],
  },
  server: {
    port: 4321,
    host: true
  },
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    }
  }
});