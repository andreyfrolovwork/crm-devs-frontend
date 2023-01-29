<template>
    <div
        id="page44"
        class="page23"
        >
        <button @click="createObs">
            create observer
        </button>
        <div class="b1">
            one
        </div>
        <div class="b1">
            one
        </div>
        <div
            v-animate-on-scroll
            class="b1"
            >
            one
        </div>
        <!--        <the-show>
            <div class="b1">
                one
            </div>
        </the-show>
        <the-show>
            <div class="b2">
                two
            </div>
        </the-show>
        <the-show>
            <div class="b2">
                two
            </div>
        </the-show>
        <the-show>
            <div
                id="b44"
                class="b3"
                >
                three
            </div>
        </the-show>
        <the-show>
            <div class="b2">
                two
            </div>
        </the-show>-->
    </div>
</template>
<!--<the-observer @intersect="intersected" />-->
<script setup>

</script>


<style lang="scss">
.b1 {
    background-color: #3d9db2;
    width: 100vw;
    height: 1500px;
}
.b2 {
    background-color: #5dc45a;
    width: 100vw;;
    height: 1500px;
}
.b3 {
     background-color: #a722b0;
     width: 100vw;
     height: 1500px;
 }

</style>
