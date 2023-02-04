import { defineNuxtPlugin } from "#app"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive("animate-on-scroll", {
        mounted: (el, binding, vnode, prevVnode) => {
            function callback([entry]) {
                console.log("observe callback")
                if (entry && entry.isIntersecting) {
                    console.log("add class")
                    el.classList.add("animate")
                } else if (!entry.isIntersecting) {
                    el.classList.remove("animate")
                    console.log("remove class")
                }
            }
            vnode.observer = new IntersectionObserver(callback, {
                rootMargin: "5px",
                //threshold: 0.1,
            })
            vnode.observer.observe(el)
        },
        beforeUnmount: (el, binding, vnode, prevVnode) => {
            console.log("before unmount")
            vnode.observer.disconnect()
        },
    })
})
