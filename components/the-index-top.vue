<template>
    <div
        class="itop"
        :style="{ backgroundImage: 'url(' + config.public.baseImagesUrl + 'index-main-image.webp' + ')' }"
        >
        <div class="itop-top" />
        <div class="itop-header">
            <div class="itop-header-text">
                Дом на Кирова
            </div>
        </div>
        <div>
            <div>Ипотека за 1 рубль</div>
            <div>Квартиры с мебелью</div>
            <div>Туристичекие активности в пешей доступности</div>
        </div>
    </div>
</template>

<script setup>
import { useRuntimeConfig } from "nuxt/app"

const config = useRuntimeConfig()
</script>

<style lang="scss" scoped>
.itop {
    height: 913px;
    background-position-x: center;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-content: center;

    &-top {
        display: flex;
        flex-basis: 50%;
        justify-content: center;
    }

    &-header {
        display: flex;
        justify-content: center;

        &-text {
            font-family: 'Montserrat', serif;
            font-style: normal;
            font-weight: 600;
            font-size: 100.477px;
            line-height: 122px;

            color: white;
        }

    }
}
</style>