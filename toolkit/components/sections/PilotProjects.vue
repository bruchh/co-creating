<script setup lang="ts">
import SectionHeader from "../ui/SectionHeader.vue";
import PilotVideo from "../landing/PilotVideo.vue";
import PilotKeyFacts from "../landing/PilotKeyFacts.vue";
import PilotResearchDesign from "../landing/PilotResearchDesign.vue";
import PilotImpact from "../landing/PilotImpact.vue";
import PilotImageCarousel from "../landing/PilotImageCarousel.vue";
import SectionH2 from "../ui/SectionH2.vue";
import Quote from "../ui/Quote.vue";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";
import { cn } from "../../lib/utils";

interface Quote {
    text: string;
    author: string;
    role: string;
    type: "official" | "youth";
}

interface KeyFact {
    label: string;
    value: string;
}

interface ResearchMethod {
    name: string;
    description: string;
}

interface Project {
    id: string;
    city: string;
    description: string;
    videoUrl: string;
    images: string[];
    quotes: Quote[];
    keyFacts: KeyFact[];
    researchDesign: ResearchMethod[];
    impact: string;
}

const projects: Project[] = [
    {
        id: "charlotte",
        city: "Charlotte",
        description:
            "Young people and city officials in Charlotte collaborated to explore youth engagement through citizen science, creating actionable insights for more inclusive local governance.",
        videoUrl: "", // No video yet
        images: [
            "/images/atlanta/StillsUSA1.webp",
            "/images/atlanta/StillsUSA2.webp",
            "/images/atlanta/StillsUSA3.webp",
        ],
        quotes: [
            {
                text: "I'm learning things that I did not know as far as how the young people want to be communicated with, some of the things that they're interested in. So it's going to allow us to take that information back and to reframe our programming, so that it is more suitable to what the youth want and we can combine that with what they need.",
                author: "Dr. Raquishela Stewart",
                role: "City of Charlotte",
                type: "official",
            },
            {
                text: "I always thought I have to do this or I'll create change when I grow up. And then coming here and doing this, I realized, oh, I can do change. Like right now, I don't have to wait.",
                author: "Mauricio Martinez Aguierre",
                role: "Citizen Scientist, Charlotte",
                type: "youth",
            },
        ],
        keyFacts: [
            {
                label: "Participants",
                value: "17 young people (14–24), 10 city administrators",
            },
            {
                label: "Partners",
                value: "City of Charlotte",
            },
            {
                label: "Research Question",
                value: "In which areas do Charlotte youth want to contribute to city government, and how can we increase access and engagement for youth (ages 14–24)?",
            },
            {
                label: "City Lead",
                value: "Katarina Moyon (Deep Dive Research)",
            },
            {
                label: "Project Lead",
                value: "Tarsi Dunlop (GMF)",
            },
            {
                label: "Research Consulting",
                value: "Christine Hübner (d|part)",
            },
        ],
        researchDesign: [
            {
                name: "Online Survey",
                description:
                    "Generalizable results – 11 required and 4 optional questions for youth and adults, 89 responses (Apr–May 2025)",
            },
            {
                name: "1:1 Interviews",
                description: "Detailed motives and perspectives (Apr–May 2025)",
            },
            {
                name: "Focus Groups",
                description:
                    "Behavior and dynamics in participation – 2 youth groups (May 2025)",
            },
        ],
        impact: "Project results were shared publicly and compiled for broader city use. City leaders are already integrating youth-driven ideas into policy discussions and exploring their implementation through the Office of Youth Opportunity, for example a youth-led city newsletter. The project demonstrated how collaboration between youth and decision-makers can turn research into tangible, lasting impact for more inclusive civic engagement.",
    },
    {
        id: "dusseldorf",
        city: "Düsseldorf",
        description:
            "In Düsseldorf, youth and local leaders co-created research on meaningful participation, transforming how the city approaches youth engagement and policy development.",
        videoUrl: "https://youtu.be/qwB9mqAd4hw",
        images: [
            "/images/duesseldorf/StillsGermany7.webp",
            "/images/duesseldorf/StillsGermany8.webp",
            "/images/duesseldorf/StillsGermany9.webp",
        ],
        quotes: [
            {
                text: "We'll take a good look at the results and think about them: What do they mean for our structures? What does it possibly mean for future concepts or projects? And where do we really need to look again at what we do and how we do youth engagement?",
                author: "Sandra Schwoll",
                role: "Office for Social Affairs and Youth, City of Düsseldorf",
                type: "official",
            },
            {
                text: "I've realized that we all still have to keep working on giving young people space for their opinions and participation still needs to be strengthened, even in Duesseldorf where we are actually already very privileged.",
                author: "Clara Qianhe Wang",
                role: "Citizen Scientist, Düsseldorf",
                type: "youth",
            },
        ],
        keyFacts: [
            {
                label: "Participants",
                value: "13 young people between 16–19 years, 4 city administrators and local councillors",
            },
            {
                label: "Partners",
                value: "City of Düsseldorf (Office for Social Affairs and Youth), Jugendring Düsseldorf",
            },
            {
                label: "Research Question",
                value: "What needs to happen so that ALL young people in Düsseldorf can participate politically?",
            },
            {
                label: "City Lead",
                value: "Anna Soßdorf (SCI:MOVE)",
            },
            {
                label: "Project Lead",
                value: "Lea Gronenberg (d|part)",
            },
            {
                label: "Research Consulting",
                value: "Christine Hübner (d|part)",
            },
        ],
        researchDesign: [
            {
                name: "Observations",
                description:
                    "Youth Services Committee & Youth Council meetings – behavior and dynamics (Jan 2025)",
            },
            {
                name: "Interviews",
                description:
                    "7 youth, 5 adults, 1 group discussion – motives and experiences (Feb–Mar 2025)",
            },
            {
                name: "Online Survey",
                description:
                    "17 questions for youth aged 16–21, 81 responses – generalizable results (Mar–Apr 2025)",
            },
        ],
        impact: "Young co-researchers presented their findings to the city council's Youth Welfare Council, influencing real decisions on youth engagement in Düsseldorf. Their voices brought research to life, shifted perceptions within city governance, and demonstrated that youth can be equal partners in decision-making, driving tangible, inclusive change in Düsseldorf.",
    },
];
</script>

