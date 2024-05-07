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
  data() {
    return {
      publications: [
        {
          id: 1,
          authors: 'Vernikos, E. Spyrou, I.-A. Kostis, E. Mathe, Ph. Mylonas',
          title: 'A Deep Regression Approach for Human Activity Recognition Under Partial Occlusion"',
          description: 'International Journal of Neural Systems, 33 (09), August 2023.',
        },
        {
          id: 2,
          authors: 'Vernikos, E. Spyrou, I.-A. Kostis, E. Mathe, Ph. Mylonas',
          title: '2A Deep Regression Approach for Human Activity Recognition Under Partial Occlusion"',
          description: 'International Journal of Neural Systems, 33 (09), August 2023.',
        }
      ]
    }
  },
  provide() {
    return {
      publications: this.publications,
    }
  }
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
