<template>
    <section class="apartments">
        <div class="data">
            <aparts-table />
        </div>
        <div class="filters">
            <ClientOnly
                fallback-tag="span"
                fallback="Loading filters..."
                >
                <button @click="load">
                    click
                </button>
                <a-typography-title :level="2">
                    Цена
                </a-typography-title>
                <a-slider
                    v-model:value="price"
                    :included="true"
                    :min="priceRange[0]"
                    :max="priceRange[1]"
                    :step="100000"
                    range
                    :tooltip-visible="tooltip"
                    @after-change="load"
                    />
                <a-typography-title :level="2">
                    Площадь
                </a-typography-title>
                <a-slider
                    v-model:value="area"
                    :included="true"
                    :min="areaRange[0]"
                    :max="areaRange[1]"
                    range
                    :tooltip-visible="tooltip"
                    @after-change="load"
                    />
                <a-typography-title :level="2">
                    Этаж
                </a-typography-title>
                <a-slider
                    v-model:value="floor"
                    :included="true"
                    :min="floorRange[0]"
                    :max="floorRange[1]"
                    range
                    :tooltip-visible="tooltip"
                    @after-change="load"
                    />
                <a-typography-title :level="2">
                    Количество комнат
                </a-typography-title>
                <a-select
                    v-model:value="rooms"
                    mode="multiple"
                    style="width: 100%"
                    placeholder="Выбрать этажи"
                    :options="roomsRange"
                    @change="load"
                    />
                <a-button @click="clearFilters">Сбросить фильтры</a-button>
            </ClientOnly>
        </div>
    </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import apartsStore from '~/store/store.js'
import { onBeforeMount, ref } from "vue"

const astore = apartsStore()
const { area, price, floor, areaRange, priceRange, floorRange, tooltip,rooms, roomsRange } = storeToRefs(astore)
const { load,clearFilters } = astore
onBeforeMount(async () => {
    await load()
})

const value = ref([])

</script>
<style lang='scss'>
.apartments {
    padding: 20px;
    padding-top: 50px;

    display: flex;
    flex-flow: row;

    .filters {
        display: flex;
        flex-flow: column;
        flex: 1;
    }

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
</style>
