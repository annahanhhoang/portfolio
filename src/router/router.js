import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/views/Landing.vue'
import About from '@/views/About.vue'
import Experience from '@/views/Experience.vue'
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

        {
            path: '/experience',
            name: 'Experience',
            component: Experience,
            meta: { title: 'My Experience' },
        },
    ]
})

router.afterEach((to) => {
    document.title = to.meta.title;
})

export default router