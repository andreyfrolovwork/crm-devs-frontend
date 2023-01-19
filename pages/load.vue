<template>
    <div>
        <div>loading svg</div>
        <the-loading />

        <!--        <img
            class="plane__plan-img"
            :src="imagesrc"
            alt="main map image"
            >-->
        <ClientOnly
            fallback-tag="span"
            fallback="Loading filters..."
            >
            <img
                class="plane__plan-img"
                :src="'http://localhost:6200/images/home1.jpg'"
                alt="main map image"
                >
        </ClientOnly>
    </div>
</template>

<script setup>
import { ref,onMounted } from "vue"
const imagesrc = ref(null)
onMounted(() => {
    let myImage = new Image();
    myImage.src = 'http://localhost:6200/images/home1.jpg';
    console.log('start load image')
    myImage.onload = () => {
        imagesrc.value = myImage.src
        console.log('image loaded')
    }
})


/*this.imgsrc = 'https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif'
this.btntext = "Hide Image"*/
</script>

<style scoped>

</style>
