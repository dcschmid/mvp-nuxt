export default defineNuxtRouteMiddleware((to, _from) => {
  const navigationHistory = useLocalStorage('history', [] as string[])

  navigationHistory.value.push(to.path)
})
