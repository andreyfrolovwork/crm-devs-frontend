<template>
    <div class="wrap">
        <div>test1</div>
        <input
            id="volume"
            type="range"
            name="volume"
            min="0"
            max="11"
            >
        <label for="volume">Volume</label>
        <a-image
            :width="200"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
        <splide :options="options">
            <splide-slide>
                <img
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    alt=""
                    >
            </splide-slide>
            <splide-slide>
                <img
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    alt=""
                    >
            </splide-slide>
            <splide-slide>
                <img
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    alt=""
                    >
            </splide-slide>
        </splide>
    </div>
</template>

<script setup>
import { ref } from "vue"

const options = {
    rewind : true,
    width  : 800,
    gap    : '1rem',
}
const value = ref(20)
</script>

<style scoped>
.wrap {
    padding: 40px;
}
</style>
