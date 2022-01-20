<template>
  <form-layout
    @cancel-clicked="cancelClicked"
    @create-clicked="$emit('create-food-item', foodItem)"
  >
    <the-input
      id="id"
      name="id"
      placeholder="Id"
      @input-value="foodId"
      type="number"
    />
    <the-input
      id="type"
      name="type"
      placeholder="Type"
      @input-value="foodType"
    />
    <the-input
      id="name"
      name="name"
      placeholder="Name"
      @input-value="foodName"
    />
    <the-input
      id="topping"
      name="topping"
      placeholder="Topping"
      @input-value="foodTopping"
    />
  </form-layout>
</template>

<script>
import TheInput from "./TheInput.vue";
import FormLayout from "./FormLayout.vue";
export default {
  components: {
    TheInput,
    FormLayout,
  },

  emits: ["form-cancel-click", "create-food-item"],

  data() {
    return {
      foodItem: this.defaultObject(),
    };
  },

  methods: {
    cancelClicked() {
      this.$emit("form-cancel-click");
      this.foodItemToDefault();
    },
    foodItemToDefault() {
      this.foodItem = this.defaultObject();
    },

    foodType(type) {
      this.foodItem.type = type;
    },

    foodName(name) {
      this.foodItem.name = name;
    },

    foodTopping(topping) {
      this.foodItem.topping = topping;
    },

    foodId(id) {
      this.foodItem.id = parseInt(id);
    },

    defaultObject() {
      return {
        id: "",
        type: "",
        name: "",
        topping: "",
      };
    },
  },
};
</script>

<style>
.btn-group {
  display: flex;
  margin-right: 25px;
}

.form-con {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>