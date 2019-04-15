<template>
    <v-layout row wrap class="contact-page">
        <v-flex xs12 md6 class="contact-content">
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

                <v-alert v-model="showAlert" :type="alertType" :dismissible="dismissible" class="mb-3">{{alertMessage}}</v-alert>

                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field label="Name*" name="txtName" id="txtName" v-model="name" :rules="nameRules" required>
                    </v-text-field>

                    <v-text-field label="Email*" name="txtEmail" id="txtEmail" v-model="email" :rules="emailRules" required>
                    </v-text-field>

                    <v-textarea label="Messaage*" name="txtMessage" id="txtMessage" v-model="message" :rules="messageRules" required></v-textarea>

                    <div :class="['v-input', 'v-input--selection-controls', 'v-input--checkbox', 'captcha', captchaErrorClass]">
                        <div class="v-input__control">
                            <div class="v-input__slot">
                                <vue-recaptcha ref="recaptcha" :sitekey="sitekey" @verify="verifyCaptcha" @expired="$refs.recaptcha.reset()">
                                </vue-recaptcha>
                            </div>
                            <div class="v-messages">
                                <div class="v-messages__wrapper">
                                    <div class="v-messages__message">{{captchaErrorMessage}}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <v-btn color="primary" @click="sendEmail" class="ml-auto">Contact me</v-btn>
                </v-form>
            </div>
        </v-flex>

        <v-flex xs12 md2 class="contact-content">
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

        <v-flex md4></v-flex>
    </v-layout>
</template>

<script>
    import SocialLink from '@/components/SocialLink.vue'
    import Resume from '@/components/Resume'
    import APIService from '@/service/APIService'

    import VueRecaptcha from 'vue-recaptcha'
    import captchaConfig from '../../config/recaptchaConfig'

    export default {
        components: {
            Resume,
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
                captchaErrorMessage: "",
                captchaErrorClass: "",

                showAlert: false,
                alertType: 'info',
                alertMessage: '',
                dismissible: false
            }
        },

        methods: {
            validate() {
                this.resetAlert()

                if (!this.$refs.form.validate()) {
                    return false
                } else if (window.grecaptcha.getResponse().length === 0) {
                    this.captchaErrorMessage = 'Please verify that you are not a robot.'
                    this.captchaErrorClass = 'v-input--has-state error--text'
                    return false
                }
                return true
            },

            resetCaptchaError() {
                this.captchaErrorMessage = ''
                this.captchaErrorClass = ''
            },

            verifyCaptcha(captchaResponse) {
                const vm = this

                if (vm.validate()) {
                    this.resetCaptchaError()

                    let result = null

                    APIService.verifyCaptcha(captchaResponse)
                        .then(function (apiResponse) {
                            result = apiResponse.data
                            vm.verifiedCaptcha = result.success
                        })
                        .catch(function () {
                            vm.displayAlert('error', 'Something went wrong with captcha verification. Please refresh the page and try again.')
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
                            vm.displayAlert('info', 'Thanks for contacting me. Your message was sent successfully. I will get back to you within 48 hours.', true)
                            vm.$refs.form.reset()
                            vm.$refs.recaptcha.reset()
                        })
                        .catch(function () {
                            vm.displayAlert('error', 'Error sending email. Please refresh the page and try again later.')
                            vm.$refs.recaptcha.reset()
                        })
                }
            },

            displayAlert(alertType, alertMessage, dismissible = false) {
                this.alertMessage = alertMessage
                this.dismissible = dismissible
                this.alertType = alertType
                this.showAlert = true
            },

            resetAlert() {
                this.alertMessage = ''
                this.showAlert = false
            }
        }
    }
</script>