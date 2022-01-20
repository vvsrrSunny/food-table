<template>
  <table-layout>
    <template v-slot:heading>
      <tr>
        <th>Id</th>
        <th>Type</th>
        <th>Name</th>
        <th>Topping</th>
      </tr>
    </template>
    <template v-slot:body>
      <tr v-for="(foodItem, index) in foodItemList" :key="index">
        <td>{{ parseInt(foodItem.id, 8) }}</td>
        <td>{{ foodItem.type }}</td>
        <td>{{ foodItem.name }}</td>
        <td>{{ foodItem.topping }}</td>
      </tr>
    </template>
  </table-layout>
</template>
<script>
import TableLayout from "./TableLayout.vue";

export default {
  components: {
    TableLayout,
  },

  props: {
    foodItemList: {
      type: Array,
      default: [],
    },
  },
};
</script>
