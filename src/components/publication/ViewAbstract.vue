<template>
  <div class="container mt-3 mb-3  pb-3 pt-3 text-start card pt-0">
    <p class="mt-2 mb-2">{{ authors }}</p>
    <h4>{{ description }}</h4>
    <div>{{ title }}</div>
    <h2 class="mt-2">ABSTRACT</h2>
    <p>
      In real-life scenarios, Human Activity Recognition (HAR) from video data is prone to occlusion of one or more body parts of the human subjects involved.
      Although it is common sense that the recognition of the majority of activities strongly depends on the motion of some body parts,
      which when occluded compromise the performance of recognition approaches, this problem is often underestimated in contemporary research works.
      Currently, training and evaluation is based on datasets that have been shot under laboratory (ideal) conditions, i.e., without any kind of occlusion.
      In this work we propose an approach for HAR in the presence of partial occlusion, in cases wherein up to two body parts are involved.
      We assume that human motion is modeled using a set of 3-D skeletal joints and also that occluded body parts remain occluded during the whole duration of the activity. We solve this problem using regression, performed by a novel deep Convolutional Recurrent Neural Network (CRNN). Specifically, given a partially occluded skeleton, we attempt to reconstruct the missing information regarding the motion of its occluded part(s). We evaluate our approach using four publicly available human motion datasets. Our experimental results indicate a significant increase of performance, when compared to baseline approaches, wherein networks that have been trained using only non-occluded or both occluded and non-occluded samples are evaluated using occluded samples.
      To the best of our knowledge, this is the first research work that formulates and copes with the problem of HAR under occlusion as a regression task.
    </p>
    <p>19 August , 2023</p>
  </div>

</template>

<script>
export default {
  props: ['publicationId'],
  inject: ['publications'],
  data() {
    return {
      title: '',
      description: '',
      authors: '',
    }
  },
  watch: {
    publicationId(newId) {
      this.loadData(newId);
    },
  },
  methods: {
    loadData(publicationId) {
        const selectedPublication = this.publications.find((publication) => publication.id == publicationId);
        this.description = selectedPublication.description;
        this.title = selectedPublication.title;
        this.authors = selectedPublication.authors;
      },
  },
  created() {
    this.loadData(this.publicationId);
  }
}
</script>

<style scoped>

</style>