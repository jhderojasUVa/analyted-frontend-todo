import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import ListTodo from '../../src/components/list-todos/ListTodo.vue';

describe('ListTodo', () => {
    it('renders', () => {
        const todoItems = [];

        const wrapper = mount(ListTodo, { props: { todoItems } });

        expect(wrapper).toMatchSnapshot();
    });
    describe('passtrough methods', () => {
        it('deleteTodo', () => {
            const itemID = 1;
            const todoItems = [];

            const wrapper = mount(ListTodo, { props: { todoItems } });

            wrapper.vm.$emit('deleteTodo', itemID);

            expect(wrapper.emitted().deleteTodo).toEqual([[ itemID ]]);
        });
        it('descriptionChanged', () => {
            const data = { id: 1, description: 'foo', completed: false };
            const todoItems = [];

            const wrapper = mount(ListTodo, { props: { todoItems } });

            wrapper.vm.$emit('descriptionChanged', data);

            expect(wrapper.emitted().descriptionChanged).toEqual([[ data ]]);
        });
        it('changeCompleted', () => {
            const data = { id: 1, description: 'foo', completed: false };
            const todoItems = [];

            const wrapper = mount(ListTodo, { props: { todoItems } });

            wrapper.vm.$emit('changeCompleted', data);

            expect(wrapper.emitted().changeCompleted).toEqual([[ data ]]);
        });
    })
});
