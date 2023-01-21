<template>
    <figure class="plane_sections">
        <img
            class="plane__plan-img"
            src="~/assets/home1.jpg"
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
                    <path
                        class="polygon house1"
                        d="M309 867.5H42.5V806H321L357 791H388L484 760V797.5C464.833 810.167 424.1 835.5 414.5 835.5C404.9 835.5 392.833 843.5 388 847.5H357L309 867.5Z"
                        />
                    <path
                        class="polygon house2"
                        d="M483 702.5V760L386 791H358L318.5 807L47 801.5V738.5H318.5L358 731H386L483 702.5Z"
                        />
                    <path
                        class="polygon house3"
                        d="M47 739H323M323 739L354 730.5H389L481.5 703L476 654L389 671H358.5L323 679.5H42V739H323Z"
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
                <path
                    id="house1"
                    class="polygon shape"
                    d="M309 867.5H42.5V806H321L357 791H388L484 760V797.5C464.833 810.167 424.1 835.5 414.5 835.5C404.9 835.5 392.833 843.5 388 847.5H357L309 867.5Z"
                    @click="goToFloor({sec:1,floor:1})"
                    />
                <path
                    id="house2"
                    class="polygon shape"
                    d="M483 702.5V760L386 791H358L318.5 807L47 801.5V738.5H318.5L358 731H386L483 702.5Z"
                    @click="goToFloor({sec:1,floor:2})"
                    />
                <path
                    id="house3"
                    class="polygon shape"
                    d="M47 739H323M323 739L354 730.5H389L481.5 703L476 654L389 671H358.5L323 679.5H42V739H323Z"
                    @click="goToFloor({sec:1,floor:3})"
                    />

            </g>
        </svg>
        <div class="tooltips">
            <div class="tooltip house1-tooltip">
                Подъезд 1 Этаж 1
            </div>
            <div class="tooltip house2-tooltip">
                Подъезд 1 Этаж 2
            </div>
            <div class="tooltip house3-tooltip">
                Подъезд 1 Этаж 3
            </div>
        </div>
    </figure>
</template>
<script setup>
import { onBeforeUnmount, onMounted } from "vue"
import _ from "lodash"
import { touchScroll } from "../functions/touchScroll.js"
import { setHalhScrollLeft } from "../functions/setHalhScrollLeft.js"
import { setupTooltips } from "../functions/setupTooltips.js"
import { useRouter } from "nuxt/app"
const router = useRouter()

console.log("setup")
function goToFloor(query){
    console.log('click')
    router.push({ path:'/floors',query })
}
let listener
onMounted(() => {
    console.log("mounted")
    touchScroll(".plane_sections")
    setHalhScrollLeft(".plane_sections")
    listener = _.debounce(setupTooltips(".plane_sections"), 50)
    window.addEventListener("mousemove", listener)

})
onBeforeUnmount(() => {
    console.log("remove listener")
    window.removeEventListener("mousemove", listener)
})
</script>

<style lang="scss">
/*@import '../css/_mixins.scss';*/

body {
    margin: 0;
    font-family: sans-serif;
}

.plane_sections {
    position: relative;

    overflow: hidden;
    overflow-x: auto;
    transition: .5s;

    box-sizing: border-box;
    height: 100vh;
    background: aqua;

    &__plan-img {
        position: absolute;
        height: 100vh;
        width: initial;
        max-width: initial;
        object-fit: cover;
    }
}

.svg-overlay {
    position: absolute;
    height: 100vh;
    width: initial;
    max-width: initial;
    object-fit: cover;
}

.shapes .polygon {
    fill: none;
    stroke: #fff;
    stroke-width: 4px;
    stroke-opacity: 0.35;
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
</style>
