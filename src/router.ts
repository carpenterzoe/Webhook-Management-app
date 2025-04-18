import { createRouter, createWebHistory } from 'vue-router'
import Webhooks from './views/Webhooks.vue'
import CreateAction from './views/CreateAction.vue'

const routes = [
  { path: '/', component: Webhooks, name: 'Webhooks' },
  { path: '/create_action', component: CreateAction, name: 'CreateAction' },
]

export default createRouter({
  history: createWebHistory(),
  routes
})
