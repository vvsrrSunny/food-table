<template>
  <table-layout>
    <template v-slot:heading>
      <tr>
        <table-head-cell
          columnName="id"
          :sortType="sortTypes[sortCounter]"
          :currentSortedColumn="currentSortedColumn"
          @click="sortByColumn('id')"
          >Id</table-head-cell
        >
        <table-head-cell
          columnName="type"
          :sortType="sortTypes[sortCounter]"
          :currentSortedColumn="currentSortedColumn"
          @click="sortByColumn('type')"
          >Type</table-head-cell
        >
        <table-head-cell
          columnName="name"
          :sortType="sortTypes[sortCounter]"
          :currentSortedColumn="currentSortedColumn"
          @click="sortByColumn('name')"
          >Name</table-head-cell
        >
        <table-head-cell
          columnName="topping"
          :sortType="sortTypes[sortCounter]"
          :currentSortedColumn="currentSortedColumn"
          @click="sortByColumn('topping')"
          >Topping</table-head-cell
        >
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
import TableHeadCell from "./TableHeadCell.vue";

export default {
  components: {
    TableLayout,
    TableHeadCell,
  },

  props: {
    foodItemList: {
      type: Array,
      default: [],
    },
  },

  data() {
    return {
      foodItems: Object.values({ ...this.foodItemList }),
      currentSortedColumn: "",
      sortCounter: 0,
      sortTypes: ["noSort", "ascending", "descending"],
    };
  },

  methods: {
    sortByColumn(columnName) {
      this.setSortCounter(columnName);

      this.currentSortedColumn = columnName;

      this.sortBy(columnName);
    },

    sortBy(columnName) {
      console.log(this.sortCounter);
      if (this.sortTypes[this.sortCounter] == "noSort") {
        this.foodItems = Object.values({ ...this.foodItemList });

        return;
      }

      if (this.sortTypes[this.sortCounter] == "ascending") {
        this.foodItems.sort(function (a, b) {
          if (a[columnName] < b[columnName]) {
            return -1;
          }

          if (a[columnName] > b[columnName]) {
            return 1;
          }

          return 0;
        });

        return;
      }

      this.foodItems.sort(function (a, b) {
        if (a[columnName] < b[columnName]) {
          return 1;
        }

        if (a[columnName] > b[columnName]) {
          return -1;
        }

        return 0;
      });
    },

    setSortCounter(columnName) {
      this.sortCounter++;

      if (this.currentSortedColumn == columnName) {
        if (this.sortCounter >= 3) {
          this.sortCounter = 0;
        }

        return;
      }

      this.sortCounter = 1;
    },
  },
};
</script>
