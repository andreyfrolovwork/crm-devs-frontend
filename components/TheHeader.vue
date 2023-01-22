<template>
    <div class="header">
        <div
            v-for="header in headers"
            :key="header.name"
            class="header-item"
            >
            <router-link :to="header.to">
                {{ header.name }}
            </router-link>
        </div>
        <feedback-button />
    </div>
</template>

<script>

export default {
    name: "TheHeader",
    components: {},

    data() {
        return {
            headers: [
                {
                    name: "3д карта",
                    to: "/"
                },
                {
                    name: "Квартиры",
                    to: "/apartments"
                },
                {
                    name: "sections",
                    to: {
                        path:"/sections",
                        query:{
                            section:1
                        }
                    }
                },
                {
                    name: "admin",
                    to: "/admin"
                },
            ]
        }
    }
}
</script>

<style scoped>
.header {
    position: absolute;
    display: flex;
    flex-flow: row;
    z-index: 99;
}

.header-item {
    /*  background-color: #4CAF50; !* Green *!*/
    border: none;
    color: #000000;
    padding: 6px 18px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
</style>
