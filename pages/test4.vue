<template>
    <div>get current instane test</div>
</template>

<script setup>
import {getCurrentInstance} from 'vue'
const instance = getCurrentInstance()
console.log(instance)
</script>

<style scoped>

</style>
