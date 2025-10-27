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
            'py-1 px-4 border-b-2 border-purple-100 text-purple-700 flex max-w-fit mb-8 md:mb-12 lg:mb-16 max-md:pl-8 -translate-x-6 md:translate-x-0',
            props.centered
                ? 'sm:border-l-2 border-r-2 rounded-br-lg sm:rounded-bl-lg sm:mx-auto'
                : 'border-r-2 rounded-br-lg ',
        ]"
    >
        <h2 class="text-sm! font-bold!">{{ title }}</h2>
    </header>
</template>
