<template>
    <div class="p100">
        <div>{{ value }}</div>
        <div>tstore:rangeValue{{ tStore.rangeValue }}</div>
        <button @click="changeSliderRef">
            set
        </button>
        <br/>
        <ui-slider
            :min="0"
            :max="20"
            :value="tStore.rangeValue"
            :range="true"
            />
        <Slider v-model="values" />
    </div>
</template>

<script setup>
import Slider from "@vueform/slider"
import { computed, ref } from "vue"
import testStore from "../store/testStore.js"
const tStore = testStore()
const values = ref([10,199])
const value = ref([0, 10])
const computedVal = computed({
    get() {
        return value
    },
    set(val) {
        console.log("set")
        value.value = val
    }
})

function changeSliderRef() {
    console.log("change slider")
    tStore.rangeValue = [5, 14]
}


</script>

<style scoped>

</style>
