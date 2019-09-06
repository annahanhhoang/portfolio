<template>
  <v-row align="center" justify="center" class="landing-page fill-height">
    <v-col cols="12" sm="8" md="4">
      <v-row>
        <v-col cols="12" md="6" offset-md="3" class="google-logo"></v-col>
        <v-col md="3" class="hidden-sm-and-down"></v-col>

        <v-col cols="12" class="input-search">
          <v-text-field id="txtSearch" ref="txtSearch" type="text" outline hide-details disabled />
          <div class="search-text anim-typewriter">Anna Hoang full stack developer</div>
        </v-col>
        <v-col md="6" class="hidden-sm-and-down text-md-right">
          <v-btn>Google Search</v-btn>
        </v-col>
        <v-col md="6" class="hidden-sm-and-down">
          <v-btn>I'm feeling lucky</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'landing',
  mounted() {
    const vm = this;

    setTimeout(() => {
      vm.$router.push({ name: 'Home' });
    }, 6500);
  },
};
</script>
