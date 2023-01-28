<template>
    <splide :options="options">
        <splide-slide>
            <a-image
                src="http://localhost:6200/images/chrome_1.png"
                />
        </splide-slide>
        <splide-slide>
            <a-image
                src="http://localhost:6200/images/chrome_1.png"
                />
        </splide-slide>
        <splide-slide>
            <a-image
                src="http://localhost:6200/images/chrome_1.png"
                />
        </splide-slide>
    </splide>
</template>

<script setup>
const options = {
    rewind: true,
    gap: "1rem",
    width: "100%",
    height: "100%"
}
</script>

<style scoped>
.gallery-item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>
