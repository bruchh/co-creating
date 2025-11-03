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
            'py-2 px-4 border border-gold border-dashed rounded-xl  text-dpart-purple flex max-w-fit mb-8',
            props.centered && 'sm:mx-auto',
        ]"
    >
        <h2 class="text-sm! font-bold!">{{ title }}</h2>
    </header>
</template>
