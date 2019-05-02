<template>
    <v-container fluid grid-list-xl class="home-page">
        <section id="about-section" class="page-section"><about></about></section>
        <section id="experience-section" class="page-section"><experience></experience></section>
        <section id="skill-section" class="page-section"><skill></skill></section>
        <section id="projects-section" class="page-section"><projects></projects></section>
    </v-container>
</template>

<script>
    import about from '@/views/About'
    import experience from '@/views/Experience'
    import skill from '@/views/Skills'
    import projects from '@/views/Projects'

    export default {
        components: {
            about,
            experience,
            skill,
            projects,
        },
    }
</script>