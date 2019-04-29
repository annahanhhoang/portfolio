<template>
    <v-app>
        <v-toolbar fixed class="hidden-md-and-up">
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer></v-spacer>
            <social-link xl="true"></social-link>
        </v-toolbar>
        
        <!--
        **
        **   SIDE MENU
        **
        -->
        <v-navigation-drawer app v-model="drawer" class="app-side-menu">
            <v-layout column align-center justify-center fill-height>
                <img src="@/assets/logo.png" class="menu-logo mt-4">

                <div class="menu-name">Anna Hoang</div>

                <span class="menu-position">Full-stack Developer</span>

                <v-list>
                    <v-list-tile v-for="item in menu"
                                 :key="item.title">
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>
                                <router-link :to="item.to" :target="item.target">{{ item.title }}</router-link>
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
                <div class="menu-social-link">
                    <social-link></social-link>
                </div>
            </v-layout>
        </v-navigation-drawer>

        <!--
        **
        **   MAIN CONTENT
        **
        -->
        <v-content>
            <router-view />
        </v-content>
    </v-app>
</template>

<script>
    import SocialLink from '@/components/SocialLink.vue';

    export default {
        components: {
            SocialLink
        },
        data() {
            return {
                drawer: null,
                currentPage: this.$route.name,
                menu: [
                    { title: 'Home', icon: 'mdi-home', to: '/home' },
                    { title: 'About Me', icon: 'mdi-account', to: '/home#about-section', target: "_self" },
                    { title: 'Experience', icon: 'mdi-briefcase', to: '/home#experience-section', target: "_self" },
                    { title: 'Skills and Educations', icon: 'mdi-school', to: '/home#skill-section', target: "_self" },
                    { title: 'My Projects', icon: 'mdi-lightbulb-on', to: '/home#projects-section', target: "_self" },
                    // { title: 'Resume', icon: 'mdi-file', to: '/home#resume-section', target: "_blank" },
                    { title: 'Resume', icon: 'mdi-file', to: '/resume', target: "_blank" },
                    { title: 'Blog', icon: 'mdi-blogger', to: '/home#blog-section', target: "_self" },
                    { title: 'Contact', icon: 'mdi-phone', to: '/home#contact-section', target: "_self" },
                ],
            }
        },

        beforeMount() {
            this.toggleScroll()
            this.toggleDrawer()
        },

        methods: {
            //hide drawer for landing and resume page  
            toggleDrawer() {
                this.drawer = this.currentPage != 'Landing' && this.currentPage != 'Resume'
            },

            //disable scrolling for landing page 
            toggleScroll() {
                const scroll = this.currentPage != 'Landing'

                if (!scroll) {
                    document.body.className = "no-scroll"
                    document.documentElement.className = "no-scroll"
                }
                else {
                    document.documentElement.classList.remove("no-scroll")
                }
            },
        },

        watch: {
            //watch when user navigate to new page to hide/show drawer and disable/enable scroll
            $route(to) {
                this.currentPage = to.name
                this.toggleScroll()
                this.toggleDrawer()
            }
        }
    }
</script>