<script setup lang="ts">
import { Button } from "./button";
import type { ButtonVariants } from "./button";
import { ChevronRight } from "lucide-vue-next";

interface Props {
    label: string;
    href?: string;
    variant?: ButtonVariants["variant"];
    size?: ButtonVariants["size"];
    showIcon?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    variant: "outline",
    size: "default",
    showIcon: true,
});
</script>

<template>
    <Button
        :as="href ? 'a' : 'button'"
        :href="href"
        :variant="variant"
        :size="size"
        class="rounded-2xl! group gap-4 border-purple-700! border text-purple-700! pr-1 font-semibold!"
    >
        <!-- Default slot for custom icon (optional) -->
        <slot>
            <!-- Default label -->
            {{ props.label }}
        </slot>

        <!-- Right chevron icon (can be hidden with showIcon prop) -->
        <div
            class="rounded-[14px] bg-purple-700 text-white size-9 flex items-center justify-center"
        >
            <ChevronRight
                v-if="showIcon"
                :size="16"
                :stroke-width="3"
                class="opacity-90 group-hover:opacity-100 transition-opacity"
            />
        </div>
    </Button>
</template>
