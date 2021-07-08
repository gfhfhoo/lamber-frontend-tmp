import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import DashBoard from "@/pages/backend/dashboard/Dashboard.vue"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'backend',
        redirect: '/dashboard'
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: DashBoard
    },
    {
        path: '/servers',
        name: 'servers',
        component: DashBoard
    },
    {
        path: '/users',
        name: 'users',
        component: DashBoard
    },
    {
        path: '/problems',
        name: 'problems',
        component: DashBoard
    },
    {
        path: '/competitions',
        name: 'competitions',
        component: DashBoard
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL + 'backend/',
    linkActiveClass: 'nav-linked',
    routes
})

export default router