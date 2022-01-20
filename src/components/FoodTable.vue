<template>
  <table-layout>
    <template v-slot:heading>
      <tr>
        <th>Id</th>
        <th @click="sortBy('topping')">Type</th>
        <th>Name</th>
        <th>Topping</th>
      </tr>
    </template>
    <template v-slot:body>
      <tr v-for="(foodItem, index) in foodItems" :key="index">
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
  data() {
    return {
      foodItems: this.foodItemList,
    };
  },

  methods: {
    sortBy(columnName) {
      console.debug;
      this.foodItems.sort(function (a, b) {
        if (a.topping < b.topping) {
          return -1;
        }
        if (a.topping > b.topping) {
          return 1;
        }
        return 0;
      });
      console.log(this.foodItems);
    },
  },
};
</script>
