<template>
        <v-layout fill-height align-center justify-center class="landing-page">
            <v-flex xs12 sm8 md4>
                <v-layout row wrap>
                    <v-flex xs12 md6 offset-md3 class="google-logo">
                    </v-flex>
                    <v-flex md3 class="hidden-sm-and-down"></v-flex>

                    <v-flex xs12 class="input-search">
                        <v-text-field id="txtSearch" ref="txtSearch" type="text" outline hide-details disabled/>
                        <div class="search-text anim-typewriter">Anna Hoang full stack developer</div>
                    </v-flex>
                    <v-flex md6 class="hidden-sm-and-down text-md-right">
                        <v-btn>Google Search</v-btn>
                    </v-flex>
                    <v-flex md6 class="hidden-sm-and-down">
                        <v-btn>I'm feeling lucky</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
</template>

<script>
    export default {
        name: 'landing',
        mounted() {
            const vm = this

            setTimeout(function () {
                vm.$router.push({name: "Home"})
            }, 6500)
        },
    }
</script>
