import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import lottie from "astro-integration-lottie";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://test.bbauti.ar',
  integrations: [tailwind(), icon(), sitemap(), robotsTxt(), lottie()]
});