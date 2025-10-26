<script setup lang="ts">
import { ref } from "vue";
import SectionHeader from "@/components/ui/SectionHeader.vue";
import PanelCard from "@/components/landing/PanelCard.vue";
import { Button } from "@/components/ui/button";
import {
    Lightbulb,
    Rocket,
    Users,
    FlaskConical,
    Target,
} from "lucide-vue-next";
import type { Component } from "vue";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import CustomButton from "@/components/ui/CustomButton.vue";

interface Module {
    id: string;
    title: string;
    intro: string;
    bullets: string[];
    icon: Component;
    link: string;
}

const modules: Module[] = [
    {
        id: "making-the-case",
        title: "Making the case for 'Co-creating our city'",
        intro: "Discover why Co-Creating Our City projects are essential for meaningful youth engagement.",
        bullets: [
            "Benefits of running your own project",
            "Stronger youth participation and collaborative problem-solving",
            "Creation of more inclusive, responsive cities",
            "How projects empower both young people and decision-makers to make real impact",
        ],
        icon: Lightbulb,
        link: "/docs/modules/making-the-case",
    },
    {
        id: "setting-up",
        title: "Setting up your own 'Co-creating our city' project",
        intro: "Set your project up for success with clear goals, a strong team, and solid partnerships.",
        bullets: [
            "Practical guidance on planning and funding",
            "Building relationships with local organizations and city authorities",
            "Establishing foundations that ensure your project runs smoothly",
            "Delivering meaningful outcomes",
        ],
        icon: Rocket,
        link: "/docs/modules/setting-up",
    },
    {
        id: "bringing-together",
        title: "Bringing young people and city leaders together",
        intro: "Meaningful collaboration is at the heart of Co-Creating Our City.",
        bullets: [
            "Connecting young people and decision-makers as co-researchers",
            "Overcoming motivational and collaboration challenges",
            "Creating a shared understanding of local needs",
            "Unlocking the potential of mutual exchange to design solutions that reflect youth perspectives",
        ],
        icon: Users,
        link: "/docs/modules/bringing-together",
    },
    {
        id: "participatory-research",
        title: "Doing participatory research with young people and city leaders",
        intro: "Learn how to carry out participatory research that combines lived experience and policy expertise.",
        bullets: [
            "Step-by-step guidance on designing and facilitating research activities",
            "Sustaining research activities with ready-to-use materials",
            "Tips for overcoming challenges",
            "Turning collaborative research into actionable insights",
        ],
        icon: FlaskConical,
        link: "/docs/modules/participatory-research",
    },
    {
        id: "achieving-impact",
        title: "Achieving impact with your findings and outputs",
        intro: "Ensure your project creates real change by sharing insights effectively.",
        bullets: [
            "Communicating findings back to young people and communities",
            "Motivating city leaders to act on the results",
            "Translating research into policies and programs",
            "Enhancing youth engagement and strengthening participatory democracy",
        ],
        icon: Target,
        link: "/docs/modules/achieving-impact",
    },
];

const selectedModuleIndex = ref(0);
</script>

<template>
    <section class="py-16 md:py-24">
        <div class="container mx-auto">
            <SectionHeader title="Toolkit Modules" />

            <!-- Intro -->
            <div class="max-w-3xl mb-12 md:mb-16">
                <h2
                    class="text-3xl! md:text-4xl! font-bold! text-gray-900 mb-6!"
                >
                    Everything You Need to Run Your Own Project
                </h2>
                <p class="text-lg text-slate-700 leading-relaxed">
                    Our comprehensive toolkit provides step-by-step guidance,
                    practical resources, and proven strategies to help you
                    launch and sustain successful Co-Creating Our City projects
                    in your community.
                </p>
            </div>

            <!-- Desktop: Sidebar Navigation + Content -->
            <div class="hidden md:flex gap-4">
                <!-- Left Sidebar Navigation -->
                <nav class="w-80 shrink-0">
                    <ul
                        class="space-y-2! sticky top-8 p-2! bg-gray-100 rounded-2xl"
                    >
                        <li v-for="(module, index) in modules" :key="module.id">
                            <button
                                @click="selectedModuleIndex = index"
                                :class="[
                                    'w-full text-left px-4! py-2! rounded-lg transition-all flex items-start gap-3',
                                    selectedModuleIndex === index
                                        ? 'bg-gray-600! text-white! '
                                        : 'bg-gray-100! text-slate-700 hover:bg-slate-50 border border-slate-200',
                                ]"
                            >
                                <div class="flex-1">
                                    <div
                                        class="font-semibold text-sm leading-tight"
                                    >
                                        {{ module.title }}
                                    </div>
                                </div>
                            </button>
                        </li>
                    </ul>
                </nav>

                <!-- Right Content Box -->
                <Transition name="fade" mode="out-in">
                    <div :key="selectedModuleIndex">
                        <div class="flex-1 p-6 bg-gray-100 rounded-2xl w-full">
                            <div
                                class="flex flex-col justify-center gap-4 mb-2"
                            >
                                <!-- <div
                                    class="w-14 h-14 rounded-lg bg-purple-100 flex items-center justify-center"
                                >
                                    <component
                                        :is="modules[selectedModuleIndex].icon"
                                        :size="28"
                                        :stroke-width="2"
                                        class="text-purple-700"
                                    />
                                </div> -->
                                <div>
                                    <h3
                                        class="text-2xl! font-bold! text-gray-900"
                                    >
                                        {{ modules[selectedModuleIndex].title }}
                                    </h3>
                                </div>
                            </div>

                            <p class="text-slate-700 text-lg font-medium mb-6!">
                                {{ modules[selectedModuleIndex].intro }}
                            </p>

                            <h4
                                class="font-semibold! text-sm text-gray-900 underline mb-2!"
                            >
                                You'll discover
                            </h4>
                            <ul class="space-y-2 text-slate-600 mb-6!">
                                <li
                                    v-for="(bullet, idx) in modules[
                                        selectedModuleIndex
                                    ].bullets"
                                    :key="idx"
                                    class="flex items-start gap-2"
                                >
                                    <span class="text-purple-600 mt-0.5"
                                        >•</span
                                    >
                                    <span>{{ bullet }}</span>
                                </li>
                            </ul>

                            <CustomButton
                                label="Explore This Module"
                                :as="'a'"
                                :href="modules[selectedModuleIndex].link"
                                size="lg"
                                variant="default"
                            />
                        </div>
                    </div>
                </Transition>
            </div>

            <!-- Mobile: Carousel -->
            <div class="md:hidden">
                <Carousel
                    class="w-full"
                    :opts="{
                        align: 'start',
                        loop: true,
                    }"
                >
                    <CarouselContent>
                        <CarouselItem
                            v-for="(module, index) in modules"
                            :key="module.id"
                            class="flex h-auto"
                        >
                            <PanelCard
                                :label="`Module ${index + 1}`"
                                :heading="module.title"
                                :bullets="[module.intro, ...module.bullets]"
                                :index="index"
                            >
                                <div class="px-4 mb-4">
                                    <CustomButton
                                        label="Explore This Module"
                                        :as="'a'"
                                        :href="module.link"
                                        size="lg"
                                        variant="default"
                                        class="w-full"
                                    />
                                </div>
                            </PanelCard>
                        </CarouselItem>
                    </CarouselContent>
                    <div
                        class="w-full justify-between flex bg-gray-100 rounded-xl translate-y-2 border border-gray-100"
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
    </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from {
    opacity: 0;
    transform: translateY(10px);
}

.fade-leave-to {
    opacity: 0;
    transform: translateY(10px);
}
</style>
