<script setup lang="ts">
import { onMounted } from 'vue';
import Hero from '../sections/Hero.vue';
import ChallengeVision from '../sections/ChallengeVision.vue';
import Benefits from '../sections/Benefits.vue';
import HowItWorks from '../sections/HowItWorks.vue';
import PilotProjects from '../sections/PilotProjects.vue';
import ToolkitModules from '../sections/ToolkitModules.vue';
import CallToAction from '../sections/CallToAction.vue';

onMounted(() => {
  document.querySelector('.vp-doc')?.classList.remove('vp-doc');
});
</script>

<template>
  <Hero />
  <ChallengeVision />
  <Benefits />
  <HowItWorks />
  <PilotProjects />
  <ToolkitModules />
  <CallToAction />
</template>
