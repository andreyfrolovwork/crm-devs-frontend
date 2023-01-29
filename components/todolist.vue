<template>
    <ul class="TodoList">
        <button @click="createObs">
            create observer
        </button>
        <div>
            <the-todo
                v-for="(todo, i) in todos"
                :todo="todo"
                :observer="observer"
                :index="i"
                />
        </div>
    </ul>
</template>

<script>
export default {
    name: "Todolist",
       data() {
        return {
            todos: [
                { seen: false, text: "Add app skeleton" },
                { seen: false, text: "Add to-do component" },
                { seen: false, text: "Add to-do list component" },
                { seen: false, text: "Style the components" },
                { seen: false, text: "Add the IntersectionObserver" },
                { seen: false, text: "Mark to-do's as seen" }
            ],
            observer: null,
        };
    },
    mounted() {
        console.log('create observer mounted')
        this.observer = new IntersectionObserver(
            this.onElementObserved,
            {
                root: this.$el,
                threshold: 1.0,
            }
        );
    },
    beforeUnmount() {
        this.observer.disconnect();
    },
    methods: {
        createObs(){
            console.log('create observer createObs')
            this.observer = new IntersectionObserver(
                this.onElementObserved,
                {
                    root: this.$el,
                    threshold: 1.0,
                }
            );
        },
        onElementObserved(entries) {
            entries.forEach(({ target, isIntersecting}) => {
                if (!isIntersecting) {
                    return;
                }

                this.observer.unobserve(target);

                setTimeout(() => {
                    const i = target.getAttribute("data-index");
                    this.todos[i].seen = true;
                }, 1000)
            });
        }
    }
}
</script>

<style scoped>

</style>
