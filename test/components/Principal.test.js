import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import Principal from '../../src/components/principal/Principal.vue';

describe('Principal', () => {
    it('renders', () => {
        const props = {
            todoItems: [],
            sucess: false,
            loading: true,
        };

        const wrapper = mount(Principal, { props });

        expect(wrapper).toMatchSnapshot();
    });
    describe.skip('methods', () => {

    });
})
