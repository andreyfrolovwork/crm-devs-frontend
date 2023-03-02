<template>
    <splide :options="options">
        <splide-slide>
            <div class="splide-image-wrapper">
                <the-index-block
                    h1="Заголовок"
                    image="index-4.png"
                    >
                    <template #h1text>
                        Закрытая территория и двор без машин
                    </template>
                    <template #text>
                        Концепция «Двор без машин» это стандарт детской и общественной безопасности. Развивающее и разнообразное благоустройство для всех возрастов
                    </template>
                </the-index-block>
            </div>
        </splide-slide>
        <splide-slide>
            <div class="splide-image-wrapper">
                <the-index-block
                    h1="Заголовок"
                    image="index-3.png"

                    >
                    <template #h1text>
                        Продуманные планировки и решения
                    </template>
                    <template #text>
                        Планировки разработаны с учетом современных потребностей, а панорамные окна в квартирах визуально расширяют пространство и создают лучшее естественное освещение.
                    </template>
                </the-index-block>
            </div>
        </splide-slide>
        <splide-slide>
            <div class="splide-image-wrapper">
                <the-index-block
                    h1="Заголовок"
                    image="chrome_2.png"
                    >
                    <template #h1text>
                        Парадные
                    </template>
                    <template #text>
                        Полноценные парадные с остекленными входными группами и лифтом с «нулевого» этажа, удовлетворяют современным требованиям комфортной и доступной среды.
                    </template>
                </the-index-block>
            </div>
        </splide-slide>
        <splide-slide>
            <div class="splide-image-wrapper">
                <the-index-block
                    h1="Заголовок"
                    image="chrome_2.png"
                    >
                    <template #h1text>
                        Экотропа
                    </template>
                    <template #text>
                        Экотропа Кошкуль - первый в Миассе проект доступного экологического отдыха. Маршрут стал одним из пяти победителей всероссийской акции "Путешествуй легко".
                    </template>
                </the-index-block>
            </div>
        </splide-slide>
        <splide-slide>
            <div class="splide-image-wrapper">
                <the-index-block
                    h1="Заголовок"
                    image="index1.png"

                    >
                    <template #h1text>
                        ГЛЦ Солнечная Долина и озеро Тургояк
                    </template>
                    <template #text>
                        Все главные курортные места Южного Урала в 15 минутах езды из дома.
                    </template>
                </the-index-block>
            </div>
        </splide-slide>

    </splide>
</template>

<script setup>
import { useRuntimeConfig } from "nuxt/app"

const options = {
    rewind: true,
    gap: "1rem",
    width: "100%",
    height: "100%"
}
const config = useRuntimeConfig()
</script>

<style scoped>
.gallery-item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.splide-image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>
