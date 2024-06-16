<template>
  <div class="card text-start mb-3">
    <div class="card-body">
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
            <router-link class="p-0" :to="viewProjectUrl">{{ title }}</router-link>
          </div>
          <div class="col-md-2">
            Full Project Name
          </div>
          <div class="col-md-10">
            <router-link class="p-0" :to="viewProjectUrl">{{ fullProjectName }}</router-link>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'category_title', 'framework', 'fullProjectName', 'participants', 'budget', 'duration', 'year_start', 'year_end', 'id'],
  computed: {
    viewProjectUrl() {
      return {
        name: 'project-view',
        params: { id: this.id }
      }
    },
  }
}
</script>
<style scoped>
a {
  color: black;
}
</style>