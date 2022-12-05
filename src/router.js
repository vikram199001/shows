import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './components/Dashboard.vue';
import ShowDetails from './components/ShowDetails.vue';

const routes = [
    {
        path: '/',
        name: 'dash-board',
        component: Dashboard
    },
    {
        path: '/show/:id',
        name: 'show-detail',
        component: ShowDetails
    },
]

const router = createRouter({ history: createWebHistory(), routes })
export default router