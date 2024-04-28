<template>
  <h1 class="mt-2">Projects</h1>
  <div class="container">
    <h2 class="text-start">European In Progress</h2>
    <projects-component
        v-for="project in projects"
        :key="project.id"
        :framework="project.framework"
        :title="project.projectName"
        :fullProjectName="project.fullProjectName"
        :participants="project.participants"
        :budget="project.budget"
        :duration="project.duration"
    ></projects-component>
  </div>
</template>

<script>
import ProjectsComponent from "@/components/ProjectsComponent.vue";
export default {
  components: {
    ProjectsComponent
  },
  data() {
    return {
      projects: [
        {
            id: 1,
            framework: 'Framework	H2020',
            projectName: 'iRead (731724)',
            fullProjectName: 'Infrastructure and integrated tools for personalized learning of reading skill',
            participants: 'NATIONAL TECHNICAL UNIVERSITY OF ATHENS, DOLPHIN COMPUTER ACCESS, FISH IN A BOTTLE, KNOWBLE, GOETEBORGS UNIVERSITET, PANEPISTIMIO IOANNINON',
            budget: '€ 5547042,50',
            duration: '2017-2020 (48 months)',
        },
        {
          id: 1,
          framework: 'Framework erasmus+',
          projectName: 'eCrisis',
          fullProjectName: 'Europe in Crisis',
          participants: 'http://ecrisis.eu/partners',
          budget: '€ 555569,50',
          duration: '2016-2018 (36 months)',
        }
      ]
    }
  },
}
</script>
<style scoped>

</style>