<template>
  <div class="social-link mx-2">
    <a v-for="item in accounts" :key="item.id" :href="item.link">
      <v-icon :x-large="xl">{{ item.icon }}</v-icon>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accounts: [
        {
          id: 'LinkedIn',
          icon: 'mdi-linkedin-box',
          link: 'https://www.linkedin.com/in/anna-hoang-67023654',
        },
        { id: 'GitHub', icon: 'mdi-github-box', link: 'https://github.com/annahanhhoang/' },
        { id: 'Facebook', icon: 'mdi-facebook-box', link: '#' },
        { id: 'Email', icon: 'mdi-email', link: 'mailto:anna.hanh.hoang@gmail.com' },
        { id: 'Phone', icon: 'mdi-phone', link: 'tel:+1-469-831-0504' },
      ],
    };
  },
  props: {
    xl: {
      type: Boolean | String,
      default: false,
    },
  },
};
</script>
