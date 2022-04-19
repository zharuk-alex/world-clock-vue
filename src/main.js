import Vue from 'vue'
import App from './App.vue'
import moment from 'moment-timezone'

import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

Vue.prototype.moment = moment

new Vue({
  render: h => h(App),
}).$mount('#app')
