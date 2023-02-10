import { defineStore } from "pinia"
import $url from "~/functions/fetch.js"

const adminstore = defineStore("admin-store", {
    state: () => ({
        area: [0, 200],
    }),

    actions: {
        async load() {
            try {
                const props = {
                    method: "POST",
                    body: {
                        rowsPerPage: this.rowsPerPage,
                        page: this.page,
                        orderBy: this.orderBy,
                        sortBy: this.sortBy,

                        area: this.area,
                        price: this.price,
                        floor: this.floor,
                        rooms: this.rooms,
                    },
                }
                console.log("load with params", props)
                const aparts = await $url("/aparts", props.body)
                console.log(aparts)
                console.log("result", aparts)
                this.aparts = aparts.rows
                this.areaRange = aparts.filters.areaRange
                this.priceRange = aparts.filters.priceRange
                this.floorRange = aparts.filters.floorRange
                this.count = aparts.filters.count
                this.maxCount = aparts.filters.maxCount
            } catch (e) {
                debugger
            }
        },
    },
})

export default adminstore
