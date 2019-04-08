<template>
    <v-container fluid grid-list-xl class="about-page">
        <v-layout row wrap>
            <v-flex xs12 md8>
                <h1>Who I am.</h1>
                <p>
                    I am an Asian girl named Anna (hence the logo. Bonus point for you if you can recognize Vietnam map!). I'm a full time full-stack developer and part-time traveller
                    (or vise versa, depend on the season or my mood).<br /><br />
                    Professionally, I specialize in Vue.js (Veutify), Node.js (Express) and Java development. When I'm not sitting in front of the laptop, I specialize in hopping around.
                </p>
            </v-flex>
            <v-flex md4>
                <v-layout row wrap>
                    <v-flex xs3 sm2 md4 class="label">
                        LOCATION
                    </v-flex>
                    <v-flex xs9 sm10 md8>Dallas, Texas</v-flex>

                    <v-flex xs3 sm2 md4 class="label">
                        EMAIL
                    </v-flex>
                    <v-flex xs9 sm10 md8>
                        <a href="mailto:anna.hanh.hoang@gmail.com" target="_top">
                            anna.hanh.hoang@gmail.com
                        </a>
                    </v-flex>

                    <v-flex xs3 sm2 md4 class="label">
                        PHONE
                    </v-flex>
                    <v-flex xs9 sm10 md8>469-831-0504</v-flex>

                    <v-flex xs3 sm2 md4 class="label">
                        SKYPE
                    </v-flex>
                    <v-flex xs9 sm10 md8>hanh.v.i.p</v-flex>
                </v-layout>
            </v-flex>

            <v-flex md8>
                <h1>What I can do for you.</h1>
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
            <v-flex md4 class="side-image hidden-sm-and-down">
                <div class="talk-bubble tri-right round btm-left-in">
                    <div class="talktext">
                        <p>Let's build something great together!</p>
                    </div>
                </div>

                <div class="side-image--img">
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>