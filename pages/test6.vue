<template>
    <div class="p100">
        <div>{{ value }}</div>
        <div>tstore:rangeValue{{ tStore.rangeValue }}</div>
        <button @click="changeSliderRef">
            set
        </button>
        <ui-slider
            :min="0"
            :max="20"
            :value="tStore.rangeValue"
            :range="true"
            />
    </div>
</template>

<script setup>
import { computed, ref } from "vue"
import testStore from "../store/testStore.js"
const tStore = testStore()
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