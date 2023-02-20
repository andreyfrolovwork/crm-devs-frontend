import { defineStore } from "pinia"

const testStore = defineStore("test-store", {
    state: () => ({
        rangeValue: [10, 200],
    }),

    actions: {
        async action1() {
            console.log("action 1")
        },
    },
})

export default testStore
