<script setup lang="ts">
import { useLandingContent } from "../../lib/landing";

const { content } = useLandingContent();

interface KeyFact {
    label: string;
    value: string;
}

defineProps<{
    keyFacts: KeyFact[];
}>();
</script>

<template>
    <div
        class="bg-crimson rounded-2xl p-6 sm:py-8 shadow-sm border border-slate-200 h-full"
    >
        <h3 class="text-xl! sm:text-2xl! font-bold! text-salmon mb-4!">
            {{ content.pilots.keyFacts }}
        </h3>
        <div class="space-y-3">
            <div
                v-for="(fact, index) in keyFacts"
                :key="index"
                class="space-y-1"
            >
                <dt class="text-sm font-bold! text-white">
                    {{ fact.label }}
                </dt>
                <dd class="text-sm text-white">
                    {{ fact.value }}
                </dd>
            </div>
        </div>
    </div>
</template>
