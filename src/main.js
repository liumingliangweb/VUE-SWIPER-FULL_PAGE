import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入lib-flexible
import 'lib-flexible'
//引入mint-ui
// import Mint from 'mint-ui'
// import 'mint-ui/lib/style.css';
//引入animate.css
import Animate from 'animate.css';

// Vue.use(Mint);
Vue.use(Animate);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
