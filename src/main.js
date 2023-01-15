import Vue from 'vue'
import App from './App.vue'
import store from "./store/index";
import "./assets/style.css";
import "animate.css";
import Notifications from 'vue-notification'

Vue.use(Notifications)

Vue.config.productionTip = false

// storing state of vuex in local storage
store.subscribe((mutation, state) => {
  localStorage.setItem('todos', JSON.stringify(state.todos));
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
