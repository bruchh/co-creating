<script setup lang="ts">
import SectionH2 from "../ui/SectionH2.vue";
import Icon from "../ui/Icon.vue";

interface Partner {
    name: string;
    logo: string;
    url: string;
    scale: number;
}

const partners: Partner[] = [
    {
        name: "d|part",
        logo: "/design 1_lila.png",
        url: "https://www.dpart.org",
        scale: 1.8,
    },
    {
        name: "GMF",
        logo: "/GMF No Periods Black Mono.png",
        url: "https://www.gmfus.org/",
        scale: 1,
    },
    {
        name: "Gambrell Foundation",
        logo: "/Orientation=Vertical, Colorway=Cool Gradient, Color Mode=Light Mode.png",
        url: "https://gambrellfoundation.org/",
        scale: 1.6,
    },
    {
        name: "SCI:MOVE",
        logo: "/sci_move_logo_black_tranparent.png",
        url: "https://www.sci-move.de/",
        scale: 0.8,
    },
];
</script>

<template>
    <section class="py-16 md:py-24 rounded-2xl relative mt-8">
        <div
            class="absolute inset-y-0 -inset-x-4 md:-inset-x-8 border-gold border border-dashed rounded-2xl -z-10"
        ></div>
        <div class="container mx-auto">
            <!-- Main CTA Content -->
            <div class="max-w-4xl mx-auto mb-12">
                <SectionH2 class="mx-auto text-center">
                    Ready to Start Your Own Project?
                </SectionH2>
                <p class="text-lg! text-dpart-purple-dark! mb-10! text-center">
                    Join cities and organizations creating meaningful youth
                    engagement through co-creation.
                </p>

                <!-- CTA Buttons -->
                <div class="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-16">
                    <!-- Primary CTA -->
                    <a
                        href="/docs/guide/getting-started"
                        class="group bg-salmon rounded-xl p-6 transition-all hover:shadow-lg"
                    >
                        <Icon name="data-3" :size="56" class="mb-2" />
                        <div class="flex items-center justify-between mb-2">
                            <h3
                                class="text-xl! font-bold! text-dpart-purple-dark!"
                            >
                                Start Your Project
                            </h3>
                        </div>
                        <p class="text-dpart-purple-dark! text-sm">
                            Access the complete toolkit with step-by-step
                            guidance
                        </p>
                    </a>

                    <!-- Secondary CTA -->
                    <a
                        href="mailto:citiescomms@gmfus.org"
                        class="group bg-dpart-light-blue rounded-xl p-6 transition-all hover:shadow-lg"
                    >
                        <Icon name="kontakt" :size="56" class="mb-2" />
                        <div class="flex items-center justify-between mb-2">
                            <h3
                                class="text-xl! font-bold! text-dpart-purple-dark!"
                            >
                                Get In Touch
                            </h3>
                        </div>
                        <p class="text-dpart-purple-dark! text-sm">
                            Contact us with questions or tell us about your
                            project
                        </p>
                    </a>
                </div>
            </div>

            <!-- Partner Logos -->
            <div class="max-w-3xl mx-auto">
                <p class="text-center text-xs! text-slate-500 mb-6! md:mb-8!">
                    In partnership with
                </p>
                <div
                    class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"
                >
                    <a
                        v-for="partner in partners"
                        :key="partner.name"
                        :href="partner.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all"
                        :aria-label="`Visit ${partner.name} website`"
                    >
                        <img
                            :src="partner.logo"
                            :alt="`${partner.name} logo`"
                            class="h-10! w-auto object-contain"
                            :style="{ transform: `scale(${partner.scale})` }"
                        />
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
