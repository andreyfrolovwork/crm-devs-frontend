<template>
    <div>
        <button @click="showMenu">
            show
        </button>
        <the-menu :show="show" />
    </div>
</template>

<script setup>
import { ref } from "vue"

const show = ref(false)
function showMenu(){
    show.value = !show.value
}
</script>

<style scoped>

</style>
