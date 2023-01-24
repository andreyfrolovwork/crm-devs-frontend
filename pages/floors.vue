<template>
    <figure class="plane_floor">
        <img
            class="floor_plan-img"
            :src="config.public.baseImagesUrl + section.sectionImage"
            alt="main map image"
            >

        <svg
            class="svg-overlay"
            viewBox="0 0 1920 1080"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            >
            <defs>
                <mask
                    id="holes"
                    class="holes-mask"
                    >
                    <rect
                        fill="#fff"
                        width="1920"
                        height="1080"
                        />
                    <polygon
                        v-for="hole in section.sections"
                        :key="hole.d"
                        :points="hole.d"
                        :class="hole.classNameHoles"
                        />

                </mask>
            </defs>
            <rect
                class="shade"
                width="1920"
                height="1080"
                fill="#000"
                fill-opacity="0.2  "
                mask="url(#holes)"
                />
            <g class="shapes">
                <polygon
                    v-for="hole in section.sections"
                    :id="hole.idShape"
                    :key="hole.d"
                    :points="hole.d"
                    :class="hole.classNameShape"
                    @click="click(hole)"
                    />

            </g>
        </svg>
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
    </figure>
</template>
<script setup>
import { onBeforeMount, onBeforeUnmount, onMounted, ref } from "vue"
import _ from "lodash"
import { touchScroll } from "../functions/touchScroll.js"
import { setHalhScrollLeft } from "../functions/setHalhScrollLeft.js"
import { setupTooltips } from "../functions/setupTooltips.js"
import { useRouter, useRoute, useRuntimeConfig } from "nuxt/app"
import { message } from 'ant-design-vue';
import $url from "../functions/fetch.js"

const router = useRouter()
const route = useRoute()
const config = useRuntimeConfig()
const section = ref({})
let listener
console.log("setup")
console.log(route.query)

function click(e) {
    console.log("click", e)
    if (!e.sold) {
        router.push({
            path:'/apartment',
            query:{
                _id:e._id   ,
            }
        })
    } else {
        message.error("Обьект продан")
    }
}

onBeforeMount(async () => {
    const result = await $url('/floors', {
        section: route.query.section,
        floor: route.query.floor,
    }).catch(() => {
        message.error("Произошла ошибка на сервере, попробуйте обновить страницу!")
    })
    console.log(result)
    section.value = result
})

onMounted(() => {
    console.log("onMounted")
    touchScroll(".plane_floor")
    setHalhScrollLeft(".plane_floor")
    listener = _.debounce(setupTooltips(
        ".plane_floor",
        ".shape",
        "shape",
        ".tooltip",
        "tooltip-show",
        "polygon-show",
        ".shade"
    ), 50)
    window.addEventListener("mousemove", listener)

})
onBeforeUnmount(() => {
    console.log("remove listener")
    window.removeEventListener("mousemove", listener)
})
</script>
<style lang="scss">
@mixin map() {
    @media (min-aspect-ratio: 16/9) {
        @content;
    }
}

body {
    margin: 0;
    font-family: sans-serif;
}

.plane_floor {
    position: relative;
    overflow: hidden;
    overflow-x: auto;
    transition: .5s;
    box-sizing: border-box;

    height: 100vh;
    background: #e5fdfd;

    @include map {
        background: #f8d8ff;
    }



}

.svg-overlay {
    position: absolute;
    object-fit: cover;

    height: 100vh;
    width: initial;
    max-width: initial;

    @include map {
        height: initial;
        width: 100vw;
    }
}
.floor_plan-img {
    position: absolute;
    object-fit: cover;

    height: 100vh;
    width: initial;
    max-width: initial;

    @include map {
        height: initial;
        width: 100vw;
    }
}
.shapes .polygon {
    fill: none;
    stroke: #fff;
    stroke-width: 4px;
    stroke-opacity: 0;
    vector-effect: non-scaling-stroke;
    transition: stroke-opacity 0.5s;
    pointer-events: all;
}

.shapes .polygon-show {
    stroke-opacity: 1;
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
    visibility: visible;
    will-change: transform, opacity;
    transition: opacity 0.5s;

}

.tooltip-show {
    visibility: visible;
    opacity: 1;
}

.holes-mask .polygon {
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
</style>
