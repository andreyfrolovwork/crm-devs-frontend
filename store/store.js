import { defineStore } from "pinia"

const apartsStore = defineStore("index-page", {
    state: () => ({
        area: [0, 200],
        areaRange: [0, 200],
        price: [0, 6000000],
        priceRange: [0, 6000000],
        floor: [0, 10],
        floorRange: [0, 10],
        aparts: [],
        page: 1,
        rowsPerPage: 10,
        columns: [
            {
                title: "Квартира",
                dataIndex: "room",
                key: "room",
            },
            {
                title: "Площадь",
                dataIndex: "area",
                key: "area",
            },
            {
                title: "Цена",
                dataIndex: "price",
                key: "price",
            },
            {
                title: "Этаж",
                dataIndex: "floor",
                key: "floor",
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
                        floor: this.floor,
                    },
                }
                console.log("load with params", props)
                const aparts = await $fetch("http://localhost:6200/api/aparts", props)
                console.log(aparts)
                console.log("result", aparts)
                this.aparts = aparts.rows
                this.areaRange = aparts.filters.areaRange
                this.priceRange = aparts.filters.priceRange
                this.floorRange = aparts.filters.floorRange
            } catch (e) {
                debugger
            }
        },
    },
})

export default apartsStore
