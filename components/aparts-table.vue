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
                            <the-filter-sort-icon :order-by="orderBy" />
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
                    {{ apart.area }}м   <sup>2</sup>
                </td>
                <td>
                    {{ apart.price.toLocaleString('ru') }} рублей
                </td>
                <td @click="goToApartment(apart)">
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
import { useRouter } from "nuxt/app"
import cookTitle from "../functions/cookTitle.js"

const astore = apartsStore()
const { aparts, columns, page, count, rowsPerPage, sortBy, orderBy } = storeToRefs(astore)
const { load,setSortByCol } = astore
const router = useRouter()
function goToApartment(apart){
    router.push({
        path:'/apartment',
        query:{
            _id:apart._id
        }
    })
}

</script>

<style lang="scss">
.table{
    table-layout: fixed;
    width: 100%;
    margin-bottom: 20px;
    .head {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
    }
    .sort-box {
        display: flex;
        align-items: center;
        margin: 0 3px;
    }
}

.table th {

    padding: 15px 0;
    //padding: 13px 5px;
    ///background: #efefef;
    border-bottom: 1px solid #A9A9A9;

    font-family: 'Montserrat',serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #000000;

    transition: color,text-shadow 0.15s ease-in-out;
    &:hover {
        color: #3d3d3d;
        text-shadow: 0px 4px 4px rgba(45, 35, 35, 0.4);
        cursor: pointer;
    }
}
.table td{
    padding: 2px 7px;
    min-height: 145px;
    height: 145px;

    //padding: 40px 7px;
    ///padding: 29px 7px;
    border-bottom: 1px solid #A9A9A9;
    text-align: center;

    font-family: 'Montserrat',serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #000000;

}
.table tbody tr{
    //background: #fff;
    transition: background-color 500ms ease-in-out;
    background-color: #ffffff;
    &:hover {
        background-color: #e3e3e3;

    }
}


</style>
