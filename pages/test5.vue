<template>
    <div class="p100">
        <the-sec-small :section="3"></the-sec-small>
<!--        <div class="qwr">
            <div class="qwr-quad gray">
                <div class="qwr-quad-sectext">1 <br> секция</div>
            </div>
            <div class="qwr-quad gray">
                <div class="qwr-quad-sectext">2 <br> секция</div>
            </div>
            <div class="qwr-quad gray">
                <div class="qwr-quad-sectext">3 <br> секция</div>
            </div>
            <div class="qwr-quad hatching-green">
                <div class="qwr-quad-sectext">4 <br> секция</div>
            </div>
            <div class="qwr-quad gray">
                <div class="qwr-quad-sectext">5 <br> секция</div>
            </div>
        </div>-->
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.qwr {
    display: flex;
    flex-flow: row nowrap;

    &-quad {
        display: flex;
        width: 100px;
        height: 100px;
        border-bottom: 0.5px solid #b9b9b9;
        border-right: 0.5px solid #b9b9b9;
        border-top: 0.5px solid #b9b9b9;

        &:first-child {
            border-bottom: 0.5px solid #b9b9b9;
            border-right: 0.5px solid #b9b9b9;
            border-top: 0.5px solid #b9b9b9;
            border-left: 0.5px solid #b9b9b9;
        }
        &-sectext {
            background: white;
            width: fit-content;
            text-align: center;
            margin: auto;
            font-weight: 600;
            font-family: 'Montserrat';
            line-height: 15px;
            padding: 2px;
        }
    }
}

.gray {
    background: linear-gradient(45deg, rgba(0, 0, 0, 0) 49.9%, #dadada 49.9%, #dadada 60%, rgba(0, 0, 0, 0) 60%) fixed,
    linear-gradient(45deg, #dadada 10%, rgba(0, 0, 0, 0) 10%) fixed;
    background-size: 0.5em 0.5em
}

.hatching-red {
    background: linear-gradient(45deg, rgba(0, 0, 0, 0) 49.9%, red 49.9%, red 60%, rgba(0, 0, 0, 0) 60%) fixed,
    linear-gradient(45deg, red 10%, rgba(0, 0, 0, 0) 10%) fixed;
    background-size: 0.5em 0.5em
}

.hatching-green {
    background: linear-gradient(45deg, rgba(0, 0, 0, 0) 49.9%, green 49.9%, green 60%, rgba(0, 0, 0, 0) 60%) fixed,
    linear-gradient(45deg, green 10%, rgba(0, 0, 0, 0) 10%) fixed;
    background-size: 0.5em 0.5em
}
</style>