<script setup lang="ts">
interface Props {
    imageUrl: string;
    alt: string;
    city: string;
}

defineProps<Props>();
</script>

<template>
    <div
        class="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 h-full"
    >
        <div class="aspect-video">
            <img
                :src="imageUrl"
                :alt="alt"
                class="w-full h-full object-cover"
            />
        </div>
    </div>
</template>
