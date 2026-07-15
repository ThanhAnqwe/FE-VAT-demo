import { createWebHistory, createRouter } from "vue-router";
import Test from '../views/test.vue'
import TestGraph from '../views/company-graph/TestGraph.vue';
import SummaryView from '../views/Summary/SummaryView.vue';
import CompanyDetailView from '../views/DetailCompany/CompanyDetail.vue';
import NotFoundView from '../views/NotFoundView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: 'home', component: Test},
        { path: "/test", name: 'test', component: TestGraph},
        { path: '/summary', component: SummaryView },
        { path: '/detail', component: CompanyDetailView },
        { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView }
    ]
})

export default router;