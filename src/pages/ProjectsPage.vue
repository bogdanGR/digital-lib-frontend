<template>
  <div class="container">
    <tabs-component
        class="mt-5"
        :tabs="['All', 'EU In Progress', 'EU Completed', 'Greek In Progress', 'Greek Completed']"
        v-model:activeTab="activeTab"
    ></tabs-component>

    <div v-if="activeTab === 'All' || activeTab === 'EU In Progress'">
      <h2 class="text-start">{{ $t('European In Progress')}}</h2>
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
          :year_start="project.year_start"
          :year_end="project.year_end"
          :url="project.project_url"
          :contract_number="project.contract_number"
          :description="project.description"
      ></projects-component>
    </div>

    <div v-if="activeTab === 'All' || activeTab === 'EU Completed'">
      <h2 class="text-start">{{ $t('European Completed')}}</h2>
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
          :year_start="project.year_start"
          :year_end="project.year_end"
          :url="project.project_url"
          :contract_number="project.contract_number"
          :description="project.description"
      ></projects-component>
    </div>

    <div v-if="activeTab === 'All' || activeTab === 'Greek In Progress'">
      <h2 class="text-start">{{ $t('Greek In Progress') }}</h2>
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
          :year_start="project.year_start"
          :year_end="project.year_end"
          :url="project.project_url"
          :contract_number="project.contract_number"
          :description="project.description"
      ></projects-component>
    </div>

    <div v-if="activeTab === 'All' || activeTab === 'Greek Completed'">
      <h2 class="text-start">{{ $t('Greek Completed')}}</h2>
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
          :year_start="project.year_start"
          :year_end="project.year_end"
          :url="project.project_url"
          :contract_number="project.contract_number"
          :description="project.description"
      ></projects-component>
    </div>
  </div>
</template>

<script>
import ProjectsComponent from "@/components/project/ProjectsComponent.vue";
import TabsComponent from "@/components/TabsComponent.vue";

import axios from "axios";
export default {
  components: {
    TabsComponent,
    ProjectsComponent
  },
  data() {
    return {
      apiBaseUrl: process.env.VUE_APP_API_BASE_URL,
      projects_eu_active: [],
      projects_eu_completed: [],
      projects_gr_active: [],
      projects_gr_completed: [],
      activeTab: 'All'
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