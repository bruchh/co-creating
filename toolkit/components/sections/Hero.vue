<script setup lang="ts">
import CustomButton from "../ui/CustomButton.vue";
import PilotVideo from "../landing/PilotVideo.vue";
import { useLandingContent } from "../../lib/landing";

const { content, localizedLink } = useLandingContent();
</script>

<template>
    <section class="py-20">
        <div
            class="mx-auto text-center flex flex-col gap-4 md:gap-8 mb-8 sm:mb-12 lg:mb-16"
        >
            <h1
                class="text-[clamp(2.5rem,1.154rem+5.128vw,5rem)]! text-dpart-purple-dark leading-[clamp(2.5rem,1.154rem+5.128vw,5rem)]! font-bold! mb-6"
            >
                <span class="text-dpart-purple-light">
                    Co-Creating Our City:</span
                >
                {{ content.hero.title }}
            </h1>
            <p class="text-xl text-dpart-purple-dark mb-8 text-balance!">
                {{ content.hero.description }}
            </p>
            <div class="">
                <CustomButton
                    :label="content.hero.discoverShort"
                    :href="localizedLink('/docs/introduction/what-is-co-creating-our-city')"
                    size="lg"
                    variant="default"
                    class="md:hidden"
                />
                <CustomButton
                    :label="content.hero.discover"
                    :href="localizedLink('/docs/introduction/what-is-co-creating-our-city')"
                    size="lg"
                    variant="default"
                    class="max-md:hidden"
                />
            </div>
        </div>
        <PilotVideo
            city="Co-Creating Our City"
            video-url="https://youtu.be/6JbWA2Gsl0I"
        />
    </section>
</template>
