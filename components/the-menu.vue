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
.slide-fade-enter-active {
    transition: all 0.1s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
    transform: translateY(5px);
    opacity: 0;
}
.slide-fade-leave-to {
    transform: translateY(5px);
    opacity: 0;
}

</style>
