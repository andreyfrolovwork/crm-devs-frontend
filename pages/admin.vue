<template>
    <div class="admin">
        <a-button
            type="primary"
            @click="showCallRequestModal(true)"
            >
            Заказать звонок
        </a-button>
        <a-modal
            v-model:visible="modalVisible"
            title="Vertically centered modal dialog"
            centered
            @ok="showCallRequestModal(false)"
            >
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
        </a-modal>
    </div>
</template>

<script setup>
import { ref } from "vue"
const modalVisible = ref(false);

const showCallRequestModal = (val) => {
    modalVisible.value = val;
};
</script>

<style scoped>
.admin{
    padding: 40px 10px 10px 10px;
}
</style>
