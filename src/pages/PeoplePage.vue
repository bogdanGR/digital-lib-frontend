<template>
  <div class="container mt-5">
    <div class="row mb-5">
      <div class="col-md-6">
        <h3 class="text-start">Teachers</h3>
        <people-list :people="teachers"></people-list>
      </div>
      <div class="col-md-6">
        <h3 class="text-start">Authors</h3>
        <people-list :people="authors"></people-list>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6">
        <h3 class="text-start">Laboratory Teaching Staff</h3>
        <people-list :people="labTeachingStaff"></people-list>
      </div>
      <div class="col-md-6">
        <h3 class="text-start">Students</h3>
        <people-list :people="students"></people-list>
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
      teachers: [],
      authors: [],
      students: [],
      labTeachingStaff: [],
    }
  },
  methods: {
    fetchData() {
      axios.get(`${this.apiBaseUrl}/people`)
          .then(response => {
            this.teachers = response.data['data'].filter(person => person.type === 'Teacher');
            this.authors = response.data['data'].filter(person => person.type === 'Author');
            this.students = response.data['data'].filter(person => person.type === 'Student');
            this.labTeachingStaff = response.data['data'].filter(person => person.type === 'Laboratory Teaching Staff');
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