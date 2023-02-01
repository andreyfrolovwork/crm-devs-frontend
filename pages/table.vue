<template>
    <section class="apartments">
        <ClientOnly
            fallback-tag="span"
            fallback="Loading filters..."
            >
            <div class="filters">
                <the-filter-rooms-buttons />
                <the-filter-sliders />
            </div>
        </ClientOnly>
        <div class="data">
            <aparts-table />
        </div>
    </section>
</template>

<script setup>
import { onBeforeMount, ref } from "vue"
import apartsStore from "~/store/store.js"
const astore = apartsStore()
const { load } = astore
onBeforeMount(async () => {
    await load()
})
</script>
<style lang="scss">
.apartments {
    padding: 90px;
    //padding-top: 90px;
    max-width: 1440px;
    display: flex;
    flex-flow: row;
    .data {
        display: flex;
        flex-flow: column;
        flex: 1;
        &__row {
            display: flex;
            flex-flow: row;
            margin: 4px;
            background: #f9f9f9;
        }
        &__prop {
            margin: 5px;
        }
    }
}
// filters


</style>
