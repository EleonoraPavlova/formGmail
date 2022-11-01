import { createRouter, createWebHistory } from 'vue-router'
import FormView from '../views/FormView.vue'
import AboutView from '../views/AboutView.vue'
import ForgetView from '../views/ForgetView.vue'
import MainView from '../views/MainView.vue'
import DashboardView from '../views/DashboardView.vue'
import MailView from '../views/MailView.vue'



const routes = [

  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/form',
    name: 'form',
    component: FormView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: AboutView
  },
  {
    path: '/forget',
    name: 'forget',
    component: ForgetView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/mail',
    name: 'mail',
    component: MailView
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // linkActiveClass: 'active',
  // linkExactActiveClass: 'Exact-active'
})

export default router
