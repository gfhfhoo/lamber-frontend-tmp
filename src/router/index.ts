import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Home from "@/pages/index/home/Home.vue"
import ProblemSetNew from "@/pages/index/problemSet/ProblemSetNew.vue"
import ProblemDetailNew from "@/pages/index/problemDetail/ProblemDetailNew.vue"
import TEST from "@/pages/TEST.vue"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: "/problem",
        name: 'problemSet',
        component: ProblemSetNew
    },
    {
        path: "/problem/:id",
        name: 'problemDetail',
        component: ProblemDetailNew
    },
    {
        path: "/competition",
        name: 'competition',
        component: ProblemDetailNew
    },
    {
        path: "/draw",
        name: "draw",
        component: TEST
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'nav-linked',
    routes
})

export default router
