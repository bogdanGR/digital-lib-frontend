<template>
  <div class="container">
    <h1 class="text-start mt-2">Publications</h1>
    <publication-filters @search="applyFilters"></publication-filters>
    <publication-card
        :key="publication.id"
        v-for="publication in publications"
        :authors="publication.authors"
        :title="publication.title"
        :description="publication.description"
        :file_url="publication.file"
        :id="publication.id"
    ></publication-card>
  </div>
</template>

<script>
import PublicationFilters from "@/components/publication/PublicationFilters.vue";
import PublicationCard from "@/components/publication/PublicationCard.vue";
import axios from "axios";
export default {
  components: {
    PublicationFilters,
    PublicationCard
  },
  data() {
    return {
      apiBaseUrl: process.env.VUE_APP_API_BASE_URL,
      publications: [],
      filters: {}
    }
  },
  methods: {
    fetchData() {
      axios.get(`${this.apiBaseUrl}/publications`, { params: this.filters })
          .then(response => {
            this.publications = response.data['data'];
          })
          .catch(error => {
            console.error(error);
          });
    },
    applyFilters(filters) {
      this.filters = filters;
      this.fetchData();
    }
  },
  mounted() {
    this.fetchData();
  }
}
</script>
<style scoped>

</style>