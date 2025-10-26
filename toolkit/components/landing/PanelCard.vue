<script setup lang="ts">
interface Props {
    label: string;
    heading: string;
    content?: string;
    bullets?: string[];
    index?: number;
}

const props = defineProps<Props>();
</script>

<template>
    <div
        class="hover:border-slate-300 transition-colors rounded-2xl bg-gray-100 relative"
    >
        <!-- Number Badge - only shown if index is provided -->
        <div
            v-if="props.index !== undefined"
            class="absolute z-10 top-3 right-3 text-5xl font-bold! text-white"
        >
            {{ props.index + 1 }}
        </div>

        <!-- Label -->
        <div
            class="px-4 text-purple-700 pt-4 text-sm font-semibold! rounded-t-xl drop-shadow-2xl"
        >
            {{ label }}
        </div>

        <!-- Content -->
        <div class="p-4">
            <h3
                class="text-lg! font-bold! mb-2! mt-0! text-slate-900 pr-2 text-balance!"
            >
                {{ heading }}
            </h3>

            <!-- HTML content (original format for ChallengeVision) -->
            <p
                v-if="content"
                class="text-slate-700 leading-relaxed mt-0!"
                v-html="content"
            ></p>

            <!-- Bullet list format (new format for modules) -->
            <template v-if="bullets && bullets.length > 0">
                <p class="text-slate-700 leading-relaxed mt-0! mb-3!">
                    {{ bullets[0] }}
                </p>
                <ul class="space-y-2 text-slate-600 text-sm">
                    <li
                        v-for="(bullet, idx) in bullets.slice(1)"
                        :key="idx"
                        class="flex items-center gap-2"
                    >
                        <span class="text-purple-600">•</span>
                        <span>{{ bullet }}</span>
                    </li>
                </ul>
            </template>
        </div>
        <!-- Slot for additional content (e.g., buttons) -->
        <slot />
    </div>
</template>
