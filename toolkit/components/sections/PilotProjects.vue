<script setup lang="ts">
import SectionHeader from "@/components/ui/SectionHeader.vue";
import PilotVideo from "@/components/landing/PilotVideo.vue";
import PilotTimeline from "@/components/landing/PilotTimeline.vue";
import PilotImageCarousel from "@/components/landing/PilotImageCarousel.vue";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

interface Quote {
    text: string;
    author: string;
    role: string;
    type: "official" | "youth";
}

interface Project {
    id: string;
    city: string;
    description: string;
    videoUrl: string;
    images: string[];
    quotes: Quote[];
}

const projects: Project[] = [
    {
        id: "charlotte",
        city: "Charlotte",
        description:
            "Young people and city officials in Charlotte collaborated to explore youth engagement through citizen science, creating actionable insights for more inclusive local governance.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
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
                text: "We don't really typically get to connect with city officials as much. I think having initiatives like 'Co-creating our city' will bridge that gap and allow us to better understand the government and also for them to understand like what we might like.",
                author: "Megha Mittal",
                role: "Citizen Scientist from Charlotte",
                type: "youth",
            },
            {
                text: "I always thought I have to do this or I'll create change when I grow up. And then coming here and doing this, I realized, oh, I can do change. Like right now, I don't have to wait.",
                author: "Mauricio Martinez Aguierre",
                role: "Citizen Scientist from Charlotte",
                type: "youth",
            },
        ],
    },
    {
        id: "dusseldorf",
        city: "Düsseldorf",
        description:
            "In Düsseldorf, youth and local leaders co-created research on meaningful participation, transforming how the city approaches youth engagement and policy development.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
        images: [
            "/images/duesseldorf/StillsGermany7.webp",
            "/images/duesseldorf/StillsGermany8.webp",
            "/images/duesseldorf/StillsGermany9.webp",
        ],
        quotes: [
            {
                text: "We'll take a good look at the results and think about them: What do they mean for our structures? What does it possibly mean for future concepts or projects? And where do we really need to look again at what we do and how we do youth engagement?",
                author: "Sandra Schwoll",
                role: "City of Düsseldorf",
                type: "official",
            },
            {
                text: "In these workshops our voices are heard, but we also want to hear the voices of other young people. That's what really motivated me, because I thought: I can make a change with this project.",
                author: "Rochelle Namunyak",
                role: "Citizen Scientist from Düsseldorf",
                type: "youth",
            },
            {
                text: "The decisions made today will only have significant impact in the coming years. And that's why it's important to ask the people who will then have to live with these changes.",
                author: "Felix Reinkemeier",
                role: "Citizen Scientist from Düsseldorf",
                type: "youth",
            },
        ],
    },
];
</script>

<template>
    <section class="py-16 md:py-24">
        <div class="container mx-auto">
            <SectionHeader title="Proof of Concept" centered />

            <!-- Intro -->
            <div class="max-w-3xl mx-auto text-center mb-8 md:mb-12">
                <h2
                    class="text-3xl! md:text-4xl! font-bold! text-slate-900! mb-6!"
                >
                    Real Impact in Charlotte and Düsseldorf
                </h2>
                <p class="text-lg text-slate-700 leading-relaxed">
                    Discover how our pilot projects brought young people and
                    city leaders together to create meaningful change through
                    participatory research.
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
                    <!-- Bento Grid -->
                    <div
                        class="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6"
                    >
                        <!-- Row 1: Description card + Video -->
                        <div class="md:col-span-4">
                            <div
                                class="bg-gray-700 rounded-2xl p-6 shadow-sm border border-slate-200 h-full flex items-center"
                            >
                                <p
                                    class="font-medium text-lg text-white text-center"
                                >
                                    {{ project.description }}
                                </p>
                            </div>
                        </div>
                        <div class="md:col-span-8">
                            <PilotVideo
                                :video-url="project.videoUrl"
                                :city="project.city"
                            />
                        </div>

                        <!-- Row 2: Image Carousel + Timeline -->
                        <div class="md:col-span-7">
                            <PilotImageCarousel
                                :images="project.images"
                                :city="project.city"
                            />
                        </div>
                        <div class="md:col-span-5">
                            <PilotTimeline />
                        </div>

                        <!-- Row 3: Quotes - Desktop Grid -->
                        <div
                            class="hidden md:grid md:grid-cols-3 md:col-span-12 gap-4"
                        >
                            <div
                                v-for="(quote, index) in project.quotes"
                                :key="index"
                                class="bg-white rounded-2xl p-6 flex shadow-sm border border-slate-200"
                            >
                                <blockquote
                                    class="flex flex-col justify-between h-auto"
                                >
                                    <p
                                        class="text-sm text-slate-700 leading-relaxed mb-4"
                                    >
                                        "{{ quote.text }}"
                                    </p>
                                    <footer class="mt-2">
                                        <cite class="not-italic">
                                            <div
                                                class="font-semibold text-slate-900 text-sm"
                                            >
                                                {{ quote.author }}
                                            </div>
                                            <div class="text-xs text-slate-600">
                                                {{ quote.role }}
                                            </div>
                                        </cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>

                        <!-- Row 3: Quotes - Mobile/Tablet Carousel -->
                        <div class="md:hidden col-span-1">
                            <Carousel
                                class="w-full"
                                :opts="{
                                    align: 'start',
                                    loop: true,
                                }"
                            >
                                <CarouselContent>
                                    <CarouselItem
                                        v-for="(quote, index) in project.quotes"
                                        :key="index"
                                        class="flex h-auto"
                                    >
                                        <div
                                            class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 w-full"
                                        >
                                            <blockquote
                                                class="flex flex-col justify-between h-full"
                                            >
                                                <p
                                                    class="text-sm text-slate-700 leading-relaxed mb-4"
                                                >
                                                    "{{ quote.text }}"
                                                </p>
                                                <footer class="mt-2">
                                                    <cite class="not-italic">
                                                        <div
                                                            class="font-semibold text-slate-900 text-sm"
                                                        >
                                                            {{ quote.author }}
                                                        </div>
                                                        <div
                                                            class="text-xs text-slate-600"
                                                        >
                                                            {{ quote.role }}
                                                        </div>
                                                    </cite>
                                                </footer>
                                            </blockquote>
                                        </div>
                                    </CarouselItem>
                                </CarouselContent>
                                <div
                                    class="w-full justify-between flex rounded-xl translate-y-0.5 border border-gray-100"
                                >
                                    <CarouselPrevious
                                        class="relative translate-x-0 translate-y-0 left-0 top-0 rounded-xl border-gray-300 size-9"
                                    />
                                    <CarouselNext
                                        class="relative translate-x-0 translate-y-0 right-0 top-0 rounded-xl border-gray-300 size-9"
                                    />
                                </div>
                            </Carousel>
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
