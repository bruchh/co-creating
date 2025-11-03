<script setup lang="ts">
import { computed } from "vue";

interface Props {
    name: string;
    size?: number | string;
    class?: string;
}

const props = withDefaults(defineProps<Props>(), {
    size: 24,
});

// Convert icon name to file path
// e.g., "brain" -> "/icons/Icon_Brain.svg"
// e.g., "citizen-1" -> "/icons/Icon_Citizen-1.svg"
const iconPath = computed(() => {
    // Capitalize first letter of each word after hyphen
    const formatted = props.name
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("-");

    return `/icons/Icon_${formatted}.svg`;
});

const sizeStyle = computed(() => {
    const size =
        typeof props.size === "number" ? `${props.size}px` : props.size;
    return {
        width: size,
        height: size,
    };
});
</script>

<template>
    <img
        :src="iconPath"
        :alt="`${name} icon`"
        :style="sizeStyle"
        :class="props.class"
    />
</template>
