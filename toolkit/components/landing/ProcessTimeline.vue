<script setup lang="ts">
import {
    Target,
    Microscope,
    Database,
    Search,
    Megaphone,
} from "lucide-vue-next";
import type { Component } from "vue";

interface ProcessStep {
    title: string;
    description: string;
    icon: Component;
}

const steps: ProcessStep[] = [
    {
        title: "Define a common research goal",
        description:
            "Include different perspectives and rely on co-researchers to consider the relevance for the community.",
        icon: Target,
    },
    {
        title: "Determine methodological approach",
        description:
            "Consider what suits the research question and take into account the co-researchers' ideas, access, and lived experience.",
        icon: Microscope,
    },
    {
        title: "Collect data",
        description: "Train and involve co-researchers in data collection.",
        icon: Database,
    },
    {
        title: "Analyze data",
        description:
            "Train and involve co-researchers in the analysis of data.",
        icon: Search,
    },
    {
        title: "Disseminate and use findings",
        description:
            "Distill key recommendations and choose accessible forms of presentation and communication that suit your target audiences.",
        icon: Megaphone,
    },
];
</script>

<template>
    <div class="relative max-w-2xl py-6 md:py-10 mx-auto rounded-xl">
        <div
            class="w-px h-[calc(100%-120px)] md:h-[calc(100%-120px)] border-r border-dashed border-gray-200 absolute left-[25px] top-12"
        ></div>
        <!-- Vertical timeline -->
        <div class="space-y-8 md:space-y-10">
            <div
                v-for="(step, index) in steps"
                :key="index"
                class="relative flex gap-8"
            >
                <!-- Icon circle -->
                <div
                    class="bg-gray-100 rounded-full p-4 mb-4 flex max-w-fit size-13"
                >
                    <component
                        :is="step.icon"
                        :size="20"
                        :stroke-width="2"
                        class="text-purple-700"
                    />
                </div>

                <!-- Content -->
                <div>
                    <h3 class="text-base! font-semibold! text-gray-800! mb-1!">
                        {{ step.title }}
                    </h3>
                    <p class="text-base text-gray-600 max-w-xl text-balance">
                        {{ step.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
