<template>
  <div class="container">
    <h1 class="mt-2 text-start">Projects</h1>
    <h2 class="text-start">European In Progress</h2>
    <projects-component
        v-for="project in projects_eu_active"
        :key="project.id"
        :id="project.id"
        :framework="project.framework"
        :title="project.project_name"
        :fullProjectName="project.full_title"
        :participants="project.participants"
        :budget="project.budget"
        :duration="project.duration"
        :url="project.project_url"
        :contract_number="project.contract_number"
        :description="project.description"
    ></projects-component>
    <h2 class="text-start">European Completed</h2>
    <projects-component
        v-for="project in projects_eu_completed"
        :key="project.id"
        :id="project.id"
        :framework="project.framework"
        :title="project.project_name"
        :fullProjectName="project.full_title"
        :participants="project.participants"
        :budget="project.budget"
        :duration="project.duration"
        :url="project.project_url"
        :contract_number="project.contract_number"
        :description="project.description"
    ></projects-component>

    <h2 class="text-start">Greek In Progress</h2>
    <projects-component
        v-for="project in projects_gr_active"
        :key="project.id"
        :id="project.id"
        :framework="project.framework"
        :title="project.project_name"
        :fullProjectName="project.full_title"
        :participants="project.participants"
        :budget="project.budget"
        :duration="project.duration"
        :url="project.project_url"
        :contract_number="project.contract_number"
        :description="project.description"
    ></projects-component>

    <h2 class="text-start">Greek Completed</h2>
    <projects-component
        v-for="project in projects_gr_completed"
        :key="project.id"
        :id="project.id"
        :framework="project.framework"
        :title="project.project_name"
        :fullProjectName="project.full_title"
        :participants="project.participants"
        :budget="project.budget"
        :duration="project.duration"
        :url="project.project_url"
        :contract_number="project.contract_number"
        :description="project.description"
    ></projects-component>
  </div>
</template>

<script>
import ProjectsComponent from "@/components/project/ProjectsComponent.vue";
import axios from "axios";
export default {
  components: {
    ProjectsComponent
  },
  data() {
    return {
      apiBaseUrl: process.env.VUE_APP_API_BASE_URL,
      projects_eu_active: [],
      projects_eu_completed: [],
      projects_gr_active: [],
      projects_gr_completed: [],
    }
  },
  methods: {
    fetchData() {
      axios.get(`${this.apiBaseUrl}/projects`)
          .then(response => {
            this.projects_eu_active = response.data['data'].filter(project => project.type === 'EU Funding' && project.status === 'In Progress');
            this.projects_eu_completed = response.data['data'].filter(project => project.type === 'EU Funding' && project.status === 'Completed');
            this.projects_gr_active = response.data['data'].filter(project => project.type === 'Greek Funding' && project.status === 'In Progress');
            this.projects_gr_completed = response.data['data'].filter(project => project.type === 'Greek Funding' && project.status === 'Completed');
          })
          .catch(error => {
            console.error(error);
          });
    }
  },
  mounted() {
    this.fetchData();
  }
}
</script>
<style scoped>

</style>