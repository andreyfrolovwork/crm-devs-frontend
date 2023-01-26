<template>
    <div class="aplist">
        <div class="block1">
            <div class="image-gallery">
                <the-gallery />
            </div>
            <div class="description">
                <div class="d1">
                    <div class="img-d">
                        <img
                            :src="config.public.baseImagesUrl + 'section-4_plane.png'"
                            class="img-sec"
                            alt="План этажа"
                            >
                        <div class="title">
                            На плане этажа
                        </div>
                    </div>
                    <div class="img-d">
                        <img
                            :src="config.public.baseImagesUrl + '5-sec.png'"
                            class="img-sec"
                            alt="План комплекса"
                            >
                        <div class="title">
                            На плане комплекса
                        </div>
                    </div>
                </div>
                <div class="d2">
                    <ul>
                        <li class="desc-li">
                            Двухкомнатная квартира № 229
                        </li>
                        <li class="desc-li">
                            {{ apart.area }} м2
                        </li>
                        <li class="desc-li">
                            {{ apart.floor }} из 10
                        </li>
                        <li class="desc-li">
                            {{ apart.price }} рублей
                        </li>
                    </ul>
                    <div class="df jcc aic">
                        <feedback-button text="Оставить заявку" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useRoute, useRuntimeConfig } from "nuxt/app"
import { useApart } from "../useHooks/useApart.js"

const route = useRoute()
const config = useRuntimeConfig()
const { apart } = useApart(route)
</script>
<style lang="scss" scoped>


.df {
    display: flex;
    flex-flow: column;
}

.jcc {
    justify-content: center;
}

.aic {
    align-items: center;
}

.aplist {
    padding: 40px;
    background-color: #71afcb;
    display: flex;
    flex-flow: column;

    .block1 {
        display: flex;
        max-width: 1440px;
        flex-flow: row;
        flex-wrap: wrap;

        @include phone {
            flex-flow: column;
        }
    }

    .image-gallery {
        display: flex;
        flex: 1;

        min-width: 375px;
        @include phone {
            min-width:initial
        }
        background-color: #e848d3;
    }

    .description {
        display: flex;
        flex: 1;
        background-color: #56a953;
        flex-flow: column;

        min-width: 375px;
        @include phone {
            min-width:initial
        }
        .d1 {
            display: flex;
            flex-flow: row;
            justify-content: space-evenly;

            .img-d {
                display: flex;
                flex-flow: column;
                justify-content: center;

                .title {
                    text-align: center;
                }
            }
        }

        .d2 {
            display: flex;
            flex-flow: column;
            justify-content: center;

            .desc-li {
                text-align: center;
            }
        }
    }

    .img-sec {
        width: 131px;
        object-fit: contain;
    }
}
</style>
