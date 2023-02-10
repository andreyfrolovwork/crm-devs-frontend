<template>
    <figure class="plane-on-main">
        <img
            class="plane-on-main__plan-img"
            :src="section.sectionImage"
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
import { useRouter,useRoute } from "nuxt/app"
import $url from "../functions/fetch.js"
const router = useRouter()
const route = useRoute()
console.log(route.query)

const section = ref({})
import darr from '../functions/path.js'


const holes = darr.map((path,i) => {
    return {
        classNameHoles: "polygon house" + i,
        classNameShape:"polygon shape",
        idShape:"house" + i,
        d:path,
        show:true,
        sold:false,
        toolTipClass:`tooltip house${i}-tooltip`,
        idToolTip:`house${i}-tooltip`,
        toolTipText:'Площадка номер ' + i,
        routeTo:{
            path:'/floors',
            query:{
                apartments:i,
            }
        }
    }

})

const mapProps = {
    holes:holes
    /*holes: [
        {
            classNameHoles: "polygon house1",
            classNameShape:"polygon shape",
            idShape:"house1",
            d:"M474.5,806.5v18l-86,43l-31-1l-38,18l-276-2l0.4-95l2.6,0l276-1l35-13l31,1l86-33V806.5z",
            show:true,
            sold:true,
            toolTipClass:'tooltip house1-tooltip sold',
            idToolTip:"house1-tooltip",
            toolTipText:'Продан',
            routeTo:{
                path:'/floors',
                query:{
                    floor:'1'
                }
            }
        },
/!*        {
            classNameHoles: "polygon house2",
            classNameShape:"polygon shape",
            idShape:"house2",
            d: "M648 424.5L655 493.5L733 583.5L766.5 574.5L759.5 505L739 481L803 463L887.5 539.5L916 532V467.5L907 455.5L850.5 402.5L813 381.5L648 424.5Z",
            show:true,
            sold:false,
            toolTipClass:'tooltip house2-tooltip',
            toolTipText:'Корпус 2',
            routeTo:{
                path:'/floors',
                query:{
                    floor:'2'
                }
            }
        },*!/
        {
            classNameHoles: "polygon house3",
            classNameShape:"polygon shape",
            idShape:"house3",
            d: "M945 414L1037.5 485L1065 483L1067 420L1044.5 398L1081 387L1177 454.5L1199.5 444L1202 382.5L1089.5 309L945 348.5V414Z",
            show:true,
            sold:false,
            toolTipClass:'tooltip',
            idToolTip:"house4-tooltip",
            toolTipText:'1 секция 3 этаж',
            routeTo:{
                path:'/floors',
                query:{
                    floor:'3'
                }
            }
        },
        {
            classNameHoles: "polygon house4",
            classNameShape:"polygon shape",
            idShape:"house4",
            d:"M474.5,806.5v18l-86,43l-31-1l-38,18l-276-2l0.4-95l2.6,0l276-1l35-13l31,1l86-33V806.5z",
            show:true,
            sold:false,
            toolTipClass:'tooltip',
            idToolTip:"house4-tooltip",
            toolTipText:'1 секция 3 этаж',
            routeTo:{
                path:'/floors',
                query:{
                    floor:'3'
                }
            }
        }
    ]*/
}

console.log("setup")
let listener

function click(e) {
    console.log("click",e)
    if(!e.sold){
        router.push(e.routeTo)
    } else {
        alert("Обьект продан")
    }
}
onBeforeMount(async () => {
    section.value = await $url('/sections')
})

onMounted(() => {
    console.log("onMounted")
    touchScroll(".plane-on-main")
    setHalhScrollLeft(".plane-on-main")
    listener = _.debounce(setupTooltips(
        ".plane-on-main",
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


body {
    margin: 0;
    font-family: sans-serif;
}

.plane-on-main {
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

.sold {
    background-color: #a4a4a4;
}
</style>
