<script>
import TodoItem from '../todo-item/TodoItem.vue';

export default {
    name: 'ListTodo',
    props: {
        todoItems: Array
    },
    methods: {
        deleteTodo(id) {
            // pass to parent
            this.$emit('deleteTodo', id);   
        },
        descriptionChanged(data) {
            // pass to parent
            this.$emit('descriptionChanged', data);
        },
        changeCompleted(data) {
            // pass to parent
            this.$emit('changeCompleted', data);
        }
    },
    components: { 
        TodoItem 
    },
    emits: [ 'deleteTodo', 'descriptionChanged', 'changeCompleted' ]
}
</script>

<template>
    <ul>
        <li v-for="item in todoItems">
         <TodoItem :data="item" @deleteTodo="deleteTodo" @descriptionChanged="descriptionChanged" @changeCompleted="changeCompleted" />
        </li>
    </ul>
</template>

<style scoped>
    ul {
        margin: 0;
        padding: 0;
    }

    li {
        list-style-type: none;
        margin: 0.5em 0em;
        padding: 1em;
        border-radius: 3px; 
    }

    li:nth-child(even) {
        background-color: rgba(0, 0, 0, 0.05);
    }

    li a {
        cursor: pointer;
    }
</style>
