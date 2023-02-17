<template>
    <div class="yawrap">
        <div
            id="map"
            class="shadow"
            style="width: 100%; height: 500px"
            >
            карты
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue"
import settings from "../functions/yandex.js"
import { loadYmap } from "vue-yandex-maps"

onMounted(async () => {
    /*    await import('vue-yandex-maps')*/
    await loadYmap({ ...settings, debug: true })
    new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 7
    });
    console.log("карты доступны")
})
</script>

<style lang="scss">
.yawrap {
    padding: 100px;
}
</style>

<!--
<template>
    <div>
        <div
            id="map"
            class="shadow"
            style="width: 100%; height: 500px"
            >
            карты
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue"
/*import "~/functions/yandexMap.js"*/
import settings from "../functions/yandex.js"
import { loadYmap } from "vue-yandex-maps"

onMounted(async () => {
/*    await import('vue-yandex-maps')*/
    await loadYmap({ ...settings, debug: true })
    console.log("карты доступны")
})

</script>

<style scoped>

</style>
-->


<!--
<template>
    <div>
        <div
            id="map"
            class="shadow"
            style="width: 100%; height: 500px"
            />
    </div>
</template>

<script setup>
import { onMounted } from "vue"
import "~/functions/yandexMap.js"

onMounted(() => {


    function init() {
        var myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 7
        })
    }

    ymaps.ready(init)
})

</script>

<style scoped>

</style>-->
