<template>
    <div
        id="nav-icon1"
        :class="{
            open:show
        }"
        @click="setShow"
        >
        <span />
        <span />
        <span />
    </div>
</template>

<script setup>
const emit = defineEmits(['showmenu'])

import { ref } from 'vue'
const show = ref(false)
function setShow(){
    emit('showmenu')
    show.value = !show.value
}
</script>

<style scoped>

/* Icon 1 */

#nav-icon1, #nav-icon2, #nav-icon3, #nav-icon4 {
    margin-left:15px;
    margin-top: 2px;
    width: 26px;
    height: 23px;
    position: relative;
    //margin: 2px auto;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
}

#nav-icon1 span, #nav-icon3 span, #nav-icon4 span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: #ffffff;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
}

#nav-icon1 span:nth-child(1) {
    top: 0px;
}

#nav-icon1 span:nth-child(2) {
    //top: 18px;
    top: 8px;
}

#nav-icon1 span:nth-child(3) {
    //top: 36px;
    top: 16px;
}

#nav-icon1.open span:nth-child(1) {
    //top: 18px;
    top:8px;
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
}

#nav-icon1.open span:nth-child(2) {
    opacity: 0;
    left: -60px;
}

#nav-icon1.open span:nth-child(3) {
    //top: 18px;
    top:8px;
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
}

</style>
