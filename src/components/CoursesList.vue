<template>
    <ul class=" m-0 p-0 d-flex flex-column align-items-start flex-wrap course-list">
      <li class="m-1 border-1 border-bottom p-0 text-start" aria-current="true" :key="course.id" v-for="course in courses">
        <a :href="course.link" class="course-link" target="_blank">
          {{  course.title_en }} - {{  course.title_el }}
        </a>
      </li>
    </ul>
</template>

<script>
export default {
  props: ['courses'],
}
</script>


<style scoped>
.course-list .course-link {
  color: black;
}
.course-list .course-link:hover,
.course-list .course-link:active {
  color: #1a037e;
}
</style>