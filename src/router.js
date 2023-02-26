import { createWebHistory, createRouter } from 'vue-router';

import authPage from './pages/authPage.vue';
import mainPage from './pages/mainPage.vue';

const routes = [
  { path: '/', redirect: '/auth-page' },

  {
    path: '/auth-page',
    component: authPage,
  },
  {
    path: '/main-page',
    component: mainPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
