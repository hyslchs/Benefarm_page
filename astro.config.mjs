// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://hyslchs.github.io",
  base: "/Benefarm_page",
  integrations: [icon()],
  vite: {
  base: "/Benefarm_page/",
  plugins: [tailwindcss()],
  },
});