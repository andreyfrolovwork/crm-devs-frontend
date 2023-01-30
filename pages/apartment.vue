<template>
    <div class="aplist">
        <div
            class="block1"
            >
            <div class="image-gallery">
                <the-gallery />
            </div>
            <div class="description">
                <div class="description__content">
                    <div class="d2">
                        <div>
                            <img
                                src="http://localhost:6200/images/all-sec.png"
                                alt="секции"
                                class="description__content__sections"
                                >
                        </div>
                        <div class="t title">
                            Двухкомнатная <br> квартира № 229
                        </div>
                        <div class="d2__props">
                            <div class="t props">
                                {{ apart.area }} м<sup>2</sup>
                            </div>
                            <div class="t props">
                                <b>{{ apart.floor }}</b> из 10 этаж
                            </div>
                            <div class="dfr mprice">
                                <div class="t price">
                                    {{ apart.price }} рублей
                                </div>
                                <div class="creditlink">
                                    8 071 руб./мес.
                                    в ипотеку
                                </div>
                            </div>
                        </div>

                        <div class="df jcc aic buybut">
                            <div>
                                <the-button>Оставить заявку</the-button>
                            </div>
                            <div>
                                <button class="download-pdf">
                                    <img
                                        :src="config.public.baseImagesUrl + 'print.svg'"
                                        alt=""
                                        >
                                    Скачать PDF- брошюру
                                </button>
                            </div>

                            <!--                            <feedback-button text="Оставить заявку" />-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--        <div><the-credit /></div>-->
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
.t {
    font-family: Montserrat, serif;
    font-weight: 400;
}

.df {
    display: flex;
    flex-flow: column;
}

.dfc {
    display: flex;
    flex-flow: column;
}

.dfr {
    display: flex;
    flex-flow: row;
}

.jcc {
    justify-content: center;
}

.aic {
    align-items: center;
}

.aplist {
    padding: 40px 10px 10px 10px;
    //background-color: #71afcb;
    display: flex;
    flex-flow: column;
    align-items: center;

    .block1 {
        display: flex;
        max-width: 1440px;
        flex-flow: row;

        width: 100%;

        @include tablet {
            flex-flow: column;
            flex-wrap: wrap;
        }
        @include phone {
            flex-flow: column;
            flex-wrap: wrap;
        }
    }

    .image-gallery {
        box-sizing: border-box;

        display: flex;
        flex: 1;
        margin-right: 5px;
        box-shadow: 0 0 50px rgb(0 0 0 / 10%);
        min-width: 375px;
        height: 600px;
        @include tablet {
            margin:0px;
        }

        @include phone {
            min-width: initial;
            margin:0px;
        }
        //background-color: #c9a1a1;
    }

    .description {
        box-shadow: 0 0 50px rgb(0 0 0 / 10%);
        box-sizing: border-box;
        display: flex;
        flex: 1;
        //background-color: #8cc988;
        flex-flow: column;
        margin-left: 5px;
        min-width: 375px;
        @include tablet {
            margin:10px 0 0 0;
        }
        @include phone {
            margin:0px;
        }

        &__content {
            padding: 80px 100px;
            display: flex;
            flex-flow: column;
            height: 100%;
            @media (max-width: 1382px) {
                padding: 60px 50px;
            }
            @media (max-width: 1110px) {
                padding: 40px 15px;
                .download-pdf {
                    margin-left: 15px;
                }
            }


            &__sections {
                margin-bottom: 36px;
            }

            @include phone {
                min-width: initial
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
                        font-weight: 600;
                        font-size: 40px;
                        line-height: 49px;
                    }
                }
            }

            .d2 {
                margin: 15px;

                display: flex;
                flex-flow: column;
                justify-content: center;

                &__props {
                    margin-top: 20px;
                }

                .desc-li {
                    text-align: center;

                }

                .title {
                    font-size: 32px;
                    font-weight: 600;
                    line-height: 35px;
                    margin-bottom: 19px
                }

                .creditlink {
                    font-weight: 400;
                    font-size: 16px;
                    margin-left: 10px;
                    line-height: 31px;
                }

                .props {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 20px;
                    margin: 10px 0;


                }

                .mprice {
                    margin: 30px 0 41px 0px;
                }

                .price {

                    font-style: normal;
                    font-weight: 400;
                    font-size: 25px;
                    line-height: 30px;
                }

                .buybut {
                    display: flex;
                    flex-flow: row;
                    justify-content: flex-start;
                }

                .download-pdf {
                    margin-left: 50px;
                    background: none;
                    color: inherit;
                    border: none;
                    padding: 0;
                    font: inherit;
                    cursor: pointer;
                    outline: inherit;
                    @media (max-width: 1382px) {
                        margin-left: 30px
                    }
                    @media (max-width: 1110px) {
                        margin-left: 15px;
                    }
                }
            }
        }
    }

    .img-sec {
        width: 131px;
        object-fit: contain;
    }
}
</style>
