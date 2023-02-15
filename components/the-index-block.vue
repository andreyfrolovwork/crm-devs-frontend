<template>
    <div
        :class="{
            block:true,
            reverse:props.reverse,
        }"
        >
        <div
            :class="{
                'block-left':true,
                'margin-before-block':!props.reverse
            }"
            >
            <h1 class="block-left-h1">
                <slot name="h1text" />
            </h1>
            <div class="block-left-text">
                <slot name="text" />
            </div>
        </div>
        <div
            :class="{
                'block-right':true,
                'margin-before-block':props.reverse
            }"
            >
            <img
                :src="config.public.baseImagesUrl + props.image"
                alt="image"
                >
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue"
import { useRuntimeConfig } from "nuxt/app"

const config = useRuntimeConfig()
const props = defineProps(["h1", "text", "image", "reverse"])
</script>

<style lang="scss">
.block {
    display: flex;
    flex-flow: row nowrap;
    margin: 120px 0 0 0;
    max-width: 1200px;


    &-left {
        //padding: 80px 0 20px 80px;
        //margin-right: 10px;
        display: flex;
        flex-flow: column;
        flex: 1;
        //background: aliceblue;
        background-color:white;
        box-sizing: border-box;

        &-h1 {
            margin: 80px 0 20px 80px;
            font-family: 'Montserrat', serif;
            font-style: normal;
            font-weight: 700;
            font-size: 40px;
            line-height: 56px;
        }

        &-text {
            margin: 0 0 20px 80px;
            font-family: 'Montserrat', serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 150%;
        }
    }

    &-right {
        display: flex;
        flex: 1;
        background-color:white;
        img {
            height: 500px;
            width: 100%;
            object-fit: cover;
        }
    }
}

.reverse {
    flex-direction: row-reverse;
}

.margin-before-block {
    margin-right: 10px;
}
</style>