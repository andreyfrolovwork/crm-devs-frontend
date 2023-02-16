import apartsStore from "~/store/store.js"

export function hideModal() {
    console.log("hide modal")
    const astore = apartsStore()
    astore.bottomModal = false
}
