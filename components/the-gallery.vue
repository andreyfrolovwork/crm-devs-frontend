<template>
    <splide :options="options">
        <splide-slide>
            <div class="splide-image-wrapper">
                <a-image
                    src="http://localhost:6200/images/chrome_1.png"
                    />
            </div>
        </splide-slide>
        <splide-slide>
            <div class="splide-image-wrapper">
                <a-image
                    src="http://localhost:6200/images/chrome_1.png"
                    />
            </div>
        </splide-slide>
        <splide-slide>
            <div class="splide-image-wrapper">
                <a-image
                    src="http://localhost:6200/images/chrome_1.png"
                    />
            </div>
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
.splide-image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>
