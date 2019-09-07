<template>
  <v-row justify="center" class="landing-page fill-height">
    <v-col cols="10" sm="8" md="4">
      <div cols="12" class="google-logo"></div>
      <v-text-field outlined hide-details disabled />
      <div class="search-text anim-typewriter">Anna Hoang full stack developer</div>
      <div class="d-flex align-center justify-center">
        <v-btn>Google Search</v-btn>
        <v-btn>I'm feeling lucky</v-btn>
      </div>
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
