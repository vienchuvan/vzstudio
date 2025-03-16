
import HomeCompoment from '@/components/HomeCompoment.vue';
import LoginVue from '@/components/Dboard/LoginVue.vue';
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  { path: '/', name: 'Home', component: HomeCompoment },
   { path: '/dangnhap', name: 'Login', component: LoginVue },
];

 

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
