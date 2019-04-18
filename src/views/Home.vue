<template>
    <v-container fluid grid-list-xl class="home-page">
        <section id="about-section" class="page-section"><about></about></section>
        <section id="experience-section" class="page-section"><experience></experience></section>
        <section id="skill-section" class="page-section"><skill></skill></section>
        <section id="projects-section" class="page-section"><projects></projects></section>
        <section id="blog-section" class="page-section"><blog></blog></section>
        <section id="contact-section" class="page-section"><contact></contact></section>
    </v-container>
</template>

<script>
    import about from '@/views/About'
    import experience from '@/views/Experience'
    import skill from '@/views/Skills'
    import projects from '@/views/Projects'
    import blog from '@/views/Blog'
    import contact from '@/views/Contact'

    export default {
        components: {
            about,
            experience,
            skill,
            projects,
            blog,
            contact
        },
    }
</script>