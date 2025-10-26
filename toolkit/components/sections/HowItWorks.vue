<script setup lang="ts">
import SectionHeader from "@/components/ui/SectionHeader.vue";
import ProcessTimeline from "@/components/landing/ProcessTimeline.vue";
import ApproachComparison from "@/components/landing/ApproachComparison.vue";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
</script>

<template>
    <section class="py-16 md:py-24">
        <div class="container mx-auto">
            <SectionHeader title="How It Works" centered />
            <!-- Main heading and description -->
            <div class="max-w-4xl mb-12 md:mb-16 md:text-center! md:mx-auto">
                <h2
                    class="text-3xl! md:text-4xl! font-bold! text-gray-900 mb-6!"
                >
                    Research with the Community, Not on It
                </h2>
                <p class="text-lg text-slate-700 leading-relaxed">
                    Co-Creating Our City brings together young people and local
                    leaders through
                    <strong>Citizen Science</strong> — research done with the
                    community, not on it. Together, they study issues that
                    matter to young residents, share knowledge and experiences,
                    and develop realistic proposals for change. This
                    collaborative approach empowers youth to take part in
                    decision-making, builds trust between generations, and
                    supports cities in becoming more inclusive and
                    youth-friendly.
                </p>
            </div>

            <!-- Tabs for Process and Comparison -->
            <Tabs default-value="process" class="w-full max-w-2xl mx-auto">
                <TabsList
                    class="grid w-full grid-cols-2 mb-2! p-1 bg-purple-50 rounded-2xl overflow-clip"
                >
                    <TabsTrigger class="py-2! rounded-2xl" value="process"
                        >The Process</TabsTrigger
                    >
                    <TabsTrigger class="py-2! rounded-2xl" value="comparison"
                        >The Benefits</TabsTrigger
                    >
                </TabsList>

                <TabsContent value="process" class="">
                    <ProcessTimeline />
                </TabsContent>

                <TabsContent value="comparison" class="mt-8">
                    <ApproachComparison />
                </TabsContent>
            </Tabs>
        </div>
    </section>
</template>
