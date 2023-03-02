<template>
    <div class="ct">
        <div class="ct-title">
            <img
                class="ct-social-svg"
                :src="config.public.baseImagesUrl + 'ct.svg'"
                >Отдел продаж в Челябинске:
        </div>
        <div class="ct-description">
            <p>г. Челябинск, ул. Либкнехта, д.2 оф.936</p>
            <p>Телефон 8-351-200-53-05</p>
            <p>Понедельник - Пятница с 9.00 до 18.00 часов</p>
        </div>
        <div class="ct-social-block">
            <a href="https://www.w3docs.com/"> <img
                class="ct-social-svg"
                :src="config.public.baseImagesUrl + 'social (1).svg'"
                ></a>
            <a href="https://www.w3docs.com/"><img
                class="ct-social-svg"
                :src="config.public.baseImagesUrl + 'social (2).svg'"
                ></a>
            <a href="https://www.w3docs.com/"><img
                class="ct-social-svg"
                :src="config.public.baseImagesUrl + 'social (3).svg'"
                ></a>
            <a href="https://www.w3docs.com/"><img
                class="ct-social-svg"
                :src="config.public.baseImagesUrl + 'social (4).svg'"
                ></a>
            <a href="https://www.w3docs.com/"><img
                class="ct-social-svg"
                :src="config.public.baseImagesUrl + 'social (5).svg'"
                ></a>
            <a href="https://www.w3docs.com/"><img
                class="ct-social-svg"
                :src="config.public.baseImagesUrl + 'social (6).svg'"
                ></a>
        </div>
    </div>
</template>

<script setup>
import { useRuntimeConfig } from "nuxt/app"

const config = useRuntimeConfig()

</script>

<style lang="scss" scoped>
.ct {
    display: flex;
    flex-flow: column nowrap;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;

    font-family: 'Montserrat', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 250%;
    color: #000000;

    &-description {
        margin: 13px 0 0 44px
    }

    &-title {
        font-family: 'Montserrat', serif;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 200%;
        color: #000000;
    }

    &-social-block {
        margin-left: 34px;
    }

    &-social-svg {
        margin: 10px;
    }
}
</style>