<template>
    <v-app>
        <!--
        **
        **   SIDE MENU
        **
        -->
        <v-navigation-drawer v-model="drawer"
                             app>
            <v-layout column align-center justify-center fill-height>
                <img src="@/assets/logo.png" class="logo mt-4">

                <div class="display-1 mb-2">Anna Hoang</div>

                <span class="title font-weight-light mb-5">Full-stack Developer</span>

                <v-list>
                    <v-list-tile v-for="item in menu"
                                 :key="item.title">
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>
                                <router-link :to="item.to">{{ item.title }}</router-link>
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
                <div class="mt-auto mb-5">
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
                menu: [
                    { title: 'Home', icon: 'mdi-home', to: '/home' },
                    { title: 'About Me', icon: 'mdi-account', to: '/home#about-section' },
                    { title: 'Experience', icon: 'mdi-briefcase', to: '/home#experience-section' },
                    { title: 'Skills and Educations', icon: 'mdi-school', to: '/home#skill-section' },
                    { title: 'My Projects', icon: 'mdi-lightbulb-on', to: '/home#projects-section' },
                    { title: 'Blog', icon: 'mdi-blogger', to: '/home#blog-section' },
                    { title: 'Contact', icon: 'mdi-phone', to: '/home#contact-section' },
                ],
            }
        },

        beforeMount() {
            this.toggleScrollAndDrawer()
        },

        methods: {
            toggleScrollAndDrawer() {
                const isLandingPage = this.$route.name == 'Landing'

                this.drawer = !isLandingPage

                if (isLandingPage) {
                    document.body.className = "no-scroll"
                    document.documentElement.className = "no-scroll"
                }
                else {
                    document.documentElement.classList.remove("no-scroll")
                }
            },
        },

        watch: {
            $route() {
                this.toggleScrollAndDrawer()
            }
        }
    }
</script>