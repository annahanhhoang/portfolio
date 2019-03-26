<template>
    <v-layout row class="social-link">
        <div class="mx-1" v-for="item in accounts" :key="item.id">
            <a :href="item.link">
                <v-icon>{{item.icon}}</v-icon>
            </a>
        </div>
    </v-layout>
</template>

<script>
    export default {
        data() {
            return {
                accounts: [
                    { id: 'LinkedIn', icon: 'mdi-linkedin-box', link: 'https://www.linkedin.com/in/hanh-hoang-67023654/' },
                    { id: 'GitHub', icon: 'mdi-github-box', link: 'https://github.com/annahanhhoang/' },
                    { id: 'Facebook', icon: 'mdi-facebook-box', link: '#' },
                ],
            }
        }
    }
</script>