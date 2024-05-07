<template>
  <ul class=" m-0 p-0 d-flex flex-column align-items-start flex-wrap course-list">
    <li class="m-1 border-1 border-bottom p-0 text-start" aria-current="true" :key="person.id" v-for="person in people">
      <a :href="person.link" class="course-link p-0 pt-2 pb-2" target="_blank">
        <i class="fa-solid fa-circle" style="color: #1a037e"></i> {{  person.first_name + ' ' + person.last_name }}

        <span v-if="person.title">({{ person.title }})</span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['people'],
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