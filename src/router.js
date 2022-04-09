import VueRouter from 'vue-router'
import HomePage from './Pages/Home/HomePage.vue'
import Fruits from './Pages/Food/Fruits.vue'

const routes = [{ 
        path: '/',
        component: HomePage
    },
    {
        path: '/fruits',
        component: Fruits 
    },
  ]

//   const router = VueRouter.createRouter({
//   // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
//   history: VueRouter.createWebHashHistory(),
//   routes, // short for `routes: routes`
// })
const router = new VueRouter ({
    routes,
    mode: 'history'
})

export default router;