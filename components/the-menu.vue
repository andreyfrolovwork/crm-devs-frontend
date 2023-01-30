<template>
    <Transition name="slide-fade">
        <div
            v-if="props.show || hoverOnMenu"
            class="menu"
            @mouseenter="hoverOnMenuHandler(true)"
            @mouseleave="hoverOnMenuHandler(false)"
            >
            <slot />
        </div>
    </Transition>
</template>

<!--v-if="props.show || hoverOnMenu"-->
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

<style lang="scss" scoped>
.menu {
    box-shadow: 0 0 50px rgb(0 0 0 / 10%);
    background-color: white;
    padding: 21px 30px;

    position: relative;
    translate:60px;

}

</style>
