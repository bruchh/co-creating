import { defineConfig } from "vitepress";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const englishSidebar = [
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
      { text: "Overview", link: "/docs/setting-up-your-project/" },
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
        link: "/docs/bringing-young-people-and-city-leaders-together/",
      },
      {
        text: "Recruiting Co-Researchers",
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
        text: "Commitment and Communication",
        link: "/docs/bringing-young-people-and-city-leaders-together/commitment-and-communication",
      },
      {
        text: "Scheduling Workshops and Activities",
        link: "/docs/bringing-young-people-and-city-leaders-together/scheduling-workshops-and-activities",
      },
    ],
  },
  {
    text: "IV. Doing Participatory Research",
    items: [
      { text: "Overview", link: "/docs/doing-participatory-research/" },
      {
        text: "What is Participatory Research?",
        link: "/docs/doing-participatory-research/what-is-participatory-research",
      },
      {
        text: "Five Steps to Organizing Your Project",
        link: "/docs/doing-participatory-research/five-steps-to-organizing-your-project",
      },
      {
        text: "From Steps to Action",
        link: "/docs/doing-participatory-research/from-steps-to-action",
      },
      {
        text: "Roadblocks and How to Tackle Them",
        link: "/docs/doing-participatory-research/roadblocks-and-how-to-tackle-them",
      },
    ],
  },
  {
    text: "V. Achieving Impact",
    items: [
      { text: "Overview", link: "/docs/achieving-impact/" },
      {
        text: "Bringing Results to Young People",
        link: "/docs/achieving-impact/bringing-results-to-young-people",
      },
      {
        text: "Get City Leaders to Take Action",
        link: "/docs/achieving-impact/get-city-leaders-to-take-action",
      },
      {
        text: "Share and Improve Methods",
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
      { text: "Related Projects", link: "/docs/resources/related-projects" },
      { text: "About This Toolkit", link: "/docs/resources/about" },
    ],
  },
];

