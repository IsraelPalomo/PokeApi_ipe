import { describe, test, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import SecondaryPage from '../views/SecondaryPage.vue';

describe('HomePage', () => {
  test('props are loaded correctly', () => {
    const message = 'Example title';
    const wrapper = shallowMount(SecondaryPage, {
      props: {
        title: message,
      },
    });
    expect(wrapper.props('title')).toBe(message);
  });
});
