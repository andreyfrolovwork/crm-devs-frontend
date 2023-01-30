<template>
    <div class="navbar">
        <div class="navbar__center">
            <div class="navbar__center__left">
                <div
                    class="link withmenu"
                    @click="showMenu"
                    @mouseover="showMenu(true)"
                    @mouseleave="showMenu(false)"
                    >
                    О проекте -
                    <the-menu :show="show">
                        <ul class="nav-ul">
                            <li
                                v-for="link in menuLinks"
                                :key="link.name"
                                class="nav-menu"
                                >
                                <NuxtLink
                                    class="link black"
                                    :to="link.to"
                                    >
                                    {{ link.name }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </the-menu>
                </div>

                <NuxtLink
                    class="link"
                    to="/sections"
                    >
                    На карте
                </NuxtLink>
                <NuxtLink
                    class="link"
                    to="/table"
                    >
                    Поиск по параметрам
                </NuxtLink>
            </div>

            <div class="navbar__center__left m10">
                <a
                    href="tel:+73517001717"
                    class="link m15r"
                    >
                    <span class="phone__number">8 (351) 700-17-17</span>
                </a>
                <the-button-white>Заказать звонок</the-button-white>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"

const menuLinks = [
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

const show = ref(false)

function showMenu(value) {
    if (!value) {
        show.value = !show.value
    } else {
        show.value = value
    }
}
</script>

<style scoped lang="scss">
.nav-menu {
    list-style: none;
    margin: 14px 0;

}

.navbar {
    //box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
    box-shadow: 0 0 10px rgb(43 41 41 / 16%);

    height: 60px;
    width: 100vw;
    background-color: $base_green;
    position: absolute;
    z-index: 99;
    display: flex;
    flex-direction: row;
    //max-width: 1440px;
    justify-content: center;
    &__center {
        display: flex;
        max-width: 1440px;
        flex: 1;
        flex-flow: row;
        //background: #2c491c;
        justify-content: space-between;
        &__left {
            display: flex;
            flex-direction: row;
            //align-items: center;
        }
    }
}

.link {
    //margin:0 5px;
    //font-weight: 600;
    //font-size: 16px;
    margin: 0 10px;
    font-weight: 450;
    font-size: 14px;
    line-height: 20px;
    color: white;
    align-items: center;
    display: flex;
    font-family: 'Montserrat',serif;
    transition: color,text-shadow 0.15s ease-in-out;
    &:hover {
        color: #e7e7e7;
        text-shadow: 0px 4px 4px rgb(233 233 233 / 40%);
    }
}
.black{
    color:black;
    &:hover {
        color: #707070;
        text-shadow: 0px 4px 4px rgba(203, 185, 185, 0.4);
    }

    margin: 5px 0;
}

.m10 {
    margin: 0 15px;
    align-items: center;
}
.m15r {
    margin-right: 15px;
}

.withmenu {
    display: flex;
    flex-flow:column;
    /* justify-content: center;*/
    /* flex-direction: column; */
    /* align-items: center; */
    line-height: 60px;
    width: 86px;
}

.nav-ul {
    margin-block-end: 0;
    margin-block-start: 0;
    list-style: none;
    padding: 0px;
    margin: 0;
}


</style>
