<template>
    <section class="apartments">
        <div class="data">
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
            <a-slider
                v-model:value="value2"
                range
                />
            <!--      <div class='text-h4'>Площадь</div>
            <q-range
              class='q-mt-xl'
              color='deep-orange'
              label-always=''
              markers=''
              :min='areaRange.min'
              :max='areaRange.max'
              :inner-min='areaRange.min'
              :inner-max='areaRange.max'
              :model-value='area'
              @change='setArea'></q-range>
            <div class='text-h4'>Цена</div>
            <q-range
              class='q-mt-xl'
              color='deep-orange'
              label-always=''
              markers=''
              :min='priceRange.min'
              :max='priceRange.max'
              :inner-min='priceRange.min'
              :inner-max='priceRange.max'
              :model-value='price'
              @change='setPricef'></q-range>
            <div class='text-h4'>Этаж</div>
            <q-range
              class='q-mt-xl'
              color='deep-orange'
              label-always=''
              markers=''
              :min='floorRange.min'
              :max='floorRange.max'
              :inner-min='floorRange.min'
              :inner-max='floorRange.max'
              :model-value='floor'
              @change='setFloor'></q-range>-->
        </div>
    </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import apartsStore from '../store/store.js'

const astore = apartsStore()
const { aparts, area, price, floor, areaRange, priceRange, floorRange, columns } = storeToRefs(astore)
const { setArea, setPrice, setFloor, load } = astore
const rows = ref([
    {
        _id: '63c51d6f17baf635b57b07de',
        section: 1,
        rooms: 0,
        area: 26.575,
        price: 1911423,
        floor: 1,
        __v: 0
    }
])

async function setPricef(pay) {
    setPrice(pay)
    const value = await load()
    console.log('value', value)
    rows.value.push(value[0])
}
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
