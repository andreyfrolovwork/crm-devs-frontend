<template>
    <figure class="plane">
        <the-sec1 />
        <!--        <img
            class="plane__plan-img"
            src="~/assets/sec1_horizontal.png"
            alt="main map image"
            >-->
        <svg
            class="svg-overlay"
            width="2448"
            height="3138"
            viewBox="0 0 2448 3138"
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
                        width="2448"
                        height="3138"
                        />
                    <rect
                        class="polygon house1"
                        x="424"
                        y="1612"
                        width="736"
                        height="591"
                        fill="#7AC86D"
                        fill-opacity="0.5"
                        />
                    <path
                        class="polygon house2"
                        d="M572 560H1756V861H1904V1302H1168V853H1164H572V560Z"
                        fill="#36CBBA"
                        fill-opacity="0.5"
                        />
                    <path
                        class="polygon house3"
                        d="M572 860H1160V1604H572H425V1164H572V860Z"
                        fill="#1B9C8E"
                        fill-opacity="0.5"
                        />
                    <path
                        class="polygon house4"
                        d="M1168 1760H1904V2211H1756V2502H1164H572V2211H1168V1760Z"
                        fill="#31B4B4"
                        fill-opacity="0.5"
                        />

                </mask>
            </defs>
            <rect
                class="shade"
                width="2448"
                height="3138"
                fill="#000"
                fill-opacity="0.2  "
                mask="url(#holes)"
                />
            <g class="shapes">
                <rect
                    id="house1"
                    class="polygon shape"
                    x="424"
                    y="1612"
                    width="736"
                    height="591"
                    fill="#7AC86D"
                    fill-opacity="0.5"
                    />
                <path
                    id="house2"
                    class="polygon shape"
                    d="M572 560H1756V861H1904V1302H1168V853H1164H572V560Z"
                    fill="#36CBBA"
                    fill-opacity="0.5"
                    />
                <path
                    id="house3"
                    class="polygon shape"
                    d="M572 860H1160V1604H572H425V1164H572V860Z"
                    fill="#1B9C8E"
                    fill-opacity="0.5"
                    />
                <path
                    id="house4"
                    class="polygon shape"
                    d="M1168 1760H1904V2211H1756V2502H1164H572V2211H1168V1760Z"
                    fill="#31B4B4"
                    fill-opacity="0.5"
                    />

            </g>
        </svg>
        <div class="tooltips">
            <div class="tooltip house1-tooltip">
                Корпус 1
            </div>
            <div class="tooltip house2-tooltip">
                Корпус 2
            </div>
            <div class="tooltip house3-tooltip">
                Корпус 3
            </div>
        </div>
    </figure>
</template>
<script setup>
import { onBeforeUnmount, onMounted,ref } from "vue"
import _ from "lodash"
import { touchScroll } from "../functions/touchScroll.js"
import { setHalhScrollLeft } from "../functions/setHalhScrollLeft.js"
import { setupTooltips } from "../functions/setupTooltips.js"
import { useRouter } from "nuxt/app"
const router = useRouter()

console.log("setup")
let listener
function click(){
    console.log('click')
    router.push({ path:'/mainplan' })
}

function addListener(){
    console.log("mounted")
    touchScroll(".plane")
    setHalhScrollLeft(".plane")
    listener = _.debounce(setupTooltips(), 50)
    window.addEventListener("mousemove", listener)
}
onMounted(() => {
    console.log("onMounted")
    touchScroll(".plane")
    setHalhScrollLeft(".plane")
    listener = _.debounce(setupTooltips(), 50)
    window.addEventListener("mousemove", listener)

})
onBeforeUnmount(() => {
    console.log("remove listener")
    window.removeEventListener("mousemove", listener)
})
</script>
<style lang="scss">

.plane {
    @include map {
        background: #ae22c4;
    }

    &__plan-img {
        @include map {
            height: initial;
            width: 100vw;
        }
    }
}

.svg-overlay {
    @include map {
        height: initial;
        width: 100vw;
    }
}
</style>
<!--

<style lang="scss">
/*@import '../css/_mixins.scss';*/

body {
    margin: 0;
    font-family: sans-serif;
}

.plane {
    position: relative;

    overflow: hidden;
    overflow-x: auto;
    transition: .5s;

    box-sizing: border-box;
    height: 100vh;
   /* background: aqua;*/

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
-->
