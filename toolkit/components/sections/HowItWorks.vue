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

interface QuoteItem {
    quote: string;
    person: string;
    position: string;
}

const quotes: QuoteItem[] = [
    {
        quote: "In these workshops our voices are heard, but we also want to hear the voices of other young people. That's what really motivated me, because I thought: I can make a change with this project.",
        person: "Rochelle Kirschbaum",
        position: "Citizen Scientist, Düsseldorf",
    },
    {
        quote: "We don't really typically get to connect with city officials as much. I think having initiatives like 'Co-creating our city' will bridge that gap and allow us to better understand the government and also for them to understand like what we might like.",
        person: "Megha Mittal",
        position: "Citizen Scientist, Charlotte",
    },
];
</script>

<template>
    <section class="py-16 md:py-24 relative">
        <div
            class="absolute inset-y-0 -inset-x-4 md:-inset-x-8 bg-yellow-light rounded-2xl -z-10"
        ></div>
        <div class="mx-auto">
            <SectionHeader title="How It Works" centered />
            <!-- Main heading and description -->
            <div class="max-w-4xl mb-12 md:mb-16 md:text-center! md:mx-auto">
                <SectionH2> Research with the Community, Not on It </SectionH2>
                <p class="text-lg text-slate-700 leading-relaxed">
                    Co-Creating Our City brings together young people and local
                    leaders through
                    <strong>Citizen Science</strong> — research done with the
                    community, not on it. Together, they study issues that
                    matter to young residents, share knowledge and experiences,
                    and develop realistic proposals for change. This
                    collaborative approach empowers youth to take part in
                    decision-making, builds trust between generations, and
                    supports cities in becoming more inclusive and
                    youth-friendly.
                </p>
            </div>

            <!-- Two Column Layout: Approach + Quotes -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                <!-- Approach Comparison - Left side (~60%) -->
                <div class="lg:col-span-1">
                    <ApproachComparison />
                </div>

                <!-- Quotes - Right side (~40%) -->
                <div class="lg:col-span-1">
                    <!-- Stacked Quotes - Desktop/Tablet -->
                    <div class="hidden md:flex md:flex-col md:gap-0">
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

            <!-- Infographic - Full width, centered -->
            <div class="w-full mx-auto flex">
                <img
                    :src="infographicImage"
                    alt="5 Steps of Co-Creating Our City Process"
                    width="4961"
                    height="2894"
                    loading="lazy"
                    class="w-full h-auto object-contain scale-105!"
                />
            </div>
        </div>
    </section>
</template>
