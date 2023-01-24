<template>
    <div class="wrap">
        123
        {{ apart }}
    </div>
</template>
<script setup>
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import { useRoute } from "nuxt/app"
import { onBeforeMount, ref } from "vue"
import $url from "../functions/fetch.js"
import { message } from "ant-design-vue"
const route = useRoute()
const apart = ref(null)

onBeforeMount(async () => {
    const result = await $url('/oneapart', {
        _id: route.query._id
    }).catch(() => {
        message.error("Произошла ошибка на сервере, попробуйте обновить страницу!")
    })
    apart.value = result
    console.log(result)
})

</script>
<style lang="scss" scoped>
.wrap {
    padding: 40px;
}
</style>
