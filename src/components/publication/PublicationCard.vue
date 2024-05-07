<template>
  <div class="card text-start mb-3">
    <div class="card-body">
      <p class="mb-0">
        {{ authors }}
      </p>
      <h4 class="card-title">{{ title }}</h4>
      <p>{{ description }}</p>
    </div>
    <div class="d-flex mb-3">
      <router-link class="btn btn-primary mx-2" :to="abstractLink">Abstract</router-link>
      <button class="btn btn-secondary">PDF</button>
    </div>
  </div>

</template>

<script>
export default {
  inject: ['publications'],
  provide() {
    return {
      authors: this.authors,
      description: this.description,
    }
  },
  props: ['authors', 'title', 'description', 'id'],
  computed: {
    abstractLink() {

      console.log(this.id);
      console.log('edw'
      )
      return {
        name: 'view-abstract',
        params: { publicationId: this.id }
      }
    }
  }
}
</script>

<style scoped>

</style>