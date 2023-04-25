import { createApp } from 'vue'
import { createRouter } from 'vue-router'
import { App } from './App'
import './assets/css/reset.css'
import { history } from './share/history'
import { routes } from './config/router'
const app = createApp(App)

const router = createRouter({
  routes,
  history
})
app.use(router)
app.mount('#app')
