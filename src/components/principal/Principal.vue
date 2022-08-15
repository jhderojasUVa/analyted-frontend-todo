<script>
import { BackendAPI } from '../../api'
import ListTodo from '../list-todos/ListTodo.vue';
import AddTodo from '../add-todo/Add-todo.vue';

export default {
    name: 'Application',
    data() {
        return {
            todoItems: [],
            success: false,
            loading: true,
        }
    },
    mounted() {
        // use the method provided!
        this.reloadTodos();
    },
    methods: {
        // Because more than one can be using this
        // and we are not using websockets (TODO for you, add it)
        // we need to reload after every call
        async reloadTodos() {
            try {
                this.todoItems = (await BackendAPI.getAllTodo()).data?.data?.rows;
                this.success = true;
                this.loading = false;
            } catch (err) {
                console.error(err);
                this.success = false;
                this.loading = false;
            }
        },
        // responsible of removing a todo
        async deleteTodo(id) {
            try {
                this.success = (await BackendAPI.removeTodo(id)).sucess;
            } catch (err) {
                console.error(err);
                this.success = false;
            }
            // reload
            this.reloadTodos();
        },
        // responsible of adding a todo
        async addTodo(description) {
            try {
                this.success = (await BackendAPI.addNewTodo(description)).sucess;
            } catch (err) {
                console.error(err.error);
                this.success = false;
            }
            // reload
            this.reloadTodos();
        },
        // change a todo
        async changeTodo(data) {
            try {
                this.success = (await BackendAPI.changeTodo(data)).sucess;
            } catch (err) {
                console.error(err.error);
                this.success = false;
            }
            // reload
            this.reloadTodos();
        }
    },
    components: { ListTodo, AddTodo, AddTodo }
}
</script>

<template>
    <h2>Current ToDos</h2>
    <div v-if="loading">
        <p class="loading">Loading data... please wait...</p>
    </div>
    <div v-else>
        <p v-if="!success" class="error">Sorry. There was an error!</p>
        <p v-else>
            <AddTodo @addTodo="addTodo"/>
            <ListTodo :todoItems="todoItems" @deleteTodo="deleteTodo" @descriptionChanged="changeTodo"/>
        </p>
    </div>
</template>

<style scoped>
    h2 {
        margin-bottom: 2em;
        text-align: center;
    }
    .loading {
        padding: 1em;
        margin: 1em 0em;
        border-radius: 5px; 
        background-color: rgba(10,150,10,0.5);
        color: white;

        text-align: center;
    }
    .error {
        padding: 1em;
        margin: 1em 0em;
        border-radius: 5px; 
        background-color: red;
        color: white;

        text-align: center;
    }
</style>
