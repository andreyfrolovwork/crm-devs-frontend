<template>
    <table>
        <tr>
            <th
                v-for="col in columns"
                :key="col"
                @click="setSortByCol(col.dataIndex)"
                >
                {{ col.title }}
                <div v-if="sortBy === col.dataIndex">
                    sort
                    <div v-if="orderBy === 'asc'">по возр</div>
                    <div v-if="orderBy === 'desc'">по убыв</div>
                </div>
            </th>
        </tr>
        <tr
            v-for="row in aparts"
            :key="row._id"
            >
            <th>{{ row.rooms }}</th>
            <th>{{ row.area }}</th>
            <th>{{ row.price }}</th>
            <th>{{ row.floor }}</th>
        </tr>
    </table>
    <a-pagination
        v-model:current="page"
        v-model:page-size="rowsPerPage"
        :total="count"
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
