<template>
    <v-layout row wrap class="about-page">
        <!--
            BEGIN LEFT COLUMN
        -->
        <v-flex xs12 md8>
            <!--
                BEGIN WHO I AM SECTION
            -->
            <h1>Who I am.</h1>
            <p>
                I am an Asian girl named Anna (hence the logo. Bonus point for you if you can recognize Vietnam map!). I'm a full time full-stack developer and part-time traveller
                (or vise versa, depend on the season or my mood).<br /><br />
                I have 6 years official and 10 years unofficial experience working as a web/software developer. I have worked in big corporates (J.P.Morgan, Fujitsu Network Communication, etc.)
                as well as small start-up environment. Professionally, I specialize in Vue.js (Veutify), Node.js (Express) and Java development. I can also do databse/server management and
                basic graphic design.<br /><br />
                When I'm not sitting in front of the laptop, I specialize in hopping around. I've travelled to 15 countries and lived in 3. So far, Myanmar has been the most interesting
                place I've ever been to.
            </p>

            <!--
                BEGIN WHAT I HAVE DONE SECTION
            -->
            <h1>What I have done.</h1>
            <v-expansion-panel>
                <v-expansion-panel-content>
                    <template v-slot:header>
                        <div>Web Development</div>
                    </template>
                    <v-card>
                        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                    </v-card>
                </v-expansion-panel-content>
                <v-expansion-panel-content>
                    <template v-slot:header>
                        <div>Application Development</div>
                    </template>
                    <v-card>
                        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                    </v-card>
                </v-expansion-panel-content>
                <v-expansion-panel-content>
                    <template v-slot:header>
                        <div>Mobile Development</div>
                    </template>
                    <v-card>
                        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                    </v-card>
                </v-expansion-panel-content>
                <v-expansion-panel-content>
                    <template v-slot:header>
                        <div>Design</div>
                    </template>
                    <v-card>
                        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-flex>

        <!--
            BEGIN RIGHT COLUMN  
        -->            
        <v-flex xs12 md4>
            <v-layout row wrap full-height>
                <!--
                    BEGIN CONTACT INFO SECTION
                 -->
                <v-flex xs4 sm2 md4 lg3 xl2 class="label">
                    LOCATION:
                </v-flex>
                <v-flex xs8 sm10 md8 lg9 xl10>Dallas, Texas</v-flex>
                <v-flex xs4 sm2 md4 lg3 xl2 class="label">
                    EMAIL:
                </v-flex>
                <v-flex xs8 sm10 md8 lg9 xl10>
                    <a href="mailto:anna.hanh.hoang@gmail.com" target="_top">
                        anna.hanh.hoang@gmail.com
                    </a>
                </v-flex>
                <v-flex xs4 sm2 md4 lg3 xl2 class="label">
                    PHONE:
                </v-flex>
                <v-flex xs8 sm10 md8 lg9 xl10>469-831-0504</v-flex>
                <v-flex xs4 sm2 md4 lg3 xl2 class="label">
                    SKYPE:
                </v-flex>
                <v-flex xs8 sm10 md8 lg9 xl10>hanh.v.i.p</v-flex>
                <v-flex xs4 sm2 md4 lg3 xl2 class="label">
                    RESUME:
                </v-flex>
                <v-flex xs8 sm10 md8 lg9 xl10>
                    <Resume></Resume>
                </v-flex>

                <!--
                    BEGIN SIDE IMAGE SECTION
                -->
                <v-flex xs12 class="side-image hidden-sm-and-down">
                    <div class="talk-bubble tri-right round btm-left-in">
                        <div class="talktext">
                            <p>Let's build something great together!</p>
                        </div>
                    </div>
                    <div class="side-image--img"></div>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
    import Resume from '@/components/ResumeDownload'

    export default {
        components: {
            //Resume download component
            Resume
        }
    }
</script>