<template>
    <v-container fluid fill-height grid-list-xl class="experience-page">
        <v-layout row>
            <v-flex xs12>
                <h1>Where I have been </h1>
                <v-timeline class="timeline">
                    <v-timeline-item v-for="item in experiences" :key="item.id" class="timeline-item">
                        <template v-slot:opposite>
                            <span class="timeline-duration">{{item.duration}}</span>
                        </template>

                        <v-card class="elevation-2">
                            <div class="timeline-title pa-3">
                                <span class="timeline-company">{{item.company}}, &nbsp;</span>
                                <span class="timeline-position">{{item.position}}</span>
                                <div class="timeline-company-overview">
                                    {{item.companyOverview}}
                                </div>
                            </div>
                            
                            <div class="timeline-text px-3 pb-3">
                                <p> {{item.responsibility}}</p>
                                <div>
                                    <v-chip v-for="skill in item.tech">{{skill}}</v-chip>
                                </div>
                            </div>
                        </v-card>
                    </v-timeline-item>
                </v-timeline>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data: () => {
            return {
                experiences: [
                    {
                        id: 1,
                        company: 'Fujitsu Network Communication',
                        position: 'Full Stack Developer II',
                        duration: 'Sep 2018 - now',
                        companyOverview: 'FNC is a manufacturer of network equipment and a patent-holder in optical networking technology. The company also delivers custom, end-to-end network integration and management solutions.',
                        responsibility: 'Responsible for redesigning the Network Operation Center’s real-time dashboard',
                        tech: ['Vue.js', 'NodeJS (Express)', 'REST API', 'webpack', 'docker', 'nginx', 'MySQL', 'Oracle']
                    },
                    {
                        id: 2,
                        company: 'GoQuo',
                        position: 'Front-end Developer',
                        duration: 'Jul 2017 - July 2018 ',
                        companyOverview: 'GoQuo is one of the leaders in Asia market in Airline Ecommerce, Ancillary, Loyalty and Customer Analytical platforms.',
                        responsibility: 'Responsible for redesigning and creating new clients’ holiday packages booking sites.',
                        tech: ['Vue.js', 'Rest API', 'SASS', 'CSS3', 'webpack', 'AWS']
                    },
                    {
                        id: 3,
                        company: 'JPMorgan Chase',
                        position: 'Project Lead',
                        duration: 'Sep 2015 - Nov 2016',
                        companyOverview: 'JPMC is an American multinational investment bank and financial services company. ',
                        responsibility: 'Responsible for leading a team of 5 on maintaining, improving and developing new features for a web reporting system as well as interviewing and training new team members ',
                        tech: ['Java, JSP', 'JavaScript', 'jQuery', 'Bootstrap', 'HTML5', 'CSS3', 'XML', 'Microsoft SQL server']
                    },
                    {
                        id: 4,
                        company: 'JPMorgan Chase',
                        position: 'Technology Analyst/Summer Intern',
                        duration: 'Jun 2013 - Nov 2016',
                        companyOverview: '',
                        responsibility: 'Responsile for designing and developing an internal website to manage trades reject queue.',
                        tech: ['Java', 'JSF', 'DB2']
                    },
                ]
            }
        }
    }
</script>