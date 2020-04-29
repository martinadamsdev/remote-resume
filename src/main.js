import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import '@scss/style.scss'
import i18n from './i18n'

Vue.use(VueI18n)

Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')

// 热更新
if (module.hot) {
  module.hot.accept(['./en', './ja'], function () {
    i18n.setLocaleMessage('en', require('./en').default)
    i18n.setLocaleMessage('ja', require('./ja').default)
  })
}
