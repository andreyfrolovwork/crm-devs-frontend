<template>
    <svg
        width="14"
        height="27"
        viewBox="0 0 14 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path
            d="M3.5 18.8333L7 22.3333L10.5 18.8333"
            :stroke="top"
            stroke-width="2"
            stroke-linecap="round"
            />
        <path
            d="M10.5 8.16666L7 4.66666L3.5 8.16666"
            :stroke="bottom"
            stroke-width="2"
            stroke-linecap="round"
            />
    </svg>
</template>

<script setup>
import { computed, defineProps } from "vue"

const props = defineProps(["orderBy"])
const bottom = computed(() => props.orderBy === "asc" ? "#1C6B72" : "#adadad")
const top = computed(() => props.orderBy === "asc" ? "#adadad" : "#1C6B72")
</script>

<style lang="scss">
.svg {
    //color: #ae22c4;
    //fill: #2fa439;
    stroke: #adadad;
}
</style>
