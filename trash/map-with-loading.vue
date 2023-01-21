<template>
    <div>
        <ClientOnly
            fallback-tag="div"
            placeholder="Loading ьфз..."
            >
            <the-map />
            <template #placeholder>
                <the-loading />
            </template>
        </ClientOnly>
    </div>
</template>

<script>
export default {
    name: "123"
}
</script>

<style scoped>

</style>
