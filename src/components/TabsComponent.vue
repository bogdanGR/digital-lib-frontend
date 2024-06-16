<!-- TabsComponent.vue -->
<template>
  <div>
    <ul class="nav nav-tabs mb-5">
      <li v-for="tab in tabs" :key="tab" class="nav-item">
        <a
            :class="['nav-link', { active: activeTab === tab }]"
            @click="selectTab(tab)"
            href="#"
        >
          {{ tab }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => ['All', 'EU In Progress', 'EU Completed', 'Greek In Progress', 'Greek Completed']
    },
    activeTab: {
      type: String,
      default: 'All'
    }
  },
  methods: {
    selectTab(tab) {
      this.$emit('update:activeTab', tab);
    }
  }
}
</script>

<style scoped>
.nav-tabs .nav-link {
  cursor: pointer;
}
.nav-tabs .nav-link.active {
  color: white;
  border-color: #f1a80a;
  background-color: #1a037e;
}
</style>
