<template>
  <div class="container">
    <h1 class="text-start mt-2">Publications</h1>
    <publication-filters></publication-filters>
    <publication-card
        :key="publication.id"
        v-for="publication in publications"
        :authors="publication.authors"
        :title="publication.title"
        :description="publication.description"
        :id="publication.id"
    ></publication-card>
  </div>
</template>

<script>
import PublicationFilters from "@/components/publication/PublicationFilters.vue";
import PublicationCard from "@/components/publication/PublicationCard.vue";
export default {
  components: {
    PublicationFilters,
    PublicationCard
  },
  inject: ['publications'],
  data() {
    return {
    }
  },
  mounted() {
    console.log(this.publications);
  }

}
</script>
<style scoped>

</style>