<template>
    <v-layout row class="resume-page">
        <v-flex xs12 class="resume-page-content">
            <section>            
                <v-layout row wrap>
                    <v-flex xs8>
                        <h1>Anna Hoang</h1>
                        <div class="resume-title">Full-stack developer</div>
                        <div>
                            Experienced, self-motivated, solutions-driven and detail-oriented full-stack developer specialized in Vue.js, Vuetify, Node.js and Java.                            
                        </div>

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
                            <v-flex xs10><a href="https://www.linkedin.com/in/hanh-hoang-67023654/">https://ahoang.com</a></v-flex>
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
                        <div class="label">SKILLS</div>
                    </v-flex>
                </v-layout>
                
                <v-layout row v-for="(item,i) in skills" :key="i">
                    <v-flex xs3>
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
                            <v-icon color="primary">mdi-briefcase</v-icon>
                            EXPERIENCES
                            </div>
                    </v-flex>
                </v-layout>
                
                <v-layout row v-for="(item,i) in experiences" :key="`experience${i}`" class="resume-timeline">     
                    <v-flex xs3 class="resume-timeline-left">
                        <div class="resume-timeline-company">{{item.company}}</div>
                        <div class="resume-timeline-company">{{item.duration}}</div>
                    </v-flex>
                    <v-flex xs9>                
                        <div class="resume-timeline-position">{{item.position}}</div>
                        <div>{{item.responsibility}}</div>
                        <ul></ul>
                    </v-flex>
                </v-layout>
            </section>

            <!-- 
                BEGIN ADDITIONAL INFO SECTION
            -->
            <section></section>

            <!-- 
                BEGIN EDUCATION SECTION
            -->
            <section></section>

            <section></section>
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
                        'Collaborated with business users in defining requirements, requirement changes, performance tuning, and patches',
                        'Led a team of 5 members on collaborating with system admins, database admins, infrastructure group and production support team to investigate and solve production issues',
                        'Directed and supervised code deployment, project planning and peer review meetings',
                        'Interviewed potential candidates with technical questions',
                        'Built a Confluence page detailing application FAQ, application and server troubleshooting',
                        'Designed and developed an internal website to manage trades reject queue. ',
                        'Designed and implemented an internal website featuring JPMC campuses’ information with interactive map, local news and point of interests for visitors, new employees and interns.',
                        'Mentor summer interns',
                        'Actively participated in local colleges recruiting events',
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
                        'Significantly increase traffic after redesigning clients’ websites',
                        'Increase booking by 20% by implemented Internet Booking Engine using Vue.JS',
                        'Increased conversation rate by 20% by implementing partial hotel stay on clients’ websites',
                        ],
                },
            ],
            additionalInfo: [

            ]
        }
    }
}
</script>
