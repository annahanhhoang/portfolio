<template>
    <v-layout row class="resume-page">
        <v-flex xs12 class="resume-page-content">
            <section>
                <v-layout row wrap>
                    <v-flex xs8>
                        <h1>Anna Hoang</h1>
                        <p>
                            Experienced, self-motivated, solutions-driven and detail-oriented full-stack developer specialized in Vue.js, Vuetify, Node.js and Java.
                        </p>
                        <strong>Visa status: Eligible to work in the U.S. with no restrictions </strong>
                    </v-flex>
                    <v-flex xs4 class="resume-contact">
                        <v-layout row wrap fill-height align-center>
                            <v-flex xs2><v-icon>mdi-email</v-icon></v-flex>
                            <v-flex xs10><a href="mailto:anna.hanh.hoang@gmail.com"></a>anna.hanh.hoang@gmail.com</v-flex>
                            <v-flex xs2><v-icon>mdi-phone</v-icon></v-flex>
                            <v-flex xs10>1 469 831 0504</v-flex>
                            <v-flex xs2><v-icon>mdi-linkedin-box</v-icon></v-flex>
                            <v-flex xs10><a href="https://www.linkedin.com/in/hanh-hoang-67023654/">https://www.linkedin.com/in/hanh-hoang-67023654/</a></v-flex>
                            <v-flex xs2><v-icon>mdi-web</v-icon></v-flex>
                            <v-flex xs10><a href="https://asianna.github.io">https://asianna.github.io</a></v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </section>
            <!--
                BEGIN SKILL SECTION
            -->
            <section>
                <v-layout row>
                    <v-flex xs12>
                        <div class="label">
                            <v-icon color="primary" class="mr-2">mdi-lightbulb-on</v-icon>
                            SKILLS
                        </div>
                    </v-flex>
                </v-layout>

                <v-layout row v-for="(item,i) in skills" :key="i">
                    <v-flex xs3 class="resume-left-col">
                        {{item.category}}:
                    </v-flex>
                    <v-flex xs9>
                        {{ item.skillList.join(", ") }}
                    </v-flex>
                </v-layout>
            </section>
            <!--
                BEGIN EXPERIIENCE SECTION
            -->
            <section>
                <v-layout row>
                    <v-flex xs12>
                        <div class="label">
                            <v-icon color="primary" class="mr-2">mdi-briefcase</v-icon>
                            EXPERIENCES
                        </div>
                    </v-flex>
                </v-layout>

                <v-layout row v-for="(item,i) in experiences" :key="`experience${i}`" class="mb-3">
                    <v-flex xs3 class="resume-left-col">
                        <div class="resume-highlighted">{{item.company}}</div>
                        <div>{{item.duration}}</div>
                    </v-flex>
                    <v-flex xs9>
                        <div class="resume-timeline-position">{{item.position}}</div>
                        <p>{{item.responsibility}}</p>
                        <ul>
                            <li v-for="(desc, idx) in item.desc" :key="`desc${idx}`">{{desc}}</li>
                        </ul>
                    </v-flex>
                </v-layout>
            </section>
            <!--
                BEGIN EDUCATION SECTION
            -->
            <section>
                <v-layout row>
                    <v-flex xs12>
                        <div class="label">
                            <v-icon color="primary" class="mr-2">mdi-school</v-icon>
                            EDUCATION
                        </div>
                    </v-flex>
                </v-layout>

                <v-layout row v-for="(item,i) in edu" :key="`edu${i}`" class="mb-3">
                    <v-flex xs3 class="resume-left-col">
                        <div class="resume-highlighted">{{item.school}}</div>
                        <div>{{item.time}}</div>
                    </v-flex>
                    <v-flex xs9>
                        <div class="resume-edu-degree">{{item.degree}}</div>                        
                        <ul>
                            <li v-for="(subItem,idx) in item.achievement " :key="`subItemInfo${idx}`"> {{subItem}}</li>
                        </ul>
                    </v-flex>
                </v-layout>
            </section>

            <!--
                BEGIN ADDITIONAL INFO SECTION
            -->
            <section>
                <v-layout row>
                    <v-flex xs12>
                        <div class="label">
                            <v-icon color="primary" class="mr-2">mdi-information</v-icon>
                            ADDITIONAL INFORMATION
                        </div>
                    </v-flex>
                </v-layout>

                <v-layout row>
                    <v-flex xs12>                        
                        <ul>
                            <li v-for="(item,i) in additionalInfo" :key="`info${i}`"> {{item}}</li>
                        </ul>
                    </v-flex>
                </v-layout>
            </section>

        </v-flex>
    </v-layout>
