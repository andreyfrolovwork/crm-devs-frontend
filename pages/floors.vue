<template>
    <div>
        <the-bottom-modal
            v-model:show-m="showModal"
            >
            <div class="apartdesc">
                <div class="apartdesc-text">
                    <div class="apartdesc-text-title">
                        {{ currentApart.title }}
                    </div>
                    <div class="apartdesc-text-textshadow">
                        {{ currentApart.floor }} этаж
                    </div>
                    <div class="apartdesc-text-priceline">
                        <div class="apartdesc-text-priceline-price">
                            {{ currentApart.price.toLocaleString("ru") }} рублей
                        </div>
                        <div class="apartdesc-text-priceline-area">
                            {{ currentApart.area2 }}м<sup>2</sup>
                        </div>
                    </div>
                </div>
                <div class="apartdesc-button">
                    <the-button @click="clickOnApart(currentApart)">
                        Перейти к описанию квартиры
                    </the-button>
                </div>
            </div>
        </the-bottom-modal>
        <figure class="plane_floor">
            <img
                class="floor_plan-img"
                :src="config.public.baseImagesUrl + section.sectionImage"
                alt="main map image"
                >
            <svg
                class="svg-overlay"
                viewBox="0 0 1000 600"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                <g class="shapes">
                    <polygon
                        v-for="hole in section.sections"
                        :id="hole.idShape"
                        :key="hole.d"
                        :points="hole.d"
                        :class="hole.classNameShape + 'aparts_areas'"
                        @click="click(hole)"
                        @mouseover="hover"
                        />
                </g>
            </svg>
        </figure>
        <div class="tooltips">
            <div
                v-for="tooltip in section.sections"
                :id="tooltip.idToolTip"
                :key="tooltip.toolTipClass"
                :class="tooltip.toolTipClass + ' secfloor' + '  tooltip-show'"
                >
                <div class="apartdesc">
                    <div class="apartdesc-text">
                        <div class="apartdesc-text-title">
                            {{ tooltip.title }}
                        </div>
                        <div class="apartdesc-text-textshadow">
                            {{ tooltip.floor }} этаж
                        </div>
                        <div class="apartdesc-text-priceline">
                            <div class="apartdesc-text-priceline-price">
                                {{ tooltip.price.toLocaleString("ru") }} рублей
                            </div>
                            <div class="apartdesc-text-priceline-area">
                                {{ tooltip.area2 }}м<sup>2</sup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onBeforeMount, onBeforeUnmount, onMounted, ref } from "vue"
import { useRouter, useRoute, useRuntimeConfig } from "nuxt/app"
import { message } from "ant-design-vue"
import $url from "../functions/fetch.js"
import { setupOneTooltip } from "../functions/setupOneTooltip.js"
import { isMobile } from "../functions/isMobile.js"

const router = useRouter()
const route = useRoute()
const config = useRuntimeConfig()
const section = ref({})
const showModal = ref(false)
const currentApart = ref(null)

let listener
console.log("setup")
console.log(route.query)

function hover() {
    console.log("hover")
}

function clickOnApart(e) {
    console.log("click on apart", e)
    if (!e.sold) {
        router.push({
            path: "/apartment",
            query: {
                _id: e.apartId
            }
        })
    } else {
        message.error("Обьект продан")
    }
}

function gotoApart(e) {
    console.log("gotoApart")
    if (!e.sold) {
        router.push({
            path: "/apartment",
            query: {
                _id: e.apartId
            }
        })
    } else {
        message.error("Объект продан")
    }
}

function click(e) {
    console.log("open")
    if (isMobile.any()) {
        console.log("current apart ", e)
        currentApart.value = e
        showModal.value = true
        console.log("click", e)
    } else {
        gotoApart(e)
    }
}

function hide() {
    console.log("hide")
    showModal.value = false
}

onBeforeMount(async () => {
    const result = await $url("/floors", {
        section: route.query.section,
        floor: route.query.floor
    }).catch(() => {
        message.error("Произошла ошибка на сервере, попробуйте обновить страницу!")
    })
    console.log('section___',result)
    section.value = result
})

onMounted(() => {
    console.log("onMounted")
    listener = setupOneTooltip(
        "plane_floor",
        "polygon",
        ".tooltip",
        "tooltip-show"
    )
    window.addEventListener("mousemove", listener)
})
onBeforeUnmount(() => {
    console.log("remove listener")
    window.removeEventListener("mousemove", listener)
})
</script>
<style lang="scss">

.apartdesc {
    display: flex;
    flex-direction: column;
    //justify-content: center;
    ///align-content: center;
    &-text {
        font-family: "Montserrat", serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 43px;
        //color: white;
    }

    &-button {
        margin: 0 auto;
    }
}


body {
    margin: 0;
    font-family: sans-serif;
}


.floors_plane_background {
    width: 100%;
    height: 100%;
}

.plane_floor {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    overflow: hidden;
    overflow-x: auto;
    transition: .5s;
    box-sizing: border-box;
    margin: 0 20vw;
    height: 100vh;
    //background: #e5fdfd;
    @include map {
        //background: #f8d8ff;
    }
    @include tablet {
        margin: 0 3vw;
    }
    @include phone {
        margin: 0 0;
    }

    .svg-overlay {
        position: absolute;
        object-fit: cover;
        width: 100%;
        @include map {
            height: 60%;
        }
    }

    .floor_plan-img {
        position: absolute;
        width: 100%;
        @include map {
            height: 60%;
        }
    }

    .shapes .polygon {
        fill: #3d9db2;
        opacity: 0;
        stroke: #fff;
        stroke-width: 4px;
        stroke-opacity: 0;
        vector-effect: non-scaling-stroke;
        transition: stroke-opacity, opacity 0.5s;
        pointer-events: all;

        &:hover {
            opacity: 0.5;
        }
    }

    .shapes .polygon-show {
        stroke-opacity: 1;
    }
}

.secfloor {
    position: absolute;
    width: fit-content;
    background-color: white;
    padding: 5px 10px;
    pointer-events: none;
    opacity: 0;
    visibility: visible;
    will-change: transform, opacity;
    transition: opacity 0.5s;
    @include box-shadow

}

.tooltip-show {
    visibility: visible;
    opacity: 1;
}

.sold {
    background-color: #a4a4a4;
}

.apartdesc {
    display: flex;
    flex-direction: column;

    &-text {
        &-title {
            font-family: 'Montserrat', serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
        }

        &-textshadow {
            font-family: 'Montserrat', serif;
            font-style: normal;
            font-weight: 400;
            font-size: 10px;
            line-height: 16px;
            color: #757575;
        }

        &-priceline {
            display: flex;

            &-price {
                font-family: "Montserrat", serif;
                font-style: normal;
                font-weight: 600;
                font-size: 20px;
                line-height: 45px;
                margin-right: 21px;
            }

            &-area {
                font-family: 'Montserrat', serif;
                font-style: normal;
                font-weight: 300;
                font-size: 30px;
                line-height: 37px;
                color: #000000;
            }
        }
    }
}
</style>
