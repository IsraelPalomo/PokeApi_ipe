import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import * as VueI18n from 'vue-i18n';
import en from '../src/locales/en.json';
import es from '../src/locales/es.json';

export const i18n = VueI18n.createI18n({
  locale: 'en-US',
  fallbackLocale: 'en-US',
  globalInjection: true,
  legacy: false,
  messages: {
    'en-US': en,
    'es-ES': es,
  },
});

const pinia = createPinia();

createApp(App).use(pinia).use(i18n).use(router).mount('#app');
