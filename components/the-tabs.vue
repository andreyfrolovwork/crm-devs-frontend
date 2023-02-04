<template>
    <section>
        <div class="tab">
            <div class="tab_buttons">
                <div
                    v-for="(tab,i) in props.tabs"
                    :key="i"
                    class="tab_buttons_but"
                    @click="setShow(i)"
                    >
                    {{ tab }}
                </div>
            </div>
            <div class="tab_line" />
            <div
                ref="track"
                class="tab_track"
                />
        </div>
        <div>
            <div
                v-for="(tab,i) in props.tabs"
                :key="i"
                >
                <div v-if="show === (i)">
                    <slot :name="'t'+ i" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from "vue"

const props = defineProps({
    tabs: {
        type: Array,
        default: ["tab1"]
    }
})

const track = ref(null)
const show = ref(0)
onMounted(() => {
    const width = 100 / props.tabs.length + '%'
    track.value.style.width = width
    console.log(width)
})
function setShow(value) {
    show.value = value
    const step = 100 / props.tabs.length
    const left = Math.ceil(step * (value + 1) - step) + "%"
    track.value.style.left = left
}
</script>

<style lang="scss">
.tab {
    padding: 0 0 10px 0;

    &_buttons {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;

        &_but {
            //margin: 15px;
            width: 33.33%;
            text-align: center;
            font-family: 'Montserrat', serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            user-select: none;
            margin: 10px 10px 10px 10px;

            transition: color, text-shadow 0.15s ease-in-out;

            &:hover {
                color: #e7e7e7;
                text-shadow: 0px 4px 4px rgb(233 233 233 / 40%);
            }
        }
    }

    &_line {
        border-top: 1px solid black;

    }

    &_track {
        position: relative;
        background: #1C6B72;
        height: 4px;
        width: 33%;
        left: 0;
        transition: all 300ms ease-in-out;

        &:hover {
            left: 66%
        }
    }
}

</style>
