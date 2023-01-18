import { defineStore } from "pinia"
/*
import {api} from 'boot/axios.js'
*/

const apartsStore = defineStore("index-page", {
    state: () => ({
        area: [0, 150],
        areaRange: [0, 150],
        price: [0, 3000000],
        priceRange: [0, 3000000],
        floor: [0, 10],
        floorRange: [0, 10],
        aparts: [],
        page: 1,
        rowsPerPage: 10,
        columns: [
            {
                name: "price",
                required: false,
                label: "price",
                align: "left",
                field: (row) => row.price,
                format: (val) => `${val}`,
                sortable: true,
            },
            {
                name: "floor",
                required: false,
                label: "floor",
                align: "left",
                field: (row) => row.floor,
                format: (val) => `${val}`,
                sortable: true,
            },
        ],
    }),
    actions: {
        setArea(payload) {
            console.log("setArea", payload)
            this.area = payload
        },
        setPrice(payload) {
            console.log("setPrice", payload)
            this.price.payload
        },
        setFloor(payload) {
            console.log("setfloor", payload)
            this.floor = payload
        },

        async load() {
            try {
                const props = {
                    method: "POST",
                    body: {
                        rowsPerPage: this.rowsPerPage,
                        page: this.page,
                        area: this.area,
                        price: this.price,
                        /*                        floor: this.floor,*/
                    },
                }
                console.log("load with params", props)
                const aparts = await $fetch("http://localhost:6200/api/aparts", props)
                console.log(aparts)
                console.log("result", aparts)
                this.aparts = aparts.rows
                /*                this.areaRange = aparts.filters.areaRange
                this.priceRange = aparts.filters.priceRange
                this.floorRange = aparts.filters.floorRange*/
            } catch (e) {
                debugger
            }
        },
    },
})

export default apartsStore
