<template>
    <v-container fluid fill-height grid-list-xl class="landing-page">
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-layout row wrap>
                    <v-flex xs3></v-flex>
                    <v-flex xs6 class="google-logo">
                    </v-flex>
                    <v-flex xs3></v-flex>

                    <v-flex xs12 class="input-search">
                        <v-text-field id="txtSearch" ref="txtSearch" type="text" outline hide-details disabled/>
                        <div class="search-text anim-typewriter">Anna Hoang full stack developer</div>
                    </v-flex>
                    <v-flex xs6 text-xs-right>
                        <v-btn>Google Search</v-btn>
                    </v-flex>
                    <v-flex xs6>
                        <v-btn>I'm feeling lucky</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'landing',
        mounted() {
            const vm = this

            setTimeout(function () {
                vm.$router.push({name: "About"})
            }, 6500)
        },
    }
</script>
