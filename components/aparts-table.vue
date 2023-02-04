<template>
    <table class="table">
        <thead>
            <tr>
                <th>
                    Планировка
                </th>
                <th
                    v-for="col in columns"
                    :key="col"
                    @click="setSortByCol(col.dataIndex)"
                    >
                    <div class="head">
                        <div class="sort-box">
                            {{ col.title }}
                        </div>
                        <div
                            v-show="sortBy === col.dataIndex"
                            class="sort-box"
                            >
                            <icon-filter-sort :order-by="orderBy" />
                        </div>
                    </div>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="apart in aparts"
                :key="apart._id"
                >
                <td>
                    <a-image
                        src="http://localhost:6200/images/chrome_1.png"
                        />
                <!--                    <the-gallery />-->
                </td>
                <td @click="goToApartment(apart)">
                    {{ cookTitle(apart) }}
                </td>
                <td @click="goToApartment(apart)">
                    <span class="bold">{{ apart.area }}</span> м<sup>2</sup>
                </td>
                <td>
                    <span class="bold">{{ apart.price.toLocaleString("ru") }}</span> рублей
                </td>
                <td @click="goToApartment(apart)">
                    <span class="bold">{{ apart.floor }}</span> этаж
                </td>
            </tr>
        </tbody>
    </table>
    <a-pagination
        v-model:current="page"
        v-model:page-size="rowsPerPage"
        :total="count"
        size="small"
        @change="load"
        />
</template>
<script setup>
import apartsStore from "~/store/store.js"
import { storeToRefs } from "pinia"
import { useRouter } from "nuxt/app"
import cookTitle from "../functions/cookTitle.js"

const astore = apartsStore()
const { aparts, columns, page, count, rowsPerPage, sortBy, orderBy } = storeToRefs(astore)
const { load, setSortByCol } = astore
const router = useRouter()

function goToApartment(apart) {
    router.push({
        path: "/apartment",
        query: {
            _id: apart._id
        }
    })
}

</script>

<style lang="scss">


</style>
