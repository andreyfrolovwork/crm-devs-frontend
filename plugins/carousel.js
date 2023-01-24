import { defineNuxtPlugin } from "#app"
import "@splidejs/splide/dist/css/themes/splide-default.min.css"
import VueSplide from "@splidejs/vue-splide"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueSplide)
})
