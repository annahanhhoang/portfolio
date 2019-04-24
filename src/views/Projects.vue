<template>
    <v-layout row wrap class="project-page">
        <v-flex xs12>
            <!--
                BEGIN WHAT I HAVE DONE
            -->
            <h1>What I have done.</h1>
            <v-carousel hide-controls light :cycle="carouselCycle" :height="carouselHeight" v-resize="onResize">
                <v-carousel-item v-for="(item,i) in projects"
                                 :key="i">
                    <v-container>
                        <v-layout row wrap>
                            <v-flex xs12 md4 lg3>
                                <h2>{{item.name}}</h2>

                                <h3>PROJECT DETAIL</h3>
                                <p> {{item.desc}} </p>

                                <h3>TECHNOLOGIES USED</h3>
                                <img v-for="(tech,i) in item.techList" :src="buildImageUrl(tech.path)" :alt="tech.name" :key="i" class="project-tech" />
                            </v-flex>
                            <v-flex md8 lg9 class="hidden-sm-and-down">
                                <img :src="buildImageUrl(item.src)" class="project-screenshot" />
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-carousel-item>
            </v-carousel>
        </v-flex>
    </v-layout>
</template>

<script>

    export default {
        data: () => {
            return {
                carouselCycle: false,
                carouselHeight: 500,
                projects: [
                    {
                        name: 'Ryo fashion',
                        desc: 'Designed and developed a website for a fashion store. The site displayed products grouped by categories, new and best-selling products, let users filter products based on different conditions, cooment on products and send order to the store.',
                        techList: [
                            {
                                name: 'HTML ',
                                path: 'logos/html5.svg'
                            },
                            {
                                name: 'CSS ',
                                path: 'logos/css3.svg'
                            },
                            {
                                name: 'Javascript',
                                path: 'logos/js.svg'
                            },
                            {
                                name: 'C#',
                                path: 'logos/net.svg'
                            },
                            {
                                name: 'Microsoft SQL Server',
                                path: 'logos/sql.svg'
                            }
                        ],
                        src: 'Ryo.jpg'
                    },
                    {
                        name: 'An internal reporting system',
                        desc: 'The system received feed files from different upstream systems, consolidated data, generated reposrts based on different filter conditions and sent them out to users',
                        techList: [
                            {
                                name: 'Bootstrap',
                                path: 'logos/bootstrap.svg',
                            },
                            {
                                name: 'Java',
                                path: 'logos/java.svg',
                            },
                            {
                                name: 'jQuery',
                                path: 'logos/jquery.svg',
                            },
                            {
                                name: 'XML',
                                path: 'logos/xml.svg',
                            },
                            {
                                name: 'Microsoft SQL Server',
                                path: 'logos/sql.svg'
                            },
                            {
                                name: 'Apache Tomcat',
                                path: 'logos/tomcat.svg',
                            },
                        ],
                        src: ''
                    },
                    {
                        name: 'FNOC Dashboard',
                        desc: 'The real-time dashboard contains charts to track alarms, tickets, events, connections and devices. The charts display different color base on severity, i.e red is critical, orange is major, yellow is minor, green is clear. ',
                        techList: [
                            {
                                name: 'Vue.js',
                                path: 'logos/vue.svg',
                            },
                            {
                                name: 'Vuetify',
                                path: 'logos/vuetify.svg',
                            },
                            {
                                name: 'SASS',
                                path: 'logos/sass.svg',
                            },
                            {
                                name: 'NodeJS',
                                path: 'logos/node.svg',
                            },
                            {
                                name: 'npm',
                                path: 'logos/npm.svg',
                            },
                            {
                                name: 'Maria DB',
                                path: 'logos/mariadb.svg'
                            },
                            {
                                name: 'nginx',
                                path: 'logos/nginx.svg',
                            },
                        ],
                        src: 'Dashboard.png'
                    },
                    {
                        name: 'FNOC Maintenance Tracker',
                        desc: 'The maintenance tracker is displayed in calendar format. The calendar shows the color-coded ongoing and upcoming maintenance windows, i.e tan is past events, blue is ongoing, orange is events upcoming in less than 8 hours, green is upcoming events. Users can view the calendar in week or month format, as well as click on the events to view the event\'s detail information',
                        techList: [
                            {
                                name: 'Vue.js',
                                path: 'logos/vue.svg',
                            },
                            {
                                name: 'Vuetify',
                                path: 'logos/vuetify.svg',
                            },
                            {
                                name: 'SASS',
                                path: 'logos/sass.svg',
                            },
                            {
                                name: 'NodeJS',
                                path: 'logos/node.svg',
                            },
                            {
                                name: 'npm',
                                path: 'logos/npm.svg',
                            },
                            {
                                name: 'Oracle',
                                path: 'logos/oracle.svg',
                            },
                            {
                                name: 'IIS',
                                path: 'logos/iis.svg',
                            },
                        ],
                        src: 'Tracker.jpg'
                    }
                ]
            }
        },
        
        methods: {
            //resize carouselCycle on different screen size
            onResize() {
                if (window.innerWidth >= 1440) {
                    this.carouselHeight = 725
                }
                else if (window.innerWidth >= 1024 && window.innerWidth < 1440) {
                    this.carouselHeight = 550
                }
                else {
                    this.carouselHeight = 500
                }
            },

            //build image path
            buildImageUrl(name) {
                if (name) {
                    return require(`@/assets/${name}`);
                }
            },
        }
    }
</script>