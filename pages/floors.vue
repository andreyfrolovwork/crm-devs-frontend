<template>
    <div>
        <the-bottom-modal
            v-model:show-m="showModal"
            >
            <the-button-white @click="clickOnApart(currentApart)">
                Перейти к описанию квартиры
            </the-button-white>
            {{ currentApart.toolTipText }}
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
                :class="tooltip.toolTipClass"
                >
                {{ tooltip.toolTipText }}
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
    if (!e.sold) {
        router.push(e.routeTo)
    } else {
        message.error("Обьект продан")
    }
}

function gotoApart(e) {
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
    if (isMobile.any()) {
        currentApart.value = e
        showModal.value = true
        console.log("click", e)
    } else {
        gotoApart(e)
    }
}

onBeforeMount(async () => {
    const result = await $url("/floors", {
        section: route.query.section,
        floor: route.query.floor
    }).catch(() => {
        message.error("Произошла ошибка на сервере, попробуйте обновить страницу!")
    })
    console.log(result)
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
        background: #f8d8ff;
    }
    @include tablet {
        margin: 0 3vw;
    }
    @include phone {
        margin: 0 0;
    }

    /*@include media(1080px){
        margin:0 20vw;
    }*/


    .svg-overlay {
        position: absolute;
        object-fit: cover;
        width: 100%;
        /* height: 100vh;
         width: initial;
         max-width: initial;
     */
        @include map {
            height: initial;
            width: 100vw;
        }
    }

    .floor_plan-img {
        position: absolute;
        width: 100%;
        /*    object-fit: cover;
            height: 100vh;
            width: initial;
            max-width: initial;
            height: 100%;*/

        @include map {
            // height: initial;
            //width: 100vw;
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

.tooltip {
    position: absolute;
    width: fit-content;
    background-color: #f44336;
    color: #fff;
    padding: 5px 10px;
    border-radius: 9999px;
    pointer-events: none;
    opacity: 0;
    //opacity: 1;
    visibility: visible;
    will-change: transform, opacity;
    transition: opacity 0.5s;

}

.tooltip-show {
    visibility: visible;
    opacity: 1;
}
.sold {
    background-color: #a4a4a4;
}

/*.holes-mask .polygon {
    fill: #333;
    transition: fill 0.5s;
}

.holes-mask .mask-show {
    fill: #000;
}

.shade {
    transition: fill-opacity 0.5s;
}

.sold {
    background-color: #a4a4a4;
}

.aparts_areas {

}*/
</style>
