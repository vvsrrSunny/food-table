<template>
  <app-layout>
    <dashboard />
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
};
</script>
