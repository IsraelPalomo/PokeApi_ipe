import { describe, test, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import HomePage from '../views/HomePage.vue';

describe('HomePage', () => {
  test('props are loaded correctly', () => {
    const message = 'Example title';
    const wrapper = shallowMount(HomePage, {
      props: {
        title: message,
      },
    });
    expect(wrapper.props('title')).toBe(message);
  });
});
