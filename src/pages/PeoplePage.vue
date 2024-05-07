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

export default {
  components: {
    PeopleList
  },
  data() {
    return {
      researchers: [
        {
          id: 1,
          first_name: 'Geroge',
          last_name: 'Meletiou',
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
      ],
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
  }
}
</script>
<style scoped>

</style>