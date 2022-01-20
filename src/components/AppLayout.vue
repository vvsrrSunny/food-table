<template>
  <div>
    <div class="main-content">
      <model ref="prompt">
        <div class="form-con">
          <form action="action_page.php">
            <input
              class="input-box"
              type="text"
              id="type"
              name="type"
              placeholder="Type"
            />
            <input
              class="input-box"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
            />
            <input
              class="input-box"
              type="text"
              id="topping"
              name="topping"
              placeholder="Topping"
            />
            <div class="btn-group">
              <button style="margin-right: 25px">Cancel</button>
              <button style="margin-right: 25px">Add Item</button>
            </div>
          </form>
        </div>
      </model>
      <div class="search-box">
        {{ search }}
        <input
          id="searchbox"
          type="text"
          placeholder="Search"
          v-model="search"
        />
      </div>
      <food-table :search="search" :foodItemList="foodItemList" />
    </div>
  </div>
</template>

<script>
import FoodTable from "./FoodTable.vue";
import Model from "./Model.vue";
export default {
  components: {
    FoodTable,
    Model,
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
    createFoodItem() {
      this.$refs.prompt.openPrompt();
    },
    closePrompts() {
      this.$refs.prompt.closePrompt();
    },
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.main-content {
  background-color: white;
  margin-top: -40px;
  border-radius: 7px;
  padding: 25px;
}

#searchbox {
  height: 20px;
  font-size: 14pt;
  padding: 5px;
}
.search-box {
  float: right;
  padding: 5px;
}

.btn-group {
  display: flex;
  margin-right: 25px;
}
.input-box {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

.input-btn {
  background-color: #04aa6d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.form-con {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
