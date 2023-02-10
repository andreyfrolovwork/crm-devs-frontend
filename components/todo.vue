<template >
    <div>123</div>
</template>

<script>
export default {
    name: "TodoComponent",
    mounted() {
        console.log(this)
        this.observer.observe(this.$el)
    }

}
</script>

<style scoped>

</style>
