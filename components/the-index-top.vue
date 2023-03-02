<template>
    <div
        class="itop"
        :style="{ backgroundImage: 'url(' + config.public.baseImagesUrl + 'index-main-image.webp' + ')' }"
        >
                <div class="itop-top" />
        <div class="itop-header">
            <div class="itop-header-left">
                <div class="itop-header-text">
                    Дом на Кирова
                </div>
                <div class="itop-header-text2">
                    Дом на Кирова расположен в пешей доступности от центра Миасса, при этом находясь в живописном и
                    насыщенном зеленью месте по пути следования экотропы Кошкуль, дорога на автомобиле до самых
                    востребованных курортов Южного Урала – ГЛЦ Солнечной Долины и озера Тургояк займет всего 15
                    минут.
                    <br>
                    <br>
                    Жилой комплекс разработан с условиями современных требований: большой выбор
                    функциональных планировочных решений для семей с детьми, молодых людей, а также взрослых людей,
                    которым важно окружить себя природой и тишиной. Закрытая территория и двор без машин.
                </div>
            </div>
            <div class="itop-header-right">
                <div class="itop-header-right-news">
                    <div class="itop-header-right-news-title">
                        Льготная ипотека
                    </div>
                    <div class="itop-header-right-news-link">
                        Читать далее
                    </div>
                </div>
                <div class="itop-header-right-news">
                    <div class="itop-header-right-news-title">
                        Льготная ипотека
                    </div>
                    <div class="itop-header-right-news-link">
                        Читать далее
                    </div>
                </div>
            </div>
        </div>
        <div class="itop-list">
            <div class="itop-list-el">
                Ипотека за 1 рубль
            </div>
            <div class="itop-list-el">
                Квартиры с мебелью
            </div>
            <div class="itop-list-el">
                Туристичекие активности в пешей доступности
            </div>
            <div class="itop-list-el">
                Закрытая территория, дворы без машин
            </div>
        </div>
        <div class="itop-list2">
            <div
                class="itop-list2-el"
                @click="goto"
                >
                <div class="itop-list2-el-head">
                    Однокомнатные квартиры
                </div>
                <div class="itop-list2-el-label">
                    от <b>26 м<sup>2</sup></b>
                </div>
                <div class="itop-list2-el-label">
                    от <b>1 400 000 рублей</b>
                </div>
            </div>
            <div
                class="itop-list2-el"
                @click="goto"
                >
                <div class="itop-list2-el-head">
                    Однокомнатные квартиры
                </div>
                <div class="itop-list2-el-label">
                    от <b>26 м<sup>2</sup></b>
                </div>
                <div class="itop-list2-el-label">
                    от <b>1 400 000 рублей</b>
                </div>
            </div>
            <div
                class="itop-list2-el"
                @click="goto"
                >
                <div class="itop-list2-el-head">
                    Однокомнатные квартиры
                </div>
                <div class="itop-list2-el-label">
                    от <b>26 м<sup>2</sup></b>
                </div>
                <div class="itop-list2-el-label">
                    от <b>1 400 000 рублей</b>
                </div>
            </div>
            <div
                class="itop-list2-el"
                @click="goto"
                >
                <div class="itop-list2-el-head">
                    Однокомнатные квартиры
                </div>
                <div class="itop-list2-el-label">
                    от <b>26 м<sup>2</sup></b>
                </div>
                <div class="itop-list2-el-label">
                    от <b>1 400 000 рублей</b>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter, useRuntimeConfig } from "nuxt/app"

const router = useRouter()
const config = useRuntimeConfig()

function goto() {
    router.push({
        path: "/table"
    })
}
</script>

<style lang="scss" scoped>
.itop {
    margin: 0 0 100px;

    background-position-x: center;
    background-size: cover;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-content: center;

    &-top {
        display: flex;
        //margin-top: 644px;
        margin-top: 200px;
        //flex-basis: 22%;
        justify-content: center;
    }

    &-header {
        padding: 0 20px;
        position: relative;
        top: 81px;
        display: flex;
        justify-content: center;
        flex-flow: row;
        max-width: 1200px;
        margin: 0 auto;

        @include phone {
            flex-flow: column;
        }

        &-text {
            @include phone {
                font-size: 79.477px;
                line-height: 93px;
            }
            font-family: 'Montserrat', serif;
            font-style: normal;
            font-weight: 600;
            font-size: 100.477px;
            line-height: 122px;
            text-align: left;
            color: white;
        }

        &-text2 {
            @include phone {
                padding-right: 0px;
            }
            @include tablet {
                padding-right: 50px;
            }
            padding-top: 37px;
            padding-right: 200px;
            font-family: 'Montserrat', serif;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;

            color: #FFFFFF;

        }

        &-right {
            display: flex;
            flex-flow: column;
            //justify-content: space-between;
            justify-content: end;
            padding-top: 30px;
            @include phone {
                align-items: center;
            }
            &-news {
                margin: 10px;
                background: rgba(0, 0, 0, 0.68);
                padding: 34px;
                width: fit-content;
                @include phone {
                    width: 100%;
                }
                &-title {
                    font-family: 'Montserrat', serif;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 20px;

                    color: #FFFFFF;
                    margin-bottom: 7px;
                }

                &-link {

                    font-family: 'Montserrat', serif;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 10px;
                    line-height: 12px;

                    color: #CECECE;
                }
            }
        }

    }

    &-list {
        //max-width: 1200px;
        //margin: 0 auto;
        //padding: 0 10px;
        position: relative;
        top: 81px;

        margin: 24px 10px 0 10px;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        box-sizing: border-box;

        &-el {
            @include phone {
                width: 100%;
            }
            text-align: center;
            font-family: 'Montserrat', serif;
            font-style: normal;
            font-weight: 400;
            font-size: 17px;
            line-height: 21px;
            color: #FFFFFF;

            background-color: rgb(28 107 114 / 54%);
            display: inline-block;
            border-radius: 40px;
            width: fit-content;
            padding: 10px;
            margin: 10px;
        }
    }

    &-list2 {
        position: relative;
        top: 81px;

        margin: 24px 10px 0 10px;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        box-sizing: border-box;

        &-el {
            transition: text-shadow 0.15s ease-in-out;

            &:hover {

                ///background-color: #efefef;
                //text-shadow: 0px 4px 4px rgba(45, 35, 35, 0.4);
                cursor: pointer;
            }

            box-shadow: 0 0 19px rgb(0 0 0 / 30%);
            margin: 20px;
            padding: 20px;
            background-color: white;

            &-head {
                font-family: 'Montserrat', serif;
                font-style: normal;
                font-weight: 400;
                font-size: 21px;
                line-height: 26px;
                margin-bottom: 18px;
            }

            &-label {
                margin-top: 10px;
                font-family: "Montserrat", serif;
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
            }
        }
    }

}
</style>