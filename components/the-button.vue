<template>
    <button class="the-button">
        <slot />
    </button>
</template>


<style scoped lang="scss">
.the-button {
    width: fit-content;
    height: fit-content;
    background: none;
    //olor: inherit;
    border: none;
    //padding: 0;

    cursor: pointer;
    outline: inherit;

    align-items: center;
    padding: 8px 16px;
    //width: 168px;
    ///height: 40px;

    background: $base_green;
    color:white;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    transition: background-color 0.15s ease-in-out;;

    font-family: 'Montserrat',serif;

    &:hover {
        background: $base_green_light;
    }


}
</style>
