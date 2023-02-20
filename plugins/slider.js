import { defineNuxtPlugin } from "#app"
import "@vueform/slider/themes/default.css"
import Slider from "@vueform/slider"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Slider)
})
