<template>
  <div class="container">
    <div class="card mt-4 mb-4">
      <div class="card-body text-start">
        <h1>{{ $t('Links') }}</h1>
        <div class="d-flex">
          <ul class="text-start list-group">
            <li class="list-group-item m-0">
              <a href="https://services.uniwa.gr" target="_blank"><i class="fa-solid fa-link" style="color: #1a037e"></i> {{ $t('Services') }}</a>
            </li>
            <li class="list-group-item m-0">
              <a href="https://eclass.uniwa.gr/" target="_blank"><i class="fa-solid fa-link" style="color: #1a037e"></i> E-class</a>
            </li>
            <li class="list-group-item m-0">
              <a href="https://www.uniwa.gr/foitites/" target="_blank"><i class="fa-solid fa-link" style="color: #1a037e"></i> {{ $t('Services for students') }}</a>
            </li>
            <li class="list-group-item m-0">
              <a href="https://eudoxus.gr/" target="_blank"><i class="fa-solid fa-link" style="color: #1a037e"></i> {{ $t('Eudoxus') }}</a>
            </li>
            <li class="list-group-item m-0">
              <a href="https://ice.uniwa.gr/announcements-all/" target="_blank"><i class="fa-solid fa-link" style="color: #1a037e"></i> {{ $t('Announcements') }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: black;
  padding-left: 0;
}
a:hover {
  color: #1a037e;
}
ul > li {
  min-width: 250px;
}
</style>
<script setup lang="ts">
</script>