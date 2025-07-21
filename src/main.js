import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import Result from './views/Result.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/result/:letters', name: 'result', component: Result }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

createApp(App).use(router).mount('#app')
