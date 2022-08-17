import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import AddTodo from '../../src/components/add-todo/Add-todo.vue';

describe('addtodo component', () => {
    it('renders', () => {
        const description = 'foo';

        const wrapper = mount(AddTodo, { props: { description } });

        expect(wrapper).toMatchSnapshot();
    });
    describe('methods', () => {
        it('addTodo emits', () => {
            const description = 'foo';
            const wrapper = mount(AddTodo, { props: { description: 'something' } });
    
            wrapper.vm.$emit('addTodo', description);
    
            expect(wrapper.emitted().addTodo).toStrictEqual([[description]]);
        });
    })
    it('add a new works', async () => {
        const description = 'foo';

        const wrapper = mount(AddTodo, { props: { description: '' } });

        // search for input and button
        const input = wrapper.find('input');
        const button = wrapper.find('button');

        // set new value
        await input.setValue(description);

        button.trigger('click');

        wrapper.vm.$nextTick();

        // check
        expect(wrapper.find('input').element.value).toBe(description);
        expect(wrapper.vm.description).toBe(description);
        expect(wrapper.emitted().click).not.toBe(undefined);
    });
});
