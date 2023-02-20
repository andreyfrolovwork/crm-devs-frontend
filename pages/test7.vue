<template>
    <div class="p100">
        Hello world
        <Slider v-model="value" />
    </div>
</template>
<script>
import Slider from "@vueform/slider"
import { defineComponent } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue"
// import 'swiper/css';

export default defineComponent({
    components: {
        Slider,
        Swiper,
        SwiperSlide
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper)
        }
        const onSlideChange = () => {
            console.log("slide change")
        }

        return {
            onSwiper,
            onSlideChange
        }
    },
    data() {
        return {
            value: 20
        }
    }
})
</script>

<style src="@vueform/slider/themes/default.css"></style>
