<script setup lang="ts">
interface ResearchMethod {
    name: string;
    description: string;
}

defineProps<{
    researchDesign: ResearchMethod[];
}>();
</script>

<template>
    <div
        class="bg-dpart-purple-dark! rounded-2xl p-6 md:py-10 shadow-sm border border-slate-200 h-full"
    >
        <h3 class="text-2xl! font-bold! text-dpart-purple-rose! mb-4!">
            Research Design <span class="block text-base">(Mixed Methods)</span>
        </h3>
        <div class="space-y-4 text-white!">
            <div
                v-for="(method, index) in researchDesign"
                :key="index"
                class="space-y-1"
            >
                <h4 class="text-sm! font-bold!">
                    {{ method.name }}
                </h4>
                <p class="text-sm!">
                    {{ method.description }}
                </p>
            </div>
        </div>
    </div>
</template>
