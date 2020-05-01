import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import '@scss/style.scss'

Vue.config.productionTip = false

const saveMarkdown = localStorage

new Vue({
  saveMarkdown,
  i18n,
  render: h => h(App)
}).$mount('#app')
