<template>
  <div class="container">
    <publication-filters @search="applyFilters" class="mt-5"></publication-filters>
    <publication-card
        :key="publication.id"
        v-for="publication in publications"
        :authors="publication.authors"
        :title="publication.title"
        :file_url="publication.file"
        :id="publication.id"
        :publisher="publication.publisher"
        :publication_date="publication.publication_date"
        :publication_type="publication.publication_type"
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