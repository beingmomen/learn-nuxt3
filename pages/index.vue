<template>
  <NuxtLink class="underline font-medium" :to="firstLesson.path">
    Go to first lesson
  </NuxtLink>
</template>

<script setup>
const firstLesson = await useFirstLesson();
</script>

<style lang="scss" scoped></style>
