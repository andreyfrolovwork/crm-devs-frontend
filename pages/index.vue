<template>
    <div class="mwr">
        <div class="mwr-content">
            <div class="h1">
                Главная
            </div>
            <icon-rose />
            <img
                :src="config.public.baseImagesUrl + 'mainback.webp'"
                alt="back"
                >
            <div class="bl" />
            <div
                v-animate-on-scroll
                class="bl2"
                >
                123
                <img
                    :src="config.public.baseImagesUrl + 'mainback.webp'"
                    alt="back"
                    >
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRuntimeConfig } from "nuxt/app"

const config = useRuntimeConfig()


</script>

<style lang="scss">
.mwr {
    padding-top: 60px;
    height: 100vh;
    overflow: scroll;
    &-content {
        display: flex;
        flex-flow: column nowrap;
    }
}

.bl {
    width: 100%;
    height: 1000px;
    background-color: #00A0E3;
}

.bl2 {
    width: 100%;
    height: 1000px;
    background-color: #4ce300;
}
</style>
