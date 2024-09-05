import { defineConfig } from "astro/config";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [partytown()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-cn", "zh-tw"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
