import { projectMedia } from './media';

export const en = {
  hero: {
    title: 'Youth and Decision-Makers Shaping Participation and Change',
    description: 'Co-Creating Our City is a participatory project that brings together local young people and decision-makers to shape opportunities for youth engagement in cities and municipalities.',
    discover: 'Discover The Co-Creating Our City Toolkit',
    discoverShort: 'Discover The Toolkit',
  },
  challenge: {
    label: 'Making The Case',
    title: "Why Your City Needs 'Co-Creating Our City'",
    panels: [
      {
        label: 'Challenge',
        heading: 'The Mismatch in Youth Participation',
        content: 'Many cities recognize the value and enormous potential of involving young people in in local governance — yet meaningful engagement often remains out of reach. Traditional formats like youth councils or consultations can feel tokenistic, disconnected from real influence, or inaccessible to underrepresented youth. While many young people are eager to contribute, cities can struggle to tap into youth insights, missing vital opportunities for collaboration and more inclusive decision-making. In many cities, there is a mismatch between the opportunities for exchange and what young people seek as engagement to enact their ideas about vibrant communities.',
      },
      {
        label: 'Approach',
        heading: 'Co-Creating Solutions Through Citizen Science',
        content: 'Co-Creating Our City bridges this gap through participatory research and Citizen Science — a collaborative way that sees young people and decision-makers jointly conduct research, gather data, and design actionable solutions for local challenges. By combining lived experience with policy expertise, Co-Creating Our City projects spark dialogue, build trust, and embed youth perspectives in real and feasible decisions. This approach empowers young people and city leaders, strengthens participation and dialogue, and fosters civic skills and confidence - creating more inclusive, vibrant, and democratic communities.',
      },
    ],
    quotes: [
      {
        quote: "Ultimately, we are the future. And I feel like making sure that our voices are heard and that we feel well educated and have the opportunity to bring change and bring an impact to our own communities, and forming communities that want to stay connected, is important. It's just better for our future and it's better for forming strong communities.",
        person: 'Kayleigh Mayhew',
        position: 'Citizen Scientist, Charlotte',
      },
      {
        quote: "Youth are so insightful and so wise. It really benefits us to incorporate youth in our planning and design of programming that we're thinking about as a city.",
        person: 'LaKeeshia Fox',
        position: 'City of Charlotte',
      },
      {
        quote: "The decisions made today will only have significant impact in the coming years. And that's why it's important to ask the people who will then have to live with these changes.",
        person: 'Felix Reinkemeier',
        position: 'Citizen Scientist, Düsseldorf',
      },
      {
        quote: "We often compartmentalize our interactions with youth in government. People think of, like, youth protesting or they think of youth doing a program, or an internship. But we rarely really find ways to engage with what their thoughts are, and their opinions are, which is odd, because when we think about city plans, we usually plan out 15, 20 years. Somebody who is 16 now, that is who we are planning for in the future. So not having them involved in that process, I think we're really missing out on really good ideas.",
        person: 'Alexis Gordon',
        position: 'City of Charlotte',
      },
    ],
  },
  benefits: {
    label: 'Benefits',
    imageAlt: 'Young people collaborating in workshop',
    categories: [
      {
        title: 'For Young People:',
        items: [
          { text: 'promotes civic engagement and trust in institutions.' },
          { text: 'creates belonging: young people to feel more connected to their city.' },
          { text: 'increases democratic literacy, understanding, and efficacy.' },
          { text: 'develops scientific literacy, leadership and communication skills.' },
        ],
      },
      {
        title: 'For Cities and Communities:',
        items: [
          { text: 'creates opportunity to gain insight into youth needs and experiences.' },
          { text: 'builds trust and connection between young residents and the city, making cities equitable and sustainable communities and places where people want to live.' },
          { text: "generates collaborative solutions that have greater longevity and rates of success, increasing the city's capacity to design inclusive and sustainable policies." },
        ],
      },
    ],
  },
  howItWorks: {
    label: 'How It Works',
    // Keep the emphasis translatable without injecting HTML.
    title: { before: 'Research ', with: 'with', between: ' the Community, Not ', on: 'on', after: ' It' },
    descriptionBefore: 'Co-Creating Our City brings together young people and local leaders through ',
    descriptionAfter: ' — research done with the community, not on it. Together, they study issues that matter to young residents, share knowledge and experiences, and develop realistic proposals for change. This collaborative approach empowers youth to take part in decision-making, builds trust between generations, and supports cities in becoming more inclusive and youth-friendly.',
    traditional: 'Traditional Approach',
    coCreated: 'Co-Created Approach',
    comparisons: [
      { traditional: 'Created for young people', coCreated: 'Created with young people and local decision-makers' },
      { traditional: 'Hierarchical way of working', coCreated: 'Collaborative way of working' },
      { traditional: 'Adult expertise privileged', coCreated: 'Multiple forms of expertise valued' },
      { traditional: 'Knowledge produced for decision-makers and expert audiences', coCreated: 'Knowledge produced for practical application and shared with stakeholders' },
    ],
    quotes: [
      {
        quote: "In these workshops our voices are heard, but we also want to hear the voices of other young people. That's what really motivated me, because I thought: I can make a change with this project.",
        person: 'Rochelle Kirschbaum',
        position: 'Citizen Scientist, Düsseldorf',
      },
      {
        quote: "We don't really typically get to connect with city officials as much. I think having initiatives like 'Co-Creating Our City' will bridge that gap and allow us to better understand the government and also for them to understand like what we might like.",
        person: 'Megha Mittal',
        position: 'Citizen Scientist, Charlotte',
      },
    ],
    infographicAlt: '5 Steps of Co-Creating Our City Process',
  },
  pilots: {
    label: 'Proof of Concept',
    title: 'Real Impact in Charlotte and Düsseldorf',
    description: 'In June 2024, two pilot cities, Charlotte, North Carolina (US), and Düsseldorf, Germany, launched yearlong ‘Co-Creating Our City’ projects to address the mismatch between opportunities for youth engagement and what young people seek to engage with their cities. Using a participatory research approach, young people aged 14 to 24, city staff, and local politicians worked together to research local needs, develop solutions, and make tangible recommendations for more vibrant, youth-friendly communities. The projects concluded in summer 2025 with presentations to city leaders and the public in both cities, and Düsseldorf’s young co-researchers even travelled to Charlotte to share insights and collaborate on next-level engagement strategies.',
    keyFacts: 'Key Facts',
    researchDesign: 'Research Design',
    mixedMethods: '(Mixed Methods)',
    impact: 'Impact',
    projects: [
      {
        ...projectMedia.charlotte,
        quotes: [
          {
            text: "I'm learning things that I did not know as far as how the young people want to be communicated with, some of the things that they're interested in. So it's going to allow us to take that information back and to reframe our programming, so that it is more suitable to what the youth want and we can combine that with what they need.",
            author: 'Dr. Raquishela Stewart', role: 'City of Charlotte',
          },
          {
            text: "I always thought I have to do this or I'll create change when I grow up. And then coming here and doing this, I realized, oh, I can do change. Like right now, I don't have to wait.",
            author: 'Mauricio Martinez Aguirre', role: 'Citizen Scientist, Charlotte',
          },
        ],
        keyFacts: [
          { label: 'Participants', value: '17 young people (14–24), 10 city administrators' },
          { label: 'Partners', value: 'City of Charlotte' },
          { label: 'Research Question', value: 'In which areas do Charlotte youth want to contribute to city government, and how can we increase access and engagement for youth (ages 14–24)?' },
          { label: 'City Lead', value: 'Katarina Moyon (Deep Dive Research)' },
          { label: 'Project Lead', value: 'Tarsi Dunlop (GMF)' },
          { label: 'Research Consulting', value: 'Christine Hübner (d|part)' },
        ],
        researchDesign: [
          { name: 'Online Survey', description: 'Generalizable results – 11 required and 4 optional questions for youth and adults, 89 responses (Apr–May 2025)' },
          { name: '1:1 Interviews', description: 'Detailed motives and perspectives (Apr–May 2025)' },
          { name: 'Focus Groups', description: 'Behavior and dynamics in participation – 2 youth groups (May 2025)' },
        ],
        impact: 'Project results were shared publicly and compiled for broader city use. City leaders are already integrating youth-driven ideas into policy discussions and exploring their implementation through the Office of Youth Opportunity, for example a youth-led city newsletter. The project demonstrated how collaboration between youth and decision-makers can turn research into tangible, lasting impact for more inclusive civic engagement.',
      },
      {
        ...projectMedia.dusseldorf,
        quotes: [
          {
            text: "We'll take a good look at the results and think about them: What do they mean for our structures? What does it possibly mean for future concepts or projects? And where do we really need to look again at what we do and how we do youth engagement?",
            author: 'Sandra Schwoll', role: 'Office for Social Affairs and Youth, City of Düsseldorf',
          },
          {
            text: "I've realized that we all still have to keep working on giving young people space for their opinions and participation still needs to be strengthened, even in Düsseldorf where we are actually already very privileged.",
            author: 'Clara Qianhe Wang', role: 'Citizen Scientist, Düsseldorf',
          },
        ],
        keyFacts: [
          { label: 'Participants', value: '13 young people between 16–19 years, 4 city administrators and local councillors' },
          { label: 'Partners', value: 'City of Düsseldorf (Office for Social Affairs and Youth), Jugendring Düsseldorf' },
          { label: 'Research Question', value: 'What needs to happen so that ALL young people in Düsseldorf can participate politically?' },
          { label: 'City Lead', value: 'Anna Soßdorf (SCI:MOVE)' },
          { label: 'Project Lead', value: 'Lea Gronenberg (d|part)' },
          { label: 'Research Consulting', value: 'Christine Hübner (d|part)' },
        ],
        researchDesign: [
          { name: 'Observations', description: 'Youth Services Committee & Youth Council meetings – behavior and dynamics (Jan 2025)' },
          { name: 'Interviews', description: '7 youth, 5 adults, 1 group discussion – motives and experiences (Feb–Mar 2025)' },
          { name: 'Online Survey', description: '17 questions for youth aged 16–21, 81 responses – generalizable results (Mar–Apr 2025)' },
        ],
        impact: "Young co-researchers presented their findings to the city council's Youth Welfare Council, influencing real decisions on youth engagement in Düsseldorf. Their voices brought research to life, shifted perceptions within city governance, and demonstrated that youth can be equal partners in decision-making, driving tangible, inclusive change in Düsseldorf.",
      },
    ],
  },
  toolkit: {
    label: 'Toolkit Modules',
    title: 'Start Your Own Project With Our Toolkit',
    description: 'Explore the Co-Creating Our City toolkit and learn how to involve young people and decision-makers in shaping your city. Access practical steps, tips, and resources to plan, run, and strengthen your project and turn youth ideas into real, tangible impact in your city or community.',
    explore: 'Explore This Module',
    module: 'Module',
    modules: [
      {
        id: 'making-the-case', title: "Making the Case for 'Co-Creating Our City'",
        description: 'Discover why Co-Creating Our City projects are essential for meaningful youth engagement. Learn how they boost youth participation, foster collaboration, and create more inclusive communities. See how these projects empower both young people and decision-makers to make real impact.',
        link: '/docs/making-the-case/why-we-need-co-creating-our-city',
      },
      {
        id: 'setting-up', title: 'Setting Up Your Own Project',
        description: 'Build a strong foundation for your project with practical guidance on planning and budgeting. Find out how to set goals, plan, fund, and assemble the right team and partnerships. Ensure your project runs smoothly and delivers meaningful results.',
        link: '/docs/setting-up-your-project',
      },
      {
        id: 'bringing-together', title: 'Bringing Young People and City Leaders Together',
        description: 'Turn collaboration into real action. Learn how to recruit, motivate, and meaningfully connect young people and decision-makers as co-researchers, how to overcome challenges, and design solutions that reflect real youth perspectives.',
        link: '/docs/bringing-young-people-and-city-leaders-together/',
      },
      {
        id: 'participatory-research', title: 'Doing Participatory Research',
        description: 'Learn to plan, facilitate, and sustain participatory research that combines youth insight and policy expertise. Access step-by-step guidance, ready-to-use materials, and tips to turn research into actionable solutions for your community.',
        link: '/docs/doing-participatory-research',
      },
      {
        id: 'achieving-impact', title: 'Achieving Impact',
        description: 'Make your findings count. Discover how to share results with youth and the wider public, while motivating city leaders to act on the findings. Translate research into policies, programs, and lasting change that strengthen youth engagement in your community.',
        link: '/docs/achieving-impact/',
      },
    ],
  },
  cta: {
    title: 'Ready to Start Your Own Project?',
    description: 'Join cities and organizations creating meaningful youth engagement through co-creation.',
    start: 'Start Your Project',
    startDescription: 'Access the complete toolkit with step-by-step guidance',
    contact: 'Get In Touch',
    contactDescription: 'Contact us with questions or tell us about your project',
    download: 'Download The Co-Creating Our City Toolkit',
    downloadUrl: '/documents/Toolkit-dpart_2026-02-26.pdf',
    partners: 'In partnership with',
  },
  ui: {
    nextSlide: 'Next Slide',
    previousSlide: 'Previous Slide',
    projectVideo: '{city} Project Video',
    projectImage: '{city} project image {number}',
    partnerWebsite: 'Visit {name} website',
    partnerLogo: '{name} logo',
  },
};

export type LandingContent = typeof en;
