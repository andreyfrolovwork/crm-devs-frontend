<!--
Передай в slot то что необходимо отобразить с анимацией при пересечении viewport
-->
<template>
    <div>
        <slot />
    </div>
</template>

<script setup>
import { getCurrentInstance, onBeforeUnmount, onMounted, ref } from "vue"
const instance = getCurrentInstance()

function callback([entry]) {
    console.log('observe callback')
    if (entry && entry.isIntersecting) {
        console.log("add class")
        instance.ctx.$el.classList.add('animate')
    } else if(!entry.isIntersecting) {
        instance.ctx.$el.classList.remove('animate')
        console.log('remove class')
    }
}

let observer
onMounted(() => {
    observer = new IntersectionObserver(
        callback, {
            rootMargin: '10px',
            //threshold: 0.1
        })
    observer.observe(instance.ctx.$el)
})
onBeforeUnmount(() => {
    observer.disconnect()
})

</script>

<style lang="scss">

</style>
