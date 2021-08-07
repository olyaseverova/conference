import { createRouter, createWebHistory } from 'vue-router'
import Programs from '../views/Programs.vue'

const routes = [
  {
    path: '/',
    name: 'Programs',
    component: Programs
  },
  {
    path: '/conference',
    name: 'Conference',
    component: () => import(/* webpackChunkName: "about" */ '../views/Conference.vue')
  },
  {
    path: '/authorization',
    name: 'Authorization',
    component: () => import(/* webpackChunkName: "about" */ '../views/Authorization.vue')
  },
  {
    path: '/leader',
    name: 'Leader',
    component: () => import(/* webpackChunkName: "about" */ '../views/Leader.vue')
  },
  {
    path: '/editor',
    name: 'Editor',
    component: () => import(/* webpackChunkName: "about" */ '../views/Editor.vue')
  },
  {
    path: '/creation',
    name: 'Creation',
    component: () => import(/* webpackChunkName: "about" */ '../views/Creation.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue')
  },
  {
    path: '/first-leader',
    name: 'FirstLeader',
    component: () => import(/* webpackChunkName: "about" */ '../views/FirstLeader.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
