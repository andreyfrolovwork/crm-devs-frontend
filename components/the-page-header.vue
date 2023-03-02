<template>
    <div class="page-head">
        <h1 class="page-head-h1">
            <slot />
        </h1>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.page-head {
    display: flex;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 20px;

    &-h1 {
        font-family: "Montserrat", serif;
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 56px;
        padding-bottom: 25px;
        border-bottom: 1px solid #c9c9c9;
        max-width: 1200px;
        width: 100%;
    }
}
</style>