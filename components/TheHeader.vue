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
    </div>
</template>

<script>

export default {
    name: "TheHeader",
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
                    name: "test",
                    to: "/test"
                },
                {
                    name: "floors",
                    to: "/floors"
                },
                {
                    name: "load",
                    to: "/load"
                }
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
