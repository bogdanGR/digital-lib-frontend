
<template>
  <div class="container mt-3 mb-3  pb-3 pt-3 text-start card pt-0">
    <div class="row">
      <div class="col-md-2">
        Framework
      </div>
      <div class="col-md-10">
        {{ framework }}
      </div>
      <div class="col-md-2">
        Project Name
      </div>
      <div class="col-md-10">
        {{ title }}
      </div>
      <div class="col-md-2">
        Contract Number
      </div>
      <div class="col-md-10">
        {{ contract_number }}
      </div>
      <div class="col-md-2">
        Full Project Name
      </div>
      <div class="col-md-10">
        {{ fullProjectName }}
      </div>
      <div class="col-md-2">
        Participants
      </div>
      <div class="col-md-10">
        {{ participants }}
      </div>
      <div class="col-md-2">
        Budget
      </div>
      <div class="col-md-10">
        {{ budget }}
      </div>
      <div class="col-md-2">
        Duration
      </div>
      <div class="col-md-10">
        {{ year_start }} - {{ year_end}} ({{ duration }} months)
      </div>
      <div class="col-md-2">
        Description
      </div>
      <div class="col-md-10">
        {{ description }}
      </div>
      <div class="col-md-2">
        URL
      </div>
      <div class="col-md-10">
        <a :href="project_url" target="_blank" class="p-0">{{ project_url }}</a>
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  props: ['id'],
  data() {
    return {
      apiBaseUrl: process.env.VUE_APP_API_BASE_URL,
      framework: '',
      title: '',
      fullProjectName: '',
      participants: '',
      budget: 0,
      duration: 0,
      description: '',
      year_start: null,
      year_end: null,
      project_url: '',
      contract_number: '',
    }
  },
  methods: {
    fetchData() {
      axios.get(`${this.apiBaseUrl}/projects/${this.id}`)
          .then(response => {
            this.framework = response.data['data']['framework'];
            this.title = response.data['data']['project_name'];
            this.fullProjectName = response.data['data']['full_title'];
            this.participants = response.data['data']['participants'];
            this.budget = response.data['data']['budget'];
            this.duration = response.data['data']['duration'];
            this.description = response.data['data']['description'];
            this.year_start = response.data['data']['year_start'];
            this.year_end = response.data['data']['year_end'];
            this.project_url = response.data['data']['project_url'];
            this.contract_number = response.data['data']['contract_number'];

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
a {
  color: black;
}
</style>