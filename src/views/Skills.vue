<template>
    <v-layout row class="skill-page">
        <v-flex xs2 class="side-menu">
            <side-menu></side-menu>
        </v-flex>
        <v-flex xs10>
            <h1>What I know </h1>
            <v-layout row>
                <v-flex xs5 class="edu-content">
                    <h2>My education</h2>

                    <div class="edu-item" v-for="item in edu">
                        <div class="edu-school label">{{item.school}}</div>
                        <div class="edu-item-content">
                            <div class="edu-item-degree">{{item.degree}}</div>
                            <div>{{item.time}}</div>
                        </div>
                    </div>
                </v-flex>

                <v-flex xs5 offset-xs1>
                    <h2>My skills</h2>

                    <div class="skills-item" v-for="item in skills">
                        <div class="skills-title label">{{item.category}}</div>
                        <v-chip v-for="skill in item.skillList">{{skill}}</v-chip>
                    </div>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
    import SideMenu from '@/components/SideMenu'

    export default {
        components: {
            SideMenu
        },
        data() {
            return {
                edu: [
                    { school: 'SYRACUSE UNIVERSITY', degree: 'Master of Science in Cybersecurity', time: '2017 - 2020 (Expected)' },
                    { school: 'UNIVERSITY OF TEXAS AT DALLAS', degree: 'Bachelor of Science in Software Engineering', time: '2012 - 2014' },
                    { school: 'Richland College', degree: 'Associate of Science in Software Engineering', time: '2010 - 2012' },
                    { school: 'NIIT', degree: 'Software Engineering', time: '2006 - 2009' },
                ],
                skills: [
                    { category: 'language', skillList: ['Java', '.NET', 'batch and shell programming', 'HTML 5', 'CSS 3', 'SASS', 'JavaScript', 'NodeJS(Express)'] },
                    { category: 'Framework', skillList: ['Bootstrap', 'Vuetify', 'Materialize CSS', 'Vue.js', 'jQuery', 'Spring MVC'] },
                    { category: 'Database', skillList: ['MySQL', 'Microsoft SQL Server', 'Oracle'] },
                    { category: 'Source control', skillList: ['Git', 'SVN'] },
                    { category: 'SOFTWARE DEVELOPMENT METHODOLOGY', skillList: ['Agile (Scrum, Kanban)', 'Waterfall', 'V - Model'] },
                    { category: 'OPERATING SYSTEMS', skillList: ['Red Hat', 'Ubuntu', 'Windows', 'Macintosh OS X (basic)'] },
                ],
            }
        }
    }
</script>