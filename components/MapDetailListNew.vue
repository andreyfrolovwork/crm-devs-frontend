<template>
    <div class="desktop-buttons">
        <ul class="map-detail-list">
            <li
                v-for="el in list"
                :key="el.text"
                class="map-detail-list__item"
                >
                <FormCheck
                    :is-reverse="true"
                    class="map-detail-list__option"
                    :checked="el.checked"
                    @change="$emit('map-set', el.text)"
                    >
<!--                    <app-svg
                        :id="el.id"
                        :width="el.width"
                        :height="el.height"
                        />-->
                    <span class="map-detail-list__option-text">{{ el.text }}</span>
                </FormCheck>
            </li>
        </ul>
    </div>
</template>

<script>
/* eslint-disable*/
/*
import FormCheck from "./form/FormCheck.vue"
import AppButton from "./ui/AppButton.vue"
*/

export default {
    name: "MapDetailList",
    /*    components: { FormCheck, AppButton },*/
    props: {
        isMobile: {
            type: Boolean,
            default: null
        },
        list: {
            type: Array
        }
    },
    data() {
        return {
            key: 0
        }
    },

    mounted() {
    }
}
</script>

<style lang="scss" scoped>
.desktop-buttons {
    position: absolute;
    z-index: 10;

    @include laptop {
        display: none;
    }
}

.map-detail-list {


    $that: &;

    max-height: 100%;
    margin-left: 0 !important;
    max-width: 248px;
    background-color: $white;
    box-shadow: 0px 15px 64px rgba(35, 41, 48, 0.04), 0px 8px 16px rgba(35, 41, 48, 0.06),
    0px 6px 8px rgba(35, 41, 48, 0.07);
    overflow: auto;

    &._mobile {
        @media (min-width: 1024px) {
            display: none;
        }

        background-color: transparent;
        box-shadow: none;
        max-width: 100%;
        display: flex;
    }

    &__item {
        list-style: none;
        padding: 20px 16px;

        ._mobile & {
            flex: none;
        }

        & + & {
            margin-top: 16px;

            ._mobile & {
                margin-top: 0;
                margin-left: 6px;
            }
        }

        &:nth-child(2) svg {
            transform: translate3d(-2px, 0, 0);
        }

        &:nth-child(3) svg {
            transform: translate3d(-3px, 0, 0);
        }

        &:nth-child(4) svg {
            transform: translate3d(1px, 0, 0);
        }

        &:nth-child(5) svg {
            transform: translate3d(-3px, 0, 0);
        }

        &:nth-child(6) svg {
            transform: translate3d(-1px, 0, 0);
        }

        &:nth-child(7) svg {
            transform: translate3d(2px, 0, 0);
        }
    }

    &__option {
        position: relative;
        width: 100%;
        transition: color 0.25s ease;

        svg {
            position: absolute;
        }

        &:hover {
            color: $color_primary;
        }
    }

    &__option-text {
        padding-left: 46px;

        @include tablet {
            padding-left: 20px;
        }
    }

    &__button {
        min-width: 80px;
    }
}
</style>
