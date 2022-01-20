<template>
  <form-layout @cancel-clicked="$emit('form-cancel-click')">
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
  data() {
    return {
      foodItem: this.defaultObject(),
    };
  },

  methods: {
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
      this.foodItem.id = parseInt(id, 10).toString(8);
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