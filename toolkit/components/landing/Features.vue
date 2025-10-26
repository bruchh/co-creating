<script setup lang="ts">
const features = [
  {
    title: 'Youth Engagement',
    description: 'Empowering young people to participate in city planning and decision-making processes.',
    icon: '👥'
  },
  {
    title: 'Collaborative Tools',
    description: 'Digital tools and frameworks to facilitate meaningful collaboration between youth and decision-makers.',
    icon: '🛠️'
  },
  {
    title: 'Evidence-Based',
    description: 'Grounded in research and best practices for youth participation and civic engagement.',
    icon: '📊'
  }
]
</script>

<template>
  <section id="features" class="py-20 px-4 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12">
        Features
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="bg-white p-6 rounded-lg shadow-sm"
        >
          <div class="text-4xl mb-4">{{ feature.icon }}</div>
          <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
