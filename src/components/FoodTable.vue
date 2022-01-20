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
        <td>{{ parseInt(foodItem.id) }}</td>
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
import TableSort from "../mixins/table-sort";

export default {
  components: {
    TableLayout,
    TableHeadCell,
  },

  mixins: [TableSort],

  props: {
    foodItemList: {
      type: Array,
      default: [],
    },
    search: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      foodItems: [...this.foodItemList],
      searchVal: "",
    };
  },

  watch: {
    search(val) {
      val = val.trim();

      this.searchVal = val;

      this.filterBySearch();
    },
  },

  methods: {
    addFoodItem(foodItem) {
      this.foodItems.push(foodItem);
    },

    filterBySearch() {
      if (this.searchVal == "") {
        this.foodItems = [...this.foodItemList];

        return;
      }

      this.foodItems = this.foodItemList.filter((row) => {
        const search = this.searchVal.toLowerCase();
        const name = row.name.toLowerCase();
        const type = row.type.toLowerCase();
        const topping = row.topping.toLowerCase();

        if (name.indexOf(search) == 0) {
          return true;
        }

        if (type.indexOf(search) == 0) {
          return true;
        }

        if (topping.indexOf(search) == 0) {
          return true;
        }

        return false;
      });
    },

    sortBy() {
      if (this.sortTypes[this.sortCounter] == "noSort") {
        this.foodItems = [...this.foodItemList];

        return;
      }

      if (this.sortTypes[this.sortCounter] == "ascending") {
        this.foodItems.sort((a, b) => {
          if (a[this.currentSortedColumn] < b[this.currentSortedColumn]) {
            return -1;
          }

          if (a[this.currentSortedColumn] > b[this.currentSortedColumn]) {
            return 1;
          }

          return 0;
        });

        return;
      }

      this.foodItems.sort((a, b) => {
        if (a[this.currentSortedColumn] < b[this.currentSortedColumn]) {
          return 1;
        }

        if (a[this.currentSortedColumn] > b[this.currentSortedColumn]) {
          return -1;
        }

        return 0;
      });
    },
  },
};
</script>
