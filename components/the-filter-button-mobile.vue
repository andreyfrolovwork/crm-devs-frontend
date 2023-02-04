<template>
    <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="button"
        >
        <circle
            cx="14"
            cy="11"
            r="2"
            stroke="#1C6B72"
            />
        <path
            d="M9 11H12"
            stroke="#1C6B72"
            stroke-linecap="round"
            stroke-linejoin="round"
            />
        <path
            d="M16 11H25"
            stroke="#1C6B72"
            stroke-linecap="round"
            stroke-linejoin="round"
            />
        <circle
            cx="14"
            cy="23"
            r="2"
            stroke="#1C6B72"
            />
        <path
            d="M9 23H12"
            stroke="#1C6B72"
            stroke-linecap="round"
            stroke-linejoin="round"
            />
        <path
            d="M16 23H25"
            stroke="#1C6B72"
            stroke-linecap="round"
            stroke-linejoin="round"
            />
        <circle
            cx="20"
            cy="17"
            r="2"
            stroke="#1C6B72"
            />
        <path
            d="M9 17H18"
            stroke="#1C6B72"
            stroke-linecap="round"
            stroke-linejoin="round"
            />
        <path
            d="M22 17L25 17"
            stroke="#1C6B72"
            stroke-linecap="round"
            stroke-linejoin="round"
            />
        <circle
            cx="17"
            cy="17"
            r="16.5"
            stroke="#1C6B72"
            />
    </svg>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.button {
    display: none;
    transition: all 0.15s ease-in-out;
    @include tablet {
        display: initial;
        position: absolute;
/*        top: 157px;
        right: 20px;*/
        top: 206px;
        right: 20px;
    }
    &:hover {
     color: #3d3d3d;
     filter: drop-shadow( 0px 4px 4px rgba(45, 35, 35, 0.4));
     //box-shadow: ;
     cursor: pointer;

 }

}
</style>
