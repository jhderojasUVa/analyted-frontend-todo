<script>
import InlineEditing from '../inline-editing/InlineEditing.vue';

export default {
    name: 'TodoItem',
    data() {
        return {
            editing: false,
        }
    },
    props: {
        data: Object,
    },
    methods: {
        deleteTodo(id) {
            // emit to parent that is going to remove a todo
            this.$emit('deleteTodo', id);
        },
        editItem() {
            this.editing = this.editing === false ? true : false;
        },
        descriptionChanged(description) {
            this.$emit('descriptionChanged', { 
                description,
                completed: this.data.completed,
                id: this.data.id, 
            });
            this.editing = false;
        }
    },
    emits: [ 'deleteTodo', 'descriptionChanged' ],
    components: {
        InlineEditing,
    }
}
</script>

<template>
    <span class="name" v-if="!editing" @click="editItem">{{ data.description }}</span>
    <span class="name" v-else><InlineEditing :data="data.description" @descriptionChanged="descriptionChanged"/></span>
    <span class="completed">
        <span v-if="data.completed" class="completed">Finished</span>
        <span v-else class="notcompleted">Not finished</span>
    </span>
    <span class="actions"><a @click="deleteTodo(data.id)">Delete</a></span>
</template>

<style scoped>
    span {
        margin: 0em 1em;
    }

    span.name {
        font-size: bold;
    }

    span.completed:hover {
        cursor: pointer;
    }

    span.completed .completed {
        background-color: rgba(84, 159, 23, 0.5);
    }

    span.completed .notcompleted {
        background-color: rgba(159, 23, 23, 0.5);
    }

    span.actions {
        float: right;
    }
</style>
