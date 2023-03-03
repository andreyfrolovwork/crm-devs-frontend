<template>
    <div class="docslinemain">
        <div
            v-for="(doc,i) in props.docs"
            :key="i"
            class="docsline"
            >
            <div class="doc">
                <div class="doc-svg">
                    <svg
                        width="33"
                        height="42"
                        viewBox="0 0 33 42"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M0 2C0 0.89543 0.895431 0 2 0H16.25C16.3881 0 16.5 0.111929 16.5 0.25V14.3333C16.5 15.4379 17.3954 16.3333 18.5 16.3333H32.75C32.8881 16.3333 33 16.4453 33 16.5833V40C33 41.1046 32.1046 42 31 42H2C0.895431 42 0 41.1046 0 40V2Z"
                            fill="#7E869E"
                            fill-opacity="0.25"
                            />
                        <path
                            d="M19 13V0.603553C19 0.380827 19.2693 0.269285 19.4268 0.426776L32.5732 13.5732C32.7307 13.7307 32.6192 14 32.3964 14H20C19.4477 14 19 13.5523 19 13Z"
                            fill="#222222"
                            />
                        <path
                            d="M8 25L22 25"
                            stroke="#222222"
                            stroke-linecap="round"
                            />
                        <path
                            d="M8 32L20 32"
                            stroke="#222222"
                            stroke-linecap="round"
                            />
                    </svg>
                </div>
                <div class="doc-textblock">
                    <div>
                        <a
                            class="doc-link"
                            :href="config.public.baseImagesUrl + 'file.pdf'"
                            > {{ doc.title }}</a>
                    </div>
                    <div class="doc-date">
                        pdf, {{ doc.updateDate }}
                    </div>
                </div>
            </div>
            <div />
        </div>
    </div>
</template>

<script setup>
import { useRuntimeConfig } from "nuxt/app"
const props = defineProps(['docs'])
const config = useRuntimeConfig()

</script>

<style lang="scss" scoped>
.docslinemain {
    display: flex;
    flex-flow: column;
    flex: 1;
}
.docsline {
    margin-right: 50px;
    display: flex;
    flex-flow: column;
    flex: 1;
}
.doc {
    display: flex;
    flex-flow: row nowrap;
    margin: 5px 10px 20px 10px;
    &-svg {

        margin-right: 15px;
    }

    &-textblock {

    }

    &-link {
        font-family: 'Montserrat', serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
    }

    &-date {
        font-family: 'Montserrat', serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        color: #868686;
    }

}
</style>