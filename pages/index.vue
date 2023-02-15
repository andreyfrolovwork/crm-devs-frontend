<template>
    <div class="mwr">
        <div class="mwr-content">
            <the-index-top />
            <div
                v-animate-on-scroll
                >
                <the-index-block
                    h1="Заголовок"
                    image="index-4.png"
                    >
                    <template #h1text>
                        О проекте
                    </template>
                    <template #text>
                        Дом на Кирова расположен в пешей доступности от центра Миасса, при этом находясь в живописном и
                        насыщенном зеленью месте по пути следования экотропы Кошкуль, дорога на автомобиле до самых
                        востребованных курортов Южного Урала – ГЛЦ Солнечной Долины и озера Тургояк займет всего 15
                        минут. Жилой комплекс разработан с условиями современных требований: большой выбор
                        функциональных планировочных решений для семей с детьми, молодых людей, а также взрослых людей,
                        которым важно окружить себя природой и тишиной. Закрытая территория и двор без машин.
                    </template>
                </the-index-block>
            </div>
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
                        Текст про парадные. Текст про парадные. Текст про парадные. Текст про парадные. Текст про
                        парадные. Текст про парадные. Текст про парадные. Текст про парадные. Текст про парадные. Текст
                        про парадные. Текст про парадные. Текст про парадные. Текст про парадные. Текст про парадные.
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
                        В "Доме на Кирова" большое количество функциональных планировок, которые прорабатывались с
                        учетом современных потребностей: от компактных студий до квартир для больших семей — с
                        кухней-гостиной, несколькими спальнями и двумя санузлами.
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
                        На нашем сайте вы можете подобрать жильё с закрытой охраняемой территорией. Большая база
                        планировок позволит вам найти квартиру с лучшими параметрами, а удобный поиск позволит быстро
                        найти наилучший вариант по выгодной цене.
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
                        из пяти победителей всероссийской акции "Путешествуй легко". И выиграл грант компании Ен+,
                        благодаря которому на тропе появились новые арт-объекты.
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
                        Горнолыжный курорт и озеро Тургояк
                    </template>
                    <template #text>
                        Курорт, расположенный в одном из самых живописных уголков Уральского горного массива на
                        пересечении Европы и Азии, обладает развитой современной инфраструктурой, стремящейся к лучшим
                        мировым образцам индустрии туризма.
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
                        Готовая отделка
                    </template>
                    <template #text>
                        Квартиры сдаются с готовой отделкой — заселяться можно сразу после получения ключей. Возможность
                        приобретения квартиры с мебелью позволяет визуализировать интерьер будущей квартиры: подобрать
                        необходимую мебель и предметы интерьера.
                    </template>
                </the-index-block>
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
    height: 100vh;
    overflow: scroll;

    &-content {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-content: center;
    }
}

.bl {
    width: 100%;
    height: 1000px;
    background-color: #00A0E3;
}

.bl2 {
    width: 100%;
    height: 1000px;
    background-color: #4ce300;
}
</style>
