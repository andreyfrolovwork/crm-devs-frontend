<template>
    <div class="aplist">
        {{ apart }}
    </div>
</template>
<script setup>
import { useRoute } from "nuxt/app"
import { useApart } from "../useHooks/useApart.js"
const route = useRoute()

const {apart} = useApart(route)
</script>
<style lang="scss" scoped>
.aplist {
    padding: 40px;

}
</style>
