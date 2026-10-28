<script setup lang="ts">
import { computed, ref } from "vue";
import { useLandingContent } from "../../lib/landing";
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

const { content, localizedLink } = useLandingContent();
const modules = computed(() => content.value.toolkit.modules);

const selectedModuleIndex = ref(0);
</script>

<template>
    <section class="py-16 md:py-24 relative">
        <div
            class="absolute inset-y-0 -inset-x-4 md:-inset-x-8 bg-dpart-light-blue rounded-2xl -z-10"
        ></div>
        <div class="mx-auto">
            <SectionHeader :title="content.toolkit.label" />

            <!-- Intro -->
            <div class="max-w-3xl mb-12 md:mb-16">
                <SectionH2>{{ content.toolkit.title }}</SectionH2>
                <p class="text-lg text-slate-700 leading-relaxed">
                    {{ content.toolkit.description }}
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
                                :label="content.toolkit.explore"
                                :as="'a'"
                                :href="localizedLink(modules[selectedModuleIndex].link)"
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
                                        {{ content.toolkit.module }} {{ index + 1 }}
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
                                    :label="content.toolkit.explore"
                                    :as="'a'"
                                    :href="localizedLink(module.link)"
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
