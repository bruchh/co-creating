<script setup lang="ts">
import CustomButton from "@/components/ui/CustomButton.vue";
import PilotVideo from "../landing/PilotVideo.vue";
</script>

<template>
    <section class="py-20">
        <div
            class="mx-auto text-center flex flex-col gap-4 md:gap-8 mb-8 sm:mb-12 lg:mb-16"
        >
            <h1
                class="text-[clamp(2.5rem,1.154rem+5.128vw,5rem)]! leading-[clamp(2.5rem,1.154rem+5.128vw,5rem)]! font-bold! mb-6"
            >
                Co-Creating Our City: Youth and Decision-Makers Shaping
                Participation and Change
            </h1>
            <p class="text-xl text-gray-600 mb-8 text-balance!">
                Co-Creating Our City is a participatory project that brings
                together local young people and decision-makers to shape
                opportunities for youth engagement in cities and municipalities.
            </p>
            <div class="">
                <CustomButton
                    label="Discover The Toolkit"
                    href="/docs/guide/getting-started"
                    size="lg"
                    variant="default"
                    class="md:hidden"
                />
                <CustomButton
                    label="Discover The Co-Creating Our City Toolkit"
                    href="/docs/guide/getting-started"
                    size="lg"
                    variant="default"
                    class="max-md:hidden"
                />
            </div>
        </div>
        <PilotVideo city="Co-Creating Our City" />
    </section>
</template>
