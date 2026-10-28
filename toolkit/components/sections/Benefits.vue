<script setup lang="ts">
import SectionHeader from "../ui/SectionHeader.vue";
import { cn } from "../../lib/utils";
import workshopImage from "../../public/images/atlanta/StillsUSA3.webp";

import { computed } from "vue";
import { useLandingContent } from "../../lib/landing";

const { content } = useLandingContent();
const benefitCategories = computed(() => content.value.benefits.categories);
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
                        :src="workshopImage"
                        :alt="content.benefits.imageAlt"
                        class="w-full h-full rounded-2xl shadow-lg object-cover md:-translate-x-8"
                    />
                </div>

                <!-- Benefits - Takes ~55% on desktop -->
                <div class="md:col-span-7">
                    <SectionHeader :title="content.benefits.label" />
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
