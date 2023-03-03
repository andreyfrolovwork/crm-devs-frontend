import type { RouterConfig } from "@nuxt/schema"

export default <RouterConfig>{
    scrollBehavior(to, from) {
        if (to.hash) {
            const el = document.querySelector(to.hash)
            if (el) {
                el.scrollIntoView({
                    behavior: "smooth",
                })
            }
        } else {
            return {
                top: 0,
            }
        }
    },
}
