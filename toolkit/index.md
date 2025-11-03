---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
---

<script setup>
import Hero from '@/components/sections/Hero.vue'
import ChallengeVision from '@/components/sections/ChallengeVision.vue'
import HowItWorks from '@/components/sections/HowItWorks.vue'
import ToolkitModules from '@/components/sections/ToolkitModules.vue'
import PilotProjects from '@/components/sections/PilotProjects.vue'
import CallToAction from '@/components/sections/CallToAction.vue'
import Benefits from '@/components/sections/Benefits.vue'
import { onMounted } from 'vue'

onMounted(() => {
    const vpDocContainer = document.querySelector('.vp-doc')
    if (vpDocContainer) {
        vpDocContainer.classList.remove('vp-doc')
    }
})

</script>

<Hero />
<ChallengeVision />
<Benefits />
<HowItWorks />
<PilotProjects />
<ToolkitModules />
<CallToAction />
