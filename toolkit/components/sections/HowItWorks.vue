<script setup lang="ts">
import SectionHeader from "../ui/SectionHeader.vue";
import SectionH2 from "../ui/SectionH2.vue";
import ApproachComparison from "../landing/ApproachComparison.vue";
import Quote from "../ui/Quote.vue";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";
import { cn } from "../../lib/utils";
import infographicImage from "../../public/images/Infografik_dpart_5_steps.png";
import germanInfographicImage from "../../public/images/Infografik_dpart_DE-1.png";

import { computed } from "vue";
import { useLandingContent } from "../../lib/landing";

const { content, isGerman } = useLandingContent();
const quotes = computed(() => content.value.howItWorks.quotes);
</script>

<template>
    <section class="py-16 md:py-24 relative">
        <div
            class="absolute inset-y-0 -inset-x-4 md:-inset-x-8 bg-yellow-light rounded-2xl -z-10"
        ></div>
        <div class="mx-auto">
            <SectionHeader :title="content.howItWorks.label" centered />
            <!-- Main heading and description -->
            <div class="max-w-4xl mb-12 md:mb-16 md:text-center! md:mx-auto">
                <SectionH2>
                    {{ content.howItWorks.title.before }}<span class="underline">{{ content.howItWorks.title.with }}</span>{{ content.howItWorks.title.between }}<span class="underline">{{ content.howItWorks.title.on }}</span>{{ content.howItWorks.title.after }}
                </SectionH2>
                <p class="text-lg text-slate-700 leading-relaxed">
                    {{ content.howItWorks.descriptionBefore }}<strong>Citizen Science</strong>{{ content.howItWorks.descriptionAfter }}
                </p>
            </div>

            <!-- Two Column Layout: Approach + Quotes -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                <!-- Approach Comparison - Left side (~60%) -->
                <div class="md:col-span-2">
                    <ApproachComparison />
                </div>

                <!-- Quotes - Right side (~40%) -->
                <div class="md:col-span-2">
                    <!-- Stacked Quotes - Desktop/Tablet -->
                    <div class="hidden md:grid md:grid-cols-2 md:gap-0">
                        <Quote
                            v-for="(quoteItem, index) in quotes"
                            :key="index"
                            :quote="quoteItem.quote"
                            :person="quoteItem.person"
                            :position="quoteItem.position"
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
                </div>
            </div>

            <!-- Infographic in the current page language. -->
            <div class="w-full mx-auto flex">
                <img
                    :src="isGerman ? germanInfographicImage : infographicImage"
                    :alt="content.howItWorks.infographicAlt"
                    width="4961"
                    height="2894"
                    loading="lazy"
                    class="w-full h-auto object-contain scale-105!"
                />
            </div>
        </div>
    </section>
</template>
