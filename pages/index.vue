<template>
    <div class="mwr">
        <div class="mwr-content">
            <the-index-top id="about-project" />
            <the-gallery-advantages-only-photos v-animate-on-scroll />
            <div
                v-animate-on-scroll
                >
                <the-index-block
                    h1="Заголовок"
                    image="index-3.png"
                    reverse="true"
                    >
                    <template #h1text>
                        Парадные
                    </template>
                    <template #text>
                        Полноценные парадные с остекленными входными группами и лифтом с «нулевого» этажа, удовлетворяют
                        современным требованиям комфортной и доступной среды.
                    </template>
                </the-index-block>
            </div>
            <div
                v-animate-on-scroll
                >
                <the-index-block
                    h1="Заголовок"
                    image="chrome_2.png"
                    >
                    <template #h1text>
                        Комфортные планировки
                    </template>
                    <template #text>
                        Планировки разработаны с учетом современных потребностей, а панорамные окна в квартирах
                        визуально расширяют пространство и создают лучшее естественное освещение..
                    </template>
                </the-index-block>
            </div>
            <div
                v-animate-on-scroll
                >
                <the-index-block
                    h1="Заголовок"
                    image="index1.png"
                    reverse="true"
                    >
                    <template #h1text>
                        Закрытая территория и двор без машин
                    </template>
                    <template #text>
                        Концепция «Двор без машин» это стандарт детской и общественной безопасности. Развивающее и
                        разнообразное благоустройство для всех возрастов.
                    </template>
                </the-index-block>
            </div>
            <div
                v-animate-on-scroll
                >
                <the-index-block
                    h1="Заголовок"
                    image="index1.png"
                    >
                    <template #h1text>
                        Эко-тропа Кошкуль
                    </template>
                    <template #text>
                        Экотропа Кошкуль - первый в Миассе проект доступного экологического отдыха. Маршрут стал одним
                        из пяти победителей всероссийской акции "Путешествуй легко".
                    </template>
                </the-index-block>
            </div>
            <div
                v-animate-on-scroll
                >
                <the-index-block
                    h1="Заголовок"
                    image="index-2.png"
                    reverse="true"
                    >
                    <template #h1text>
                        ГЛЦ Солнечная Долина и озеро Тургояк
                    </template>
                    <template #text>
                        Все главные курортные места Южного Урала в 15 минутах езды из дома.
                    </template>
                </the-index-block>
            </div>
            <!--            <div
                            v-animate-on-scroll
                            >
                            <the-index-block
                                h1="Заголовок"
                                image="index1.png"
                                >
                                <template #h1text>
                                    Готовая отделка
                                </template>
                                <template #text>
                                    Квартиры сдаются с готовой отделкой — заселяться можно сразу после получения ключей. Возможность
                                    приобретения квартиры с мебелью позволяет визуализировать интерьер будущей квартиры: подобрать
                                    необходимую мебель и предметы интерьера.
                                </template>
                            </the-index-block>
                        </div>-->
            <div
                v-animate-on-scroll
                >
                <div class="howbuy m0auto1440">
                    <the-page-header>
                        Как купить?
                    </the-page-header>
                    <!--                    <div class="h1 howbuy_title">
                                            Как купить?
                                        </div>-->
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
            <the-page-header
                id="news-1"
                v-animate-on-scroll
                >
                Новости
            </the-page-header>
            <the-news v-animate-on-scroll />
            <the-page-header
                id="docs"
                v-animate-on-scroll
                >
                Документы
            </the-page-header>
            <the-docs-all v-animate-on-scroll />
            <the-page-header
                id="contacts"
                v-animate-on-scroll
                >
                Контакты
            </the-page-header>
            <the-contacts2 v-animate-on-scroll />
            <the-page-header
                id="get-position"
                v-animate-on-scroll
                >
                Расположение
            </the-page-header>

            <div
                v-animate-on-scroll
                class="mapblock"
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
    //padding-top: 60px;
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
        max-width: 1200px;
        margin: 0 auto;
    }
}

.howbuy_title {
    text-align: left;
    padding-left: 10px;
}
</style>
