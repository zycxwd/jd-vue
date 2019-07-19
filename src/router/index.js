import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
Vue.use(Router)
const routerConfig = {
  routes
}
const router = new Router(routerConfig)
export default router
