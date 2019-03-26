<template>
    <v-layout row class="about-page">
        <v-flex xs8 class="about-content">
            <v-layout row wrap>
                <v-flex xs8>
                    <h1>Who I am.</h1>
                    <div>I am a full-stack developer that specializes in Vue and Veutify development. </div>
                </v-flex>
                <v-flex xs4>
                    <v-layout row wrap>
                        <v-flex xs4 class="label">
                            LOCATION
                        </v-flex>
                        <v-flex xs8>Dallas, Texas</v-flex>

                        <v-flex xs4 class="label">
                            EMAIL
                        </v-flex>
                        <v-flex xs8>anna.hanh.hoang@gmail.com</v-flex>

                        <v-flex xs4 class="label">
                            PHONE
                        </v-flex>
                        <v-flex xs8>469-831-0504</v-flex>

                        <v-flex xs4 class="label">
                            SKYPE
                        </v-flex>
                        <v-flex xs8>hanh.v.i.p</v-flex>
                    </v-layout>
                </v-flex>

                <v-flex xs12>
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
            </v-layout>
        </v-flex>
        <v-flex xs4 class="side-image">
            <div class="text-xs-right">
                <div>FULL-STACK DEVELOPER</div>
                <div>Anna Hoang</div>
            </div>
            <div class="side-image--img">
            </div>
        </v-flex>
    </v-layout>
</template>