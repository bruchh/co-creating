<script setup lang="ts">
import {
    Calendar,
    Users as UsersIcon,
    Presentation,
    Share2,
} from "lucide-vue-next";
import type { Component } from "vue";

interface TimelinePhase {
    month: string;
    activity: string;
    actors: string;
    icon: Component;
}

const phases: TimelinePhase[] = [
    {
        month: "May–Sep 2024",
        activity:
            "Project setup, including recruitment and training co-researchers to become Citizen Scientists",
        actors: "Project team, funder or sponsor, and city authorities",
        icon: Calendar,
    },
    {
        month: "Oct 2024–Mar 2025",
        activity:
            "Citizen Science research period, accompanied by a dedicated researcher in each city",
        actors: "Project team & co-researchers",
        icon: UsersIcon,
    },
    {
        month: "May–Jun 2025",
        activity: "Closing event",
        actors: "Project team, co-researchers, city authorities, wider public",
        icon: Presentation,
    },
    {
        month: "Sep–Oct 2025",
        activity: "Dissemination activities",
        actors: "Project team, selected co-researchers",
        icon: Share2,
    },
];
</script>

<template>
    <div
        class="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 h-full flex flex-col"
    >
        <h3 class="text-base! font-bold! text-slate-900 mb-6!">
            Project Timeline
        </h3>

        <div class="relative flex-1">
            <!-- Vertical dashed line -->
            <div
                class="absolute left-[25px] top-8 bottom-8 w-px border-r border-dashed border-gray-200"
            />

            <!-- Timeline phases -->
            <div class="space-y-6 relative">
                <div
                    v-for="(phase, index) in phases"
                    :key="index"
                    class="relative flex gap-4"
                >
                    <!-- Icon circle -->
                    <div
                        class="bg-gray-100 rounded-full p-3 flex items-center justify-center shrink-0 w-13 h-13"
                    >
                        <component
                            :is="phase.icon"
                            :size="20"
                            :stroke-width="2"
                            class="text-purple-700"
                        />
                    </div>

                    <!-- Content -->
                    <div class="flex-1">
                        <div class="text-xs font-semibold text-purple-700 mb-1">
                            {{ phase.month }}
                        </div>
                        <div class="text-sm text-slate-900 font-medium mb-1">
                            {{ phase.activity }}
                        </div>
                        <div class="text-xs text-slate-500 leading-relaxed">
                            {{ phase.actors }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
