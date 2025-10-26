<script setup lang="ts">
import { CornerDownRight } from "lucide-vue-next";

interface ComparisonPair {
    traditional: string;
    coCreated: string;
}

const comparisons: ComparisonPair[] = [
    {
        traditional: "Created for young people",
        coCreated: "Created with young people and local decision-makers",
    },
    {
        traditional: "Hierarchical way of working",
        coCreated: "Collaborative way of working",
    },
    {
        traditional: "Adult expertise privileged",
        coCreated: "Multiple forms of expertise valued",
    },
    {
        traditional:
            "Knowledge produced for decision-makers and expert audiences",
        coCreated:
            "Knowledge produced for practical application and shared with stakeholders",
    },
];
</script>

<template>
    <div class="max-w-3xl mx-auto">
        <!-- Legend -->
        <div class="flex items-center justify-center gap-8 mb-8 text-sm">
            <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-slate-300" />
                <span class="text-slate-600">Traditional Approach</span>
            </div>
            <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-slate-800" />
                <span class="text-slate-900 font-medium"
                    >Co-Created Approach</span
                >
            </div>
        </div>

        <!-- Comparisons -->
        <div class="space-y-6">
            <div v-for="(pair, index) in comparisons" :key="index" class="">
                <!-- Traditional approach -->
                <div class="text-slate-600 mb-2">
                    {{ pair.traditional }}
                </div>

                <!-- Arrow icon -->
                <div class="grid grid-cols-[24px_1fr] gap-2 mb-3">
                    <CornerDownRight
                        :size="20"
                        :stroke-width="2"
                        class="text-purple-700"
                    />
                    <!-- Co-created approach -->
                    <div class="text-slate-900 font-medium">
                        {{ pair.coCreated }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
