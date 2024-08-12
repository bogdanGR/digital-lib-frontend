<template>
  <the-header></the-header>
  <main>
    <router-view></router-view>
  </main>
  <footer class="footer navbar navbar-expand-lg bg-body-tertiary">
    <the-footer></the-footer>
  </footer>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheFooter from "@/components/layouts/TheFooter.vue";

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
