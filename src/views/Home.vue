<template>
  <v-container fluid class="home-page">
    <section id="about-section" class="page-section">
      <about></about>
    </section>
    <section id="experience-section" class="page-section">
      <experience></experience>
    </section>
    <section id="skill-section" class="page-section">
      <skill></skill>
    </section>
    <section id="projects-section" class="page-section">
      <projects></projects>
    </section>
  </v-container>
</template>

<script>
import about from '@/views/About.vue';
import experience from '@/views/Experience.vue';
import skill from '@/views/Skills.vue';
import projects from '@/views/Projects.vue';

export default {
  components: {
    about,
    experience,
    skill,
    projects,
  },
};
</script>
