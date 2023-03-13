<template>
    <div>
        <the-bottom-modal
            v-model:show-m="bottomModal"
            >
            <div class="section-modal">
                <the-button-white @click="clickOnSection(currentFloor)">
                    Перейти к площадке
                </the-button-white>
            </div>
            {{ currentFloor.toolTipText }}
        </the-bottom-modal>
        <figure class="plane-on-main">
            <!--        <img
            class="plane-on-main__small-image"
            :src="config.public.baseImagesUrl + section.sectionImageSmall"
            alt="main map image"
            >-->
            <img
                v-if="loadSection"
                class="plane-on-main__plan-img"
                :src="config.public.baseImagesUrl + section.sectionImage"
                alt="main map image"
                >

            <svg
                class="svg-overlay"
                viewBox="0 0 2000 930"
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
                            width="2000"
                            height="930"
                            />
                        <polygon
                            v-for="hole in section.sections"
                            :key="hole.d"
                            :points="hole.d"
                            :class="hole.classNameHoles"
                            />
                        <rect
                            class="fil0 str0"
                            x="249.74"
                            y="137.01"
                            width="64.45"
                            height="21.09"
                            rx="14"
                            ry="18.9"
                            />
                        <rect
                            class="fil0 str0"
                            x="1328.75"
                            y="137.01"
                            width="64.45"
                            height="21.09"
                            rx="14"
                            ry="18.9"
                            />
                        <rect
                            class="fil0 str0"
                            x="602.47"
                            y="137.01"
                            width="64.45"
                            height="21.09"
                            rx="14"
                            ry="18.9"
                            />
                        <rect
                            class="fil0 str0"
                            x="946.23"
                            y="137.01"
                            width="64.45"
                            height="21.09"
                            rx="14"
                            ry="18.9"
                            />
                        <rect
                            class="fil0 str0"
                            x="1684.12"
                            y="137.01"
                            width="64.45"
                            height="21.09"
                            rx="14"
                            ry="18.9"
                            />

                    </mask>
                </defs>
                <rect
                    class="shade"
                    width="2000"
                    height="930"
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
            <div class="sec-label-wrapper">
                <div
                    id="label1"
                    class="sec-label"
                    >
                    Секция 1
                </div>
                <div
                    id="label2"
                    class="sec-label"
                    >
                    Секция 2
                </div>
                <div
                    id="label3"
                    class="sec-label"
                    >
                    Секция 3
                </div>
                <div
                    id="label4"
                    class="sec-label"
                    >
                    Секция 4
                </div>
                <div
                    id="label5"
                    class="sec-label"
                    >
                    Секция 5
                </div>
            </div>
            <div class="tooltips">
                <div
                    v-for="tooltip in section.sections"
                    :id="tooltip.idToolTip"
                    :key="tooltip.toolTipClass"
                    :class="tooltip.toolTipClass + ' sect'"
                    >
                    {{ tooltip.toolTipText }}
                </div>
            </div>
        </figure>
    </div>
</template>
<script setup>
import { onBeforeMount, onBeforeUnmount, onMounted, ref } from "vue"
import _ from "lodash"
import { touchScroll } from "../functions/touchScroll.js"
import { setHalhScrollLeft } from "../functions/setHalhScrollLeft.js"
import { setupTooltips } from "../functions/setupTooltips.js"
import { useRouter, useRoute, useRuntimeConfig } from "nuxt/app"
import { message } from "ant-design-vue"
import $url from "../functions/fetch.js"
import { isMobile } from "../functions/isMobile.js"
import apartsStore from "../store/store.js"
import { storeToRefs } from "pinia"

const astore = apartsStore()
const { bottomModal } = storeToRefs(astore)

const router = useRouter()
const route = useRoute()
const config = useRuntimeConfig()
const section = ref({})
const loadSection = ref(false)

const currentFloor = ref(null)
let listener
console.log("setup")
console.log(route.query)


function clickOnSection(e) {
    if (!e.sold) {
        router.push(e.routeTo)
    } else {
        message.error("Обьект продан")
    }
}

function click(e) {
    if (isMobile.any()) {
        currentFloor.value = e
        bottomModal.value = true
        console.log("click", e)
    } else {
        clickOnSection(e)
    }
}

onBeforeMount(() => {
    $url("/sections", {
        section: route.query.section | 3
    }).then((r) => {
        console.log(r)
        section.value = r
        loadSection.value = true
        return r
    }).catch(() => {
        message.error("Произошла ошибка на сервере, попробуйте обновить страницу!")
    })
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
    ), 1)
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
    background: #e5fdfd;

    @include map {
        background: #f8d8ff;
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

    &__small-image {
        position: absolute;
        -o-object-fit: cover;
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

.sect {
    position: absolute;
    width: fit-content;
    //background-color: #36f43f;
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

.section-modal {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
}
.sec-label-wrapper {
    display: flex;
}
.sec-label {
    position: relative;
    color: white;
    font-family: 'Montserrat',serif;
    font-weight: 600;
}

/*#label1 {
    top: 187px;
    left: 345px;
}
#label2 {
    top: 187px;
    left: 751px;
}
#label3 {
    top: 187px;;
    left: 1144px;
}
#label4 {
    top: 187px;
    left: 1590px;
}
#label5 {
    top: 187px;
    left: 2000px;
}*/
#label1 {
    top: 168px;
    left: 309px;
}
#label2 {
    top: 168px;
    left: 666px;
}
#label3 {
    top: 168px;
    left: 1013px;
}
#label4 {
    top: 168px;
    left: 1408px;
}
#label5 {
    top: 168px;
    left: 1769px;
}
</style>
