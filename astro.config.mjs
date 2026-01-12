import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://bbauti.ar',
  output: 'static',
  integrations: [
    icon({
      iconDir: "src/icons",
      include: {
        devicon: ["*"],
        mdi: ["*"],
        ph: ["*"]
      }
    }),
    sitemap({
      serialize(item) {
        item.changefreq = 'monthly';
        item.priority = 1.0;
        item.lastmod = new Date();
        return item;
      },
    }),
    robotsTxt({
      sitemap: true,
      policy: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
    split: true,
    assets: '_astro'
  },
  compilerOptions: {
    target: 'es2020'
  },
  image: {
    domains: ['avatars.githubusercontent.com']
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      target: 'es2020',
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'gsap': ['gsap'],
            'locomotive-scroll': ['locomotive-scroll'],
            'split-type': ['split-type']
          }
        }
      }
    },
    esbuild: {
      target: 'es2020'
    }
  }
});