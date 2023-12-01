import { createRouter, createWebHistory } from 'vue-router'
// import loginPage from '@/views/loginview.vue'
// // import signupPage from '@/views/signupview.vue'
// import Home from '@/views/homeView.vue'
// import main from '@/views/mainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode:'hash',
  routes: [
    {path:'/',component: () => import('@/views/homeView.vue')},
    {path:'/login',name:'login',component: () => import('@/views/loginview.vue')},
    {path:'/signup',name:'signup',component: () => import('@/views/signupview.vue')},
    {path:'/home',name:"main",component: () => import('@/views/mainView.vue')}
  ]
});

export default router
