<template>
  <v-row class="project-page">
    <v-col cols="12" class="py-0">
      <!--
        BEGIN WHAT I HAVE DONE
      -->
      <h1>What I have done.</h1>
      <v-carousel
        light
        :show-arrows="false"
        :cycle="carouselCycle"
        :height="carouselHeight"
        v-resize="onResize"
      >
        <v-carousel-item v-for="(item, i) in projects" :key="i">
          <v-container>
            <v-row align="center" justify="center">
              <v-col cols="12" md="5" lg="3">
                <p class="display-1">{{ item.name }}</p>

                <div class="label">PROJECT DETAIL</div>
                <p>{{ item.desc }}</p>

                <div class="label">PROJECT INFO</div>
                <v-row align="center" justify="center" class="mb-2">
                  <v-col cols="6" sm="2" md="5" lg="4">
                    <v-icon class="mr-1">mdi-calendar-range</v-icon>
                    <span>Date:</span>
                  </v-col>
                  <v-col cols="6" sm="10" md="7" lg="8">{{ item.date }}</v-col>

                  <v-col cols="6" sm="2" md="5" lg="4">
                    <v-icon class="mr-1">mdi-account</v-icon>
                    <span>Category:</span>
                  </v-col>
                  <v-col cols="6" sm="10" md="7" lg="8">{{ item.category }}</v-col>

                  <v-col cols="6" sm="2" md="5" lg="4">
                    <v-icon class="mr-1">mdi-tag</v-icon>
                    <span>Client:</span>
                  </v-col>
                  <v-col cols="6" sm="10" md="7" lg="8">{{ item.client }}</v-col>
                </v-row>

                <div class="label mb-1">TECHNOLOGIES USED</div>
                <img
                  v-for="(tech, i) in item.techList"
                  :src="buildImageUrl(tech.path)"
                  :alt="tech.name"
                  :key="i"
                  class="project-tech"
                />
              </v-col>
              <v-col md="7" lg="9" class="hidden-sm-and-down">
                <img :src="buildImageUrl(item.src)" class="project-screenshot" />
              </v-col>
            </v-row>
          </v-container>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    carouselCycle: false,
    carouselHeight: 500,
    projects: [
      {
        name: 'Ryo fashion',
        date: 'Apr 2009',
        client: 'Ryo shop',
        category: 'New development',
        desc:
          'Designed and developed a website for a fashion store. The site displayed products grouped by categories, New and best-selling products, let users filter products based on different conditions, cooment on products and send order to the store.',
        techList: [
          {
            name: 'HTML ',
            path: 'logos/html5.svg',
          },
          {
            name: 'CSS ',
            path: 'logos/css3.svg',
          },
          {
            name: 'Javascript',
            path: 'logos/js.svg',
          },
          {
            name: 'C#',
            path: 'logos/net.svg',
          },
          {
            name: 'Microsoft SQL Server',
            path: 'logos/sql.svg',
          },
        ],
        src: 'Ryo.jpg',
      },
      {
        name: 'An internal reporting system',
        date: 'Sep 2015 - Nov 2016',
        client: 'JP Morgan Chase',
        category: 'Maintenance, New development',
        desc:
          'The system received feed files from different upstream systems, consolidated data, generated reposrts based on different filter conditions and sent them out to users',
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
            path: 'logos/sql.svg',
          },
          {
            name: 'Apache Tomcat',
            path: 'logos/tomcat.svg',
          },
        ],
        src: '',
      },
      {
        name: 'FNOC Dashboard',
        date: 'Oct 2018 - Nov 2018',
        client: 'Fujitsu Network Communication',
        category: 'New development',
        desc:
          'The real-time dashboard contains charts to track alarms, tickets, events, connections and devices. The charts are color-coded base on severity, i.e red is critical, orange is major, yellow is minor, green is clear. ',
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
            path: 'logos/mariadb.svg',
          },
          {
            name: 'nginx',
            path: 'logos/nginx.svg',
          },
        ],
        src: 'Dashboard.png',
      },
      {
        name: 'FNOC Maintenance Tracker',
        date: 'Nov 2018 - Mar 2019',
        client: 'Fujitsu Network Communication',
        category: 'New development',
        desc:
          "The maintenance tracker, displayed in calendar format, shows the color-coded maintenance windows. Users can view the calendar in week or month format, as well as click on the events to view the event's detail information",
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
        src: 'Tracker.jpg',
      },
    ],
  }),

  methods: {
    // resize carouselCycle on different screen size
    onResize() {
      if (window.innerWidth >= 1440) {
        this.carouselHeight = 725;
      } else if (window.innerWidth >= 1024 && window.innerWidth < 1440) {
        this.carouselHeight = 625;
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        this.carouselHeight = 500;
      } else {
        this.carouselHeight = 650;
      }
    },

    // build image path
    buildImageUrl(name) {
      if (name) {
        return require(`@/assets/${name}`);
      }
      return null;
    },
  },
};
</script>
