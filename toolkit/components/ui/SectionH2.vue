<script setup lang="ts">
defineProps<{
    class?: string;
}>();
</script>

<template>
    <h2
        :class="[
            'text-3xl! md:text-4xl! font-bold! text-d mb-6! text-dpart-purple-dark',
            $props.class,
        ]"
    >
        <slot />
    </h2>
</template>
