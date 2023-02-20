import apartsStore from "~/store/store.js"

export function useModalWithTitle() {
    const astore = apartsStore()
    const { showFeedbackModal } = astore

    function showModalWithText(text) {
        astore.currentApart.additionalInfo = text
        showFeedbackModal()
        astore.currentApart.additionalInfo = ""
    }
    return {
        showModalWithText,
    }
}
