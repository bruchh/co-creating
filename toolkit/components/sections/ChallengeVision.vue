<script setup lang="ts">
import PanelCard from "@/components/landing/PanelCard.vue";
import SectionHeader from "@/components/ui/SectionHeader.vue";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import CustomButton from "@/components/ui/CustomButton.vue";

interface Panel {
    label: string;
    heading: string;
    content: string;
}

const panels: Panel[] = [
    {
        label: "Challenge",
        heading: "Youth Want to Shape Their Communities—But Lack Real Pathways",
        content:
            "Many cities recognize the value of involving young people in local governance. Yet traditional approaches—youth councils, one-off consultations—often feel <strong>tokenistic</strong> or <strong>disconnected from real decision-making</strong>. Young people want to contribute, but lack clear pathways and opportunities. Meanwhile, city leaders struggle to gather youth insights, missing opportunities for meaningful collaboration and inclusive policymaking.",
    },
    {
        label: "Approach",
        heading: "Co-Creating Solutions Through Citizen Science",
        content:
            "Co-Creating Our City uses a <strong>Citizen Science approach</strong>—young people and local decision-makers jointly explore challenges, gather data, and develop actionable solutions. By combining <strong>lived experience with policy expertise</strong>, projects create structured dialogue and mutual trust. Together, they identify what young people want and what's feasible to implement, turning research into concrete solutions for vibrant, inclusive communities.",
    },
    {
        label: "Theory of Change",
        heading: "Empowering Youth and Transforming Democracy",
        content:
            "When young people co-create research with decision-makers, they develop <strong>youth civic agency</strong>—understanding their power to shape public life and policy. City officials gain deeper insight into youth needs, building capacity for inclusive policies. The result: <strong>sustainable participatory democracy</strong> where young people and institutions trust each other, cities institutionalize youth engagement beyond one-off projects, and communities become places where young people want to live and lead.",
    },
];
</script>

<template>
    <section class="py-16 md:py-24">
        <div class="container mx-auto">
            <SectionHeader title="Challenge & Vision" />
            <!-- Featured Quote -->
            <div class="mx-auto mb-12 md:mb-16">
                <blockquote class="relative border-l-0!">
                    <div
                        class="absolute -top-4 -left-2 text-6xl text-slate-300 leading-none"
                    >
                        "
                    </div>
                    <p
                        class="text-2xl! md:text-4xl! font-medium! text-slate-800 italic pl-8 pr-4"
                    >
                        Somebody who is 16 now, that is who we are planning for
                        in the future. So, not having them involved in that
                        process, I think we're really missing out on really good
                        ideas.
                    </p>
                    <footer class="mt-4 pl-8 text-slate-600">
                        <cite class="not-italic font-semibold!"
                            >— Alexis Gordon</cite
                        >, City of Charlotte
                    </footer>
                </blockquote>
            </div>

            <!-- Three-Panel Layout - Desktop -->
            <div
                class="hidden md:grid md:grid-cols-3 gap-4 lg:gap-4 mx-auto mb-12"
            >
                <PanelCard
                    v-for="(panel, index) in panels"
                    :key="index"
                    :label="panel.label"
                    :heading="panel.heading"
                    :content="panel.content"
                    :index="index"
                />
            </div>

            <!-- Carousel - Mobile -->
            <div class="md:hidden mx-auto mb-12">
                <Carousel
                    class="w-full"
                    :opts="{
                        align: 'start',
                        loop: true,
                    }"
                >
                    <CarouselContent>
                        <CarouselItem
                            v-for="(panel, index) in panels"
                            :key="index"
                            class="flex h-auto"
                        >
                            <PanelCard
                                :label="panel.label"
                                :heading="panel.heading"
                                :content="panel.content"
                                :index="index"
                            />
                        </CarouselItem>
                    </CarouselContent>
                    <div
                        class="w-full justify-between flex bg-gray-100 rounded-xl translate-y-0.5 border border-gray-100"
                    >
                        <CarouselPrevious
                            class="relative translate-x-0 translate-y-0 left-0 top-0 rounded-xl border-gray-300 size-9"
                        />
                        <CarouselNext
                            class="relative translate-x-0 translate-y-0 right-0 top-0 rounded-xl border-gray-300 size-9"
                        />
                    </div>
                </Carousel>
            </div>

            <!-- CTA Button -->
            <div class="mx-auto max-w-fit">
                <CustomButton
                    label="Explore Our Theory of Change"
                    href="/docs/guide/getting-started"
                    size="lg"
                    variant="default"
                />
            </div>
        </div>
    </section>
</template>
