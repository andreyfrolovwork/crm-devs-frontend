<!--
<the-observer @intersect="intersected" />
событие intersect сработает при пересечении viewport
-->
<template>
    <div class="observer"/>
</template>

<script>
export default {
    props: ['options'],
    data: () => ({
        observer: null,
    }),
    mounted() {
        const observerOptions = this.options || {};
        this.observer = new IntersectionObserver(([entry]) => {
            if (entry && entry.isIntersecting) {
                this.$emit("intersect");
            }
        }, observerOptions);

        this.observer.observe(this.$el);
    },
    unmounted() {
        this.observer.disconnect();
    },
};
</script>
