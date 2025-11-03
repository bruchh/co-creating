<script setup lang="ts">
interface Props {
    city: string;
    videoUrl: string;
}

const props = defineProps<Props>();

// Convert YouTube URL to embed format if needed
const getEmbedUrl = (url: string): string => {
    if (!url) return "";

    // If already an embed URL, return as is
    if (url.includes("/embed/")) return url;

    // Convert youtu.be or youtube.com/watch URLs to embed format
    const youtubeMatch = url.match(
        /(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&?]+)/,
    );
    if (youtubeMatch) {
        return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
    }

    return url;
};

const embedUrl = getEmbedUrl(props.videoUrl);
</script>

<template>
    <div
        class="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 h-full aspect-video"
    >
        <!-- Video iframe if URL exists -->
        <iframe
            v-if="embedUrl"
            :src="embedUrl"
            :title="`${city} Project Video`"
            class="w-full h-full"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>

        <!-- Fallback if no video -->
        <div
            v-else
            class="w-full h-full bg-slate-100 flex items-center justify-center"
        >
            <p class="text-slate-500 text-lg">{{ city }} Project Video</p>
        </div>
    </div>
</template>
