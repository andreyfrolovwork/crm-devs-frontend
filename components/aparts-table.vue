<template>
    <table class="table-ex">
        <thead>
            <tr>
                <th
                    v-for="col in columns"
                    :key="col"
                    class="table-ex-th"
                    @click="setSortByCol(col.dataIndex)"
                    >
                    {{ col.title }}
                    <div class="sort-box">
                        <div v-show="sortBy === col.dataIndex">
                            <div v-show="orderBy === 'asc'">
                                по возр
                            </div>
                            <div v-show="orderBy === 'desc'">
                                по убыв
                            </div>
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
                <td class="table-ex-td">
                    {{ apart.rooms }} к квартира
                </td>
                <td class="table-ex-td">
                    {{ apart.area }}м
                </td>
                <td class="table-ex-td">
                    {{ apart.price }} рублей
                </td>
                <td class="table-ex-td">
                    {{ apart.floor }} этаж
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

const astore = apartsStore()
const { aparts, columns, page, count, rowsPerPage, sortBy, orderBy } = storeToRefs(astore)
const { load,setSortByCol } = astore

</script>

<style lang="scss">
.table-ex {
    border-collapse: collapse;
    font-family: Tahoma, Geneva, sans-serif;
}
.table-ex-td {
    padding: 15px;
}
.table-ex-th {
    background-color: #54585d;
    color: #ffffff;
    font-weight: bold;
    font-size: 13px;
    border: 1px solid #54585d;
}
.sort-box {
    height: 30px;
}
</style>
