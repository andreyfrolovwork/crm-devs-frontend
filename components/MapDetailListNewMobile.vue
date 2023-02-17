<template>
    <section>
        <section class="mobile-buttons">
            <ul class="map-detail-list _mobile">
                <li class="map-detail-list__item">
                    <AppButton
                        ref="b1"
                        :secondary="true"
                        class="map-detail-list__button"
                        @click="search('Банки', 'b1')"
                        >
<!--                        <app-svg
                            id="rub"
                            width="9"
                            height="12"
                            />-->
                        <span class="map-detail-list__option-text"> Банки</span>
                    </AppButton>
                </li>
                <li class="map-detail-list__item">
                    <AppButton
                        ref="b2"
                        :secondary="true"
                        class="map-detail-list__button"
                        @click="search('Детские сады', 'b2')"
                        >
<!--                        <app-svg
                            id="kindegarden"
                            width="15"
                            height="13"
                            />-->
                        <span class="map-detail-list__option-text">Детские сады </span>
                    </AppButton>
                </li>
                <li class="map-detail-list__item">
                    <AppButton
                        ref="b3"
                        :secondary="true"
                        class="map-detail-list__button"
                        @click="search('Школы', 'b3')"
                        >
<!--                        <app-svg
                            id="school"
                            width="16"
                            height="12"
                            />-->
                        <span class="map-detail-list__option-text">Школы</span>
                    </AppButton>
                </li>
                <li class="map-detail-list__item">
                    <AppButton
                        ref="b4"
                        :secondary="true"
                        class="map-detail-list__button"
                        @click="search('Аптеки', 'b4')"
                        >
<!--                        <app-svg
                            id="med"
                            width="10"
                            height="10"
                            />-->
                        <span class="map-detail-list__option-text">Аптеки</span>
                    </AppButton>
                </li>
                <li class="map-detail-list__item">
                    <AppButton
                        ref="b5"
                        :secondary="true"
                        class="map-detail-list__button"
                        @click="search('Поликлиники', 'b5')"
                        >
<!--                        <app-svg
                            id="pol"
                            width="16"
                            height="16"
                            />-->
                        <span class="map-detail-list__option-text">Поликлиники</span>
                    </AppButton>
                </li>
                <li class="map-detail-list__item">
                    <AppButton
                        ref="b6"
                        :secondary="true"
                        class="map-detail-list__button"
                        @click="search('Магазины', 'b6')"
                        >
<!--                        <app-svg
                            id="shop"
                            width="14"
                            height="14"
                            />-->
                        <span class="map-detail-list__option-text">Магазины</span>
                    </AppButton>
                </li>
                <li class="map-detail-list__item">
                    <AppButton
                        :secondary="true"
                        class="map-detail-list__button hide"
                        >
<!--                        <app-svg
                            id="rub"
                            width="9"
                            height="12"
                            />-->
                        <span class="map-detail-list__option-text">test test test test </span>
                    </AppButton>
                </li>
            </ul>
        </section>
    </section>
</template>

<script>
/* eslint-disable*/
/*import FormCheck from "./form/FormCheck.vue"
import AppButton from "./ui/AppButton.vue"*/

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
    methods: {
        search(query, ref) {
            this.$emit("map-set", query)
            let buttonClass = this.$refs[ref].$el.classList.contains("_is-active")
            if (buttonClass) {
                this.$refs[ref].$el.classList.remove("_is-active")
            } else {
                this.$refs[ref].$el.classList.add("_is-active")
            }
        }
    },

    mounted() {
    }
}
</script>

<style lang="scss" scoped>
.hide {
    opacity: 0;
}

.mobile-buttons {
    z-index: 20;
    position: absolute;
    background-color: transparent;
    bottom: 20px;
}

.map-detail-list {
    $that: &;

    margin-left: 0 !important;
    max-width: 248px;
    padding: 0 16px 15px 40px;
    background-color: $white;
    box-shadow: 0px 15px 64px rgba(35, 41, 48, 0.04), 0px 8px 16px rgba(35, 41, 48, 0.06),
    0px 6px 8px rgba(35, 41, 48, 0.07);

    @include phone {
        padding-left: 16px;
    }

    &._mobile {
        @media (min-width: 1280px) {
            display: none;
        }

        background-color: transparent;
        box-shadow: none;
        max-width: 100%;
        display: flex;
        overflow: auto;

        &::-webkit-scrollbar {
            width: 4px; // для вертикального скролла
            height: 0; // для горизонтального скролла
        }

        &::-webkit-scrollbar-track {
            opacity: 0;
        }

        &::-webkit-scrollbar-thumb {
            opacity: 0;
        }
    }

    &__item {
        .button {
            @include phone {
                padding: 14px 8px;
                min-width: auto;
                height: auto;
                font-size: 12px;
                text-transform: none;
            }

            &._is-active {
                background-color: $white;
                color: $color_primary;
            }
        }

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

        @include phone {
            padding-left: 10px;
        }
    }

    &__button {
        min-width: 80px;
    }
}
</style>
