<template>
    <Transition name="slide-fade">
        <div
            v-if="vshow"
            class="the_modal_wrapper"
            @click="wrap"
            >
            <Transition name="slide-fade">
                <slot />
            </Transition>
            <button @click="close">
                close
            </button>
        </div>
    </Transition>
</template>

<script setup>
import {  defineProps } from "vue"
import { useVModel } from "../functions/useVModel.js"

const props = defineProps(["showM"])
const vshow = useVModel(props,'showM')

function close(){
    console.log(vshow)
    vshow.value = false
}
</script>

<style scoped lang="scss">

.the_modal_wrapper {
    background: #3d9db2;
    z-index:101;

    position: absolute;
    //top:0px;
    right:0px;
    bottom:0px;
    left:0px;
    width: 100vw;
    height: 200px;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

}
</style>
