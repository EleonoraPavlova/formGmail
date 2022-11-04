import { createRouter, createWebHashHistory } from 'vue-router'
import FormView from '../views/FormView.vue'
import AboutView from '../views/AboutView.vue'
import ForgetView from '../views/ForgetView.vue'
import MainView from '../views/MainView.vue'
import DashboardView from '../views/DashboardView.vue'
// import MailView from '../views/MailView.vue'
import NotFound from '../common/NotFound.vue'
// import AppButtons from '../common/AppButtons.vue'

//lazy-loaded
const MailView = () => import('../views/MailView.vue')

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
    component: ForgetView,
    meta: {
      cantEnter: true,
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    beforeEnter() {
      console.log('beforeEnter')
    }
  },
  {
    path: '/mail/:mailId?',
    name: 'mail',
    component: MailView,
    // children: [{ path: ':mailId?', component: AppButtons, props: true }]
  },
  {
    path: '/:notFound(.*)', component: NotFound
  },
]


const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  // linkActiveClass: 'active',
  // linkExactActiveClass: 'Exact-active'
})
// router.beforeEach((to, from, next) => {
//   console.log('beforeEnter')
//   if (to.meta.cantEnter) {
//     //https://router.vuejs.org/guide/advanced/navigation-guards.html 
//     //урок 10 еще
//     //     //если не можем войти на страницу forget, редирект на главную
//     next('/dashboard')
//   } else {
//     next('/main')
//   }
//   // })
//   router.afterEach((to, from) => {

//   })

// })
export default router
