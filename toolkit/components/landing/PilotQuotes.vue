<script setup lang="ts">
import { ref } from "vue";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";

interface Quote {
    text: string;
    author: string;
    role: string;
    type: "official" | "youth";
}

interface Props {
    quotes: Quote[];
}

const props = defineProps<Props>();
const currentIndex = ref(0);

const next = () => {
    currentIndex.value = (currentIndex.value + 1) % props.quotes.length;
};

const prev = () => {
    currentIndex.value =
        currentIndex.value === 0
            ? props.quotes.length - 1
            : currentIndex.value - 1;
};

const goTo = (index: number) => {
    currentIndex.value = index;
};
</script>

<template>
    <div
        class="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 h-full flex flex-col"
    >
        <h3 class="text-xl font-bold text-slate-900 mb-6">
            Voices from the Project
        </h3>

        <div class="flex-1 flex flex-col">
            <!-- Quote content with transition -->
            <Transition name="fade" mode="out-in">
                <div :key="currentIndex" class="flex-1">
                    <blockquote class="mb-6">
                        <p class="text-lg text-slate-700 leading-relaxed mb-4">
                            "{{ quotes[currentIndex].text }}"
                        </p>
                        <footer>
                            <cite class="not-italic">
                                <div class="font-semibold text-slate-900">
                                    {{ quotes[currentIndex].author }}
                                </div>
                                <div class="text-sm text-slate-600">
                                    {{ quotes[currentIndex].role }}
                                </div>
                            </cite>
                        </footer>
                    </blockquote>
                </div>
            </Transition>

            <!-- Navigation -->
            <div
                class="flex items-center justify-between mt-auto pt-4 border-t border-slate-200"
            >
                <!-- Dots -->
                <div class="flex gap-2">
                    <button
                        v-for="(quote, index) in quotes"
                        :key="index"
                        @click="goTo(index)"
                        :class="[
                            'w-2 h-2 rounded-full transition-all',
                            currentIndex === index
                                ? 'bg-purple-600 w-6'
                                : 'bg-slate-300 hover:bg-slate-400',
                        ]"
                        :aria-label="`Go to quote ${index + 1}`"
                    />
                </div>

                <!-- Arrow buttons -->
                <div class="flex gap-2">
                    <button
                        @click="prev"
                        class="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                        aria-label="Previous quote"
                    >
                        <ChevronLeft :size="20" class="text-slate-600" />
                    </button>
                    <button
                        @click="next"
                        class="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                        aria-label="Next quote"
                    >
                        <ChevronRight :size="20" class="text-slate-600" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from {
    opacity: 0;
    transform: translateY(-10px);
}

.fade-leave-to {
    opacity: 0;
    transform: translateY(10px);
}
</style>
