<template>
    <v-container fluid fill-height grid-list-xl class="contact-page">
        <v-layout row>
            <v-flex xs6 class="contact-content">
                <h1>Let&apos;s talk</h1>

                <div>
                    <h2>
                        WHAT CAN I DO FOR YOU
                    </h2>

                    <p>Have a question about my profile? Want to connect regarding a job oppurtunity? Just want to chat? </p>
                </div>

                <div>
                    <h2>
                        SEND ME A MESSAGE
                    </h2>

                    <v-layout row wrap>
                        <v-flex xs12>
                            <v-text-field label="Name" name="txtName" id="txtName">
                            </v-text-field>
                        </v-flex>

                        <v-flex xs12>
                            <v-text-field label="Email" name="txtEmail" id="txtEmail">
                            </v-text-field>
                        </v-flex>

                        <v-flex xs12>
                            <v-textarea label="Messaage"
                                        name="txtMessage"
                                        id="txtMessage"></v-textarea>
                        </v-flex>

                        <v-flex xs12 class="text-xs-right">
                            <v-btn color="primary">Contact me</v-btn>
                        </v-flex>
                    </v-layout>
                </div>
            </v-flex>

            <v-flex xs2 class="contact-content">
                <h2>SOCIAL CONTACT</h2>

                <social-link class="ma-3"></social-link>

                <v-list>
                    <v-list-tile v-for="item in info"
                                 :key="item.title"
                                 class="mb-3">
                        <v-list-tile-avatar>
                            <v-icon large>{{ item.icon }}</v-icon>
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>
                                <div class="label">{{item.id}}</div>
                            </v-list-tile-title>
                            <v-list-tile-sub-title>
                                <div>{{item.value}}</div>
                            </v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-flex>

            <v-flex xs4></v-flex>
        </v-layout>
    </v-container>
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
                info: [
                    { id: 'Address', icon: 'mdi-map-marker', value: 'Dallas, Texas' },
                    { id: 'Email', icon: 'mdi-email', value: 'anna.hanh.hoang@gmail.com' },
                    { id: 'Phone', icon: 'mdi-phone', value: '469-831-0504' },
                ],
                right: null
            }
        }

    }
</script>