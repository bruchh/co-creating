<script setup lang="ts">
interface Props {
    title: string;
    centered?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    centered: false,
});
</script>

<template>
    <header
        :class="[
            'py-1 px-4 border-b-2 text-purple-700 flex max-w-fit mb-8 md:mb-12 lg:mb-16',
            props.centered
                ? 'border-l-2 border-r-2 rounded-b-lg md:mx-auto'
                : 'border-r-2 rounded-br-lg ',
        ]"
    >
        <h2 class="text-sm! font-bold!">{{ title }}</h2>
    </header>
</template>
