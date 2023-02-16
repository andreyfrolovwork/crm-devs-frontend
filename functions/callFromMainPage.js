import apartsStore from "~/store/store.js"
import { useRoute } from "nuxt/app"

export function callFromMainPage() {
    const route = useRoute
    const astore = apartsStore()
    const { showFeedbackModal } = astore
    if (route.path !== "/") {
        showFeedbackModal()
    } else {
        astore.currentApart = {
            title: "Нажатие кнопки с главной страницы",
        }
        showFeedbackModal()
    }
}
