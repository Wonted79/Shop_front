import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Cart from "@/pages/Cart";
import Usr from "@/pages/Usr";

import {createRouter, createWebHistory} from "vue-router/dist/vue-router";

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/cart', component: Cart},
    {path: '/usr', component: Usr},

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;