<template>
    <div class="filter-rooms">
        <div
            :class="{
                'filter-rooms__room-button':true,
                'room-button-active':b1
            }"
            @click="setRoom(1)"
            >
            1к
        </div>
        <div
            :class="{
                'filter-rooms__room-button':true,
                'room-button-active':b2
            }"
            @click="setRoom(2)"
            >
            2к
        </div>
        <div
            :class="{
                'filter-rooms__room-button':true,
                'room-button-active':b3
            }"
            @click="setRoom(3)"
            >
            3к
        </div>
        <div
            :class="{
                'filter-rooms__room-button':true,
                'room-button-active':b4
            }"
            @click="setRoom(4)"
            >
            4к
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from "pinia"
import apartsStore from "~/store/store.js"

const astore = apartsStore()
const { b1, b2, b3, b4 } = storeToRefs(astore)
const {  setRoom } = astore
</script>

<style lang="scss" scoped>

.filter-rooms {
    display: flex;
    flex-flow: row;
    justify-content: space-around;

    &__room-button {
        border: 0.29078px solid #000000;
        margin: 0 10px 0 0;
        /* padding: 4px; */
        border-radius: 50%;
        width: 36px;
        text-align: center;
        line-height: 32px;
        height: 36px;

        font-family: 'Montserrat', serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;;
        color: #000000;
        transition: background-color, color, border-color 0.15s ease-in-out;;

        &:hover {
            color: white;
            background-color: #44818a;
            border-color: #44818a;

        }
    }
}

.room-button-active {
    color: white;
    background-color: $base_green;
    border-color: $base_green;
}
</style>
