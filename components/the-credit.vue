<template>
    <section>
        <div @click="setShow(0)">
            one
        </div>
        <div @click="setShow(1)">
            two
        </div>
        <div @click="setShow(2)">
            three
        </div>
        <div>
            <Transition name="slide-fade">
                <div
                    v-if="show === 0"
                    style="text-align: center;"
                    >
                    Hello here is show 0 text
                </div>
            </Transition>
            <Transition name="slide-fade">
                <div
                    v-if="show === 1"
                    style="text-align: center;"
                    >
                    Hello here is show 1 text
                </div>
            </Transition>
            <Transition name="slide-fade">
                <div
                    v-if="show === 2"
                    style="text-align: center;"
                    >
                    Hello here is show 2 text
                </div>
            </Transition>
        </div>
        <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane
                key="1"
                tab="Tab 1"
                >
                Tab 1
            </a-tab-pane>
            <a-tab-pane
                key="2"
                tab="Tab 2"
                disabled
                >
                Tab 2
            </a-tab-pane>
            <a-tab-pane
                key="3"
                tab="Tab 3"
                >
                Tab 3
            </a-tab-pane>
        </a-tabs>
    </section>
</template>

<script setup>
import { ref } from "vue"
const activeKey =  ref('1')
const show = ref(0)

function setShow(value) {
    show.value = value
}
</script>

<style scoped>
/*
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}
*/

/*.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}*/

/*.slide-fade-enter-from {
    transform: translateX(20px);
    opacity: 0;
}*/
/*.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}*/

/*.bounce-enter-active {
    animation: bounce-in 0.5s;
}
.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(1);
    }
}*/
</style>
