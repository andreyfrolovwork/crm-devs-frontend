<template>
    <div class="docs">
        <the-docs :docs="docs" />
        <the-docs :docs="docs" />
    </div>
</template>

<script setup>
const docs = [
    {
        title: "Градостроительный план",
        updateDate: "22.02.1",
        file: "file.pdf"
    },
    {
        title: "Градостроительный план",
        updateDate: "22.02.1",
        file: "file.pdf"
    },
    {
        title: "Градостроительный план",
        updateDate: "22.02.1",
        file: "file.pdf"
    },
    {
        title: "Градостроительный план",
        updateDate: "22.02.1",
        file: "file.pdf"
    },
    {
        title: "Градостроительный план",
        updateDate: "22.02.1",
        file: "file.pdf"
    },
    {
        title: "Градостроительный план",
        updateDate: "22.02.1",
        file: "file.pdf"
    }
]
</script>

<style lang="scss" scoped>
.docs {
    display: flex;
    flex-flow: row wrap;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;

}
</style>