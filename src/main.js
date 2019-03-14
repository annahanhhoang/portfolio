import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router/router'
import './styles/main.scss'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
