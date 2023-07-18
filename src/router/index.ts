import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Login from '@/views/login/Login.vue'
import Cyberpuerta from '@/views/Cyberpuerta.vue'
import Layout from '@/layout/index.vue'
// Función de verificación de autenticación
const isAuthenticated = () => {
  // Aquí puedes implementar la lógica para verificar si el usuario está autenticado
  // Por ejemplo, si tienes una variable que indica si el usuario está logeado, puedes utilizarla aquí
  // Devuelve true si el usuario está autenticado, o false en caso contrario
  let islogged = (localStorage.getItem('userLoggedIn'))
  let flag = false
  if(islogged == 'true'){
    flag = true
  }
  
  const userLoggedIn = flag; // Supongamos que tienes una variable llamada userLoggedIn
  return userLoggedIn;
};
const routes: Array<RouteRecordRaw> = [
  {
  path: '/',
  name: 'home',
  component: Login
  }, 
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Layout,
    children:[
      {
        path: '/cyberpuerta',
        name: 'Cyberpuerta',
        component: Cyberpuerta,
        // Ruta protegida, requiere autenticación
      }
    ],
    meta: { requiresAuth: true } // Ruta protegida, requiere autenticación
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, _from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next('/') // Redirige al inicio de sesión si no está autenticado
  } else {
    next() // Permite el acceso a la ruta
  }
})
export default router