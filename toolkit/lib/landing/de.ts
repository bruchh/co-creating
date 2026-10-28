import type { LandingContent } from './en';
import { projectMedia } from './media';

// Copy from “Co-Creating Our City Landing Page deutsche Übersetzung.pdf”.
// These are Vue text values, not Markdown: gender stars stay literal.
export const de = {
  hero: {
    title: 'junge Menschen und Entscheidungsträger*innen gestalten Partizipation und Transformation',
    description: '„Co-creating our City“ ist ein partizipatives Projekt, das junge Menschen und lokale Entscheidungsträger*innen zusammenbringt. Gemeinsam gestalten sie neue Möglichkeiten der Jugendbeteiligung in ihren Städten und Gemeinden.',
    discover: 'Entdecke das „Co-Creating Our City“-Toolkit',
    discoverShort: 'Entdecke das Toolkit',
  },
  challenge: {
    label: 'Was für „Co-Creating Our City“ spricht',
    title: 'Warum deine Stadt „Co-Creating Our City“ braucht',
    panels: [
      {
        label: 'Herausforderung',
        heading: 'Die Diskrepanz bei der Jugendbeteiligung',
        content: 'Viele junge Menschen haben Ideen für ihre Stadt und möchten ihre Perspektiven in ihre Communities einbringen. Auch Städte und Kommunen erkennen das enorme Potenzial wirksamer Jugendbeteiligung und wollen junge Menschen in Entscheidungsprozesse einbeziehen. Doch traditionelle Formate wie Jugendräte und Konsultationen reichen oft nicht aus. Endet Beteiligung bei der bloßen Befragung oder bleibt der Einfluss begrenzt, wird sie schnell als Scheinbeteiligung empfunden. Zudem fällt es Städten oft schwer, die besonderen Perspektiven junger Menschen tatsächlich zu nutzen. Die vorhandenen Angebote passen häufig nicht zu der Art und Weise, wie sich junge Menschen heute tatsächlich beteiligen wollen. Viele junge Menschen bleiben dabei außen vor, besonders diejenigen, die in klassischen Formaten unterrepräsentiert sind. So bleiben wichtige Chancen für Zusammenarbeit und inklusive Entscheidungsfindung ungenutzt.',
      },
      {
        label: 'Ansatz',
        heading: 'Gemeinsam Lösungen entwickeln durch Citizen Science',
        content: '„Co-Creating Our City“ überbrückt diese Lücke durch partizipative Forschung und Citizen Science — eine kollaborative Herangehensweise, bei der junge Menschen und Entscheidungsträger*innen gemeinsam forschen, Daten erheben und umsetzbare Lösungen für lokale Herausforderungen entwickeln. Durch die Verbindung von gelebter Erfahrung mit politischer Fachkenntnis regen „Co-Creating Our City“-Projekte Dialog an, bauen Vertrauen auf und verankern die Perspektiven junger Menschen in realen und umsetzbaren Entscheidungen. Dieser Ansatz stärkt junge Menschen und Verantwortliche in der Stadtverwaltung, fördert Beteiligung und Dialog und baut zivilgesellschaftliche Kompetenzen sowie Selbstvertrauen auf – und trägt so zu inklusiveren, lebendigeren und demokratischeren Communities bei.',
      },
    ],
    quotes: [
      {
        quote: 'Letztlich sind wir die Zukunft. Und ich finde, es ist wichtig, dafür zu sorgen, dass unsere Stimmen gehört werden, dass wir uns gut informiert fühlen und die Möglichkeit haben, Veränderung anzustoßen und etwas in unseren eigenen Communities zu bewirken, und Communities zu bilden, die verbunden bleiben wollen. Das ist einfach besser für unsere Zukunft und besser dafür, starke Communities aufzubauen.',
        person: 'Kayleigh Mayhew',
        position: 'Citizen Scientist, Charlotte',
      },
      {
        quote: 'Junge Menschen sind so aufmerksam und so weise. Es bringt uns wirklich etwas, junge Menschen in die Planung und Gestaltung von Programmen einzubeziehen, über die wir als Stadt nachdenken.',
        person: 'LaKeeshia Fox',
        position: 'Stadt Charlotte',
      },
      {
        quote: 'Die Entscheidungen, die heute getroffen werden, wirken sich erst in den kommenden Jahren richtig aus. Und deshalb ist es wichtig, die Menschen zu fragen, die dann mit diesen Veränderungen leben müssen.',
        person: 'Felix Reinkemeier',
        position: 'Citizen Scientist, Düsseldorf',
      },
      {
        quote: 'Wir teilen unsere Interaktionen mit jungen Menschen in der Verwaltung oft in feste Kategorien ein. Die Leute denken dabei an junge Menschen, die protestieren, oder an junge Menschen, die an einem Programm oder Praktikum teilnehmen. Aber wir finden nur selten wirklich Wege, uns mit dem auseinanderzusetzen, was sie denken und was ihre Meinungen sind. Das ist seltsam, denn wenn wir an Stadtplanung denken, planen wir normalerweise 15, 20 Jahre im Voraus. Jemand, der jetzt 16 ist, genau für diese Person planen wir die Zukunft. Wenn wir sie also nicht in diesen Prozess einbeziehen, verpassen wir, glaube ich, wirklich gute Ideen.',
        person: 'Alexis Gordon',
        position: 'Stadt Charlotte',
      },
    ],
  },
  benefits: {
    label: 'Vorteile',
    imageAlt: 'Junge Menschen arbeiten gemeinsam in einem Workshop',
    categories: [
      {
        title: 'Für junge Menschen:',
        items: [
          { text: 'Fördert zivilgesellschaftliches Engagement und Vertrauen in Institutionen.' },
          { text: 'Schafft Zugehörigkeit: Junge Menschen fühlen sich stärker mit ihrer Stadt verbunden.' },
          { text: 'Stärkt demokratische Kompetenz, Verständnis und Selbstwirksamkeit.' },
          { text: 'Entwickelt wissenschaftliche Kompetenz sowie Führungs- und Kommunikationsfähigkeiten.' },
        ],
      },
      {
        title: 'Für Städte und Communities:',
        items: [
          { text: 'Schafft die Möglichkeit, Einblicke in die Bedürfnisse und Erfahrungen junger Menschen zu gewinnen.' },
          { text: 'Baut Vertrauen und Verbindung zwischen jungen Anwohnenden und der Stadt auf und macht Städte zu gerechteren, nachhaltigeren Communities und Orten, an denen Menschen gerne leben.' },
          { text: 'Erzeugt gemeinsam entwickelte Lösungen mit höherer Beständigkeit und Erfolgsquote und stärkt so die Fähigkeit der Stadt, inklusive und nachhaltige Politik zu gestalten.' },
        ],
      },
    ],
  },
  howItWorks: {
    label: 'Wie es funktioniert',
    title: { before: 'Forschung ', with: 'mit', between: ' der Community, nicht ', on: 'über', after: ' sie' },
    descriptionBefore: '„Co-Creating Our City“ bringt junge Menschen und lokale Verantwortliche durch ',
    descriptionAfter: ' zusammen — Forschung, die mit der Community betrieben wird, nicht über sie. Gemeinsam untersuchen sie Themen, die jungen Bewohner*innen wichtig sind, teilen Wissen und Erfahrungen und entwickeln realistische Vorschläge für Veränderung. Dieser kollaborative Ansatz befähigt junge Menschen, an Entscheidungsprozessen teilzuhaben, baut Vertrauen zwischen den Generationen auf und unterstützt Städte dabei, inklusiver und jugendfreundlicher zu werden.',
    traditional: 'Traditioneller Ansatz',
    coCreated: 'Co-kreierter Ansatz',
    comparisons: [
      { traditional: 'Für junge Menschen geschaffen', coCreated: 'Gemeinsam mit jungen Menschen und lokalen Entscheidungsträger*innen geschaffen' },
      { traditional: 'Hierarchische Arbeitsweise', coCreated: 'Kollaborative Arbeitsweise' },
      { traditional: 'Erwachsenenexpertise bevorzugt', coCreated: 'Vielfältige Formen von Expertise wertgeschätzt' },
      { traditional: 'Wissen für Entscheidungsträger*innen und Fachpublikum erzeugt', coCreated: 'Wissen für die praktische Anwendung erzeugt und mit Akteur*innen geteilt' },
    ],
    quotes: [
      {
        quote: 'In diesen Workshops werden unsere Stimmen gehört, aber wir wollen auch die Stimmen anderer junger Menschen hören. Das hat mich wirklich motiviert, weil ich dachte, mit diesem Projekt kann ich etwas verändern.',
        person: 'Rochelle Namunyak Kirschbaum',
        position: 'Citizen Scientist, Düsseldorf',
      },
      {
        quote: 'Normalerweise haben wir nicht wirklich viel Kontakt zu städtischen Amtsträger*innen. Ich glaube, Initiativen wie „Co-Creating Our City“ schließen diese Lücke und helfen uns, die Verwaltung besser zu verstehen, und ihnen dabei, besser zu verstehen, was wir uns wünschen.',
        person: 'Megha Mittal',
        position: 'Citizen Scientist, Charlotte',
      },
    ],
    infographicAlt: 'Fünf Schritte des Co-Creating-Our-City-Prozesses',
  },
  pilots: {
    label: 'Proof of Concept',
    title: 'Echte Wirkung in Charlotte und Düsseldorf',
    description: 'Im Juni 2024 starteten die beiden Pilotstädte Charlotte, North Carolina (USA), und Düsseldorf, Deutschland, jeweils einjährige „Co-Creating Our City“-Projekte, um die Diskrepanz zwischen bestehenden Beteiligungsmöglichkeiten und dem, was junge Menschen sich für ihre Städte wünschen, anzugehen. Mithilfe eines partizipativen Forschungsansatzes arbeiteten junge Menschen im Alter von 14 bis 24 Jahren, städtisches Personal und lokale Politiker*innen zusammen, um lokale Bedürfnisse zu erforschen, Lösungen zu entwickeln und konkrete Empfehlungen für lebendigere, jugendfreundlichere Communities zu erarbeiten. Die Projekte endeten im Sommer 2025 mit Präsentationen vor Verantwortlichen der Stadt und der Öffentlichkeit in beiden Städten, wobei die jungen Mitforschenden aus Düsseldorf sogar nach Charlotte reisten, um Erkenntnisse auszutauschen und gemeinsam an weiterführenden Beteiligungsstrategien zu arbeiten.',
    keyFacts: 'Eckdaten',
    researchDesign: 'Forschungsdesign',
    mixedMethods: '(Mixed Methods)',
    impact: 'Wirkung',
    projects: [
      {
        ...projectMedia.charlotte,
        quotes: [
          {
            text: 'Ich lerne Dinge, die ich vorher nicht wusste, etwa wie junge Menschen angesprochen werden möchten und woran sie interessiert sind. Das ermöglicht es uns, diese Informationen mitzunehmen und unsere Programme so anzupassen, dass sie besser zu dem passen, was junge Menschen wollen, und das mit dem zu verknüpfen, was sie tatsächlich brauchen.',
            author: 'Dr. Raquishela Stewart', role: 'Stadt Charlotte',
          },
          {
            text: 'Ich dachte immer, ich müsste warten, bis ich erwachsen bin, um wirklich etwas zu verändern. Und dann bin ich hierhergekommen und habe das gemacht, und mir wurde klar, oh, ich kann jetzt schon etwas verändern. Also, jetzt gerade, ich muss nicht warten.',
            author: 'Mauricio Martinez Aguirre', role: 'Citizen Scientist, Charlotte',
          },
        ],
        keyFacts: [
          { label: 'Teilnehmende', value: '17 junge Menschen (14–24), 10 städtische Verwaltungsmitarbeitende' },
          { label: 'Partner*innen', value: 'Stadt Charlotte' },
          { label: 'Forschungsfrage', value: 'In welchen Bereichen möchten junge Menschen in Charlotte zur Stadtverwaltung beitragen, und wie lässt sich der Zugang und die Beteiligung für junge Menschen (14–24 Jahre) erhöhen?' },
          { label: 'City Lead', value: 'Katarina Moyon (Deep Dive Research)' },
          { label: 'Projektleitung', value: 'Tarsi Dunlop (GMF)' },
          { label: 'Forschungskonsultation', value: 'Christine Hübner (d|part)' },
        ],
        researchDesign: [
          { name: 'Online-Befragung', description: 'Verallgemeinerbare Ergebnisse – 11 Pflicht- und 4 optionale Fragen für junge Menschen und Erwachsene, 89 Antworten (Apr.–Mai 2025)' },
          { name: '1:1-Interviews', description: 'Detaillierte Motive und Perspektiven (Apr.–Mai 2025)' },
          { name: 'Fokusgruppen', description: 'Verhalten und Dynamiken bei der Beteiligung – 2 Jugendgruppen (Mai 2025)' },
        ],
        impact: 'Die Projektergebnisse wurden öffentlich zugänglich gemacht und für eine breitere Nutzung in der Stadt zusammengestellt. Stadtverantwortliche greifen die Ideen junger Menschen bereits in politischen Diskussionen auf und prüfen über das Office of Youth Opportunity, wie sich diese umsetzen lassen, zum Beispiel mit einem städtischen Newsletter, den junge Menschen selbst gestalten. Das Projekt zeigt, wie die Zusammenarbeit zwischen jungen Menschen und Entscheidungsträger*innen Forschung in greifbare, dauerhafte Wirkung für inklusiveres zivilgesellschaftliches Engagement verwandeln kann.',
      },
      {
        ...projectMedia.dusseldorf,
        quotes: [
          {
            text: 'Wir werden uns die Ergebnisse genau ansehen und darüber nachdenken: Was bedeuten sie für unsere Strukturen? Was könnte das für zukünftige Konzepte oder Projekte bedeuten? Und wo müssen wir wirklich noch einmal genauer hinschauen, bei dem, was wir tun, und bei der Art, wie wir Jugendbeteiligung gestalten?',
            author: 'Sandra Schwoll', role: 'Amt für Soziales und Jugend, Stadt Düsseldorf',
          },
          {
            text: 'Mir ist klar geworden, dass wir alle weiter daran arbeiten müssen, jungen Menschen Raum für ihre Meinung zu geben, und dass Beteiligung noch gestärkt werden muss, auch in Düsseldorf, wo es uns eigentlich schon sehr gut geht.',
            author: 'Clara Qianhe Wang', role: 'Citizen Scientist, Düsseldorf',
          },
        ],
        keyFacts: [
          { label: 'Teilnehmende', value: '13 junge Menschen zwischen 16 und 19 Jahren, 4 städtische Verwaltungsmitarbeitende und Kommunalpolitiker*innen' },
          { label: 'Partner*innen', value: 'Stadt Düsseldorf (Amt für Soziales und Jugend), Jugendring Düsseldorf' },
          { label: 'Forschungsfrage', value: 'Was muss geschehen, damit ALLE jungen Menschen in Düsseldorf politisch teilhaben können?' },
          { label: 'City Lead', value: 'Anna Soßdorf (SCI:MOVE)' },
          { label: 'Projektleitung', value: 'Lea Gronenberg (d|part)' },
          { label: 'Forschungskonsultation', value: 'Christine Hübner (d|part)' },
        ],
        researchDesign: [
          { name: 'Beobachtungen', description: 'Sitzungen des Jugendhilfeausschusses & Jugendrats – Verhalten und Dynamiken (Jan. 2025)' },
          { name: 'Interviews', description: '7 junge Menschen, 5 Erwachsene, 1 Gruppendiskussion – Motive und Erfahrungen (Feb.–Mär. 2025)' },
          { name: 'Online-Befragung', description: '17 Fragen für junge Menschen im Alter von 16–21 Jahren, 81 Antworten – verallgemeinerbare Ergebnisse (Mär.–Apr. 2025)' },
        ],
        impact: 'Junge Mitforschende präsentierten ihre Ergebnisse dem Jugendhilfeausschuss des Stadtrats und beeinflussten damit reale Entscheidungen zur Jugendbeteiligung in Düsseldorf. Ihre Stimmen machten die Forschung lebendig, veränderten Wahrnehmungen innerhalb der Stadtverwaltung und zeigten, dass junge Menschen gleichberechtigte Partner*innen in Entscheidungsprozessen sein können, was greifbaren, inklusiven Wandel in Düsseldorf vorantrieb.',
      },
    ],
  },
  toolkit: {
    label: 'Toolkit-Module',
    title: 'Starte dein eigenes Projekt mit unserem Toolkit',
    description: 'Entdecke das Co-Creating-Our-City-Toolkit und erfahre, wie sich junge Menschen und Entscheidungsträger*innen in die Gestaltung deiner Stadt einbinden lassen. Erhalte Zugang zu praktischen Schritten, Tipps und Ressourcen, um dein Projekt zu planen, durchzuführen und zu stärken und die Ideen junger Menschen in echte, greifbare Wirkung für deine Stadt oder Community zu verwandeln.',
    explore: 'Dieses Modul entdecken',
    module: 'Modul',
    modules: [
      {
        id: 'making-the-case', title: 'Was für „Co-Creating Our City“ spricht',
        description: 'Entdecke, warum Co-Creating-Our-City-Projekte für bedeutsame Jugendbeteiligung unerlässlich sind. Erfahre, wie sie die Beteiligung junger Menschen stärken, Zusammenarbeit fördern und inklusivere Communities schaffen. Sieh, wie diese Projekte sowohl junge Menschen als auch Entscheidungsträger*innen befähigen, echte Wirkung zu erzielen.',
        link: '/docs/making-the-case/why-we-need-co-creating-our-city',
      },
      {
        id: 'setting-up', title: 'Das eigene Projekt aufsetzen',
        description: 'Schaffe eine gute Grundlage für dein Projekt mit praktischen Tipps zur Planung und Budgetierung. Erfahre, wie sich Ziele setzen, planen, finanzieren und das richtige Team sowie die passenden Partner*innen zusammenstellen lassen. Sorge dafür, dass dein Projekt reibungslos läuft und bedeutsame Ergebnisse liefert.',
        link: '/docs/setting-up-your-project',
      },
      {
        id: 'bringing-together', title: 'Junge Menschen und Stadtverantwortliche zusammenbringen',
        description: 'Verwandle Zusammenarbeit in echtes Handeln. Erfahre, wie du junge Menschen und Entscheidungsträger*innen als Mitforschende gewinnst, motivierst und sinnvoll miteinander verbindest, wie du Herausforderungen überwindest und Lösungen entwickelst, die echte Perspektiven junger Menschen widerspiegeln.',
        link: '/docs/bringing-young-people-and-city-leaders-together/',
      },
      {
        id: 'participatory-research', title: 'Partizipative Forschung durchführen',
        description: 'Lerne, partizipative Forschung zu planen, zu begleiten und dauerhaft zu verankern, die Einblicke junger Menschen mit politischer Fachkenntnis verbindet. Erhalte Zugang zu einer Schritt-für-Schritt-Anleitung, einsatzbereiten Materialien und Tipps, um Forschung in umsetzbare Lösungen für die eigene Community zu verwandeln.',
        link: '/docs/doing-participatory-research',
      },
      {
        id: 'achieving-impact', title: 'Wirkung erzielen',
        description: 'Lass deine Ergebnisse zählen. Entdecke, wie du Ergebnisse mit jungen Menschen und der breiteren Öffentlichkeit teilen kannst und dabei Stadtverantwortliche zum Handeln auf Grundlage der Ergebnisse motivierst. Übersetze Forschung in politische Maßnahmen, Programme und dauerhaften Wandel, der die Jugendbeteiligung in deiner Community stärkt.',
        link: '/docs/achieving-impact/',
      },
    ],
  },
  cta: {
    title: 'Bereit, dein eigenes Projekt zu starten?',
    description: 'Schließe dich Städten und Organisationen an, die durch Co-Creation bedeutsame Jugendbeteiligung schaffen.',
    start: 'Starte dein Projekt',
    startDescription: 'Erhalte Zugang zum vollständigen Toolkit mit einer Schritt-für-Schritt-Anleitung',
    contact: 'Kontaktiere uns',
    contactDescription: 'Melde dich bei Fragen oder erzähl uns von deinem Projekt',
    download: 'Das „Co-Creating Our City“-Toolkit herunterladen',
    downloadUrl: '/documents/Toolkit-Co-Creating-Our-City-DE.pdf',
    partners: 'In Partnerschaft mit',
  },
  ui: {
    nextSlide: 'Nächste Folie',
    previousSlide: 'Vorherige Folie',
    projectVideo: 'Projektvideo: {city}',
    projectImage: 'Projektbild {number}: {city}',
    partnerWebsite: 'Website von {name} besuchen',
    partnerLogo: 'Logo von {name}',
  },
} satisfies LandingContent;
