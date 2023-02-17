<!-- <FormCheck> Я согласен на обработку персональных данных </FormCheck> -->

<template>
    <label
        ref="formCheck"
        class="form-check"
        :class="classes"
        >
        <input
            v-if="digital"
            v-bind="$attrs"
            class="form-check__input"
            type="checkbox"
            :name="name"
            :checked="checked"
            @change="$emit('update:modelValue', $event.target.checked ? 1 : 0)"
            >
        <input
            v-else
            v-bind="$attrs"
            class="form-check__input"
            type="checkbox"
            :name="name"
            :checked="checked"
            :value="value"
            @change="handleChange"
            >
        <div class="form-check__box">
            <div class="form-check__in-box" />
        </div>
        <div class="form-check__text">
            <slot />
        </div>
    </label>
</template>

<script>
import { computed, reactive } from "vue"

export default {
    name: "FormCheck",
    props: {
        modelValue: {
            type: [String, Boolean, Number],
            default: null
        },
        name: {
            type: String,
            default: "checkName"
        },
        checked: {
            type: Boolean,
            default: false
        },
        value: {
            type: [String, Boolean, Number],
            default: null
        },
        isDark: {
            type: [String, Boolean],
            default: false
        },
        isReverse: {
            type: Boolean,
            default: false
        },
        digital: {
            type: Boolean,
            default: false
        }
    },

    emits: ["check", "update:modelValue"],

    setup(props) {
        props = reactive(props)

        return {
            classes: computed(() => ({
                "_is-dark": props.isDark,
                "_is-reverse": props.isReverse
            }))
        }
    },

    methods: {
        handleChange($event) {
            this.$refs.formCheck.classList.remove("_error")
            this.$emit("update:modelValue", $event.target.checked)
        }
    }
}
</script>

<style lang="scss" scoped>
.form-check {
    $that: &;

    position: relative;
    display: inline-flex;
    justify-content: flex-start;
    align-items: flex-start;
    min-height: 19px;
    user-select: none;
    cursor: pointer;

    &._is-reverse {
        flex-direction: row-reverse;
    }

    &__input {
        @include visually-hidden;

        &:checked {
            & + #{$that}__box {
                border-color: #f4691b;

                #{$that}__in-box {
                    opacity: 1;
                    background-color: #f4691b;
                }
            }
        }
    }

    &__box {
        position: relative;
        flex: none;
        display: flex;
        width: 24px;
        height: 24px;
        margin-right: 12px;
        border: 1px solid;
        transition: border-color 0.15s ease;

        ._is-dark & {
            color: $white;
        }

        ._is-reverse & {
            margin-right: 0;
            margin-left: auto;
        }

        @include phone {
            width: 16px;
            height: 16px;
        }
    }

    &__in-box {
        width: 12px;
        height: 12px;
        margin: auto;
        opacity: 0;
        background: #f4691b;
        transition: opacity 0.25s 0.1s ease, background-color 0.25s 0.1s ease;

        @include phone {
            width: 8px;
            height: 8px;
        }
    }

    &__text {
        margin-top: 2px;
        margin-right: 10px;
        font-size: 14px;
        line-height: 20px;
        white-space: nowrap;

        ._is-reverse & {
            display: flex;
            align-items: center;
        }

        ._filter-head & {
            font-size: 16px;
        }

        ._is-dark & {
            color: $white;
        }

        ._error & {
            color: $color_primary;
        }

        @include phone {
            margin-top: -1px;
        }
    }
}
</style>
