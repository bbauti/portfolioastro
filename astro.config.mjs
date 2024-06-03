import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import lottie from "astro-integration-lottie";
import paraglide from "@inlang/paraglide-astro"

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  i18n: {
		locales: ['en', 'es'],
		defaultLocale: "en",
	},

  site: 'https://bbauti.ar',
  integrations: [tailwind(), icon(), sitemap(), robotsTxt(), lottie(), paraglide({
    project: "./project.inlang",
    outdir: "./src/paraglide",
  })],
  renderers: [],
});