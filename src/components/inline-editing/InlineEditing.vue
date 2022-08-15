<script>
export default {
    name: 'InlineEditing',
    props: {
        data: String
    },
    mounted() {
        // set the focus on the description
        // so when moving out we emit the changes
        this.$refs.description.focus();
    },
    methods: {
        updateText() {
            // emit a change on the description
            this.$emit('descriptionChanged', this.data);
        }
    }
}
</script>

<template>
    <input ref="description" type="text" v-model="data" v-on:blur="updateText" size="20" maxlength="50" />
</template>

<style scoped>
    input {
        padding: 0.5em;
        border-radius: 3px;
        border: 1px solid rgba(0, 0, 0, 0.5);
    }
</style>
