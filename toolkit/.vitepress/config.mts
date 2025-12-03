import { defineConfig } from "vitepress";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Co-Creating Our City",
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
      {
        text: "Toolkit",
        link: "/docs/introduction/what-is-co-creating-our-city.html",
      },
    ],

    sidebar: {
      "/docs/": [
        {
          text: "Introduction",
          items: [
            {
              text: "What is 'Co-Creating Our City'?",
              link: "/docs/introduction/what-is-co-creating-our-city",
            },
            {
              text: "About this toolkit",
              link: "/docs/introduction/about-this-toolkit",
            },
          ],
        },
        {
          text: "I. Making the case",
          items: [
            {
              text: "Why we need 'Co-Creating Our City'",
              link: "/docs/making-the-case/why-we-need-co-creating-our-city",
            },
            {
              text: "Advantages of running your own project",
              link: "/docs/making-the-case/advantages-of-running-your-own-project",
            },
          ],
        },
        {
          text: "II. Setting up your project",
          items: [
            {
              text: "Overview",
              link: "/docs/setting-up-your-project/index",
            },
            {
              text: "Defining goals and scope",
              link: "/docs/setting-up-your-project/defining-goals-and-scope",
            },
            {
              text: "Building the project team",
              link: "/docs/setting-up-your-project/building-the-project-team",
            },
            {
              text: "Securing buy-in",
              link: "/docs/setting-up-your-project/securing-buy-in",
            },
            {
              text: "Planning duration and timing",
              link: "/docs/setting-up-your-project/planning-duration-and-timing",
            },
            {
              text: "Budgeting for your project",
              link: "/docs/setting-up-your-project/budgeting-for-your-project",
            },
          ],
        },
        {
          text: "III. Bringing young people and city leaders together",
          items: [
            {
              text: "Overview",
              link: "/docs/bringing-young-people-and-city-leaders-together/index",
            },
            {
              text: "Recruiting co-researchers",
              link: "/docs/bringing-young-people-and-city-leaders-together/recruiting-co-researchers",
            },
            {
              text: "Legal and ethical considerations",
              link: "/docs/bringing-young-people-and-city-leaders-together/legal-and-ethical-considerations",
            },
            {
              text: "Motivation, inclusion, and accessibility",
              link: "/docs/bringing-young-people-and-city-leaders-together/motivation-inclusion-and-accessibility",
            },
            {
              text: "Commitment and communication",
              link: "/docs/bringing-young-people-and-city-leaders-together/commitment-and-communication",
            },
            {
              text: "Scheduling workshops and activities",
              link: "/docs/bringing-young-people-and-city-leaders-together/scheduling-workshops-and-activities",
            },
          ],
        },
        {
          text: "IV. Doing participatory research",
          items: [
            {
              text: "Overview",
              link: "/docs/doing-participatory-research/index",
            },
            {
              text: "What is participatory research?",
              link: "/docs/doing-participatory-research/what-is-participatory-research",
            },
            {
              text: "Five steps to organizing your project",
              link: "/docs/doing-participatory-research/five-steps-to-organizing-your-project",
            },
            {
              text: "From steps to action",
              link: "/docs/doing-participatory-research/from-steps-to-action",
            },
            {
              text: "Roadblocks and how to tackle them",
              link: "/docs/doing-participatory-research/roadblocks-and-how-to-tackle-them",
            },
          ],
        },
        {
          text: "V. Achieving impact",
          items: [
            {
              text: "Overview",
              link: "/docs/achieving-impact/index",
            },
            {
              text: "Bringing results to young people",
              link: "/docs/achieving-impact/bringing-results-to-young-people",
            },
            {
              text: "Get city leaders to take action",
              link: "/docs/achieving-impact/get-city-leaders-to-take-action",
            },
            {
              text: "Share and improve methods",
              link: "/docs/achieving-impact/share-and-improve-methods",
            },
          ],
        },
        {
          text: "Resources",
          items: [
            {
              text: "Templates & Materials",
              link: "/docs/resources/templates-and-materials",
            },
            {
              text: "Related Projects",
              link: "/docs/resources/related-projects",
            },
            {
              text: "About This Toolkit",
              link: "/docs/resources/about",
            },
          ],
        },
      ],
    },

    // socialLinks: [
    //    { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],
  },
});