</template>
<script>
    export default {
        data: () => {
            return {
                skills: [
                    { category: 'Language', skillList: ['Java', '.NET', 'batch and shell programming', 'HTML 5', 'CSS 3', 'SASS', 'JavaScript', 'NodeJS(Express)'] },
                    { category: 'Framework', skillList: ['Bootstrap', 'Vuetify', 'Materialize CSS', 'Vue.js', 'jQuery', 'Spring MVC'] },
                    { category: 'Database', skillList: ['MySQL', 'Microsoft SQL Server', 'Oracle'] },
                    { category: 'Source control', skillList: ['Git', 'SVN'] },
                    { category: 'SDLC', skillList: ['Agile (Scrum, Kanban)', 'Waterfall', 'V - Model'] },
                    { category: 'OS', skillList: ['Red Hat', 'Ubuntu', 'Windows', 'Macintosh OS X (basic)'] },
                ],
                experiences: [
                    {
                        company: 'Fujitsu Network Communication',
                        position: 'Full-stack Developer II',
                        duration: 'Sep 2018 - now',
                        companyOverview: 'FNC is a manufacturer of network equipment and a patent-holder in optical networking technology. The company also delivers custom, end-to-end network integration and management solutions.',
                        responsibility: 'Responsible for redesigning the Network Operation Center\'s real-time dashboard',
                        desc: [
                            'Improved customers\' satisfaction  with the new dashboard, hence incresed sales',
                            'Recognized by the senior manager for innovation encouragement ',
                            'Reduced production issue’s troubleshooting time by 90% by creating database auto backup process',
                            'Significantly increase usability by redesigning different trackers and monitors on the dashboard '
                        ],
                        tech: ['Vue.js', 'NodeJS (Express)', 'REST API', 'webpack', 'docker', 'nginx', 'MySQL', 'Oracle']
                    },
                    {
                        company: 'GoQuo',
                        position: 'Front-end Developer',
                        duration: 'Jul 2017 - Jul 2018 ',
                        companyOverview: 'GoQuo is one of the leaders in Asia market in Airline Ecommerce, Ancillary, Loyalty and Customer Analytical platforms.',
                        responsibility: 'Responsible for redesigning and creating new clients\'s holiday packages booking sites.',
                        tech: ['Vue.js', 'Rest API', 'SASS', 'CSS3', 'webpack', 'AWS'],
                        desc: [
                            'Significantly increase traffic after redesigning clients’ websites',
                            'Increase booking by 20% by implemented Internet Booking Engine using Vue.JS',
                            'Increased conversation rate by 20% by implementing partial hotel stay on clients’ websites',
                        ],
                    },
                    {
                        company: 'JPMorgan Chase',
                        position: 'Project Lead',
                        duration: 'Sep 2015 - Nov 2016',
                        companyOverview: 'JPMC is an American multinational investment bank and financial services company. ',
                        responsibility: 'Responsible for leading a team of 5 on maintaining, improving and developing new features for a web reporting system as well as interviewing and training new team members ',
                        tech: ['Java, JSP', 'JavaScript', 'jQuery', 'Bootstrap', 'HTML5', 'CSS3', 'XML', 'Microsoft SQL server'],
                        desc: [
                            'Collaborated with business users in defining requirements, requirement changes, performance tuning, and patches',
                            'Collaborated with system admins, database admins, infrastructure group and production support team to investigate and solve production issues',
                            'Reduced disk space usage on servers by 80% by creating automated jobs to archive and clean up old files',
                            'Eliminated 90% production issues related to files transfer by replacing file transfer software.',
                            'Created and enhanced alert processes, hence cut down troubleshooting time by 30%',
                            'Improved performance by 50% by optimizing stored procedures',
                            'Identified and replaced spaghetti code. Cut down 30% lines of code.',
                            'Redesigned the UI using HTML5 and CSS 3 - Bootstrap',
                            'Directed and supervised code deployment, project planning and peer review meetings',
                            'Built a Confluence page detailing application FAQ, application and server troubleshooting',
                            'Designed and developed an internal website to manage trades reject queue. ',
                            'Designed and implemented an internal website featuring JPMC campuses’ information with interactive map, local news and point of interests for visitors, new employees and interns.',
                            'Mentor summer interns',
                            'Actively participated in local colleges recruiting events',
                        ],
                    },
                ],
                additionalInfo: [
                    'Took a solo self - discovery trip cross - country, the Caribbean and to South East Asia from Nov 2016 to June 2017. Improved soft skills such as planning, budgeting, negotiation, adaptability.',
                    'Won JPMorgan Chase Technology Analyst 2015 competition among 25 teams with a fully tested and production - ready task manager web app to help with JPMC’s go live events.',
                    'Volunteered with JPMorgan Chase Technology for Social Good program to help NGOs with their websites.',

                ],
                edu: [
                    {
                        school: 'SYRACUSE UNIVERSITY',
                        degree: 'Master of Science in Cybersecurity',
                        time: '2017 - 2020',
                        achievement : []
                    },
                    {
                        school: 'UNIVERSITY OF TEXAS AT DALLAS',
                        degree: 'Bachelor of Science in Software Engineering',
                        time: '2012 - 2014',
                        achievement : [
                            'Full-ride scholarship',
                        ]
                    },
                    {
                        school: 'Richland College',
                        degree: 'Associate of Science in Software Engineering',
                        time: '2010 - 2012',
                        achievement : [
                            'GPA: 3.89/4',
                            'Phi Theta Kappa honor society member',
                            'Richland College President\'s Honor Roll',
                            'Math Association of America Calculus Bowl finalists'
                        ]
                    },
                ],
            }
        }
    }
</script>
