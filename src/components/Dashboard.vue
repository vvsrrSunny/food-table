<template>
  <div>
    <div class="main-content">
      <prompt-layout ref="prompt" @clear-form="clearForm">
        <food-item-form
          ref="foodItemForm"
          @form-cancel-click="closePrompts"
          @create-food-item="addFoodItem"
        />
      </prompt-layout>

      <the-search ref="search" @searchValue="setSearch" />

      <food-table
        ref="foodTable"
        :search="search"
        :foodItemList="foodItemList"
        @remove-search="removeSearch"
      />
    </div>
  </div>
</template>

<script>
import FoodTable from "./FoodTable.vue";
import PromptLayout from "./PromptLayout.vue";
import TheSearch from "./TheSearch.vue";
import FoodItemForm from "./FoodItemForm.vue";
export default {
  components: {
    FoodTable,
    PromptLayout,
    TheSearch,
    FoodItemForm,
  },
  data() {
    return {
      search: "",
      foodItemList: [
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Regular Glazed",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Regular Sugar",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Regular Powdered Sugar",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Regular Chocolate with Sprinkles",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Regular Chocolate",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Regular Maple",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Chocolate None",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Chocolate Glazed",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Chocolate Sugar",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Chocolate Powdered Sugar",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Chocolate Chocolate with Sprinkles",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Chocolate Chocolate",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Chocolate Maple",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Blueberry None",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Blueberry Glazed",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Blueberry Sugar",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Blueberry Powdered Sugar",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Blueberry Chocolate with Sprinkles",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Blueberry Chocolate",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Blueberry Maple",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Devil's Food None",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Devil's Food Glazed",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Devil's Food Sugar",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Devil's Food Powdered Sugar",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Devil's Food Chocolate with Sprinkles",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Devil's Food Chocolate",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Devil's Food Maple",
        },
        {
          id: "0002",
          type: "donut",
          name: "Raised",
          topping: "Regular None",
        },
        {
          id: "0002",
          type: "donut",
          name: "Raised",
          topping: "Regular Glazed",
        },
        {
          id: "0002",
          type: "donut",
          name: "Raised",
          topping: "Regular Sugar",
        },
        {
          id: "0002",
          type: "donut",
          name: "Raised",
          topping: "Regular Chocolate",
        },
        {
          id: "0002",
          type: "donut",
          name: "Raised",
          topping: "Regular Maple",
        },
        {
          id: "0003",
          type: "donut",
          name: "Old Fashioned",
          topping: "Regular None",
        },
        {
          id: "0003",
          type: "donut",
          name: "Old Fashioned",
          topping: "Regular Glazed",
        },
        {
          id: "0003",
          type: "donut",
          name: "Old Fashioned",
          topping: "Regular Chocolate",
        },
        {
          id: "0003",
          type: "donut",
          name: "Old Fashioned",
          topping: "Regular Maple",
        },
        {
          id: "0003",
          type: "donut",
          name: "Old Fashioned",
          topping: "Chocolate None",
        },
        {
          id: "0003",
          type: "donut",
          name: "Old Fashioned",
          topping: "Chocolate Glazed",
        },
        {
          id: "0003",
          type: "donut",
          name: "Old Fashioned",
          topping: "Chocolate Chocolate",
        },
        {
          id: "0003",
          type: "donut",
          name: "Old Fashioned",
          topping: "Chocolate Maple",
        },
        {
          id: "0004",
          type: "bar",
          name: "Bar",
          topping: "Regular Chocolate",
        },
        {
          id: "0004",
          type: "bar",
          name: "Bar",
          topping: "Regular Maple",
        },
        {
          id: "0005",
          type: "twist",
          name: "Twist",
          topping: "Regular Glazed",
        },
        {
          id: "0005",
          type: "twist",
          name: "Twist",
          topping: "Regular Sugar",
        },
        {
          id: "0006",
          type: "filled",
          name: "Filled",
          topping: "Regular Glazed",
        },
        {
          id: "0006",
          type: "filled",
          name: "Filled",
          topping: "Regular Powdered Sugar",
        },
        {
          id: "0006",
          type: "filled",
          name: "Filled",
          topping: "Regular Chocolate",
        },
        {
          id: "0006",
          type: "filled",
          name: "Filled",
          topping: "Regular Maple",
        },
      ],
    };
  },
  methods: {
    removeSort() {
      this.$refs.foodTable.removeSort();
    },

    removeSearch() {
      this.$refs.search.search = "";
    },

    clearForm() {
      this.$refs.foodItemForm.foodItemToDefault();
    },
    addFoodItem(foodItem) {
      this.foodItemList.push(foodItem);

      this.$refs.foodTable.addFoodItem(foodItem);

      this.closePrompts();
    },
    createFoodItem() {
      this.$refs.prompt.openPrompt();
    },
    closePrompts() {
      this.$refs.prompt.closePrompt();
    },

    setSearch(search) {
      this.search = search;
    },
  },
};
</script>

<style>
.main-content {
  background-color: white;
  margin-top: -40px;
  border-radius: 7px;
  padding: 25px;
  padding-top: 3px;
}
</style>
