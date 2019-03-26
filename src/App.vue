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
                <v-avatar size="150" class="mt-4 mb-2">
                    <img src="@/assets/avatar.jpg">
                </v-avatar>

                <div class="display-1 mb-2">Anna Hoang</div>

                <span class="title font-weight-light mb-5">Full-stack Developer</span>

                <v-list>
                    <v-list-tile v-for="item in menu"
                                 :key="item.title"
                                 @click="">
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
            <v-container fluid grid-list-xl>
                <router-view />
            </v-container>
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
                drawer: true,
                menu: [
                    { title: 'Home', icon: 'mdi-home', to: '/' },
                    { title: 'About Me', icon: 'mdi-account', to: '/about' },
                    { title: 'Experience', icon: 'mdi-school', to: '/experience' },
                    { title: 'Skills and Educations', icon: 'mdi-school', to: '/skills' },
                    { title: 'My Projects', icon: 'mdi-school', to: '/skills' },
                    { title: 'Recommendation', icon: 'mdi-school', to: '/skills' },
                    { title: 'Contact', icon: 'mdi-phone', to: '/contact' },
                    { title: 'Fun facts about me', icon: 'mdi-school', to: '/contact' },
                ],
            }
        },
        props: []
    }
</script>