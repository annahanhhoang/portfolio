<template>
  <v-row align="center" class="about-page">
    <!--
      BEGIN LEFT COLUMN
    -->
    <v-col cols="12" md="8" class="pt-0">
      <!--
        BEGIN WHO I AM SECTION
      -->
      <section class="about-me">
        <h1>Who I am</h1>

        <v-row>
          <v-col cols="12" sm="7" md="8" class="pt-0">
            I am an Asian girl named Anna, hence the name Asianna. I'm a full time full-stack
            developer and part-time traveller (or vise versa, depend on the season or my mood).
            <br />
            <br />I have 6 years official and 10 years unofficial experience working as a
            web/software developer. I have worked in big corporates (J.P.Morgan, Fujitsu Network
            Communication, etc.) as well as small start-up environment. Professionally, I
            specialize in Vue.js (Veutify), Node.js (Express) and Java development. I can also do
            database/server management and basic graphic design.
            <br />
            <br />When I'm not sitting in front of the laptop, I specialize in hopping around. I've
            travelled to 15 countries and lived in 3. So far, Myanmar has been the most interesting
            place I've ever been.
          </v-col>

          <!--
            BEGIN CONTACT INFO SECTION
          -->
          <v-col cols="12" sm="5" md="4" class="pt-0">
            <v-row>
              <v-col cols="4" md="5" xl="4" class="label">LOCATION:</v-col>
              <v-col cols="8" md="7" xl="8">Dallas, Texas</v-col>
              <v-col cols="4" sm="4" md="5" xl="4" class="label">EMAIL:</v-col>
              <v-col cols="8" sm="8" md="7" xl="8">
                <a href="mailto:anna.hanh.hoang@gmail.com" target="_top">
                  anna.hanh.hoang@gmail.com
                </a>
              </v-col>
              <v-col cols="4" md="5" xl="4" class="label">PHONE:</v-col>
              <v-col cols="8" md="7" xl="8">469-831-0504</v-col>
              <v-col cols="4" md="5" xl="4" class="label">SKYPE:</v-col>
              <v-col cols="8" md="7" xl="8">hanh.v.i.p</v-col>
              <v-col cols="4" md="5" xl="4" class="label">RESUME:</v-col>
              <v-col cols="8" md="7" xl="8">
                <Resume></Resume>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </section>

      <!--
        BEGIN WHAT I CAN DO SECTION
      -->
      <section class="service">
        <h1>What I can do</h1>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="4" class="service-item">
            <v-icon>mdi-web</v-icon>
            <div>Website Development</div>
          </v-col>
          <v-col cols="12" sm="4" class="service-item">
            <v-icon>mdi-monitor</v-icon>
            <div>Application Development</div>
          </v-col>
          <v-col cols="12" sm="4" class="service-item">
            <v-icon>mdi-cellphone</v-icon>
            <div>Mobile App Development</div>
          </v-col>
        </v-row>
      </section>

      <!--
        BEGIN WHY ME SECTION
      -->
      <section>
        <h1>Why choose me</h1>
        <v-row align="center" justify="center" class="reason">
          <v-col cols="12" sm="4" class="reason-item">
            <v-icon>mdi-responsive</v-icon>
            <div>Responsive</div>
            <div class="reason-detail">Works on any devices, any screen sizes, big or small</div>
          </v-col>
          <v-col cols="12" sm="4" class="reason-item">
            <v-icon>mdi-speedometer</v-icon>
            <div>Robust</div>
            <div
              class="reason-detail"
            >Intuiative user interface, fast loading time, lag free interaction</div>
          </v-col>
          <v-col cols="12" sm="4" class="reason-item">
            <v-icon>mdi-shield-check</v-icon>
            <div>Reliable</div>
            <div class="reason-detail">Pixel-perfect code custom-made to your needs</div>
          </v-col>
        </v-row>
      </section>
    </v-col>

    <!--
      BEGIN RIGHT COLUMN
    -->
    <v-col cols="12" md="4" class="side-image hidden-sm-and-down">
      <!--
        BEGIN SIDE IMAGE SECTION
      -->
      <div class="talk-bubble tri-right round btm-left-in">
        <div class="talktext">
          <p>Let's build something great together!</p>
        </div>
      </div>
      <div class="side-image--img"></div>
    </v-col>
  </v-row>
</template>

<script>
import Resume from '@/components/ResumeDownload.vue';

export default {
  components: {
    // Resume download component
    Resume,
  },
};
</script>
