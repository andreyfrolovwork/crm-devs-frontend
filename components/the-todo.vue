<template>
    <li
        class="Todo"
        :data-index="index"
        >
        <span class="Todo_text">{{ todo.text }}</span>
        <button @click="createObsInTodo">
            createObsInTodo
        </button>
        <transition name="fade">
            <span v-show="todo.seen">Seen</span>
        </transition>
    </li>
</template>

<script>
export default {
    name: "TheTodo",
    props: ["todo", "observer", "index"],
    mounted() {
 /*       console.log(this.$el)
        console.log(this)
        this.observer.observe(this.$el);*/
    },
    methods:{
        createObsInTodo(){
            console.log('createObsInTodo')
            this.observer.observe(this.$el);
        }
    }
}
</script>

<style lang="scss">
.Todo {
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    display: flex;
    padding: 32px;

    &:last-child {
        border-bottom: none;
    }

    &_text {
        flex: 1;
    }
}

.TodoList {
    box-shadow: inset 0px -16px 16px -16px rgba(0, 0, 0, 0.5);
    height: 256px;
    list-style-type: none;
    overflow: scroll;
    padding: 0;
    position: relative;

    &::after {
        background-color: #fff;
        bottom: calc(-100% + 16px);
        content: "";
        display: block;
        height: 16px;
        position: absolute;
        width: 100%;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s ease-out;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}


</style>
