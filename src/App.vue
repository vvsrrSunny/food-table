<template>
  <app-layout @createFoodItem="createClicked" 
    @keydown.esc="clearPrompts">
    <dashboard ref="dashboard"/>
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
      this.$refs.dashboard.createFoodItem();
    },
    // clearPrompts() {
    //   this.$refs.prompt.
    // }

  },
};
</script>
