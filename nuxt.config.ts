// @ts-nocheck
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers"
import { defineNuxtConfig } from "nuxt/config"
import Components from "unplugin-vue-components/vite"
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    /*    build: {
        transpile: ["lodash-es"],
    },*/
    runtimeConfig: {
        // The private keys which are only available within server-side
        apiSecret: "123",
        // Keys within public, will be also exposed to the client-side
        public: {
            baseImagesUrl: "http://localhost:6200/images/",
            apiUrl: "http://localhost:6200/api",
            //otherUrl: process.env.OTHER_URL || "default_other_url"
        },
    },
    modules: ["@pinia/nuxt"],
    css: [
        "@/assets/styles/_mybase.scss",
        "@/assets/styles/fonts/Montserrat.scss" /*"@/assets/styles/_base.scss", "@/assets/styles/_modern-normalize.scss"*/,
    ],
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
                scss: {
                    additionalData: '@import "@/assets/styles/_mixins.scss";@import "@/assets/styles/_settings.scss";',
                },
            },
        },
    },
})
