import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import './styles/main.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app');

if (module.hot) {
  module.hot.addStatusHandler((status) => {
    if (status === 'prepare') console.clear();
  });
}
