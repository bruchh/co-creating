<script setup lang="ts">
import { CornerDownRight } from "lucide-vue-next";

import { computed } from "vue";
import { useLandingContent } from "../../lib/landing";

const { content } = useLandingContent();
const comparisons = computed(() => content.value.howItWorks.comparisons);
</script>

<template>
    <div
        class="mx-auto p-6 rounded-2xl border border-gold border-dashed flex flex-col h-full"
    >
        <!-- Legend -->
        <div class="flex gap-8 mb-8 text-sm md:hidden">
            <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-slate-300" />
                <span class="text-slate-600">{{ content.howItWorks.traditional }}</span>
            </div>
            <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-dpart-purple-dark!" />
                <span class="text-dpart-purple-dark! font-medium"
                    >{{ content.howItWorks.coCreated }}</span
                >
            </div>
        </div>

        <!-- Comparisons -->
        <div class="space-y-6 md:space-y-4">
            <div class="md:grid md:grid-cols-2">
                <h3>
                    <span class="text-dpart-purple-dark! font-bold"
                        >{{ content.howItWorks.traditional }}</span
                    >
                </h3>
                <h3>
                    <span class="text-dpart-purple-dark! font-bold"
                        >{{ content.howItWorks.coCreated }}</span
                    >
                </h3>
            </div>
            <div v-for="(pair, index) in comparisons" :key="index" class="">
                <div class="md:grid md:grid-cols-2">
                    <!-- Traditional approach -->
                    <div class="text-slate-600 mb-2">
                        {{ pair.traditional }}
                    </div>

                    <!-- Arrow icon -->
                    <div class="grid max-md:grid-cols-[24px_1fr] gap-2 mb-3">
                        <CornerDownRight
                            :size="20"
                            :stroke-width="2"
                            class="text-purple-700 md:hidden!"
                        />
                        <!-- Co-created approach -->
                        <div class="text-dpart-purple-dark! font-medium">
                            {{ pair.coCreated }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
