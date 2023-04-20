<template>
  <NuxtLayout
    ><div class="prose">
      <h1>Dang</h1>
      <p>Something broke</p>
      <p>Sorry</p>
      <strong>{{ error.message }}</strong>
      <a class="hover:cursor-pointer" @click="handleError">First Lesson </a>
    </div>
  </NuxtLayout>
</template>

<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect:
      "/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3",
  });
};
</script>

<style lang="scss" scoped></style>
