import { describe, test, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import AppVue from '../App.vue';
import { setActivePinia, createPinia } from 'pinia';
import { globalStore } from '../store/globalStore';
import * as VueI18n from 'vue-i18n';
import en from '../locales/en.json';
import es from '../locales/es.json';

describe('App', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  const i18n = VueI18n.createI18n({
    locale: 'en-US',
    fallbackLocale: 'en-US',
    globalInjection: true,
    legacy: false,
    messages: {
      'en-US': en,
      'es-ES': es,
    },
  });

  test('increment and decrement buttons', () => {
    const wrapper = mount(AppVue, {
      global: {
        plugins: [i18n],
      },
    });
    const btnAdd = wrapper.find("[data-test='add']");
    btnAdd.trigger('click');
    expect(globalStore().count).toBe(1);
    const btnSub = wrapper.find("[data-test='sub']");
    btnSub.trigger('click');
    expect(globalStore().count).toBe(0);
  });
});
