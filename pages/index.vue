<template>
    <div class="mwr">
        <div class="mwr-content">
            <div class="h1">
                Главная
            </div>
            <icon-rose />
            <img
                :src="config.public.baseImagesUrl + 'mainback.webp'"
                alt="back"
                >
            <div class="bl" />
            <div id="observer-root">
                <div class="observable">Observed Element 1</div>
                <div class="observable">Observed Element 2</div>
                <div class="observable">Observed Element 3</div>
                <div class="observable">Observed Element 4</div>
                <div class="observable">Observed Element 5</div>
                <div class="observable">Observed Element 6</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRuntimeConfig } from "nuxt/app"
import { onMounted } from "vue"
const config = useRuntimeConfig()
onMounted(() => {
    const callback = (entries) => console.log(entries);
    const observer = new IntersectionObserver(callback, {
        root: document.querySelector("#observer-root"),
        threshold: 1.0,
    });

    document
        .querySelectorAll(".observable")
        .forEach((el) => observer.observe(el));
})
</script>

<style lang="scss" >
#observer-root {
    height: 256px;
    overflow: scroll;
}

.observable {
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding: 32px;
    transition: background-color 0.5s ease;
}

.observable.in-sight {
    background-color: rgba(0,0,0,0.15);
}



/*
.observable {
    width: 100%;
    height: 1000px;
    border: 1px solid black;
}
*/

.mwr {
    padding-top: 60px;

    &-content {
        display: flex;
        flex-flow: column nowrap;
    }
}

.bl {
    width: 100%;
    height: 1000px;
    background-color: #00A0E3;
}

.bl2 {
    width: 100%;
    height: 1000px;
    background-color: #4ce300;
}
</style>
