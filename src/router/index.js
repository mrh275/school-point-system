import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/pages/Home.vue";
import About from "../components/pages/About.vue";
import Login from "../components/auth/Login.vue";
import Register from "../components/auth/Register.vue";

const routes = [
  {
    path: "/",
    name: "Splash",
    component: Login,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/home",
    name: "Beranda",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
