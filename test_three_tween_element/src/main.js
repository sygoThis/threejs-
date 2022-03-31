import Vue from 'vue'
import './js/axios'
import './js/three.js'
// import THREE from 'three'
import './js/Tween'
import './js/three.interaction'
// import   './js/OrbitControls'
import App from './App.vue'
import router from './router'
import store from './store'
import './js/element.js'
// Vue.use(THREE);
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
