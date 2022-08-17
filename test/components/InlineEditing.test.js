import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import InlineEditing from '../../src/components/inline-editing/InlineEditing.vue';

describe('InlineEditing' ,() => {
    it('renders', () => {
        const data = 'foo';

        const wrapper = mount(InlineEditing, { props: { data } });

        expect(wrapper).toMatchSnapshot();
    });
    it('changes the content, works', async () => {
        const description = 'foo';
        const newDescription = 'bar';

        const wrapper = mount(InlineEditing, { props: { description } });

        // search for input
        const input = wrapper.find('input');

        // set new value
        await input.setValue(newDescription);

        // set focus
        await input.trigger('focus');
        
        wrapper.vm.$nextTick();

        // loose focus (here it emits)
        await input.trigger('focusout');

        wrapper.vm.$nextTick();

        // check
        expect(wrapper.find('input').element.value).toBe(newDescription);
        expect(wrapper.vm.data).toBe(newDescription);
        expect(wrapper.emitted().focusout).not.toBe(undefined);
    });
});
