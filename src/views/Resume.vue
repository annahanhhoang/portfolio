<template>
  <v-row class="resume-page">
    <v-col cols="12" class="resume-page-content">
      <!--
        BEGIN SUMMARY SECTION
      -->
      <section>
        <v-row>
          <!--
            SUMMARY
          -->
          <v-col cols="8">
            <h1>Anna Hoang</h1>
            <p>
              Experienced, self-motivated, solutions-driven and detail-oriented full-stack developer
              specialized in Vue.js, Vuetify, Node.js and Java.
            </p>
            <strong>Visa status: Eligible to work in the U.S. with no restrictions</strong>
          </v-col>

          <!--
            CONTACT INFO
          -->
          <v-col cols="4" class="resume-contact">
            <v-row class="fill-height" align="center">
              <v-col cols="2">
                <v-icon>mdi-email</v-icon>
              </v-col>
              <v-col cols="10">
                <a href="mailto:anna.hanh.hoang@gmail.com"></a>anna.hanh.hoang@gmail.com
              </v-col>
              <v-col cols="2">
                <v-icon>mdi-phone</v-icon>
              </v-col>
              <v-col cols="10">1 469 831 0504</v-col>
              <v-col cols="2">
                <v-icon>mdi-linkedin-box</v-icon>
              </v-col>
              <v-col cols="10">
                <a
                  href="https://www.linkedin.com/in/anna-hoang-67023654/"
                >https://www.linkedin.com/in/anna-hoang-67023654/</a>
              </v-col>
              <v-col cols="2">
                <v-icon>mdi-web</v-icon>
              </v-col>
              <v-col cols="10">
                <a href="https://asianna.github.io">https://asianna.github.io</a>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </section>

      <!--
        BEGIN SKILL SECTION
      -->
      <section>
        <v-row>
          <v-col cols="12">
            <div class="label">
              <v-icon color="primary" class="mr-2">mdi-lightbulb-on</v-icon>SKILLS
            </div>
          </v-col>
        </v-row>

        <v-row v-for="(item, i) in skills" :key="i">
          <v-col cols="3" class="resume-left-col">{{ item.category }}:</v-col>
          <v-col cols="9">{{ item.skillList.join(', ') }}</v-col>
        </v-row>
      </section>

      <!--
        BEGIN EXPERIIENCE SECTION
      -->
      <section>
        <v-row>
          <v-col cols="12">
            <div class="label">
              <v-icon color="primary" class="mr-2">mdi-briefcase</v-icon>EXPERIENCES
            </div>
          </v-col>
        </v-row>

        <v-row v-for="(item, i) in experiences" :key="`experience${i}`" class="mb-3">
          <v-col cols="3" class="resume-left-col">
            <div class="resume-highlighted">{{ item.company }}</div>
            <div>{{ item.location }}</div>
            <div>{{ item.duration }}</div>
          </v-col>
          <v-col cols="9">
            <div class="resume-timeline-position">{{ item.position }}</div>
            <ol v-if="item.projects.length > 1">
              <li v-for="(proj, n) in item.projects" :key="`proj${n}`">
                <div class="mb-1">Project: {{proj.name}}</div>
                <div class="mb-1">{{proj.desc}}</div>
                <ul>
                  <li v-for="(desc, idx) in proj.achievement" :key="`ar${idx}`">{{ desc }}</li>
                </ul>
              </li>
            </ol>
            <div v-else>
              <div class="mb-4">{{item.projects[0].desc}}</div>
              <ul>
                <li 
                  v-for="(desc, idx) in item.projects[0].achievement" 
                  :key="`ar${idx}`"
                >
                  {{ desc }}
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </section>

      <!--
        BEGIN EDUCATION SECTION
      -->
      <section>
        <v-row>
          <v-col cols="12">
            <div class="label">
              <v-icon color="primary" class="mr-2">mdi-school</v-icon>EDUCATION
            </div>
          </v-col>
        </v-row>

        <v-row v-for="(item, i) in edu" :key="`edu${i}`" class="mb-3">
          <v-col cols="3" class="resume-left-col">
            <div class="resume-highlighted">{{ item.school }}</div>
            <div>{{ item.time }}</div>
          </v-col>
          <v-col cols="9">
            <div class="resume-edu-degree">{{ item.degree }}</div>
            <ul>
              <li
                v-for="(subItem, idx) in item.achievement"
                :key="`subItemInfo${idx}`"
              >{{ subItem }}</li>
            </ul>
          </v-col>
        </v-row>
      </section>

      <!--
        BEGIN ADDITIONAL INFO SECTION
      -->
      <section>
        <v-row>
          <v-col cols="12">
            <div class="label">
              <v-icon color="primary" class="mr-2">mdi-information</v-icon>ADDITIONAL INFORMATION
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <ul>
              <li v-for="(item, i) in additionalInfo" :key="`info${i}`">{{ item }}</li>
            </ul>
          </v-col>
        </v-row>
      </section>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    skills: [
      {
        category: 'Language',
        skillList: [
          'Java',
          '.NET',
          'batch and shell programming',
          'HTML 5',
          'CSS 3',
          'SASS',
          'JavaScript',
          'NodeJS(Express)',
        ],
      },
      {
        category: 'Framework',
        skillList: ['Vue.js', 'jQuery', 'Spring MVC', 'Bootstrap', 'Vuetify', 'Materialize CSS'],
      },
      {
        category: 'Database',
        skillList: ['Microsoft SQL Server', 'MySQL', 'Oracle', 'DB2'],
      },
      {
        category: 'Source control',
        skillList: ['GitHub', 'GitLab', 'GitLab CI', 'SVN'],
      },
      {
        category: 'SDLC',
        skillList: ['Agile (Scrum, Kanban)', 'Waterfall', 'V - Model'],
      },
      {
        category: 'OS',
        skillList: ['Red Hat', 'Ubuntu', 'Windows', 'Macintosh OS X (basic)'],
      },
    ],
    experiences: [
      {
        company: 'Fujitsu Network Communication',
        location: 'Richardson, Texas',
        position: 'Full-stack Developer II',
        duration: 'Sep 2018 - now',
        companyOverview:
          'FNC is a manufacturer of network equipment and a patent-holder in optical networking technology. The company also delivers custom, end-to-end network integration and management solutions.',
        projects: [
          {
            name: 'Dashboard',
            desc:
              "Redesigning the Network Operation Center's real-time dashboard to display tickets, alarms, and devices' health in chart format. The charts are color-coded base on severity.",
            achievement: [
              "Improved customers' satisfaction  with the new dashboard, hence incresed sales",
              'Recognized by the senior manager for innovation encouragement ',
              'Reduced production issue’s troubleshooting time by 90% by creating database auto backup process',
            ],
          },
          {
            name: 'Maintenance Tracker',
            desc:
              "Designed and built the maintenance tracker, which displayed color-coded maintenance windows in calendar format. Users can view the calendar in week or month format, as well as click on the events to view the event's detail information",
            achievement: [
              'Significantly increase usability by redesigning different trackers and monitors on the dashboard ',
            ],
          },
          {
            name: 'Customer Portal',
            desc:
              "Designed and built a web portal so the customer can log in and see all tickets, alarms, devices' health, submit service and maintenance request.",
          },
        ],
        tech: [
          'Google Map API',
          'Vue.js',
          'NodeJS (Express)',
          'REST API',
          'webpack',
          'docker',
          'nginx',
          'MySQL',
          'MS SQL Server',
          'Oracle',
        ],
      },
      {
        company: 'GoQuo',
        location: 'Kuala Lumpur, Malaysia',
        position: 'Front-end Developer',
        duration: 'Jul 2017 - Jul 2018 ',
        companyOverview:
          'GoQuo is one of the leaders in Asia market in Airline Ecommerce, Ancillary, Loyalty and Customer Analytical platforms.',
        projects: [
          {
            name: 'V3 redesign',
            desc: "Redesigned and created new clients's holiday packages booking sites.",
            achievement: [
              'Significantly increase traffic after redesigning clients’ websites',
              'Increase booking by 20% by implemented Internet Booking Engine using Vue.JS',
              'Increased conversation rate by 20% by implementing partial hotel stay on clients’ websites',
            ],
          },
        ],
        tech: ['Vue.js', 'Rest API', 'SASS', 'CSS3', 'webpack', 'AWS'],
      },
      {
        company: 'JPMorgan Chase',
        location: 'Dallas, Texas',
        position: 'Project Lead',
        duration: 'Jun 2013 - Nov 2016',
        companyOverview:
          'JPMC is an American multinational investment bank and financial services company. ',
        projects: [
          {
            name: 'Balance Tracking System',
            desc:
              'Leading a team of 5 on maintaining, improving and developing new features for a web reporting system as well as interviewing and training new team members.',
            achievement: [
              'Collaborated with system admins, database admins, infrastructure group and production support team to investigate and solve production issues',
              'Reduced disk space usage on servers by 80% by creating automated jobs to archive and clean up old files',
              'Eliminated 90% production issues related to files transfer by replacing file transfer software.',
              'Created and enhanced alert processes, hence cut down troubleshooting time by 30%',
              'Improved performance by 50% by optimizing stored procedures',
              'Redesigned the UI using HTML5 and CSS 3 - Bootstrap',
              'Directed and supervised code deployment, project planning and peer review meetings',
              'Mentor summer interns',
            ],
          },
        ],
        tech: [
          'Java, JSP',
          'JavaScript',
          'jQuery',
          'Bootstrap',
          'HTML5',
          'CSS3',
          'XML',
          'Microsoft SQL server',
        ],
      },
    ],
    additionalInfo: [
      'Won JPMorgan Chase Technology Analyst 2015 competition among 25 teams with a fully tested and production - ready task manager web app to help with JPMC’s go live events.',
      'Volunteered with JPMorgan Chase Technology for Social Good program to help NGOs with their websites.',
      'Took a solo self - discovery trip cross - country, the Caribbean and to South East Asia from Nov 2016 to June 2017. Improved soft skills such as planning, budgeting, negotiation, adaptability.',
    ],
    edu: [
      {
        school: 'UNIVERSITY OF TEXAS AT DALLAS',
        degree: 'Bachelor of Science in Software Engineering',
        time: '2012 - 2014',
        achievement: ['Full-ride scholarship'],
      },
      {
        school: 'Richland College',
        degree: 'Associate of Science in Software Engineering',
        time: '2010 - 2012',
        achievement: [
          'GPA: 3.89/4',
          'Phi Theta Kappa honor society member',
          "Richland College President's Honor Roll",
          'Math Association of America Calculus Bowl finalists',
        ],
      },
    ],
  }),
};
</script>
