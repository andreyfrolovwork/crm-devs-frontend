import type { RouterConfig } from "@nuxt/schema"

export default <RouterConfig>{
    scrollBehavior(to, from) {
        if (to.query.anchor) {
            //debugger
            const el = document.querySelector(to.query.anchor)
            if (el) {
                el.scrollIntoView({
                    behavior: "smooth",
                })
            }
        } else {
            //debugger
            return {
                top: 0,
            }
        }
    },
}
