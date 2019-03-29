import Vue from 'vue'
import Vuetify, { VLayout } from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify, {
    iconfont: 'mdi',
    components: { VLayout }
})
