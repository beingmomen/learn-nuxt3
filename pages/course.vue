<template>
  <div class="flex items-center flex-col p-10 bg-blue-500 h-screen">
    <div class="mb-4 flex justify-between items-center w-full">
      <h1 class="text-3xl">
        <span class="font-medium">
          Course:
          <span class="font-bold">{{ course.title }}</span>
        </span>
      </h1>
      <UserCard />
    </div>
    <div class="flex w-full justify-center flex-row flex-grow gap-6">
      <div class="basis-1/4 h-screen bg-white p-4 flex rounded-md flex-col">
        <h2 class="text-4xl text-bold mb-5">Chapter</h2>
        <div
          class="space-y-1 mb-4 flex flex-col"
          v-for="chapter in course.chapters"
          :key="chapter.slug"
        >
          <h4 class="text-2xl">{{ chapter.title }}</h4>
          <NuxtLink
            v-for="(lesson, index) in chapter.lessons"
            :key="lesson.slug"
            class="flex flex-row space-x-1"
            :to="lesson.path"
            :class="{
              'text-blue-500': lesson.path === $route.fullPath,
              'text-gray-600': lesson.path !== $route.fullPath,
            }"
          >
            <span class="ml-3 flex flex-row text-gray-500">
              {{ index + 1 }}.
            </span>
            <span>{{ lesson.title }} </span>
          </NuxtLink>
        </div>
      </div>
      <div class="basis-3/4 h-screen bg-red-100 p-4 rounded-md">
        <NuxtErrorBoundary>
          <NuxtPage />
          <template #error="{ error }">
            <p>
              Oh no, Something broke
              <code>{{ error }}</code>
            </p>
            <p>
              <button
                class="hover:cursor-pointer bg-gray-500 text-white font-bold"
                @click="resetError(error)"
              >
                Reset
              </button>
            </p>
          </template>
        </NuxtErrorBoundary>
      </div>
    </div>
  </div>
</template>

<script setup>
const course = await useCourse();

const firstLesson = await useFirstLesson();

const resetError = async (error) => {
  await navigateTo(firstLesson.path);
  error.value = null;
};
</script>

<style scoped></style>
