import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Login from '@/views/login/Login.vue'
import Dashboard from '@/views/dashboard/Dashboard.vue'
import CyberpuertaVue from '@/views/Cyberpuerta.vue'
// Función de verificación de autenticación
const isAuthenticated = () => {
  // Aquí puedes implementar la lógica para verificar si el usuario está autenticado
  // Por ejemplo, si tienes una variable que indica si el usuario está logeado, puedes utilizarla aquí
  // Devuelve true si el usuario está autenticado, o false en caso contrario
  const userLoggedIn = true; // Supongamos que tienes una variable llamada userLoggedIn
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
    component: Dashboard,
    meta: { requiresAuth: true } // Ruta protegida, requiere autenticación
  },
  {
    path: '/cyberpuerta',
    name: 'Cyberpuerta',
    component: CyberpuertaVue,
    meta: { requiresAuth: true } // Ruta protegida, requiere autenticación
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next('/') // Redirige al inicio de sesión si no está autenticado
  } else {
    next() // Permite el acceso a la ruta
  }
})
export default router