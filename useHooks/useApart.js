import { onBeforeMount, ref } from "vue"
import $url from "~/functions/fetch.js"

export function useApart(route) {
    const apart = ref("123")
    apart.value = "333"
    onBeforeMount(async () => {
        apart.value = "231"
        const result = await $url("/oneapart", {
            _id: route.query._id,
        })
            .then((r) => {
                r.price = r.price.toLocaleString("ru")
                return r
            })
            .catch(() => {
                message.error("Произошла ошибка на сервере, попробуйте обновить страницу!")
            })
        apart.value = result
        console.log(result)
    })
    return {
        apart,
    }
}
