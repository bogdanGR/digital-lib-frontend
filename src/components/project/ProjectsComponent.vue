<template>
  <div class="card text-start mb-3">
    <div class="card-body">
      <div class="row">
        <div class="col-md-2">
          {{ $t('Framework')}}
        </div>
        <div class="col-md-10">
          {{ framework }}
        </div>
          <div class="col-md-2">
            {{ $t('Project Name')}}
          </div>
          <div class="col-md-10">
            <router-link class="p-0" :to="viewProjectUrl">{{ title }}</router-link>
          </div>
          <div class="col-md-2">
            {{ $t('Full Project Name')}}
          </div>
          <div class="col-md-10">
            <router-link class="p-0" :to="viewProjectUrl">{{ fullProjectName }}</router-link>
          </div>
        <div class="col-md-2">
          {{ $t('Participants')}}
        </div>
        <div class="col-md-10">
          {{ participants }}
        </div>
          <div class="col-md-2">
            {{ $t('Budget')}}
          </div>
          <div class="col-md-10">
            {{ budget }}
          </div>
          <div class="col-md-2">
            {{ $t('Duration')}}
          </div>
          <div class="col-md-10">
            {{ year_start }} - {{ year_end}} ({{ duration }} {{ $t('months')}})
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