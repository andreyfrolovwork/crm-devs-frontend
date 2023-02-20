<template>
    <div class="qwr">
        <div
            :class="{
                'qwr-quad':true, 
                'activesec':(props.section === 1)
            }"
            >
            <div
                :class="{
                    'qwr-quad-sectext':true, 
                    'dnone':props.section === 1
                }"
                >
                1 <br> секция
            </div>
            <div class="qwr-quad-door"></div>
        </div>
        <div
            :class="{
                'qwr-quad':true, 
                'activesec':(props.section === 2)
            }"
            >
            <div
                :class="{
                    'qwr-quad-sectext':true, 
                    'dnone':props.section === 2
                }"
                >
                2 <br> секция
            </div>
            <div class="qwr-quad-door"></div>
        </div>
        <div
            :class="{
                'qwr-quad ':true,
                'activesec':(props.section === 3)
            }"
            >
            <div
                :class="{
                    'qwr-quad-sectext':true, 
                    'dnone':props.section === 3
                }"
                >
                3 <br> секция
            </div>
            <div class="qwr-quad-door"></div>
        </div>
        <div
            :class="{
                'qwr-quad':true, 
                'activesec':(props.section === 4)
            }"
            >
            <div
                :class="{
                    'qwr-quad-sectext':true, 
                    'dnone':(props.section === 4)
                }"
                >
                4 <br> секция
            </div>
            <div class="qwr-quad-door"></div>
        </div>
        <div
            :class="{
                'qwr-quad':true, 
                'activesec':(props.section === 5)
            }"
            >
            <div
                :class="{
                    'qwr-quad-sectext':true, 
                    'dnone':props.section === 5
                }"
                >
                5 <br> секция
            </div>
            <div class="qwr-quad-door"></div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue"
const props = defineProps(["section"])
</script>

<style lang="scss" scoped>
.qwr {
    display: flex;
    flex-flow: row nowrap;

    &-quad {
        display: flex;
        flex-flow: column nowrap;
        width: 80px;
        height: 80px;
        border-bottom: 0.5px solid #b9b9b9;
        border-right: 0.5px solid #b9b9b9;
        border-top: 0.5px solid #b9b9b9;
        justify-content: flex-end;
        align-items: center;

        background: linear-gradient(45deg, rgba(0, 0, 0, 0) 49.9%, #dadada 49.9%, #dadada 60%, rgba(0, 0, 0, 0) 60%) fixed,
        linear-gradient(45deg, #dadada 10%, rgba(0, 0, 0, 0) 10%) fixed;
        background-size: 0.5em 0.5em;


        &:first-child {
            border-bottom: 0.5px solid #b9b9b9;
            border-right: 0.5px solid #b9b9b9;
            border-top: 0.5px solid #b9b9b9;
            border-left: 0.5px solid #b9b9b9;
        }

        &-sectext {
            background: white;
            width: fit-content;
            text-align: center;
            margin: auto;
            font-weight: 600;
            font-family: 'Montserrat', serif;
            line-height: 15px;
            padding: 2px;
            display: none;
        }

        &-door {
            width: 20px;
            height: 10px;
            border: 1px solid #b1b1b1;
            margin: 0 auto;
            position: relative;
            bottom: -5px;
        }
    }
}

.gray {
    background: linear-gradient(45deg, rgba(0, 0, 0, 0) 49.9%, #dadada 49.9%, #dadada 60%, rgba(0, 0, 0, 0) 60%) fixed,
    linear-gradient(45deg, #dadada 10%, rgba(0, 0, 0, 0) 10%) fixed;
    background-size: 0.5em 0.5em
}


.activesec {
    background: linear-gradient(45deg, rgba(0, 0, 0, 0) 49.9%, green 49.9%, green 60%, rgba(0, 0, 0, 0) 60%) fixed,
    linear-gradient(45deg, green 10%, rgba(0, 0, 0, 0) 10%) fixed;
    background-size: 0.5em 0.5em
}

.dnone {
    display: initial;
}
</style>