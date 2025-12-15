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
              text: "About This Toolkit and How You Can Use It",
              link: "/docs/introduction/about-this-toolkit",
            },
          ],
        },
        {
          text: "I. Making the Case",
          items: [
            {
              text: "Why Do We Need Projects Like 'Co-Creating Our City'",
              link: "/docs/making-the-case/why-we-need-co-creating-our-city",
            },
            {
              text: "Advantages of Running Your Own Project",
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
              text: "Defining Goals and Scope",
              link: "/docs/setting-up-your-project/defining-goals-and-scope",
            },
            {
              text: "Building the Project Team",
              link: "/docs/setting-up-your-project/building-the-project-team",
            },
            {
              text: "Securing Buy-in",
              link: "/docs/setting-up-your-project/securing-buy-in",
            },
            {
              text: "Planning Duration and Timing",
              link: "/docs/setting-up-your-project/planning-duration-and-timing",
            },
            {
              text: "Budgeting for Your Project",
              link: "/docs/setting-up-your-project/budgeting-for-your-project",
            },
          ],
        },
        {
          text: "III. Bringing Young People and City Leaders Together",
          items: [
            {
              text: "Overview",
              link: "/docs/bringing-young-people-and-city-leaders-together/index",
            },
            {
              text: "Recruiting Co-Researcher",
              link: "/docs/bringing-young-people-and-city-leaders-together/recruiting-co-researchers",
            },
            {
              text: "Legal and Ethical Considerations",
              link: "/docs/bringing-young-people-and-city-leaders-together/legal-and-ethical-considerations",
            },
            {
              text: "Motivation, Inclusion, and Accessibility",
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
              text: "What is Participatory Research?",
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
              text: "Roadblocks and How to Tackle Them",
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
