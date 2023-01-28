<template>
    <Transition name="slide-fade">
        <div
            v-if="props.show || hoverOnMenu"
            @mouseenter="hoverOnMenuHandler(true)"
            @mouseleave="hoverOnMenuHandler(false)"
            >
            <slot />
        </div>
    </Transition>
</template>

<script setup>
console.log('setup menu')
import { defineProps, ref } from "vue"
const hoverOnMenu = ref(false)
const props = defineProps(["show"])
function hoverOnMenuHandler(value) {
    console.log('hoverOnMenuHandler ',value)
    hoverOnMenu.value = value
}


</script>

<style>


</style>
