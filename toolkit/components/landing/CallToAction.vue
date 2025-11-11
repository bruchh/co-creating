<script setup lang="ts">
import { Button } from "../ui/button";
</script>

<template>
    <section class="py-20 px-4 bg-blue-600 text-white">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p class="text-xl mb-8 text-blue-100">
                Explore our toolkit and start creating meaningful youth
                participation in your city.
            </p>
            <Button
                size="lg"
                variant="outline"
                class="bg-white text-blue-600 hover:bg-blue-50"
                as-child
            >
                <a href="/docs/introduction/what-is-co-creating-our-city"
                    >View Documentation</a
                >
            </Button>
        </div>
    </section>
</template>
