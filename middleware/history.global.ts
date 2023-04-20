export default defineNuxtRouteMiddleware((to, from) => {
  const navigationHistory = useLocalStorage('history', [])
  navigationHistory.value.push(to.path);
  // console.warn(`Navigation history: ${navigationHistory.value.join('\n')}`);
})
