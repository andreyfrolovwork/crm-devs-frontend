<template>
    <div class="news">
        <div>
            <h2 class="st-h2">
                Старт продаж
            </h2>
            <p class="st-p">
                Открыто бронирование и продажи квартир. Сдача дома запланирована на 1 квартал 2024 года
            </p>
            <p class="st-p">
                «Дом на Кирова» это:
            </p>

            <ul class="st-ul">
                <li class="st-li">
                    10 этажный дом с 5 подъездами
                </li>
                <li class="st-li">
                    Возможность приобретения квартиры с отделкой
                </li>
                <li class="st-li">
                    Планировки под любые потребности от студий до четырехкомнатных квартир
                </li>
                <li class="st-li">
                    Стоимость на старте продаж от 1,6 млн. рублей
                </li>
                <li class="st-li">
                    Закрытая территория
                </li>
            </ul>


            <p class="st-p">
                Продажа квартир осуществляется через эскроу-счета. Проектная документация представлена на сайте
                наш.дом.рф и также в разделе документы на нашем сайте.
            </p>
            <p class="st-p">
                Подобрать подъезд, этаж и планировку вы можете в разделе «Подбор квартиры», а также в отделе продаж по
                телефону: <a
                    href="tel:+73512005305"
                    >
                    8 (351) 200-53-05
                </a>
            </p>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.news {
    display: flex;
    flex-flow: column nowrap;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
}

.st-h2 {
    font-family: 'Montserrat', serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;

    color: #000000;
    margin: 0 0 15px;
}

.st-p {
    font-family: 'Montserrat', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    color: #000000;
}

.st-ul {
    font-family: 'Montserrat', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    color: #000000;
    margin: 0 0 11px;
}

.st-li {
    font-family: 'Montserrat', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 36px;
    list-style: inside;
    color: #000000;
}


</style>