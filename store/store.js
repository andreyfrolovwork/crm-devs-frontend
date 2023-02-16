import { defineStore } from "pinia"
import columns from "./columns.js"
import $url from "~/functions/fetch.js"

const apartsStore = defineStore("index-page", {
    state: () => ({
        area: [0, 200],
        areaRange: [0, 200],
        price: [0, 6000000],
        priceRange: [0, 6000000],
        floor: [0, 10],
        floorRange: [0, 10],
        rooms: [],
        roomsRange: [
            {
                value: 1,
                label: "1 комната",
            },
            {
                value: 2,
                label: "2 комнаты",
            },
            {
                value: 3,
                label: "3 комнаты",
            },
            {
                value: 4,
                label: "4 комнаты",
            },
        ],

        aparts: [],

        page: 1,
        rowsPerPage: 10,
        count: 220,

        sortBy: "rooms",
        orderBy: "asc",
        columns,
        tooltip: false,

        currentApart: {},
        modalVisible: false,
        bottomModal: false,
    }),
    getters: {
        b1: (state) => state.rooms.includes(1),
        b2: (state) => state.rooms.includes(2),
        b3: (state) => state.rooms.includes(3),
        b4: (state) => state.rooms.includes(4),
        roomsProps: (state) => {
            if (state.rooms.length === 0) {
                return [1, 2, 3, 4]
            } else {
                return state.rooms
            }
        },
    },
    actions: {
        showFeedbackModal() {
            this.modalVisible = true
        },
        saveCurrentApart(payload) {
            this.currentApart = payload
        },
        setRoom(room) {
            if (this.rooms.includes(room)) {
                this.rooms = this.rooms.filter((roomEl) => roomEl !== room)
            } else {
                this.rooms.push(room)
            }
            if (this.rooms.length === 0) {
                this.rooms = [1, 2, 3, 4]
            }
            this.load()
        },
        clearFilters(pay) {
            console.log(pay)
            this.sortBy = "rooms"
            this.orderBy = "asc"
            this.area = this.areaRange
            this.price = this.priceRange
            this.floor = this.floorRange
            this.rooms = [0, 1, 2, 3, 4]
            this.rowsPerPage = 10
            this.page = 1
            this.load()
        },
        setSortByCol(sortedColumn) {
            this.sortBy = sortedColumn
            if (this.orderBy === "asc") {
                this.orderBy = "desc"
            } else {
                this.orderBy = "asc"
            }
            this.load()
        },
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
                const body = {
                    rowsPerPage: this.rowsPerPage,
                    page: this.page,
                    orderBy: this.orderBy,
                    sortBy: this.sortBy,

                    area: this.area,
                    price: this.price,
                    floor: this.floor,
                    rooms: this.roomsProps,
                }
                console.log("load with params", body)
                const aparts = await $url("/aparts", body)
                console.log(aparts)
                console.log("result", aparts)
                this.aparts = aparts.rows
                this.areaRange = aparts.filters.areaRange
                this.priceRange = aparts.filters.priceRange
                this.floorRange = aparts.filters.floorRange
                this.count = aparts.filters.count
                this.maxCount = aparts.filters.maxCount
            } catch (e) {
                console.log("error")
            }
        },
    },
})

export default apartsStore
