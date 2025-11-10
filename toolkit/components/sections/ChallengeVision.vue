<script setup lang="ts">
import PanelCard from "../landing/PanelCard.vue";
import SectionHeader from "../ui/SectionHeader.vue";
import SectionH2 from "../ui/SectionH2.vue";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Quote from "@/components/ui/Quote.vue";

interface Panel {
    label: string;
    heading: string;
    content: string;
}

interface QuoteItem {
    quote: string;
    person: string;
    position: string;
}

const quotes: QuoteItem[] = [
    {
        quote: "Ultimately, we are the future. And I feel like making sure that our voices are heard and that we feel well educated and have the opportunity to bring change and bring an impact to our own communities, and forming communities that want to stay connected, is important. It's just better for our future and it's better for forming strong communities.",
        person: "Kayleigh Mayhew",
        position: "Citizen Scientist, Charlotte",
    },
    {
        quote: "Youth are so insightful and so wise. It really benefits us to incorporate youth in our planning and design of programming that we're thinking about as a city.",
        person: "LaKeeshia Fox",
        position: "City of Charlotte",
    },
    {
        quote: "The decisions made today will only have significant impact in the coming years. And that's why it's important to ask the people who will then have to live with these changes.",
        person: "Felix Reinkemeier",
        position: "Citizen Scientist, Düsseldorf",
    },
    {
        quote: "We often compartmentalize our interactions with youth in government. People think of, like, youth protesting or they think of youth doing a program, or an internship. But we rarely really find ways to engage with what their thoughts are, and their opinions are, which is odd, because when we think about city plans, we usually plan out 15, 20 years. Somebody who is 16 now, that is who we are planning for in the future. So not having them involved in that process, I think we're really missing out on really good ideas.",
        person: "Alexis Gordon",
        position: "City of Charlotte",
    },
];

const panels: Panel[] = [
    {
        label: "Challenge",
        heading: "The Mismatch in Youth Participation",
        content:
            "Many cities recognize the value and enormous potential of involving young people in in local governance — yet meaningful engagement often remains out of reach. Traditional formats like youth councils or consultations can feel tokenistic, disconnected from real influence, or inaccessible to underrepresented youth. While many young people are eager to contribute, cities can struggle to tap into youth insights, missing vital opportunities for collaboration and more inclusive decision-making. In many cities, there is a mismatch between the opportunities for exchange and what young people seek as engagement to enact their ideas about vibrant communities.",
    },
    {
        label: "Approach",
        heading: "Co-Creating Solutions Through Citizen Science",
        content:
            "Co-Creating Our City bridges this gap through participatory research and Citizen Science — a collaborative way that sees young people and decision-makers jointly conduct research, gather data, and design actionable solutions for local challenges. By combining lived experience with policy expertise, Co-Creating Our City projects spark dialogue, build trust, and embed youth perspectives in real and feasible decisions. This approach empowers young people and city leaders, strengthens participation and dialogue, and fosters civic skills and confidence - creating more inclusive, vibrant, and democratic communities.",
    },
];
</script>

<template>
    <section class="py-16 md:py-24 relative">
        <div
            class="absolute inset-y-0 -inset-x-4 md:-inset-x-8 bg-dpart-light-blue rounded-2xl -z-10"
        ></div>
        <div class="mx-auto">
            <SectionHeader title="Making The Case" />
            <SectionH2 class="pb-8"
                >Why Your City Needs 'Co-Creating Our City'</SectionH2
            >

            <!-- Three-Panel Layout - Desktop -->
            <div
                class="hidden md:grid md:grid-cols-2 gap-4 lg:gap-4 mx-auto mb-4"
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

            <!-- Tabs - Mobile -->
            <div class="md:hidden mx-auto mb-4">
                <Tabs default-value="challenge" class="w-full">
                    <TabsList
                        class="grid w-full grid-cols-2 mb-2! p-1 bg-purple-50 rounded-2xl overflow-clip"
                    >
                        <TabsTrigger
                            class="py-2! rounded-2xl"
                            value="challenge"
                        >
                            {{ panels[0].label }}
                        </TabsTrigger>
                        <TabsTrigger class="py-2! rounded-2xl" value="approach">
                            {{ panels[1].label }}
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="challenge">
                        <PanelCard
                            :label="panels[0].label"
                            :heading="panels[0].heading"
                            :content="panels[0].content"
                            :index="0"
                        />
                    </TabsContent>

                    <TabsContent value="approach">
                        <PanelCard
                            :label="panels[1].label"
                            :heading="panels[1].heading"
                            :content="panels[1].content"
                            :index="1"
                        />
                    </TabsContent>
                </Tabs>
            </div>

            <!-- Quotes Carousel -->
            <Carousel
                class="w-full"
                :opts="{
                    align: 'start',
                    loop: true,
                }"
            >
                <CarouselContent class="flex">
                    <CarouselItem
                        v-for="(quoteItem, index) in quotes"
                        :key="index"
                        class="flex h-auto"
                    >
                        <Quote
                            :quote="quoteItem.quote"
                            :person="quoteItem.person"
                            :position="quoteItem.position"
                        />
                    </CarouselItem>
                </CarouselContent>
                <div
                    class="flex justify-center gap-2 mt-6 absolute right-6 bottom-6"
                >
                    <CarouselPrevious
                        class="relative translate-x-0 translate-y-0 left-0 top-0 rounded-xl border-gray-300 size-10"
                    />
                    <CarouselNext
                        class="relative translate-x-0 translate-y-0 right-0 top-0 rounded-xl border-gray-300 size-10"
                    />
                </div>
            </Carousel>
        </div>
    </section>
</template>
