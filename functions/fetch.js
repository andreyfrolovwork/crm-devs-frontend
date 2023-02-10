import { useRuntimeConfig } from "nuxt/app"
function $url(additionalRules, body) {
    const config = useRuntimeConfig()
    return $fetch(additionalRules, {
        baseURL: config.public.apiUrl,
        method: "POST",
        body,
    })
}
export default $url
