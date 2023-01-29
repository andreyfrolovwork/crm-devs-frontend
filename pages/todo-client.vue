<template>
    <ClientOnly
        fallback-tag="div"
        placeholder="Loading..."
        >
        <todolist />
    </ClientOnly>
</template>

<script>
export default {
    name: "TodoClient"
}
</script>

<style scoped>

</style>
