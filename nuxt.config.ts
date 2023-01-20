// @ts-nocheck
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers"
import { defineNuxtConfig } from "nuxt/config"
import Components from "unplugin-vue-components/vite"
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    /*    build: {
        transpile: ["lodash-es"],
    },*/
    modules: ["@pinia/nuxt"],
    css: ["@/assets/styles/_base.scss", "@/assets/styles/_modern-normalize.scss"],
    vite: {
        ssr: {
            noExternal: ["ant-design-vue"],
        },
        plugins: [
            Components({
                resolvers: [AntDesignVueResolver()],
            }),
        ],
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: '@import "@/assets/styles/_mixins.scss"',
                },
            },
        },
    },
})
