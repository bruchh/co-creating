<script setup lang="ts">
import { computed } from "vue";
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
import { useLandingContent } from "../../lib/landing";

const { content } = useLandingContent();
const projects = computed(() => content.value.pilots.projects);
</script>

<template>
    <section class="py-16 md:py-24">
        <div class="mx-auto">
            <SectionHeader :title="content.pilots.label" centered />

            <div class="max-w-3xl mx-auto text-center mb-8 md:mb-12">
                <SectionH2>{{ content.pilots.title }}</SectionH2>
                <p class="text-lg text-slate-700 leading-relaxed">
                    {{ content.pilots.description }}
                </p>
            </div>

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
                    <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
                        <!-- Row 1: Key Facts + Quotes -->
                        <div class="md:col-span-6">
                            <PilotKeyFacts :key-facts="project.keyFacts" />
                        </div>
                        <div class="md:col-span-6">
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

                            <div class="md:hidden">
                                <Carousel
                                    class="w-full"
                                    :opts="{ align: 'start', loop: true }"
                                >
                                    <CarouselContent class="flex">
                                        <CarouselItem
                                            v-for="(quoteItem, index) in project.quotes"
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
                                    <div class="flex justify-center gap-2 mt-6 absolute right-6 bottom-6">
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
                            <PilotImageCarousel :images="project.images" :city="project.city" />
                        </div>
                        <div class="md:col-span-4">
                            <PilotResearchDesign :research-design="project.researchDesign" />
                        </div>

                        <!-- Row 3: Impact + Video -->
                        <div class="md:col-span-12 xl:col-span-5">
                            <PilotImpact :impact="project.impact" />
                        </div>
                        <div class="md:col-span-12 xl:col-span-7">
                            <PilotVideo :video-url="project.videoUrl" :city="project.city" />
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    </section>
</template>