<template>
    <section class="py-16 md:py-24">
        <div class="mx-auto">
            <SectionHeader title="Proof of Concept" centered />

            <!-- Intro -->
            <div class="max-w-3xl mx-auto text-center mb-8 md:mb-12">
                <SectionH2> Real Impact in Charlotte and Düsseldorf </SectionH2>
                <p class="text-lg text-slate-700 leading-relaxed">
                    In June 2024, two pilot cities, Charlotte, North Carolina
                    (US), and Düsseldorf, Germany, launched yearlong
                    ‘Co-creating our city’ projects to address the mismatch
                    between opportunities for youth engagement and what young
                    people seek to engage with their cities. Using a
                    participatory research approach, young people aged 14 to 24,
                    city staff, and local politicians worked together to
                    research local needs, develop solutions, and make tangible
                    recommendations for more vibrant, youth-friendly
                    communities. The projects concluded in summer 2025 with
                    presentations to city leaders and the public in both cities,
                    and Düsseldorf’s young co-researchers even travelled to
                    Charlotte to share insights and collaborate on next-level
                    engagement strategies.
                </p>
            </div>

            <!-- Tabs for Charlotte and Düsseldorf -->
            <Tabs default-value="charlotte" class="w-full">
                <TabsList
                    class="grid w-full max-w-md mx-auto grid-cols-2 mb-8 p-1 bg-purple-50 rounded-2xl overflow-clip"
                >
                    <TabsTrigger
                        v-for="project in projects"
                        :key="project.id"
                        :value="project.id"
                        class="py-2! rounded-2xl"
                    >
                        {{ project.city }}
                    </TabsTrigger>
                </TabsList>

                <TabsContent
                    v-for="project in projects"
                    :key="project.id"
                    :value="project.id"
                >
                    <!-- Bento Grid - 3 Rows x 2 Columns -->
                    <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
                        <!-- Row 1: Key Facts + Quotes -->
                        <div class="md:col-span-6">
                            <PilotKeyFacts :key-facts="project.keyFacts" />
                        </div>
                        <div class="md:col-span-6">
                            <!-- Stacked Quotes - Desktop/Tablet -->
                            <div class="hidden md:flex md:flex-col md:gap-0">
                                <Quote
                                    v-for="(quoteItem, index) in project.quotes"
                                    :key="index"
                                    :quote="quoteItem.text"
                                    :person="quoteItem.author"
                                    :position="quoteItem.role"
                                    :class="
                                        cn(
                                            index === 0
                                                ? 'bg-[#F9F9F9] rounded-b-none'
                                                : 'rounded-t-none',
                                        )
                                    "
                                />
                            </div>

                            <!-- Carousel - Mobile Only -->
                            <div class="md:hidden">
                                <Carousel
                                    class="w-full"
                                    :opts="{
                                        align: 'start',
                                        loop: true,
                                    }"
                                >
                                    <CarouselContent class="flex">
                                        <CarouselItem
                                            v-for="(
                                                quoteItem, index
                                            ) in project.quotes"
                                            :key="index"
                                            class="flex h-auto"
                                        >
                                            <Quote
                                                :quote="quoteItem.text"
                                                :person="quoteItem.author"
                                                :position="quoteItem.role"
                                            />
                                        </CarouselItem>
                                    </CarouselContent>
                                    <div
                                        class="flex justify-center gap-2 mt-6 absolute right-6 bottom-6"
                                    >
                                        <CarouselPrevious
                                            class="relative translate-x-0 translate-y-0 left-0 top-0 rounded-xl border-gray-300 size-10"
                                        />
                                        <CarouselNext
                                            class="relative translate-x-0 translate-y-0 right-0 top-0 rounded-xl border-gray-300 size-10"
                                        />
                                    </div>
                                </Carousel>
                            </div>
                        </div>

                        <!-- Row 2: Images + Research Design -->
                        <div class="md:col-span-8">
                            <PilotImageCarousel
                                :images="project.images"
                                :city="project.city"
                            />
                        </div>
                        <div class="md:col-span-4">
                            <PilotResearchDesign
                                :research-design="project.researchDesign"
                            />
                        </div>

                        <!-- Row 3: Impact + Video -->
                        <div class="md:col-span-12 xl:col-span-5">
                            <PilotImpact :impact="project.impact" />
                        </div>
                        <div class="md:col-span-12 xl:col-span-7">
                            <PilotVideo
                                :video-url="project.videoUrl"
                                :city="project.city"
                            />
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from {
    opacity: 0;
    transform: translateY(-10px);
}

.fade-leave-to {
    opacity: 0;
    transform: translateY(10px);
}
</style>
