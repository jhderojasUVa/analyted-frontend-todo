<script>
import * as BackendAPI from '../../api'

export default {
    data() {
        return {
            todoItems: [],
            success: false,
        }
    },

    async mounted() {
        try {
            this.todoItems = await BackendAPI.getAllTodo();
            this.success = true;
            console.log(this.todoItems)
        } catch (err) {
            this.success = false;
        }
    }
}
</script>

<template>
    <h2>Current ToDos</h2>
    <p v-if="!sucess">Error retrieving the Todos.</p>
    <p v-else>Sucess</p>
</template>

<style scoped>
</style>
