import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import VueYandexMetrika from 'vue-yandex-metrika'
import { createPinia } from 'pinia'

const pinia = createPinia()


Vue.config.productionTip = false

Vue.use(VueYandexMetrika, {
  id: 91263055,
  router: router,
  env: process.env.NODE_ENV
})

Vue.use(pinia)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
