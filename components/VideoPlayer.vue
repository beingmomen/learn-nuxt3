<template>
  <!-- src="https://player.vimeo.com/video/{video_id}?h={hash_parameter}" -->
  <iframe
    width="560"
    height="315"
    :src="`https://player.vimeo.com/video/${props.videoId}`"
    frameborder="0"
    title="Video Player"
    allow=""
    allowfullscreen
  ></iframe>
</template>

<script setup>
const props = defineProps({
  videoId: {
    type: [String, Number],
    required: true,
  },
});
</script>

<style lang="scss" scoped>
</style>