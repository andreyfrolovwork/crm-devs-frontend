<template>
    <div>
        <button @click="showModal">
            show modal
        </button>
        <button @click="showRef">
            show ref
        </button>
        <Transition name="slide-fade">
            <the-modal
                v-if="show"
                @close="showModal(false)"
                >
                <div class="m-modal">
                    <input type="text">
                    <input type="text">
                    <input type="text">
                </div>
            </the-modal>
        </Transition>
    </div>
</template>

<script setup>
import { ref, getCurrentInstance } from "vue"

const show = ref(false)

function showModal(val) {
    show.value = val
}

function showRef() {
    const currentInstance = getCurrentInstance()
    currentInstance.ctx.$refs.modal.showModalInModal()
}
</script>

<style lang="scss" scoped>
.m-modal {
    display:flex;
    flex-flow:column;
    width: 300px;
}
</style>
