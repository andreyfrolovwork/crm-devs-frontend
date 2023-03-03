<template>
    <div class="gallery-wrapper">
        <splide :options="options">
            <splide-slide>
                <div class="splide-image-wrapper">
                    <img
                        class="advantages-image"
                        :src="config.public.baseImagesUrl + 'index1.png'"
                        alt="image"
                        >
                    <!--                <a-image
                        :src="config.public.baseImagesUrl + 'index-3.png'"
                        />-->
                </div>
            </splide-slide>
            <splide-slide>
                <div class="splide-image-wrapper">
                    <img
                        class="advantages-image"
                        :src="config.public.baseImagesUrl + 'index-3.png'"
                        alt="image"
                        >
                    <!--                <a-image
                        :src="config.public.baseImagesUrl + 'index-3.png'"
                        />-->
                </div>
            </splide-slide>
            <splide-slide>
                <div class="splide-image-wrapper">
                    <img
                        class="advantages-image"
                        :src="config.public.baseImagesUrl + 'index1.png'"
                        alt="image"
                        >
                    <!--                <a-image
                                        :src="config.public.baseImagesUrl + 'index-3.png'"
                                        />-->
                </div>
            </splide-slide>
        </splide>
    </div>
</template>

<script setup>
import { useRuntimeConfig } from "nuxt/app"

const options = {
    rewind: true,
    gap: "1rem",
    width: "100%",
    height: "100%"
}
const config = useRuntimeConfig()
</script>

<style lang="scss" scoped>
.gallery-wrapper {
    max-width: 1200px;
    margin: 0 auto;
}

.gallery-item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.splide-image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.advantages-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
}
</style>
