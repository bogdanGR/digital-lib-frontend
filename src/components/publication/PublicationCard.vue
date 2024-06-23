<template>
  <div class="card text-start mb-3">
    <div class="card-body">
      <p class="mb-0">
        <span>{{ authorNames }}</span>
      </p>
      <h4 class="card-title">{{ title }}</h4>
      <ul class="d-flex justify-content-start publication_list">
        <li class="ms-0">{{ publisher }}</li>
        <li class="ms-0">{{ publication_date }}</li>
        <li class="ms-0">{{ publication_type }}</li>
      </ul>
    </div>
    <div class="d-flex mb-3">
      <router-link class="btn btn-primary mx-2" :to="abstractLink">{{ $t('Abstract')}}</router-link>
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
  props: ['authors', 'title', 'id', 'file_url', 'publisher', 'publication_date', 'publication_type'],
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
.publication_list li {
  position: relative;
}
.publication_list li::after {
  content: "•";
  position: absolute;
  right: -20px;
  color: black;
}

.publication_list li:last-child::after {
  content: "";
}
</style>