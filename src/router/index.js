import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import Availability from '../views/Availability.vue'
import Friends from '../views/Friends.vue'
import Matches from '../views/Matches.vue'
import { auth } from '../firebase'

const routes = [
  { path:'/login', component: Login },
  { path:'/register', component: Register },
  { path:'/', component: Dashboard, meta:{ requiresAuth:true } },
  { path:'/dashboard', component: Dashboard, meta:{ requiresAuth:true } },
  { path:'/availability', component: Availability, meta:{ requiresAuth:true } },
  { path:'/friends', component: Friends, meta:{ requiresAuth:true } },
  { path:'/matches', component: Matches, meta:{ requiresAuth:true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Guard para rutas privadas
router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth
  const currentUser = auth.currentUser
  if(requiresAuth && !currentUser){
    next('/login')
  } else {
    next()
  }
})

export default router
