<template>
    <div class="wrapper">
        <the-modal
            v-model:show-m="showModal"
            >
            modal
        </the-modal>
        <button @click="showModalHandle">
            show modal
        </button>
    </div>
</template>

<script setup>
import {ref} from 'vue'
const showModal = ref(false)
function showModalHandle(){
    showModal.value = !showModal.value
}
// slider
const value = ref(0)
</script>

<style scoped>
.wrapper {
    padding: 100px;
}
</style>
