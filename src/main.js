import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import '@scss/style.scss'

Vue.use(VueI18n)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
