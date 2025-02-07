import HomeCompoment from '@/components/HomeCompoment.vue';
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  { path: '/', name: 'Home', component: HomeCompoment },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