const germanSidebar = [
  {
    text: "Einleitung",
    items: [
      {
        text: "Was ist ‚Co-Creating Our City‘?",
        link: "/de/docs/introduction/what-is-co-creating-our-city",
      },
      {
        text: "Über dieses Toolkit und wie es genutzt werden kann",
        link: "/de/docs/introduction/about-this-toolkit",
      },
    ],
  },
  {
    text: "I. Was dafür spricht",
    items: [
      {
        text: "Warum brauchen wir Projekte wie ‚Co-Creating Our City‘?",
        link: "/de/docs/making-the-case/why-we-need-co-creating-our-city",
      },
      {
        text: "Vorteile eines eigenen Projekts",
        link: "/de/docs/making-the-case/advantages-of-running-your-own-project",
      },
    ],
  },
  {
    text: "II. Dein eigenes Projekt aufsetzen",
    items: [
      { text: "Überblick", link: "/de/docs/setting-up-your-project/" },
      {
        text: "Ziele und Umfang festlegen",
        link: "/de/docs/setting-up-your-project/defining-goals-and-scope",
      },
      {
        text: "Das Projektteam aufbauen",
        link: "/de/docs/setting-up-your-project/building-the-project-team",
      },
      {
        text: "Unterstützung gewinnen",
        link: "/de/docs/setting-up-your-project/securing-buy-in",
      },
      {
        text: "Dauer und Zeitplan planen",
        link: "/de/docs/setting-up-your-project/planning-duration-and-timing",
      },
      {
        text: "Das Projektbudget planen",
        link: "/de/docs/setting-up-your-project/budgeting-for-your-project",
      },
    ],
  },
  {
    text: "III. Junge Menschen und Stadtverwaltung zusammenbringen",
    items: [
      {
        text: "Überblick",
        link: "/de/docs/bringing-young-people-and-city-leaders-together/",
      },
      {
        text: "Mitforschende gewinnen",
        link: "/de/docs/bringing-young-people-and-city-leaders-together/recruiting-co-researchers",
      },
      {
        text: "Rechtliche und ethische Aspekte",
        link: "/de/docs/bringing-young-people-and-city-leaders-together/legal-and-ethical-considerations",
      },
      {
        text: "Motivation, Inklusion und Barrierefreiheit",
        link: "/de/docs/bringing-young-people-and-city-leaders-together/motivation-inclusion-and-accessibility",
      },
      {
        text: "Verbindlichkeit und Kommunikation",
        link: "/de/docs/bringing-young-people-and-city-leaders-together/commitment-and-communication",
      },
      {
        text: "Workshops und Aktivitäten planen",
        link: "/de/docs/bringing-young-people-and-city-leaders-together/scheduling-workshops-and-activities",
      },
    ],
  },
  {
    text: "IV. Partizipative Forschung durchführen",
    items: [
      { text: "Überblick", link: "/de/docs/doing-participatory-research/" },
      {
        text: "Was ist partizipative Forschung?",
        link: "/de/docs/doing-participatory-research/what-is-participatory-research",
      },
      {
        text: "Fünf Schritte zur Organisation deines Projekts",
        link: "/de/docs/doing-participatory-research/five-steps-to-organizing-your-project",
      },
      {
        text: "Von der Theorie zur Praxis",
        link: "/de/docs/doing-participatory-research/from-steps-to-action",
      },
      {
        text: "Hürden und wie sie sich bewältigen lassen",
        link: "/de/docs/doing-participatory-research/roadblocks-and-how-to-tackle-them",
      },
    ],
  },
  {
    text: "V. Wirkung erzielen",
    items: [
      { text: "Überblick", link: "/de/docs/achieving-impact/" },
      {
        text: "Ergebnisse an junge Menschen herantragen",
        link: "/de/docs/achieving-impact/bringing-results-to-young-people",
      },
      {
        text: "Stadtverwaltung zum Handeln bewegen",
        link: "/de/docs/achieving-impact/get-city-leaders-to-take-action",
      },
      {
        text: "Methoden teilen und weiterentwickeln",
        link: "/de/docs/achieving-impact/share-and-improve-methods",
      },
    ],
  },
  {
    text: "Ressourcen",
    items: [
      {
        text: "Vorlagen & Materialien",
        link: "/de/docs/resources/templates-and-materials",
      },
      {
        text: "Verwandte Projekte",
        link: "/de/docs/resources/related-projects",
      },
      { text: "Über dieses Toolkit", link: "/de/docs/resources/about" },
    ],
  },
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Co-Creating Our City",
  description: "Youth and Decision-Makers Shaping Participation and Change",
  lang: "en-US",
  appearance: false,
  srcExclude: ["api-examples.md", "markdown-examples.md"],
  locales: {
    root: {
      label: "English",
      lang: "en-US",
    },
    de: {
      label: "Deutsch",
      lang: "de-DE",
      link: "/de/",
      description:
        "Junge Menschen und Entscheidungsträger*innen gestalten Beteiligung und Wandel",
      themeConfig: {
        nav: [
          { text: "Toolkit", link: "/de/docs/introduction/what-is-co-creating-our-city" },
        ],
        sidebar: {
          "/de/docs/": germanSidebar,
        },
        outline: { label: "Auf dieser Seite" },
        docFooter: {
          prev: "Vorherige Seite",
          next: "Nächste Seite",
        },
        sidebarMenuLabel: "Menü",
        returnToTopLabel: "Nach oben",
        langMenuLabel: "Sprache ändern",
        skipToContentLabel: "Zum Inhalt springen",
        notFound: {
          title: "SEITE NICHT GEFUNDEN",
          quote: "Die angeforderte Seite konnte nicht gefunden werden.",
          link: "/de/docs/introduction/what-is-co-creating-our-city",
          linkLabel: "Zum deutschen Toolkit",
          linkText: "Zum Toolkit",
        },
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "../"),
      },
    },
  },
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Toolkit",
        link: "/docs/introduction/what-is-co-creating-our-city",
      },
    ],
    sidebar: {
      "/docs/": englishSidebar,
    },
  },
});
