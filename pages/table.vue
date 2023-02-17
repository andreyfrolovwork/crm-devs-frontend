<template>
    <div class="table-wrapper">
        <div class="table-wrapper__content">
            <h1 class="h1">Квартиры<sup class="table-wrapper__sup">{{ count }}</sup></h1>
            <div class="apartments">
                <ClientOnly
                    fallback-tag="span"
                    fallback="Loading filters..."
                >
                    <Transition name="slade-fade">
                        <div
                            v-if="isShowFilters"
                            class="filters"
                        >
                            <the-filter-rooms-buttons />
                            <the-filter-sliders />
                        </div>
                    </Transition>
                </ClientOnly>
                <div class="data">
                    <aparts-table />
                </div>
                <the-filter-button-mobile @click="showFilters" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue"
import apartsStore from "~/store/store.js"
import { storeToRefs } from "pinia"
const astore = apartsStore()
const { load } = astore
const { count } = storeToRefs(astore)
const isShowFilters = ref(true)
function showFilters(){
    console.log('showFilters')
    isShowFilters.value = !isShowFilters.value
}
onBeforeMount(async () => {
    await load()
})
</script>
<style lang="scss">
.table-wrapper {
    display: flex;
    justify-content: center;
    flex-flow: column nowrap;
    align-items: center;
    &__content {
        padding: 90px 10px 0 10px;
        max-width: 1440px;
        display: flex;
        flex-flow: column;
        align-items: flex-start;
    }
    &__sup {
        margin: 7px;
        background: #D9D9D9;
        padding: 4px;
        border-radius: 37%;
        font-family: 'Montserrat',serif;
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        text-align: center;
        position: relative;
        /* translate: 40px; */
        top: -22px;
    }
}
.apartments {
    ///padding: 90px 10px 0 10px;
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
