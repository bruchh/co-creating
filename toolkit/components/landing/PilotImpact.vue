<script setup lang="ts">
import { useLandingContent } from "../../lib/landing";

const { content } = useLandingContent();

defineProps<{
    impact: string;
}>();
</script>

<template>
    <div class="bg-dpart-light-blue! rounded-2xl p-6 sm:py-6 shadow-sm h-full">
        <h3 class="text-2xl! font-bold! text-dpart-purple-dark mb-4!">
            {{ content.pilots.impact }}
        </h3>
        <p class="text-lg1 text-dpart-purple-dark leading-relaxed">
            {{ impact }}
        </p>
    </div>
</template>
