<template>
  <h1>People</h1>

  <div class="container">
    <div class="row mb-5">
      <div class="col-md-6">
        <h3 class="text-start">Researchers</h3>
        <people-list :people="researchers"></people-list>
      </div>
      <div class="col-md-6">
        <h3 class="text-start">Graduate Students</h3>
        <people-list :people="graduateStudents"></people-list>
      </div>
    </div>
  </div>
</template>

<script>
import PeopleList from "@/components/PeopleList.vue";
import axios from "axios";

export default {
  components: {
    PeopleList
  },
  data() {
    return {
      apiBaseUrl: process.env.VUE_APP_API_BASE_URL,
      researchers: [],
      graduateStudents: [
        {
          id: 1,
          first_name: 'Bogdan',
          last_name: 'Vaskan',
          link: '#',
          title: 'Senior researcher, ICCS-NTUA'
        },
        {
          id: 2,
          first_name: 'Foivos',
          last_name: 'Mulwnas',
          link: '#',
          title: 'Senior researcher, ICCS-NTUA'
        }
      ]
    }
  },
  methods: {
    fetchData() {
      axios.get(`${this.apiBaseUrl}/people`)
          .then(response => {
            this.researchers = response.data['data'];
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