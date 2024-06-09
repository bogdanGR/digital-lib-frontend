<template>
  <div class="container mt-3 mb-3  pb-3 pt-3 text-start card pt-0">
    <p class="mt-2 mb-2">{{ authorNames }}</p>
    <h4>{{ description }}</h4>
    <h2>{{ title }}</h2>
    <h2 class="mt-2">ABSTRACT</h2>
    <p>{{ abstract }}</p>
    <p>{{  publication_date }}</p>
  </div>

</template>

<script>
import axios from "axios";

export default {
  props: ['publicationId'],
  data() {
    return {
      apiBaseUrl: process.env.VUE_APP_API_BASE_URL,
      title: '',
      description: '',
      authors: '',
      abstract: [],
      publication_date: '',
    }
  },
  computed: {
    authorNames() {
      return this.authors ? this.authors.map(author => author.full_name).join(', ') : null;
    }
  },
  methods: {
    fetchData() {
      axios.get(`${this.apiBaseUrl}/publications/${this.publicationId}`)
          .then(response => {
            this.title = response.data['data']['title'];
            this.abstract = response.data['data']['abstract'];
            this.authors = [...response.data.data.authors];
            this.publication_date = response.data['data']['publication_date'];

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