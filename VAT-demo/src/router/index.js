import { createWebHistory, createRouter } from "vue-router";
import Test from '../components/test.vue'
import TestGraph from '../components/company-graph/TestGraph.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: 'home', component: Test},
        { path: "/test", name: 'test', component: TestGraph}
    ]
})

export default router;