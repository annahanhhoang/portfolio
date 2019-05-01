<template>
    <v-layout row wrap align-center class="about-page">
        <!--
            BEGIN LEFT COLUMN
        -->
        <v-flex xs12 md8 class="pt-0">
            <!--
                BEGIN WHO I AM SECTION
            -->
            <section class="about-me">
                <h1>Who I am</h1>

                <v-layout row wrap>
                    <v-flex xs12 sm7 md8 class="pt-0">
                            I am an Asian girl named Anna, hence the name Asianna. I'm a full time full-stack developer and part-time traveller
                            (or vise versa, depend on the season or my mood).<br /><br />
                            I have 6 years official and 10 years unofficial experience working as a web/software developer. I have worked in big corporates (J.P.Morgan, Fujitsu Network Communication, etc.)
                            as well as small start-up environment. Professionally, I specialize in Vue.js (Veutify), Node.js (Express) and Java development. I can also do databse/server management and
                            basic graphic design.<br /><br />
                            When I'm not sitting in front of the laptop, I specialize in hopping around. I've travelled to 15 countries and lived in 3. So far, Myanmar has been the most interesting
                            place I've ever been to.
                    </v-flex>
                    
                    <!--
                        BEGIN CONTACT INFO SECTION
                    -->
                    <v-flex xs12 sm5 md4 class="pt-0">
                        <v-layout row wrap>
                            <v-flex xs4 md5 xl4 class="label">
                                LOCATION:
                            </v-flex>
                            <v-flex xs8 md7 xl8>Dallas, Texas</v-flex>
                            <v-flex xs4 sm4 md5 xl4 class="label">
                                EMAIL:
                            </v-flex>
                            <v-flex xs8 sm8 md7 xl8>
                                <a href="mailto:anna.hanh.hoang@gmail.com" target="_top">
                                    anna.hanh.hoang@gmail.com
                                </a>
                            </v-flex>
                            <v-flex xs4 md5 xl4 class="label">
                                PHONE:
                            </v-flex>
                            <v-flex xs8 md7 xl8>469-831-0504</v-flex>
                            <v-flex xs4 md5 xl4 class="label">
                                SKYPE:
                            </v-flex>
                            <v-flex xs8 md7 xl8>hanh.v.i.p</v-flex>
                            <v-flex xs4 md5 xl4 class="label">
                                RESUME:
                            </v-flex>
                            <v-flex xs8 md7 xl8>
                                <Resume></Resume>
                            </v-flex>                
                        </v-layout>
                    </v-flex>
                </v-layout>
            </section>

            <!--
                BEGIN WHAT I CAN DO SECTION
            -->
            <section class="service">
                <h1>What I can do</h1>
                <v-layout row wrap align-center justify-center>
                    <v-flex xs12 sm4 class="service-item">
                        <v-icon>mdi-web</v-icon>
                        <div>Website Development</div>
                    </v-flex>
                    <v-flex xs12 sm4 class="service-item">
                        <v-icon>mdi-monitor</v-icon>
                        <div>Application Development</div>
                    </v-flex>
                    <v-flex xs12 sm4 class="service-item">
                            <v-icon>mdi-cellphone</v-icon>
                        <div>Mobile App Development</div>
                    </v-flex>
                </v-layout>
            </section>

           <!--
                BEGIN WHY ME SECTION
            -->
            <section>
                <h1>Why choose me</h1>
                <v-layout row wrap align-center justify-center class="reason">
                    <v-flex xs12 sm4 class="reason-item">
                        <v-icon>mdi-responsive</v-icon>
                        <div>Responsive</div>
                        <div class="reason-detail">Works on any devices, any screen sizes, big or small</div>
                    </v-flex>
                    <v-flex xs12 sm4 class="reason-item">
                        <v-icon>mdi-speedometer</v-icon>
                        <div>Robust</div>
                        <div class="reason-detail">Intuiative user interface, fast loading time, lag free interaction</div>
                    </v-flex>
                    <v-flex xs12 sm4 class="reason-item">
                            <v-icon>mdi-shield-check</v-icon>
                            <div>Reliable</div>
                            <div class="reason-detail">Pixel-perfect code custom-made to your needs</div>
                    </v-flex>
                </v-layout>
            </section>
        </v-flex>

        <!--
            BEGIN RIGHT COLUMN  
        -->            
        <v-flex xs12 md4 class="side-image hidden-sm-and-down">
            <!--
                BEGIN SIDE IMAGE SECTION
            -->
            <div class="talk-bubble tri-right round btm-left-in">
                <div class="talktext">
                    <p>Let's build something great together!</p>
                </div>
            </div>
            <div class="side-image--img"></div>
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