<template class="text-start">
  <div class="container text-start mt-5 mb-5">
    <div class="card mb-3">
      <h2 class="card-title mt-2" style="margin-left: 20px">{{ $t("Undergraduate") }}</h2>
      <div class="text-start d-flex flex-column mb-2 pt-0 mt-0 card-body">
        <courses-list :courses="undergraduateCourses" identifier="undergraduate"></courses-list>
      </div>
    </div>

    <div class="card">
      <h2 class="card-title mt-2" style="margin-left: 20px">{{ $t("Graduate") }}</h2>
      <div class="text-start d-flex flex-column mb-2 mt-0 pt-0 card-body">
        <courses-list :courses="graduateCourses" identifier="graduate"></courses-list>
      </div>
    </div>
  </div>

</template>

<script>
import CoursesList from "@/components/CoursesList.vue";
import axios from "axios";

export default {
  components: {
    CoursesList
  },
  data() {
    return {
      apiBaseUrl: process.env.VUE_APP_API_BASE_URL,
      undergraduateCourses: [],
      graduateCourses: []
    }
  },
  methods: {
    fetchData() {
      axios.get(`${this.apiBaseUrl}/courses`)
          .then(response => {
            this.undergraduateCourses = response.data['data'].filter(course => course.type === 'Undergraduate');
            this.graduateCourses = response.data['data'].filter(course => course.type === 'Graduate');
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