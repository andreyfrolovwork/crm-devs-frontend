<template>
    <div>
        <button @click="showModal(true)">
            show modal
        </button>
        <the-modal
            v-model:showM="showM"
            >
            <div class="m-modal">
                <input type="text">
                <input type="text">
                <input type="text">
            </div>
        </the-modal>
    </div>
</template>

<script setup>
import { ref } from "vue"

const showM = ref(false)
function showModal(val) {
    showM.value = val
}

</script>

<style lang="scss" scoped>
.m-modal {
    display:flex;
    flex-flow:column;
    width: 300px;
}
</style>
