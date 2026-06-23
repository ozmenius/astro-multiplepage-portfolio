import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Build-time rehype plugin: converts inline markdown images to WebP and
// rewrites them as <picture> with srcset. Uses sharp (Astro's own dependency)
// — no extra packages needed. Generated WebP files are saved to public/ and
// committed alongside the originals so they're available on every host.
function rehypeResponsiveImages() {
  return async (tree) => {
    // Collect all inline post images without needing unist-util-visit
    const nodes = [];
    function walk(node, parent, index) {
      if (
        node.tagName === 'img' &&
        typeof node.properties?.src === 'string' &&
        node.properties.src.startsWith('/assets/images/posts/')
      ) {
        nodes.push({ node, parent, index });
      }
      if (Array.isArray(node.children)) {
        node.children.forEach((child, i) => walk(child, node, i));
      }
    }
    walk(tree, null, 0);
    if (nodes.length === 0) return;

    const sharp = (await import('sharp')).default;
    const { existsSync } = await import('fs');
    const { join, basename, extname } = await import('path');

    const PUBLIC_DIR = new URL('./public', import.meta.url).pathname;
    const IMG_DIR = join(PUBLIC_DIR, 'assets/images/posts');
    const WIDTHS = [400, 800, 1200];
    const SIZES = '(min-width: 896px) 896px, 100vw';

    await Promise.all(
      nodes.map(async ({ node, parent, index }) => {
        const src = node.properties.src;
        const srcPath = join(PUBLIC_DIR, src);
        if (!existsSync(srcPath)) return;

        const stem = basename(src, extname(src));

        const srcsetParts = await Promise.all(
          WIDTHS.map(async (w) => {
            const name = `${stem}-${w}w.webp`;
            const dest = join(IMG_DIR, name);
            if (!existsSync(dest)) {
              await sharp(srcPath)
                .resize(w, null, { withoutEnlargement: true })
                .webp({ quality: 80 })
                .toFile(dest);
            }
            return `/assets/images/posts/${name} ${w}w`;
          })
        );

        parent.children[index] = {
          type: 'element',
          tagName: 'picture',
          properties: {},
          children: [
            {
              type: 'element',
              tagName: 'source',
              properties: {
                type: 'image/webp',
                srcset: srcsetParts.join(', '),
                sizes: SIZES,
              },
              children: [],
            },
            {
              ...node,
              properties: {
                ...node.properties,
                loading: node.properties.loading ?? 'lazy',
                decoding: 'async',
              },
            },
          ],
        };
      })
    );
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://dennisozmen.com',
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [rehypeResponsiveImages],
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
