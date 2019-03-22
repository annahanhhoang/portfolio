<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
            <v-form>
                <v-layout row wrap>
                    <v-flex xs3></v-flex>
                    <v-flex xs6 class="google-logo">
                    </v-flex>
                    <v-flex xs3></v-flex>

                    <v-flex xs12 class="input-search">
                        <v-text-field name="search" type="text" outline hide-details />
                    </v-flex>
                    <v-flex xs6 text-xs-right>
                        <v-btn>Google Search</v-btn>
                    </v-flex>
                    <v-flex xs6>
                        <v-btn>I'm feeling lucky</v-btn>
                    </v-flex>
                </v-layout>
            </v-form>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: 'landing',
    }
</script>
