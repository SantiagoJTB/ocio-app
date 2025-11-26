import { createRouter, createWebHistory } from "vue-router";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Dashboard from "./views/Dashboard.vue";
import Availability from "./views/Availability.vue";
import Friends from "./views/Friends.vue";
import Matches from "./views/Matches.vue";
import { auth } from "./firebase";

const routes = [
  { path: "/", redirect: "/dashboard" },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  {
    path: "/dashboard",
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  { path: "/availability", component: Availability, meta: { requiresAuth: true } },
  { path: "/friends", component: Friends, meta: { requiresAuth: true } },
  { path: "/matches", component: Matches, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// redirect si no está logueado
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !auth.currentUser) {
    next("/login");
  } else next();
});

export default router;
