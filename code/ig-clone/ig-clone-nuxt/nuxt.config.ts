// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/main.css'],
  router: {
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  devtools: { enabled: true },
})