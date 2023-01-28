<template>
    <div>
        <button
            @click="showMenu"
            @mouseover="showMenu(true)"
            @mouseleave="showMenu(false)"
            >
            О проекте ---
        </button>
        <the-menu :show="show">
            <ul>
                <li
                    v-for="link in menuLinks"
                    :key="link.name"
                    class="nav-menu"
                    >
                    <NuxtLink :to="link.to">
                        {{ link.name }}
                    </NuxtLink>
                </li>
            </ul>
        </the-menu>
    </div>
</template>

<script setup>
import { ref } from "vue"

const menuLinks =  [
    {
        name: "О проекте",
        to: "/l1"
    },
    {
        name: "Акции и новости",
        to: "/l2"
    },
    {
        name: "Ход строительства",
        to: "/l3"
    },
    {
        name: "Контакты",
        to: "/l4"
    },
    {
        name: "Расположение",
        to: "/l5"
    }
]

const show = ref(true)

function showMenu(value) {
    if (!value){
        show.value = !show.value
    } else {
        show.value = value
    }
}
</script>

<style scoped lang="scss">
.nav-menu {
    list-style: none;
}
</style>
