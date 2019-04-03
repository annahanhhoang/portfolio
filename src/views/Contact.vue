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

                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field label="Name*" name="txtName" id="txtName" v-model="name" :rules="nameRules" required>
                        </v-text-field>

                        <v-text-field label="Email*" name="txtEmail" id="txtEmail" v-model="email" :rules="emailRules" required>
                        </v-text-field>

                        <v-textarea label="Messaage*" name="txtMessage" id="txtMessage" v-model="message" :rules="messageRules" required></v-textarea>

                        <vue-recaptcha ref="recaptcha" :sitekey="sitekey" @verify="verifyCaptcha" @expired="$refs.recaptcha.reset()">
                        </vue-recaptcha>

                        <v-btn color="primary" @click="sendEmail" class="ml-auto">Contact me</v-btn>
                    </v-form>
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

        <modal v-if="showModal" :messageHeader="messageHeader" :messageBody="messageBody" @close="showModal = false" class="recaptcha-error">
        </modal>
    </v-container>
</template>

<script>
    import SocialLink from '@/components/SocialLink.vue'
    import modal from '@/components/Modal.vue'
    import APIService from '@/service/APIService'

    import VueRecaptcha from 'vue-recaptcha'
    import captchaConfig from '../../config/recaptchaConfig'

    export default {
        components: {
            modal,
            SocialLink,
            VueRecaptcha
        },

        data() {
            return {
                info: [
                    { id: 'Address', icon: 'mdi-map-marker', value: 'Dallas, Texas' },
                    { id: 'Email', icon: 'mdi-email', value: 'anna.hanh.hoang@gmail.com' },
                    { id: 'Phone', icon: 'mdi-phone', value: '469-831-0504' },
                ],

                name: '',
                email: '',
                message: '',

                valid: true,
                nameRules: [
                    v => !!v || 'Name is required',
                    v => (v && v.length >= 2) || 'Name must be at least 3 characters',
                    v => /([a-zA-Z]{2,}\d*\s*)+/.test(v) || 'Name must contain only alphanumeric or space',
                ],
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(v) || 'E-mail must be valid'
                ],
                messageRules: [
                    v => !!v || 'Message is required',
                    v => !/[<>'"`&#\$~]/.test(v) || 'Message must not contain special character'
                ],

                sitekey: captchaConfig.sitekey,
                verifiedCaptcha: false,

                showModal: false,
                messageHeader: '',
                messageBody: ''
            }
        },

        methods: {
            validate() {
                if (!this.$refs.form.validate()) {
                    return false
                } else if (window.grecaptcha.getResponse().length === 0) {
                    this.displayModal('Error', 'Please make sure you filled out the form and passed captcha verification.')
                    return false
                }
                return true
            },

            verifyCaptcha(captchaResponse) {
                const vm = this

                if (vm.validate()) {
                    let result = null

                    APIService.verifyCaptcha(captchaResponse)
                        .then(function (apiResponse) {
                            result = apiResponse.data
                            vm.verifiedCaptcha = result.success
                        })
                        .catch(function () {
                            vm.displayModal('Error', 'Something went wrong with captcha verification. Please refresh the page and try again later.')
                            vm.verifiedCaptcha = false
                        })
                }
            },

            sendEmail() {
                const vm = this

                if (vm.validate() && vm.verifiedCaptcha) {
                    const emailOption = {
                        'name': vm.name,
                        'email': vm.email,
                        'message': vm.message
                    }

                    APIService.sendEmail(emailOption)
                        .then(function () {
                            vm.displayModal('Message sent', 'Your message was sent successfully. We will get back to you within 48 hours.')
                            vm.$refs.form.reset()
                            vm.$refs.recaptcha.reset()
                        })
                        .catch(function () {
                            vm.displayModal('Error', 'Something went wrong. Please try again later.')
                            vm.$refs.recaptcha.reset()
                        })
                }
            },

            displayModal(messageHeader, messageBody) {
                this.messageHeader = messageHeader
                this.messageBody = messageBody
                this.showModal = true
            }
        }
    }
</script>