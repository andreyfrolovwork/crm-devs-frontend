<template>
    <section class="apartments">
        <div class="data">
            <aparts-table/>
            <div
                v-for="apart in aparts"
                :key="apart"
                class="data__row"
                >
                <div class="data__prop">
                    {{ apart.rooms }} к квартира
                </div>
                <div class="data__prop">
                    {{ apart.area }}м
                </div>
                <div class="data__prop">
                    {{ apart.price }} рублей
                </div>
                <div class="data__prop">
                    {{ apart.floor }} этаж
                </div>
            </div>
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
                    range
                    :tooltip-visible="true"
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
                    :tooltip-visible="true"
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
                    :tooltip-visible="true"
                    @after-change="load"
                    />
            </ClientOnly>
        </div>
    </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import apartsStore from '../store/store.js'

const astore = apartsStore()
const { aparts, area, price, floor, areaRange, priceRange, floorRange, columns } = storeToRefs(astore)
const { load } = astore


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
