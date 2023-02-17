<!-- <AppButton :secondary="true">Кнопка</AppButton> -->

<template>
    <router-link
        v-if="to"
        :to="to"
        class="button"
        :class="classes"
        >
        <slot />
    </router-link>

    <a
        v-else-if="href"
        :href="href"
        target="_blank"
        class="button"
        :class="classes"
        >
        <slot />
    </a>

    <div
        v-else-if="radio"
        class="button"
        :class="classes"
        >
        <slot />
    </div>

    <button
        v-else-if="withLogo"
        :type="type"
        class="button"
        :class="classes"
        >
<!--        <app-svg
            id="settings"
            width="14"
            height="12"
            style="margin-right: 10px"
            />-->
        <slot />
    </button>

    <button
        v-else-if="toSend"
        type="submit"
        class="button"
        :class="classes"
        >
        <slot />
    </button>

    <button
        v-else
        :type="type"
        class="button"
        :class="classes"
        >
        <slot />
    </button>
</template>

<script>
import { computed, reactive } from "vue"

export default {
    name: "AppButton",
    props: {
        to: {
            type: [String, Object],
            default: null
        },
        type: {
            type: String,
            default: null
        },
        href: {
            type: String,
            default: null
        },
        secondary: {
            type: Boolean,
            default: false
        },
        third: {
            type: Boolean,
            default: false
        },
        fourth: {
            type: Boolean,
            default: false
        },
        isSmall: {
            type: Boolean,
            default: false
        },
        radio: {
            type: Boolean,
            default: false
        },
        withLogo: {
            type: Boolean,
            default: false
        },
        toSend: {
            type: Boolean,
            default: false
        },
        sending: {
            type: Boolean,
            default: false
        },
        success: {
            type: Boolean,
            default: false
        }
    },

    setup(props) {
        props = reactive(props)
        return {
            classes: computed(() => ({
                _secondary: props.secondary,
                _third: props.third,
                _fourth: props.fourth,
                "_is-small": props.isSmall,
                "_with-logo": props.withLogo,
                _sending: props.sending,
                _success: props.success
            }))
        }
    }
}
</script>

<style lang="scss" scoped>
.button {
    $that: &;

    display: inline-flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    height: 56px;
    padding: 20px 12px;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
    color: white;
    background-color: #f4691b;
    border: none;
    text-decoration: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    min-width: 197px;

    &._is-small {
        min-width: auto;
        height: 51px;

        @include laptop {
            height: 40px;
            font-size: 12px;
        }
    }

    .mobile-actions & {
        min-width: 134px;
    }

    @include phone-s {
        min-width: 100%;
    }

    @include hover {
        background-color: $color_orange-70;
    }

    &:active {
        background-color: $color_orange-90;
    }

    &._secondary {
        color: $color_dark-90;
        background-color: $white;
        border: 1px solid $color_grey-15;

        @include hover {
            color: $white;
            background-color: $color_dark-90;
        }

        &:disabled {
            background-color: #b9b9b9;
        }

        &:active {
            background-color: $color_dark-70;

            .estate-card &,
            .new-estate-card & {
                background-color: $color_orange-70;
            }
        }

        .new-estate-card:hover & {
            background-color: $color_primary;
            border-color: $color_primary;
            color: $white;

            @include hover {
                background-color: $color_primary-dark;
            }
        }
    }

    &._secondary._is-active {
        background-color: $color_dark-90;
        color: $white;
    }

    &._third {
        height: 51px;
        min-width: 118px;
        background-color: rgba(35, 41, 48, 0.22);
        backdrop-filter: blur(10px);

        ._map-filter & {
            height: 40px;
            width: 100%;
            overflow: hidden;
            backdrop-filter: none;
        }

        @include hover {
            background-color: $color_dark-70;
        }
    }

    &._third._is-active {
        background-color: $color_primary;
    }

    &._with-logo {
        background-color: $color_dark-90;
        height: 40px;
    }

    &._fourth {
        background-color: $color_dark-90;
        height: 40px;

        &._white {
            background: #ffffff;
            color: #232930;
        }
    }

    &._sending {
        position: relative;
        background-color: $color_orange-70;
        font-size: 0;
        pointer-events: none;

        &:before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: transparent;
            border: 2px solid $white;
            border-right: 2px solid transparent;
            animation: loader 0.4s linear infinite;

            @keyframes loader {
                0% {
                    transform: translate(-50%, -50%) rotateZ(0);
                }
                100% {
                    transform: translate(-50%, -50%) rotateZ(360deg);
                }
            }
        }
    }

    &._success {
        pointer-events: none;
        background-color: #3bb873;
    }
}
</style>
