<template>
    <v-layout row class="experience-page">
        <v-flex xs2 class="side-menu">
            <side-menu></side-menu>
        </v-flex>
        <v-flex xs7 class="experience-content">
            <h1>Where I have been </h1>
            <v-timeline>
                <v-timeline-item color="primary">
                    <template v-slot:opposite>
                        <span>09/201 - now</span>
                    </template>
                    <v-card class="elevation-2">
                        <v-card-title class="headline">
                            Fujitsu Network Communication 
                            <small>Full Stack Developer</small>
                        </v-card-title>
                        <v-card-text>
                            <ul>
                                <li>Rcognized by senior manager for encoraging innovation</li>
                                <li>
                                    Reduced production issue&apos;s troubleshooting time by 90% by creating database auto backup process.
                                </li>
                                <li>
                                    Significantly increase usability by redesigning different trackers and monitors on the dashboard
                                </li>
                            </ul>
                        </v-card-text>
                    </v-card>
                </v-timeline-item>

                <v-timeline-item color="primary">
                    <template v-slot:opposite>
                        <span>07/2017 - 07/2108</span>
                    </template>
                    <v-card class="elevation-2">
                        <v-card-title class="headline">
                            GoQuo - &nbsp;
                            <small> Front-end Developer</small>
                        </v-card-title>
                        <v-card-text>
                            <ul>
                                <li>Significantly increase traffic after redesigning clients&apos; websites</li>
                                <li>
                                    Increase booking by 20% by implemented Internet Booking Engine using Vue.JS
                                </li>
                                <li>
                                    Increased conversation rate by 20% by implementing partial hotel stay on clients&apos; websites
                                </li>
                            </ul>
                        </v-card-text>
                    </v-card>
                </v-timeline-item>
                <v-timeline-item color="primary">
                    <template v-slot:opposite>
                        <span>09/2015</span>
                    </template>
                    <v-card class="elevation-2">
                        <v-card-title class="headline">JP Morgan Chase - &nbsp; <small> Project Lead</small></v-card-title>
                        <v-card-text>
                            <ul>
                                <li>Collaborated with business users in defining requirements, requirement changes, performance tuning, and patches</li>
                                <li>
                                    Spearheaded a team effort to increase application&apos;s scalability, stability, and performance:
                                    <ul>
                                        <li>Upgraded servers&apos; hardware, software, and operating system</li>
                                        <li>Reduced servers disk space usage by 80% by creating and implementing automated jobs to archive and clean up old files</li>
                                        <li>Replaced custom files transfer methods with company&apos;s strategic files transfer tool, hence eliminated 90% production issues related to files transfer</li>
                                        <li>Created and enhanced alert processes</li>
                                        <li>Converted 100% existing pages to HTML5 and CSS 3 - Bootstrap</li>
                                        <li>Improved performance by 50% by optimizing stored procedures</li>
                                    </ul>
                                </li>
                                <li>Led a team of 5 members on collaborating with system admins, database admins, infrastructure group and production support team for production issues resolution</li>
                                <li>Directed and supervised project planning and peer review meetings</li>
                                <li>Interviewed potential candidates with technical questions</li>
                                <li>Trained new team members on infrastructure set up, application overview and troubleshooting</li>
                                <li>Trained production support teams across the globe on basic application and servers troubleshooting</li>
                                <li>Actively participated in recruiting events at local universities</li>
                            </ul>
                        </v-card-text>
                    </v-card>
                </v-timeline-item>

                <v-timeline-item color="primary">
                    <template v-slot:opposite>
                        <span>06/2013</span>
                    </template>
                    <v-card class="elevation-2">
                        <v-card-title class="headline">JP Morgan Chase - Technology Analyst/Summer Intern </v-card-title>
                        <v-card-text>
                            Converted to part-time analyst after finishing 10 weeks in an initial intern role with high met performance, then hired as a full-time analyst after graduating.
                            <ul>
                                <li>
                                    Improved and developed new features for a web reporting system using Java, JSP, JavaScript, jQuery, CSS, Microsoft SQL server:
                                    <ul>
                                        <li>Identified and replaced spaghetti code. Cut down 30% lines of code.</li>
                                        <li>Increased UI responsive by replacing fix-sized tables</li>
                                        <li>Created and updated SQL scripts to query database</li>
                                    </ul>
                                </li>
                                <li>Prepared deployment plan, guided production deployment, and performed post-deployment verification task</li>
                                <li>Designed and developed an internal website to manage trades reject queue.</li>
                                <li>Designed and implemented an internal website featuring JPMC campuses&apos; information with interactive map, local news and point of interests for visitors, new employees and interns.</li>
                            </ul>
                        </v-card-text>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-flex>
    </v-layout>
</template>

<script>
    import SideMenu from '@/components/SideMenu'

    export default {
        components: {
            SideMenu
        }
    }
</script>