<template>
    <div class="aplist">
        <div @mouseover="hover" class="block1">
            <div class="image-gallery">
                <the-gallery />
            </div>
            <div class="description">
                <!--                <div class="d1">
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
                </div>-->
                <div class="d2">
                    <div class="t title">
                        Двухкомнатная квартира № 229
                    </div>
                    <div class="t props">
                        {{ apart.area }} м<sup>2</sup>
                    </div>
                    <div class="t props">
                        <b>{{ apart.floor }}</b> из 10 этаж
                    </div>
                    <div class="t price">
                        {{ apart.price }} рублей
                    </div>
                    <div class="t props" />
                    <div class="t props" />
                    <div class="t props" />
                    <div class="t" />
                    <div class="t" />
                    <div class="t" />

                    <div class="df jcc aic buybut">
                        <feedback-button text="Оставить заявку" />
                    </div>
                </div>
            </div>
        </div>
        <div><the-credit /></div>
    </div>
</template>
<script setup>
import { useRoute, useRuntimeConfig } from "nuxt/app"
import { useApart } from "../useHooks/useApart.js"

function hover(){
    console.log('hover')
}
const route = useRoute()
const config = useRuntimeConfig()
const { apart } = useApart(route)
</script>
<style lang="scss" scoped>

.t {
    font-family: Montserrat,serif;
    font-weight: 400;
}
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
    //background-color: #71afcb;
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
        margin: 15px;
        box-shadow: 0 0 50px rgb(0 0 0 / 10%);
        min-width: 375px;
        @include phone {
            min-width:initial
        }
        //background-color: #e848d3;
    }

    .description {
        display: flex;
        flex: 1;
        background-color: #f8f7f7;
        flex-flow: column;

        margin: 15px;

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
            margin:15px;

            display: flex;
            flex-flow: column;
            justify-content: center;

            .desc-li {
                text-align: center;

            }

            .title {
                font-size: 32px;
                font-weight: 600;
                line-height: 35px;
                margin-bottom: 19px
            }

            .props {
                font-size: 15px;
                line-height: 41px;

            }

            .price {
                font-size: 22px;
                line-height: 1.3;
                margin: 25px 0;
            }

            .buybut {
                display: flex;
                align-items: unset;
            }
        }
    }

    .img-sec {
        width: 131px;
        object-fit: contain;
    }
}
</style>
