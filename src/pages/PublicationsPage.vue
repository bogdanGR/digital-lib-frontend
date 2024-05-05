<template>
  <div class="container">
    <h1>Publications</h1>
    <publication-filters></publication-filters>
    <publication-card></publication-card>
  </div>
</template>

<script>
import PublicationFilters from "@/components/PublicationFilters.vue";
import PublicationCard from "@/components/PublicationCard.vue";
export default {
  components: {
    PublicationFilters,
    PublicationCard
  }
}
</script>
<style scoped>

</style>