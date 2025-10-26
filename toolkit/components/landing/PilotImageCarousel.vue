<script setup lang="ts">
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

interface Props {
    images: string[];
    city: string;
}

defineProps<Props>();
</script>

<template>
    <div
        class="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 h-full relative"
    >
        <Carousel
            class="w-full h-full! flex"
            :opts="{
                align: 'start',
                loop: true,
            }"
        >
            <CarouselContent class="h-full ml-0">
                <CarouselItem
                    v-for="(image, index) in images"
                    :key="index"
                    class="pl-0 h-full min-h-0 flex flex-col"
                >
                    <img
                        :src="image"
                        :alt="`${city} project image ${index + 1}`"
                        class="object-cover rounded-2xl flex-1 w-full min-h-0"
                    />
                </CarouselItem>
            </CarouselContent>

            <!-- Navigation buttons positioned at bottom corners -->
            <CarouselPrevious
                class="absolute bottom-4 left-4 translate-x-0 translate-y-0 rounded-xl border-gray-300 bg-white/90 hover:bg-white"
            />
            <CarouselNext
                class="absolute bottom-4 right-4 translate-x-0 translate-y-0 rounded-xl border-gray-300 bg-white/90 hover:bg-white"
            />
        </Carousel>
    </div>
</template>
