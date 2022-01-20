<template>
  <app-layout @createFoodItem="createClicked" @keydown.esc="closePrompts">
    <dashboard ref="dashboard" />
  </app-layout>
</template>

<script>
import Dashboard from "./components/Dashboard.vue";
import AppLayout from "./components/AppLayout.vue";

export default {
  components: {
    Dashboard,
    AppLayout,
  },
  methods: {
    createClicked() {
      this.removeSort();

      this.removeSearch();

      this.$refs.dashboard.createFoodItem();
    },

    removeSort() {
      this.$refs.dashboard.removeSort();
    },

    removeSearch() {
      this.$refs.dashboard.removeSearch();
    },

    closePrompts() {
      this.$refs.dashboard.closePrompts();
    },
  },
};
</script>
