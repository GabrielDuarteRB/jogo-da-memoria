import { createRouter, createWebHistory } from 'vue-router'
import InicialView from '@/views/InicialView.vue'
import JogoView from '@/views/JogoView.vue'

const routes = [
  { path: '/', component: InicialView },
  { path: '/jogo', component: JogoView }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
