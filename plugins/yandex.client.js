import { defineNuxtPlugin } from "#app"
import YmapPlugin from "vue-yandex-maps"
import settings from "~/functions/yandex.js"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(YmapPlugin, settings)
})
