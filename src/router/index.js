
import HomeCompoment from '@/components/HomeCompoment.vue';
import LoginVue from '@/components/Dboard/LoginVue.vue';
import { createRouter, createWebHistory } from 'vue-router';
import DboardQuanTriVue from '@/components/Dboard/DboardQuanTri.vue';


const routes = [
  { path: '/', name: 'Home', component: HomeCompoment },
   { path: '/dangnhap', name: 'Login', component: LoginVue },
   {
    path: '/dashboard/quantri', name: 'quantri', component: DboardQuanTriVue
   }
];

 

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
