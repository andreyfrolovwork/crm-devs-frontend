<template>
    <div class="wrapper">
        <div class="wrapper__content">
            <the-tabs :tabs="['Ипотека','Рассрочка','Материнский капитал','100% оплата','Trade-in']">
                <template #t0>
                    <the-credit />
                </template>
                <template #t1>
                    t1
                </template>
                <template #t2>
                    t2
                </template>

                <template #t3>
                    t3
                </template>
                <template #t4>
                    t4
                </template>
                <template #t5>
                    t5
                </template>
            </the-tabs>
        </div>
    </div>
</template>

<script setup>
import { useRuntimeConfig } from "nuxt/app"

const config = useRuntimeConfig()
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    &__content {
        padding: 90px;
        max-width: 1200px;
        display: flex;
        justify-content: center;
    }
}
</style>
