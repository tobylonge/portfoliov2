// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: { devSourcemap: true },
},
css: [
  "@/assets/style/global.scss",
]
})
