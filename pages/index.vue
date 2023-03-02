<template>
    <div class="mwr">
        <div class="mwr-content">
            <the-index-top />
            <the-page-header>
                Преимущества
            </the-page-header>
<!--            <div
                v-animate-on-scroll
                >
                <the-index-block
                    h1="Заголовок"
                    image="index-4.png"
                    >
                    &lt;!&ndash;                    <template #h1text>
                                            О проекте
                                        </template>&ndash;&gt;
                    <template #text>
                        Дом на Кирова расположен в пешей доступности от центра Миасса, при этом находясь в живописном и
                        насыщенном зеленью месте по пути следования экотропы Кошкуль, дорога на автомобиле до самых
                        востребованных курортов Южного Урала – ГЛЦ Солнечной Долины и озера Тургояк займет всего 15
                        минут. Жилой комплекс разработан с условиями современных требований: большой выбор
                        функциональных планировочных решений для семей с детьми, молодых людей, а также взрослых людей,
                        которым важно окружить себя природой и тишиной. Закрытая территория и двор без машин.
                    </template>
                </the-index-block>
            </div>-->

            <the-gallery-advantages v-animate-on-scroll />

            <div
                v-animate-on-scroll
                >
                <div class="howbuy m0auto1440 p100">
                    <div class="h1 howbuy_title">
                        Как купить?
                    </div>
                    <div class="howbuy-text">
                        Продажи в ведутся строго по договорам долевого участия (ДДУ),
                        согласно действующему законодательству РФ (№ 214‑ФЗ)
                    </div>
                    <the-tabs :tabs="['Ипотека','Рассрочка'/*,'Материнский капитал','100% оплата','Trade-in'*/]">
                        <template #t0>
                            <the-credit />
                        </template>
                        <template #t1>
                            Текст про рассрочку
                        </template>
                        <!--                <template #t2>
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
                                        </template>-->
                    </the-tabs>
                </div>
            </div>
            <div

                class="mapblock p100"
                >
                <div class="mapblock-child m0auto">
                    <MapDetailYandex
                        :card-point="[55.044555,60.082794]"
                        :card-point-hint="'Дом на кирова'"
                        :card-point-balloon="'Дом на кирова'"
                        />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRuntimeConfig } from "nuxt/app"

const config = useRuntimeConfig()


</script>

<style lang="scss">
.mwr {
    background-color: $background-color;
    padding-top: 60px;
    padding-bottom: 100px;
    height: 100vh;
    overflow: scroll;

    &-content {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-content: center;
    }
}

.mapblock {
    /*    display: flex;
        justify-content: center;*/
    &-child {
        max-width: 1440px;
        margin: 0 auto;
    }
}
.howbuy_title {
    text-align: left;
}
</style>
