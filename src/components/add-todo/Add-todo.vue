<script>
export default {
    name: 'AddTodo',
    data() {
        return {
            description: "",
        }
    }, 
    methods: {
        add() {
            if (this.description) {
                // emit the description to parent
                this.$emit('addTodo', this.description);
            }
        }
    }
}
</script>

<template>
    <div>
        <input type="text" v-model="description" size="20" maxlength="50" placeholder="Add your new todo here" required /><button @click="add">Add</button>
    </div>
</template>

<style scoped>
    div {
        text-align: center;
        margin: auto;
    }

    input {
        width: 75%;
        margin: 0 1em;
        padding: 0.75em;
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 3px;
        font-size: 1.2em;
        color: rgba(0, 0, 0, 0.6);
    }

    button {
        padding: 1.15em;
        background-color: rgb(56, 72, 126);
        border: 2px solid rgba(15, 41, 120, 0.7);
        color: white;
        border-radius: 5px;
    }

    button:hover {
        background-color: black;
        color: white;
        cursor: pointer;
    }
</style>
