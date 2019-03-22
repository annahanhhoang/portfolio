import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/views/Landing.vue'
import About from '@/views/About.vue'
Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Landing',
            component: Landing,
            meta: { title: 'Welcome to Anna\'s page'},
        },
        {
            path: '/about',
            name: 'AboutMe',
            component: About,
            meta: { title: 'About Me' },
        },
    ]
})

router.afterEach((to, from) => {
    document.title = to.meta.title;
})

export default router