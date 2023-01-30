<template>
    <button class="the-button">
        <slot />
    </button>
</template>


<style lang="scss">
.the-button {
    background: none;
    //olor: inherit;
    border: none;
    //padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;

    align-items: center;
    padding: 8px 16px;
    width: 168px;
    height: 40px;

    background: white;
    color:black;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    transition: background-color 0.15s ease-in-out;;
    font-family: 'Montserrat',serif;
    &:hover {
        background: #4DA7B0FF;
    }


}
</style>
