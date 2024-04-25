import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://TimmyJonesP.github.io",
  base: "White Palace",
  integrations: [tailwind()],
});
