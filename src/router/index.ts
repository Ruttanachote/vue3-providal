import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Index from "../views/Index.vue";
import Main from "../views/Main.vue";
import New from "../views/New.vue";
import NewTest from "../views/NewTest.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/Index",
    name: "Index",
    component: Index,
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
  },
  {
    path: "/New",
    name: "New",
    component: New,
  },
  {
    path: "/NewTest",
    name: "NewTest",
    component: NewTest,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
