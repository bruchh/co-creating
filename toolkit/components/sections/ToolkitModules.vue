<script setup lang="ts">
import { ref } from "vue";
import SectionHeader from "../ui/SectionHeader.vue";
import SectionH2 from "../ui/SectionH2.vue";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";
import CustomButton from "../ui/CustomButton.vue";

interface Module {
    id: string;
    title: string;
    description: string;
    link: string;
}

const modules: Module[] = [
    {
        id: "making-the-case",
        title: "Making the Case for 'Co-Creating Our City'",
        description:
            "Discover why Co-Creating Our City projects are essential for meaningful youth engagement. Learn how they boost youth participation, foster collaboration, and create more inclusive communities. See how these projects empower both young people and decision-makers to make real impact.",
        link: "/docs/making-the-case/why-we-need-co-creating-our-city",
    },
    {
        id: "setting-up",
        title: "Setting Up Your Own Project",
        description:
            "Build a strong foundation for your project with practical guidance on planning and budgeting. Find out how to set goals, plan, fund, and assemble the right team and partnerships. Ensure your project runs smoothly and delivers meaningful results.",
        link: "/docs/setting-up-your-project",
    },
    {
        id: "bringing-together",
        title: "Bringing Young People and City Leaders Together",
        description:
            "Turn collaboration into real action. Learn how to recruit, motivate, and meaningfully connect young people and decision-makers as co-researchers, how to overcome challenges, and design solutions that reflect real youth perspectives.",
        link: "/docs/bringing-young-people-and-city-leaders-together/",
    },
    {
        id: "participatory-research",
        title: "Doing Participatory Research",
        description:
            "Learn to plan, facilitate, and sustain participatory research that combines youth insight and policy expertise. Access step-by-step guidance, ready-to-use materials, and tips to turn research into actionable solutions for your community.",
        link: "/docs/doing-participatory-research",
    },
    {
        id: "achieving-impact",
        title: "Achieving Impact",
        description:
            "Make your findings count. Discover how to share results with youth and the wider public, while motivating city leaders to act on the findings. Translate research into policies, programs, and lasting change that strengthen youth engagement in your community.",
        link: "/docs/achieving-impact/",
    },
];

const selectedModuleIndex = ref(0);
</script>

<template>
    <section class="py-16 md:py-24 relative">
        <div
            class="absolute inset-y-0 -inset-x-4 md:-inset-x-8 bg-dpart-light-blue rounded-2xl -z-10"
        ></div>
        <div class="mx-auto">
            <SectionHeader title="Toolkit Modules" />

            <!-- Intro -->
            <div class="max-w-3xl mb-12 md:mb-16">
                <SectionH2> Start Your Own Project With Our Toolkit </SectionH2>
                <p class="text-lg text-slate-700 leading-relaxed">
                    Explore the Co-Creating Our City toolkit and learn how to
                    involve young people and decision-makers in shaping your
                    city. Access practical steps, tips, and resources to plan,
                    run, and strengthen your project and turn youth ideas into
                    real, tangible impact in your city or community.
                </p>
            </div>

            <!-- Desktop: Sidebar Navigation + Content -->
            <div class="hidden md:flex gap-4">
                <!-- Left Sidebar Navigation -->
                <nav class="w-80 shrink-0">
                    <ul
                        class="space-y-2! sticky top-8 p-2! bg-white rounded-2xl"
                    >
                        <li v-for="(module, index) in modules" :key="module.id">
                            <button
                                @click="selectedModuleIndex = index"
                                :class="[
                                    'w-full text-left px-4! py-2! rounded-lg transition-all flex items-start gap-3',
                                    selectedModuleIndex === index
                                        ? 'bg-dpart-purple-light! text-white! '
                                        : 'bg-white! text-dpart-purple-dark! hover:bg-slate-50 border border-slate-200',
                                ]"
                            >
                                <div class="flex-1">
                                    <div
                                        class="font-semibold! text-sm! leading-tight"
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
                        <div class="flex-1 p-6 bg-white rounded-2xl w-full">
                            <h3
                                class="text-2xl! font-bold! text-dpart-purple-dark mb-4!"
                            >
                                {{ modules[selectedModuleIndex].title }}
                            </h3>

                            <p
                                class="text-dpart-purple-dark text-base! leading-relaxed mb-6!"
                            >
                                {{ modules[selectedModuleIndex].description }}
                            </p>

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
                            <div
                                class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 w-full flex flex-col justify-between"
                            >
                                <div class="">
                                    <div
                                        class="text-xs font-semibold text-dpart-purple-light! uppercase tracking-wide mb-2"
                                    >
                                        Module {{ index + 1 }}
                                    </div>
                                    <h3
                                        class="text-xl! font-bold! text-dpart-purple-dark! mb-4!"
                                    >
                                        {{ module.title }}
                                    </h3>
                                    <p
                                        class="text-dpart-purple-dark! leading-relaxed mb-6!"
                                    >
                                        {{ module.description }}
                                    </p>
                                </div>
                                <CustomButton
                                    label="Explore This Module"
                                    :as="'a'"
                                    :href="module.link"
                                    size="lg"
                                    variant="default"
                                    class=""
                                />
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <div class="flex justify-end">
                        <div class="flex rounded-xl translate-y-2 gap-1 p-px">
                            <CarouselPrevious
                                class="relative translate-x-0 translate-y-0 left-0 top-0 rounded-xl bg-dpart-purple-dark text-white! border-none size-9"
                            />
                            <CarouselNext
                                class="relative translate-x-0 translate-y-0 right-0 top-0 rounded-xl bg-dpart-purple-dark text-white! border-none size-9"
                            />
                        </div>
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
