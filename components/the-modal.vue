<template>
    <div class="the_modal_wrapper">
        <Transition name="slide-fade">
            <slot />
        </Transition>

        <button @click="close">
            close
        </button>
    </div>
</template>

<script setup>
import {defineEmits} from 'vue'
const emit = defineEmits(['close'])
function close(){
    emit('close')
}
</script>

<style lang="scss" >
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

.the_modal_wrapper {
    background: #3d9db2;

    position: absolute;
    top:0px;
    right:0px;
    bottom:0px;
    left:0px;
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

}
</style>
