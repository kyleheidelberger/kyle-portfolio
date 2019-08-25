import Vue from 'vue'
import App from './App.vue'
import VueAgile from 'vue-agile'
import './styles.scss'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

Vue.config.productionTip = false
Vue.use(VueAgile)
Vue.component('v-icon', Icon)


new Vue({
  render: h => h(App),
}).$mount('#app')
