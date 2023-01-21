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
            title="Заказ звонка"
            centered
            :ok-button-props="{ disabled:disabled }"
            @ok="sendMessage"
            >
            <a-form
                :ref="form"
                :model="formState"
                name="basic"
                :label-col="{ span: 8 }"
                :wrapper-col="{ span: 16 }"
                autocomplete="off"
                ok-text="Заказать звонок"
                cancel-text="отмена"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
                >
                <a-form-item
                    label="Ваше имя"
                    name="name"
                    :rules="[{ required: true, message: 'Пожалуйста введите свое имя!' }]"
                    >
                    <a-input v-model:value="formState.name" />
                </a-form-item>

                <a-form-item
                    label="Ваш мобильный"
                    name="telNumber"
                    :rules="[{ required: true, min:11, message: 'Пожалуйста введите свой номер телефона!' }]"
                    >
                    <a-input v-model:value="formState.telNumber" />
                </a-form-item>

                <a-form-item
                    name="remember"
                    :wrapper-col="{ offset: 8, span: 16 }"
                    >
                    <a-checkbox v-model:checked="formState.remember">
                        Согласен с политикой конфиденциальности
                    </a-checkbox>
                </a-form-item>
            </a-form>
        </a-modal>
    </div>
</template>

<script setup>
import { ref,reactive,computed } from "vue"
import { message } from 'ant-design-vue';
import $url from "../functions/fetch.js"
const modalVisible = ref(false);

const form = ref(null)
const showCallRequestModal = (val) => {
    modalVisible.value = val;
};

const disabled = computed(() => {
    return !(formState.name && formState.telNumber.length > 11 && formState.remember);
});


function sendMessage(){
    const hide = message.loading('Отправляем заявку', 0);
    setTimeout(hide, 2500);
    $url('/send-message',{
        name:formState.name,
        telNumber:formState.telNumber
    }).then(() => {
        hide()
        message.success('Ваша заявка успешно отправлена!');
        formState.name = ''
        formState.telNumber = ''
        modalVisible.value = false
    }).catch(() => {
        hide()
        modalVisible.value = false
        message.error('Произошла ошибка, попробуйте нам позвонить или попробуйте еще.');
    })
}

const formState = reactive({
    name: '',
    telNumber: '',
    remember: true,
});
const onFinish = values => {
    console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};
</script>

<style scoped>
.admin{
    padding: 40px 10px 10px 10px;
}
</style>
