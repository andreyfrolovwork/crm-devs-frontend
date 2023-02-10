<template>
    <div>
        <div
            v-if="loading"
            class="loading"
            >
            Загрузка
        </div>
        <img
            v-if="!loading"
            class="plane__plan-img"
            :src="imagesrc"
            alt="main map image"
            >
    </div>
</template>

<script setup>
import { ref,onMounted } from "vue"
import { useRuntimeConfig } from "nuxt/app"
const imagesrc = ref(null)
const loading = ref(true)
const config = useRuntimeConfig()
onMounted(() => {
    let myImage = new Image();
    myImage.src = config.public.baseImagesUrl + 'home1.jpg'
    console.log('start load image')
    myImage.onload = () => {
        loading.value = false
        imagesrc.value = myImage.src
        console.log('image loaded')
    }
})

</script>

<style scoped>
.loading {
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 30px;
    line-height: 1.35;
}
</style>
