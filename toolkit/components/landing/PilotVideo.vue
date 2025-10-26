<script setup lang="ts">
interface Props {
    city: string;
}

defineProps<Props>();
</script>

<template>
    <div
        class="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 h-full aspect-video"
    >
        <div
            class="w-full h-full bg-slate-100 flex items-center justify-center"
        >
            <p class="text-slate-500 text-lg">{{ city }} Project Video</p>
        </div>
    </div>
</template>
