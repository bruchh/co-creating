<script setup lang="ts">
import quoteIcon from "../../public/quote.svg";

defineProps<{
    quote: string;
    person: string;
    position: string;
    class?: string;
}>();
</script>

<template>
    <div
        :class="[
            'relative bg-[#F4F4F4] p-8 h-full pl-12 rounded-xl mb-1',
            $props.class,
        ]"
    >
        <!-- Quote SVG Icon -->
        <img
            :src="quoteIcon"
            alt=""
            class="absolute top-0 left-4 size-16 opacity-50"
        />

        <!-- Quote Content -->
        <div class="relative z-10 pl-8 h-full flex flex-col justify-between">
            <p
                class="text-base! font-regular! text-dpart-purple! mb-4! mt-0! text-balance"
            >
                {{ quote }}
            </p>

            <!-- Attribution -->
            <div class="mt-4 max-sm:-translate-x-12">
                <p class="font-bold text-dpart-purple-dark! my-0!">
                    {{ person }}
                </p>
                <p class="italic font-light text-dpart-purple! my-0!">
                    {{ position }}
                </p>
            </div>
        </div>
    </div>
</template>
