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
                'margin-before-block-right':props.reverse
            }"
            >
            <a-image

                :src="config.public.baseImagesUrl + props.image"
                />
            <!--            <img
                            :src="config.public.baseImagesUrl + props.image"
                            alt="image"
                            >-->
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
    margin: 100px 10px 0 10px;

    max-width: 1200px;
    @include tablet {
        margin: 100px 10px 0 10px;
    }
    @include phone {
        margin: 80px 10px 0 10px;
        flex-flow: column;
    }
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
            @include tablet {
                margin: 40px 0 20px 50px;
            }
            @include phone {
                margin: 40px 0 20px 38px;
            }
            margin: 80px 0 20px 80px;
            font-family: 'Montserrat', serif;
            font-style: normal;
            font-weight: 700;
            font-size: 40px;
            line-height: 56px;
        }

        &-text {
            @include tablet {
                margin: 0 0 20px 50px;
            }
            @include phone {
                margin: 0 0 35px 38px;
            }
            margin: 0 20px 20px 80px;
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
    @include phone {
        flex-direction: column;
    }
}

.margin-before-block {
    margin-right: 10px;
    @include phone {
        margin-right: 0px;
        margin-bottom: 10px;
    }
}
.margin-before-block-right {
    margin-right: 10px;
    @include phone {
        margin-right: 0px;
        margin-top: 10px;
    }
}
</style>