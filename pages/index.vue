<template>
  <NuxtLink class="underline font-medium" :to="firstLesson.path">
    Go to first lesson
  </NuxtLink>
</template>

<script setup>
const firstLesson = useFirstLesson();
</script>

<style lang="scss" scoped></style>
