import { defineConfig } from "vitepress";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "co-creating our city",
  description: "Youth and Decision-Makers Shaping Participation and Change ",
  appearance: false,
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "../"),
      },
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/docs/guide/getting-started" },
      { text: "Reference", link: "/docs/reference/case-studies" },
    ],

    sidebar: {
      "/docs/": [
        {
          text: "Guide",
          items: [
            { text: "Getting Started", link: "/docs/guide/getting-started" },
            { text: "Framework", link: "/docs/guide/framework" },
          ],
        },
        {
          text: "Reference",
          items: [
            { text: "Case Studies", link: "/docs/reference/case-studies" },
          ],
        },
      ],
    },

    // socialLinks: [
    //    { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],
  },
});
