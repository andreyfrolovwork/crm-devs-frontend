<template>
    <div class="slider-block">
        <div class="slider-title">
            Стоимость квартиры, руб
        </div>
        <div class="slider-range">
            <span class="slider-range__by">от </span>
            <span class="slider-range__value">{{ price[0].toLocaleString("ru") }}</span>
            <span class="slider-range__by">до</span>
            <span class="slider-range__value">{{ price[1].toLocaleString("ru") }}</span>
        </div>
        <a-slider
            v-model:value="price"
            class="setslider"
            :included="true"
            :min="priceRange[0]"
            :max="priceRange[1]"
            :step="100000"
            range
            :tooltip-visible="tooltip"
            @after-change="load"
            />
    </div>
    <div class="slider-block">
        <div class="slider-title">
            Площадь, м<sup>2</sup>
        </div>
        <div class="slider-range">
            <span class="slider-range__by">от </span>
            <span class="slider-range__value">{{ area[0] }}</span>
            <span class="slider-range__by">до</span>
            <span class="slider-range__value">{{ area[1] }}</span>
        </div>
        <a-slider
            v-model:value="area"
            :included="true"
            :min="areaRange[0]"
            :max="areaRange[1]"
            range
            :tooltip-visible="tooltip"
            @after-change="load"
            />
    </div>
    <div class="slider-block">
        <div class="slider-title">
            Этаж
        </div>
        <div class="slider-range">
            <span class="slider-range__by">от </span>
            <span class="slider-range__value">{{ floorRange[0] }}</span>
            <span class="slider-range__by">до</span>
            <span class="slider-range__value">{{ floorRange[1] }}</span>
        </div>
        <a-slider
            v-model:value="floor"
            :included="true"
            :min="floorRange[0]"
            :max="floorRange[1]"
            range
            :tooltip-visible="tooltip"
            @after-change="load"
            />
    </div>
    <div
        class="clear-filters"
        @click="clearFilters"
        >
        <div
            class="clear-filters__text"
            >
            Сбросить фильтры
        </div>
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M17.593 17.6568L6.71447 6.34314"
                stroke="#1C6B72"
                stroke-linecap="round"
                />
            <path
                d="M17.593 6.34314L6.71446 17.6568"
                stroke="#1C6B72"
                stroke-linecap="round"
                />
        </svg>
    </div>
</template>

<script setup>
import { storeToRefs } from "pinia"
import apartsStore from "~/store/store.js"
const astore = apartsStore()
const { area, price, floor, areaRange, priceRange, floorRange, tooltip, rooms,} = storeToRefs(astore)
const { clearFilters, load } = astore

</script>

<style lang="scss">
.clear-filters{
    margin-top: 10px;
    display: flex;
    align-items: center;
    transition: color,text-shadow 0.15s ease-in-out;
    &:hover {
        color: #3d3d3d;
        text-shadow: 0px 4px 4px rgba(45, 35, 35, 0.4);
        cursor: pointer;
    }
    &__text {
        font-family: 'Montserrat',serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        color: #000000;
    }
}


.filters {
    display: flex;
    flex-flow: column;
    flex: 1;
    max-width: 273px;
    min-width: 212px;
    margin-right: 20px;
    height: fit-content;
    padding: 10px;
    @include box-shadow;
    @include tablet {
        position: absolute;
        z-index: 95;
        padding: 10px;
        min-width: 250px;
        background: white;
    }
}

.ant-slider-handle {
    background-color: $base_green;
    color: $base_green;
    border: solid 2px $base_green;
    //border: solid 10px #2fa439;
}

.ant-slider-track {
    background-color: $base_green;
}
.slider-block {
    display: flex;
    flex-flow: column nowrap;
    margin-top: 15px;


    @mixin slider-gray {
        font-family: 'Montserrat', serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        text-align: left;
        color: #A9A9A9;
    }

    .slider-title {
        @include slider-gray;
    }

    .slider-range {
        margin: 9px 0 0 0;

        &__by {
            @include slider-gray;
            margin-right: 10px;
        }

        &__value {
                font-family: 'Montserrat', serif;
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
                margin-right: 10px;
        }
    }
}
</style>
