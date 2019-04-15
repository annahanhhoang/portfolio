import Vue from 'vue'

import Router from 'vue-router'
Vue.use(Router)

import Landing from '@/views/Landing.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Experience from '@/views/Experience.vue'
import Skills from '@/views/Skills.vue'
import Projects from '@/views/Projects.vue'
import Blog from '@/views/Blog.vue'
import BlogPost from '@/views/BlogPost.vue'
import Contact from '@/views/Contact.vue'

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Landing',
            component: Landing,
            meta: { title: 'Welcome to Anna\'s page'},
        },

        {
            path: '/home',
            name: 'Home',
            component: Home,
            meta: { title: 'Welcome to Anna\'s page' },
        },

        {
            path: '/blog',
            name: 'Blog',
            component: Blog,
            meta: { title: 'My writing' },
        },
        
        {
            path: '/blog/:slug',
            name: 'BlogPost',
            component: BlogPost
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