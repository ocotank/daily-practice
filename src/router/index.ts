import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/Home.vue';
import Random from '../view/RandomText.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/random/', component: Random },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
