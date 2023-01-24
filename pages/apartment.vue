<template>
    <div class="wrap">
        {{ route.query }}
        <a-image
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
        <!--        <div class="carousel-wrap">

            <a-carousel arrows>
                <template #prevArrow>
                    <div
                        class="custom-slick-arrow"
                        style="left: 10px; zindex: 1"
                        >
                        <left-circle-outlined />
                    </div>
                </template>
                <template #nextArrow>
                    <div
                        class="custom-slick-arrow"
                        style="right: 10px"
                        >
                        <right-circle-outlined />
                    </div>
                </template>
                <div>
                    <a-image

                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                </div>
                <div>
                    <a-image

                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                </div>
                <div>
                    <a-image

                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                </div>
                <div>
                    <a-image

                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                </div>
            </a-carousel>
        </div>-->
    </div>
</template>
<script setup>
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import { useRoute } from "nuxt/app"
const route = useRoute()
</script>
<style lang="scss" scoped>
/* For demo */

/*.carousel-wrap{
    width: 400px;
    height: 400px;
}
.wrap {
    padding: 40px;
}
.ant-carousel :deep(.slick-slide) {
    text-align: center;
    //width: 500px;
    //height: 500px;
    //line-height: 500px;
    background: #364d79;
    overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31, 45, 61, 0.11);
    opacity: 0.3;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
    display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
    opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
    color: #fff;
}*/
</style>
