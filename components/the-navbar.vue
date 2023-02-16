<template>
    <div class="navbar">
        <Transition name="mobile-menu1">
            <div
                v-if="showNavbar"
                class="navbar-menu"
                >
                <ul class="nav-ul">
                    <div class="navbar-menu__title">
                        О проекте
                    </div>
                    <li
                        v-for="link in menuLinks"
                        :key="link.name"
                        class="nav-menu"
                        >
                        <NuxtLink
                            class="link black bar"
                            :to="link.to"
                            @click="showNavbarMenu()"
                            >
                            {{ link.name }}
                        </NuxtLink>
                    </li>
                    <div class="navbar-menu__title">
                        Подбор квартиры
                    </div>
                    <li class="nav-menu">
                        <NuxtLink
                            class="link black bar"
                            to="/sections"
                            @click="showNavbarMenu()"
                            >
                            На карте
                        </NuxtLink>
                    </li>
                    <li class="nav-menu">
                        <NuxtLink
                            class="link black bar"
                            to="/table"
                            @click="showNavbarMenu()"
                            >
                            Поиск по параметрам
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </Transition>
        <div class="navbar__mobile-button">
            <div class="logo">
                <img
                    :src="config.public.baseImagesUrl + 'logo-header.svg'"
                    alt="logo"
                    class="logo"
                    @click="goToMain"
                    >
            </div>
            <div class="menu-button">
                <the-phone-icon @click="callFromMainPage"/>
                <the-menu-icon @showmenu="showNavbarMenu" />
            </div>
        </div>
        <div class="navbar__center">
            <div class="navbar__center__left">
                <div class="logo">
                    <img
                        :src="config.public.baseImagesUrl + 'logo-header.svg'"
                        alt="logo"
                        @click="goToMain"
                        >
                </div>
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

            <div class="navbar__center__left aicenter">
                <a
                    href="tel:+73517001717"
                    class="link m15r"
                    >
                    <span class="phone__number">8 (351) 700-17-17</span>
                </a>
                <feedback-button>Заказать звонок</feedback-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter, useRuntimeConfig } from "nuxt/app"
import { ref } from "vue"
import { callFromMainPage } from "../functions/callFromMainPage.js"

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
const config = useRuntimeConfig()
const show = ref(false)
const showNavbar = ref(false)
const router = useRouter()

function showNavbarMenu() {
    console.log("show menu")
    showNavbar.value = !showNavbar.value
}

function showMenu(value) {
    if (!value) {
        show.value = !show.value
    } else {
        show.value = value
    }
}

function goToMain() {
    router.push({
        path: "/"
    })
}
</script>

<style scoped lang="scss">
.nav-menu {
    list-style: none;
    margin: 14px 0;

}

.logo {
    display: block;
    margin-top: auto;
    margin-bottom: auto;
    ///margin-left: 15px;
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

    &__mobile-button {

        @mixin show-mobile {
            display: flex;
            align-items: center;
            flex-flow: row;
            justify-content: space-between;
            flex: 1;
            //margin: 0 58px 0 15px;
            margin: 0px 35px 0 15px;
            //margin: 0 25px 0 15px;

        }
        display: none;
        @include phone {
            @include show-mobile
        }
        @include tablet {
            @include show-mobile
        }

    }

    &__center {
        @include phone {
            display: none;
        }
        @include tablet {
            display: none;
        }
        display: flex;
        max-width: 1440px;
        flex: 1;
        flex-flow: row;
        //background: #2c491c;
        justify-content: space-between;
        //margin: 0 15px;
        margin: 0 66px 0 15px;

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
    font-family: 'Montserrat', serif;
    transition: color, text-shadow 0.15s ease-in-out;

    &:hover {
        color: #e7e7e7;
        text-shadow: 0px 4px 4px rgb(233 233 233 / 40%);
    }
}

.black {
    color: black;

    &:hover {
        color: #707070;
        text-shadow: 0px 4px 4px rgba(203, 185, 185, 0.4);
    }

    margin: 5px 0;
}

.aicenter {
    align-items: center;
}

.m15r {
    margin-right: 15px;
}

.withmenu {
    display: flex;
    flex-flow: column;
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

.navbar-menu {
    position: absolute;
    background: white;
    display: flex;
    width: 100vw;
    height: calc(100vh - 60px);
    margin-top: 60px;

    ul {
        padding: 50px 50px 50px 70px;
    }

    li {
        margin-left: 15px;
    }

    &__title {
        font-family: 'Montserrat',serif;
        font-style: normal;
        font-weight: 600;
        /*        font-size: 16px;
                line-height: 20px;*/
        font-size: 24px;
        line-height: 30px;
    }

    .bar {
        font-size: 18px;
        line-height: 33px;
    }

}

.menu-button {
    display: flex;
    flex-flow: row nowrap;
}

// mobile menu transitiion property
.mobile-menu1-enter-active {
    transition: all 0.1s ease-out;
}

.mobile-menu1-leave-active {
    transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.mobile-menu1-enter-from {
    transform: translateX(-100px);
    opacity: 0;
}

.mobile-menu1-leave-to {
    transform: translateX(-100px);
    opacity: 0;
}

</style>
