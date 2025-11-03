<script setup lang="ts">
import SectionHeader from "@/components/ui/SectionHeader.vue";
import { cn } from "@/lib/utils";

interface Benefit {
    text: string;
}

interface BenefitCategory {
    title: string;
    items: Benefit[];
}

const benefitCategories: BenefitCategory[] = [
    {
        title: "For young people:",
        items: [
            { text: "promotes civic engagement and trust in institutions." },
            {
                text: "creates belonging: young people to feel more connected to their city.",
            },
            {
                text: "increases democratic literacy, understanding, and efficacy.",
            },
            {
                text: "develops scientific literacy, leadership and communication skills.",
            },
        ],
    },
    {
        title: "For cities and communities:",
        items: [
            {
                text: "creates opportunity to gain insight into youth needs and experiences.",
            },
            {
                text: "builds trust and connection between young residents and the city, making cities equitable and sustainable communities and places where people want to live.",
            },
            {
                text: "generates collaborative solutions that have greater longevity and rates of success, increasing the city's capacity to design inclusive and sustainable policies.",
            },
        ],
    },
];
</script>

<template>
    <section class="py-16 md:py-24 bg-white">
        <div class="mx-auto">
            <!-- Asymmetric Layout: Image Left, Benefits Right -->
            <div
                class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-start"
            >
                <!-- Image - Takes ~45% on desktop -->
                <div class="md:col-span-5 md:h-full flex">
                    <img
                        src="/images/atlanta/StillsUSA3.webp"
                        alt="Young people collaborating in workshop"
                        class="w-full h-full rounded-2xl shadow-lg object-cover md:-translate-x-8"
                    />
                </div>

                <!-- Benefits - Takes ~55% on desktop -->
                <div class="md:col-span-7">
                    <SectionHeader title="Benefits" />
                    <!-- <SectionH2 class="mb-12">Benefits for Everyone</SectionH2> -->
                    <div class="-space-y-px">
                        <div
                            v-for="(category, index) in benefitCategories"
                            :key="index"
                            :class="
                                cn(
                                    'space-y-1 border-gold border-dashed pl-4 md:p-6 py-4',
                                    index === 0
                                        ? 'border-b border-l rounded-bl-3xl pb-8'
                                        : 'border-t border-l rounded-tl-3xl pt-8',
                                )
                            "
                        >
                            <h3
                                class="text-xl! font-bold! text-dpart-purple-dark! pb-2!"
                            >
                                {{ category.title }}
                            </h3>
                            <ul class="space-y-2">
                                <li
                                    v-for="(
                                        benefit, benefitIndex
                                    ) in category.items"
                                    :key="benefitIndex"
                                    class="flex items-start gap-3"
                                >
                                    <span
                                        class="shrink-0 w-1.5 h-1.5 rounded-full bg-dpart-light-blue mt-2.5"
                                    ></span>
                                    <span
                                        class="text-base text-dpart-purple-dark!"
                                    >
                                        {{ benefit.text }}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
