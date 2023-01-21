<template>
    <figure class="plane">
        <img
            class="plane__plan-img"
            :src="mainImage.src1"
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
                        v-for="hole in mapProps.holes"
                        :key="hole.d"
                        :d="hole.d"
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
                <path
                    v-for="hole in mapProps.holes"
                    :id="hole.idShape"
                    :key="hole.d"
                    :d="hole.d"
                    :class="hole.classNameShape"
                    @click="click(hole)"
                    />

            </g>
        </svg>
        <div class="tooltips">
            <div
                v-for="tooltip in mapProps.holes"
                :key="tooltip.toolTipClass"
                :class="tooltip.toolTipClass"
                >
                {{ tooltip.toolTipText }}
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

const mainImage = {
    src1: "http://localhost:6200/images/main-map-image.jpg"
}

const mapProps = {
    holes: [
        {
            classNameHoles: "polygon house1",
            classNameShape:"polygon shape",
            idShape:"house1",
            d: "M412.5 603.5C416.667 626 425 671.6 425 674L386.5 684.5L326 588L313.5 511L509 462L593 552.5L601.5 626.5L558.5 633.5L491.5 552.5L396 581L412.5 603.5Z",
            show:true,
            toolTipClass:'tooltip house1-tooltip',
            toolTipText:'Корпус 1',
            routeTo:'house1'
        },
        {
            classNameHoles: "polygon house2",
            classNameShape:"polygon shape",
            idShape:"house1",
            d: "M648 424.5L655 493.5L733 583.5L766.5 574.5L759.5 505L739 481L803 463L887.5 539.5L916 532V467.5L907 455.5L850.5 402.5L813 381.5L648 424.5Z",
            show:true,
            toolTipClass:'tooltip house2-tooltip',
            toolTipText:'Корпус 2',
            routeTo:'house2'
        },
        {
            classNameHoles: "polygon house3",
            classNameShape:"polygon shape",
            idShape:"house1",
            d: "M945 414L1037.5 485L1065 483L1067 420L1044.5 398L1081 387L1177 454.5L1199.5 444L1202 382.5L1089.5 309L945 348.5V414Z",
            show:true,
            toolTipClass:'tooltip house3-tooltip',
            toolTipText:'Корпус 3',
            routeTo:'house3'
        }
    ]
}

console.log("setup")
let listener

function click(e,payload) {
    console.log("click",e,payload)
    router.push({ path: "/mainplan" })
}

onMounted(() => {
    console.log("onMounted")
    touchScroll(".plane")
    setHalhScrollLeft(".plane")
    listener = _.debounce(setupTooltips(".plane"), 50)
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

.plane {
    position: relative;
    overflow: hidden;
    overflow-x: auto;
    transition: .5s;
    box-sizing: border-box;

    height: 100vh;
    background: aqua;

    @include map {
        background: #ae22c4;
    }

    &__plan-img {
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
</style>
