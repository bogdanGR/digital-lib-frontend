<template class="text-start">
  <div class="container text-start">
    <h1 class="mt-2">Courses</h1>

    <div class="card mb-3">
      <h2 class="card-title mt-2" style="margin-left: 40px">{{ $t("Undergraduate") }}</h2>
      <div class="text-start d-flex flex-column mb-2 pt-0 mt-0 card-body">
        <courses-list :courses="undergraduateCourses"></courses-list>
      </div>
    </div>

    <div class="card">
      <h2 class="card-title mt-2" style="margin-left: 40px">{{ $t("Graduate") }}</h2>
      <div class="text-start d-flex flex-column mb-2 mt-0 pt-0 card-body">
        <courses-list :courses="graduateCourses"></courses-list>
      </div>
    </div>
  </div>

</template>

<script>
import CoursesList from "@/components/CoursesList.vue";
export default {
  components: {
    CoursesList
  },
  data() {
    return {
      undergraduateCourses: [
        {
          id: 1,
          title_en: 'Signals and Systems ',
          title_el: 'Σήματα και Συστήματα',
          link: '#',
        },
        {
          id: 2,
          title_en: 'Computer Graphics',
          title_el: 'Γραφική με Υπολογιστές',
          link: 'google.com',
        },
        {
          id: 3,
          title_en: 'Neural Networks and Computational Intelligence',
          title_el: 'Νευρωνικά Δίκτυα και Ευφυή Υπολογιστικά Συστήματα',
          link: '#',
        }
      ],
      graduateCourses: [
        {
          id: 1,
          title_en: 'Human - Computer Interaction',
          title_el: 'Επικοινωνία Ανθρώπου - Μηχανής',
          link: '#',
        },
        {
          id: 2,
          title_en: 'Computer Graphics',
          title_el: 'Γραφική με Υπολογιστές',
          link: 'google.com',
        },
        {
          id: 3,
          title_en: 'Neural Networks and Computational Intelligence',
          title_el: 'Νευρωνικά Δίκτυα και Ευφυή Υπολογιστικά Συστήματα',
          link: '#',
        }
      ],
    }
  },
}
</script>

<style scoped>

</style>