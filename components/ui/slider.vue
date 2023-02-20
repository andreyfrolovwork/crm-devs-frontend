<template>
    <div>
        <div class="slider-component">
            actual: {{ actualValue }}
            <div class="slidecontainer">
                <input
                    ref="input"
                    v-model="currentValue1"
                    type="range"
                    :min="min"
                    :max="max"
                    class="slider"
                    >
                <input
                    ref="input"
                    v-model="currentValue2"
                    type="range"
                    :min="min"
                    :max="max"
                    class="slider"
                    >
                <div class="slidecontainer-rangeline"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watch } from "vue"
const props = defineProps(["value", "min", "max", "range"])
const actualValue = ref([0, 0])
// eslint-disable-next-line vue/no-setup-props-destructure
actualValue.value = props.value
watch(() => props.value, (currentValue) => {
    console.log("change value", currentValue)
    actualValue.value = currentValue
})


const currentValue1 = computed({
    get() {
        return actualValue.value[0]
    },
    set(value) {
        console.log("set actual first", value)
        actualValue.value[0] = value
    }
})
const currentValue2 = computed({
    get() {
        return actualValue.value[1]
    },
    set(value) {
        console.log("set actual second", value)
        actualValue.value[1] = value
    }
})

</script>

<style lang="scss" scoped>
.slidecontainer {
    &-rangeline {
        margin-top:10px;
        background: #1C6B72;
        height: 20px;
        width: 100%;
    }
}
.slider-component .slidecontainer {
    width: 100%;
}

.slider-component .slidecontainer .slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background: #c2c2c2;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
}

.slider-component .slidecontainer .slider:hover {
    opacity: 1;
}

.slider-component .slidecontainer .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    background: #D8A22E;
    cursor: pointer;
    border-radius: 50%;
}

.slider-component .slidecontainer .slider::-moz-range-thumb {
    width: 18px;
    height: 18px;
    background: #D8A22E;
    cursor: pointer;
    border-radius: 50%;
}
</style>