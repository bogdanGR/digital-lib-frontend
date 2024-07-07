<template>
  <div :id="`accordion-${identifier}`" class="accordion">
    <div v-for="(course, index) in courses" :key="course.id" class="accordion-item">
      <h2 class="accordion-header" :id="`heading-${identifier}-${index}`">
        <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#collapse-${identifier}-${index}`"
            aria-expanded="false"
            :aria-controls="`collapse-${identifier}-${index}`"
        >
          <i class="fa-solid fa-play" style="color: #1a037e; margin-right: 15px"></i>
          {{ course.title_en }} - {{ course.title_gr }}
        </button>
      </h2>
      <div
          :id="`collapse-${identifier}-${index}`"
          class="accordion-collapse collapse"
          :aria-labelledby="`heading-${identifier}-${index}`"
          :data-bs-parent="`#accordion-${identifier}`"
      >
        <div class="accordion-body">
          <div v-html="course.description"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['courses', 'identifier'],
}
</script>

<style scoped>
.course-link {
  color: black;
}
.course-link:hover,
.course-link:active {
  color: #1a037e;
}
</style>
