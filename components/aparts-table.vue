<template>
    <a-table
        :data-source="aparts"
        :columns="columns"
        />
</template>
<script setup>
import apartsStore from '~/store/store.js'
import { storeToRefs } from "pinia"
const astore = apartsStore()
const {aparts, columns} = storeToRefs(astore)
</script>
