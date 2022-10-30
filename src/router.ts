import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    name: 'HomePage',
    path: '/',
    component: () => import('./views/HomePage.vue'),
  },
  {
    name: 'SecondaryPage',
    path: '/secondary',
    component: () => import('./views/SecondaryPage.vue'),
  },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
