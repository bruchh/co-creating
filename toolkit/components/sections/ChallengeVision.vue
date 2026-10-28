<script setup lang="ts">
import PanelCard from "../landing/PanelCard.vue";
import SectionHeader from "../ui/SectionHeader.vue";
import SectionH2 from "../ui/SectionH2.vue";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Quote from "../ui/Quote.vue";

import { computed } from "vue";
import { useLandingContent } from "../../lib/landing";

const { content } = useLandingContent();
const quotes = computed(() => content.value.challenge.quotes);
const panels = computed(() => content.value.challenge.panels);
</script>

<template>
    <section class="py-16 md:py-24 relative">
        <div
            class="absolute inset-y-0 -inset-x-4 md:-inset-x-8 bg-dpart-light-blue rounded-2xl -z-10"
        ></div>
        <div class="mx-auto">
            <SectionHeader :title="content.challenge.label" />
            <SectionH2 class="pb-8"
                >{{ content.challenge.title }}</SectionH2
            >

            <!-- Three-Panel Layout - Desktop -->
            <div
                class="hidden md:grid md:grid-cols-2 gap-4 lg:gap-4 mx-auto mb-4"
            >
                <PanelCard
                    v-for="(panel, index) in panels"
                    :key="index"
                    :label="panel.label"
                    :heading="panel.heading"
                    :content="panel.content"
                    :index="index"
                />
            </div>

            <!-- Tabs - Mobile -->
            <div class="md:hidden mx-auto mb-4">
                <Tabs default-value="challenge" class="w-full">
                    <TabsList
                        class="grid w-full grid-cols-2 mb-2! p-1 bg-purple-50 rounded-2xl overflow-clip"
                    >
                        <TabsTrigger
                            class="py-2! rounded-2xl"
                            value="challenge"
                        >
                            {{ panels[0].label }}
                        </TabsTrigger>
                        <TabsTrigger class="py-2! rounded-2xl" value="approach">
                            {{ panels[1].label }}
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="challenge">
                        <PanelCard
                            :label="panels[0].label"
                            :heading="panels[0].heading"
                            :content="panels[0].content"
                            :index="0"
                        />
                    </TabsContent>

                    <TabsContent value="approach">
                        <PanelCard
                            :label="panels[1].label"
                            :heading="panels[1].heading"
                            :content="panels[1].content"
                            :index="1"
                        />
                    </TabsContent>
                </Tabs>
            </div>

            <!-- Quotes Carousel -->
            <Carousel
                class="w-full"
                :opts="{
                    align: 'start',
                    loop: true,
                }"
            >
                <CarouselContent class="flex">
                    <CarouselItem
                        v-for="(quoteItem, index) in quotes"
                        :key="index"
                        class="flex h-auto"
                    >
                        <Quote
                            :quote="quoteItem.quote"
                            :person="quoteItem.person"
                            :position="quoteItem.position"
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
    </section>
</template>
