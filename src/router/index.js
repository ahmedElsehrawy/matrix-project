import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Plans from '../views/Plans.vue';
import Enroll from '../views/Enroll.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/plans',
        component: Plans
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/enroll/:id',
        component: Enroll
    }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
