import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://test.bbauti.ar',
  output: 'static',
  integrations: [tailwind(), icon({
    iconDir: "src/icons",
    include: {
      devicon: ["*"],
      mdi: ["*"],
      ph: ["*"]
    }
  }), sitemap(), robotsTxt()],
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