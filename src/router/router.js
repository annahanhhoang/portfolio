import Vue from 'vue'

import Router from 'vue-router'
Vue.use(Router)

import Landing from '@/views/Landing.vue'
import Home from '@/views/Home.vue'
import Resume from '@/views/Resume.vue'

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Landing',
            component: Landing,
            meta: { title: 'Anna Hoang - Full-stack Developer\'s page'},
        },

        {
            path: '/home',
            name: 'Home',
            component: Home,
            meta: { title: 'Anna Hoang - Full-stack Developer\'s page' },
        },

        {
            path: '/resume',
            name: 'Resume',
            component: Resume,
            meta: { title: 'Anna Hoang - Full-stack Developer resume' },
        },
    ],

    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return { selector: to.hash }
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 }
        }
    }
})

router.afterEach((to) => {
    document.title = to.meta.title;
})

export default router