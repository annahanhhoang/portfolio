<template>
  <v-row justify="space-around" class="skill-page">
    <v-col cols="12">
      <h1>What I know</h1>
    </v-col>

    <!--
            BEGIN MY EDUCATION SECTION
    -->
    <v-col cols="12" md="4" class="edu-content py-0">
      <h2>My education</h2>
      <div class="edu-item" v-for="item in edu" :key="item.school">
        <div class="edu-school">{{ item.school }}</div>
        <div class="edu-item-content text-right">
          <div class="edu-item-degree title">{{ item.degree }}</div>
          <div>{{ item.time }}</div>
        </div>
      </div>
    </v-col>

    <!--
            BEGIN MY SKILLS SECTION
    -->
    <v-col cols="12" md="4" class="py-0">
      <h2>My skills</h2>
      <div class="skills-item" v-for="item in skills" :key="item.category">
        <div class="skills-title label">{{ item.category }}</div>
        <v-chip v-for="(skill, i) in item.skillList" :key="`skill${i}`">{{ skill }}</v-chip>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      edu: [
        {
          school: 'UNIVERSITY OF TEXAS AT DALLAS',
          degree: 'Bachelor of Science in Software Engineering',
          time: '2012 - 2014',
        },
        {
          school: 'Richland College',
          degree: 'Associate of Science in Software Engineering',
          time: '2010 - 2012',
        },
        { school: 'NIIT', degree: 'Software Engineering', time: '2006 - 2009' },
      ],
      skills: [
        {
          category: 'language',
          skillList: [
            'NodeJS(Express)',
            'HTML 5',
            'CSS 3',
            'SASS',
            'JavaScript',
            'Java',
            '.NET',
            'batch and shell programming',
          ],
        },
        {
          category: 'Framework',
          skillList: ['Vue.js', 'Vuetify', 'Materialize CSS', 'Bootstrap', 'jQuery', 'Spring MVC'],
        },
        {
          category: 'Database',
          skillList: ['Microsoft SQL Server', 'MySQL', 'Oracle', 'DB2', 'MongoDB'],
        },
        {
          category: 'Source control',
          skillList: ['GitHub', 'GitLab', 'SVN'],
        },
        {
          category: 'SOFTWARE DEVELOPMENT METHODOLOGY',
          skillList: ['Agile (Scrum, Kanban)', 'Waterfall'],
        },
        {
          category: 'OPERATING SYSTEMS',
          skillList: ['Windows', 'Red Hat', 'Ubuntu', 'Unix', 'Macintosh OS X (basic)'],
        },
      ],
    };
  },
};
</script>
