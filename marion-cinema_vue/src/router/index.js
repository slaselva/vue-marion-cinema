import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "../views/Home.vue"
import moviePage from "../views/moviePage.vue"
import foodMenu from "../views/Food.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/movie-page',
    name: 'moviePage',
    component: moviePage
  },

  {
    path: '/food-menu',
    name: 'foodMenu',
    component: foodMenu
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})


export default router
