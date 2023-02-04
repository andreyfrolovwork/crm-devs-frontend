<template>
    <div>
        <div class="h1">
            block1
        </div>
        <img
            :src="config.public.baseImagesUrl + 'b1.webp'"
            alt="b1"
            >
    </div>
</template>

<script setup>
import { useRuntimeConfig } from "nuxt/app"
const config = useRuntimeConfig()
</script>

<style scoped>

</style>
