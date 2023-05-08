import { createApp } from 'vue'
import { createRouter } from 'vue-router'
import { App } from './App'
import './assets/css/reset.css'
import { history } from './share/history'
import { routes } from './config/router'
import '@svgstore'
import { Message } from './components/Message/Message'

const app = createApp(App)

const router = createRouter({
  routes,
  history
})
app.component('Message', Message)
app.use(router)
app.mount('#app')
