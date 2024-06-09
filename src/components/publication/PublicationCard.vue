<template>
  <div class="card text-start mb-3">
    <div class="card-body">
      <p class="mb-0">
        <span>{{ authorNames }}</span>
      </p>
      <h4 class="card-title">{{ title }}</h4>
      <p>{{ description }}</p>
    </div>
    <div class="d-flex mb-3">
      <router-link class="btn btn-primary mx-2" :to="abstractLink">Abstract</router-link>
      <a :href="file_url" target="_blank" class="btn btn-secondary">PDF</a>
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
  props: ['authors', 'title', 'description', 'id', 'file_url'],
  computed: {
    abstractLink() {

      console.log(this.id);
      return {
        name: 'view-abstract',
        params: { publicationId: this.id }
      }
    },
    authorNames() {
      return this.authors.map(author => author.full_name).join(', ');
    }
  }
}
</script>

<style scoped>

</style>