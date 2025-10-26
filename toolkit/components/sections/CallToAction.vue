<script setup lang="ts">
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
    <section
        class="py-16 md:py-24 bg-linear-to-b from-white to-purple-50 rounded-2xl"
    >
        <div class="container mx-auto">
            <!-- Main CTA Content -->
            <div class="max-w-4xl mx-auto mb-12">
                <h2
                    class="text-3xl! md:text-4xl! font-bold! text-gray-900 mb-4! text-center"
                >
                    Ready to Start Your Own Project?
                </h2>
                <p class="text-lg! text-slate-700! mb-10! text-center">
                    Join cities and organizations creating meaningful youth
                    engagement through co-creation.
                </p>

                <!-- CTA Buttons -->
                <div class="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-16">
                    <!-- Primary CTA -->
                    <a
                        href="/docs/guide/getting-started"
                        class="group bg-white text-white rounded-xl p-6 transition-all hover:shadow-lg"
                    >
                        <div class="flex items-center justify-between mb-2">
                            <h3 class="text-xl! font-bold!">
                                Start Your Project
                            </h3>
                        </div>
                        <p class="text-gray-700 text-sm">
                            Access the complete toolkit with step-by-step
                            guidance
                        </p>
                    </a>

                    <!-- Secondary CTA -->
                    <a
                        href="mailto:citiescomms@gmfus.org"
                        class="group bg-white text-white rounded-xl p-6 transition-all hover:shadow-lg"
                    >
                        <div class="flex items-center justify-between mb-2">
                            <h3 class="text-xl! font-bold!">Get In Touch</h3>
                        </div>
                        <p class="text-gray-700 text-sm">
                            Contact us with questions or tell us about your
                            project
                        </p>
                    </a>
                </div>
            </div>

            <!-- Partner Logos -->
            <div class="max-w-5xl mx-auto">
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
                            class="h-12! w-auto object-contain"
                            :style="{ transform: `scale(${partner.scale})` }"
                        />
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
