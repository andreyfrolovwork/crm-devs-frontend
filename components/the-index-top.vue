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
    /*height: 913px;*/
/*    @include media(null,1509px) {
        margin-bottom: 140px;
    }
    @include media(null,764px) {
        margin-bottom: 400px;
    }*/

/*    @include tablet {
        margin-bottom: 31px;
    }
    @include phone  {
        margin-bottom: 470px;
    }
    @include media(400px,534px) {
        margin-bottom: 430px;
    }
    @include media(618px) {
        margin-bottom: 350px;
    }
    @include media(645px, 744px) {
        margin-bottom: 50px;
    }
    @include media(745px) {
        margin-bottom: 0px;
    }*/
    background-position-x: center;
    background-size: cover;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-content: center;

    &-top {
        display: flex;
        margin-top: 644px;
        //flex-basis: 22%;
        justify-content: center;
    }

    &-header {
        position: relative;
        top: 81px;
       /* @include phone {
            margin-top: 630px;
        }*/
        display: flex;
        justify-content: center;

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
            text-align: center;
            color: white;
        }

    }

    &-list {
        position: relative;
        top: 81px;

        margin: 24px 10px 0 10px;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        box-sizing: border-box;

        &-el {
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