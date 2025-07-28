import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from "@/views/NotFoundView.vue";
import AboutUsView from "@/views/AboutUsView.vue";
import PlataformaView from "@/views/PlataformaView.vue";
import EspelhoView from "@/views/EspelhoView.vue";
import CabineView from "@/views/CabineView.vue";
import TotemView from "@/views/TotemView.vue";
import ContatoView from "@/views/ContatoView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'aboutUs',
    component: AboutUsView
  },
  {
    path: '/plataforma',
    name: 'plataforma',
    component: PlataformaView
  },
  {
    path: '/espelho',
    name: 'espelho',
    component: EspelhoView
  },
  {
    path: '/cabine',
    name: 'cabine',
    component: CabineView
  },
  {
    path: '/totem',
    name: 'totem',
    component: TotemView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContatoView
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 }
  }
})

export default router
