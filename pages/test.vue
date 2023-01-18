<template>
    <br>
    <br>
    <br>
    <br>
    <a-select
        v-model:value="value"
        mode="multiple"
        style="width: 100%"
        placeholder="Please select"
        :options="[...Array(25)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1) }))"
        @change="handleChange"
        />
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const handleChange = value => {
            console.log(`selected ${value}`);
        };
        return {
            handleChange,
            value: ref(['a1', 'b2']),
        };
    },
});
</script>
