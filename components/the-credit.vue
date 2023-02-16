<template>
    <div>
        <ClientOnly
            fallback-tag="div"
            placeholder="Loading..."
            >
            <div class="credit-filter">
                <div class="credit-filter-col">
                    <div class="credit-filter-title">
                        Стоимость квартиры, руб
                    </div>
                    <div class="credit-filter-price">
                        {{ price.toLocaleString("ru") }}
                    </div>
                    <the-button @click="showFeedbackModal">
                        Получить одобрение
                    </the-button>
                </div>
                <div class="credit-filter-col">
                    <div class="credit-filter-title">
                        Первый взнос, руб
                    </div>
                    <div class="credit-filter-values">
                        <div class="credit-filter-values-value">
                            {{ vznos.toLocaleString("ru") }}
                        </div>
                        <div class="credit-filter-values-value">
                            {{ Math.round(((vznos / price) * 100)).toLocaleString("ru") }} %
                        </div>
                    </div>
                    <div class="credit-filter-slider">
                        <a-slider
                            v-model:value="vznos"
                            :included="true"
                            :min="price * 0.15"
                            :max="price"
                            @after-change="calcTable"
                            />
                    </div>
                </div>
                <div
                    class="credit-filter-col"
                    :style="{borderBottom:'none', paddingBottom:0,marginBottom:0}"
                    >
                    <div class="credit-filter-title">
                        Срок ипотеки, лет
                    </div>
                    <div class="credit-filter-values">
                        <div class="credit-filter-values-value">
                            {{ srok.toLocaleString("ru") }}
                        </div>
                    </div>
                    <div class="credit-filter-slider">
                        <a-slider
                            v-model:value="srok"
                            :included="true"
                            :min="1"
                            :max="30"
                            @after-change="calcTable"
                            />
                    </div>
                </div>
            </div>
        </ClientOnly>
        <div class="credit-sum">
            Сумма ипотеки {{ (price - vznos).toLocaleString("ru") }} руб.
        </div>
        <!--        <table class="table">
                    <thead>
                        <tr>
                            <th>Банк</th>
                            <th>Ставка</th>
                            <th>Первый взнос</th>
                            <th>Срок</th>
                            <th>Платёж</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="(bank,i) in table"
                            :key="bank.num"
                            >
                            <td class="bank-col">
                                <img
                                    class="bank-svg"
                                    :src="config.public.baseImagesUrl +(i+1) + '_b.svg'"
                                    alt="bank"
                                    >
                                {{ bank.bank }}
                            </td>
                            <td>{{ bank.percent }}</td>
                            <td>{{ bank.fee }}</td>
                            <td>{{ bank.srok }}</td>
                            <td>    <span class="bold">{{ bank.payment }} ₽</span></td>
                        </tr>
                    </tbody>
                </table>-->
    </div>
</template>

<script setup>
import { useRuntimeConfig } from "nuxt/app"
import apartsStore from "~/store/store.js"
import creditTable from "~/functions/creditTable.js"
import { ref } from "vue"

const astore = apartsStore()
const { showFeedbackModal } = astore
const price = 1500000
const config = useRuntimeConfig()
const vznos = ref(0)
const srok = ref(1)
const table = ref([])
table.value = creditTable

function calcTable() {
    const ntable = [...table.value]
    const result = ntable.map((el) => {
        const paymentMonths = srok.value * 12
        const payment = calc(paymentMonths, price, Number(el.percent), vznos.value)
        console.log(payment)
        el.payment = payment
        return el
    })
    table.value = result
}

function calc(srok, summ, percent, vznos) {
    summ = summ - vznos
    let ret = 0,
        itog = 0,
        monthPer = 0
    for (let i = 1; i <= srok; i++) {
        monthPer = summ * ((percent / 12) / 100)
        itog = Math.round(monthPer * 100) / 100
        ret = ret + itog
    }
    ret = Math.round(ret + summ)
    return Math.round(ret / srok)
}

</script>

<style lang="scss">
.credit-filter {
    display: flex;
    flex-direction: row;
    padding: 30px;
    background: aliceblue;
    margin: 20px 0 20px 0px;

    @include phone {
        flex-flow: column;
        padding: 10px;
    }

    &-col {
        display: flex;
        flex-flow: column;
        flex: 1;
        margin: 0 10px;
        @include phone {
            padding-bottom: 18px;
            border-bottom: 0.4px solid #c9c9c9;
            margin-bottom: 18px;
        }
    }

    &-title {
        margin: 0px 0 10px 0;
        font-size: 13px;
        line-height: 1.4;
        font-family: 'Montserrat', serif;
        font-style: normal;
        font-weight: 400;

    }

    &-price {
        margin: 0px 0 12px 0;
        line-height: 1.4;
        font-family: 'Montserrat', serif;
        font-style: normal;
        font-size: 27px;
        font-weight: 500;
    }

    &-values {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;

        &-value {
            ///margin: 12px 0;
            line-height: 1.4;
            font-family: "Montserrat", serif;
            font-style: normal;
            font-size: 27px;
            font-weight: 500;
        }
    }

    &-slider {
        margin-top: 16px;
    }
}

.credit-sum {

    font-family: "Montserrat", serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 37px;
    text-align: left;
    color: #000000;
    margin: 4px 0 4px 0;
}

.bank-svg {
    width: 115px;
    height: 43px;
}

.table {
    .bank-col {
        display: flex;
        flex-flow: column;
        align-items: flex-start;
        color: #a5a5a5;
        font-size: 12px;
        text-align: left;
        padding: 20px;
    }

}

.ant-slider-handle {
    background-color: $base_green;
    color: $base_green;
    border: solid 2px $base_green;
    //border: solid 10px #2fa439;
}

.ant-slider-track {
    background-color: $base_green;
}

.ant-slider-rail {
    background-color: #c9c9c9;
}
</style>
