import { createWebHistory, createRouter } from 'vue-router'

import FeedView from './views/FeedView.vue'
import AboutView from './views/AboutView.vue'
import CreateView from './views/CreateView.vue'
import ProfileView from './views/ProfileView.vue'

const routes = [
  {
    path: '/',
    name: 'Feed', component: FeedView
  },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/create', name: 'Create', component: CreateView },
  { path: '/user/:handle', name: 'Profile', component: ProfileView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router