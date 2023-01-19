<template>
    <div class="wrap">
        <button @click="showRoute">
            show route
        </button>
    </div>
</template>

<script setup>
import { useRoute } from "nuxt/app"
import { ref } from "vue"

const route = useRoute()
// When accessing /posts/1, route.params.id will be 1
/*console.log(route.params.id)

const params = ref(null)
params.value = route.params*/

function showRoute(){
    console.log(route)
    console.log(route.params)
    console.log(route.query)
}
</script>

<style scoped lang="scss">
.wrap {
    padding: 50px 50px 50px 50px;
}
</style>
