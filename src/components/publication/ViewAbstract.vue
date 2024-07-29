<template>
  <div class="container mt-3 mb-3  pb-3 pt-3 text-start card pt-0">
    <p class="mt-2 mb-2">{{ authorNames }}</p>
    <h4>{{ description }}</h4>
    <h2>{{ title }}</h2>
    <h2 class="mt-2">ABSTRACT</h2>
    <p>{{ abstract }}</p>
    <ul class="d-flex justify-content-start publication_list">
      <li class="ms-0">{{ publisher }}</li>
      <li class="ms-0">{{ publication_date }}</li>
      <li class="ms-0">{{ publication_type }}</li>
      <li class="ms-0"> <a :href="file_url" target="_blank" class="btn btn-secondary">PDF</a></li>
    </ul>
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
      publisher: '',
      publication_type: '',
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
            this.publisher = response.data['data']['publisher'];
            this.publication_type = response.data['data']['publication_type'];
            this.file_url = response.data['data']['file'];

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
.publication_list {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.publication_list li {
  position: relative;
  margin: 0 2rem;
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