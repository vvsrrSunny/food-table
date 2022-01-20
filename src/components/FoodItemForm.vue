<template>
  <form-layout
    @cancel-clicked="cancelClicked"
    @create-clicked="$emit('create-food-item', foodItem)"
  >
    <the-input
      id="id"
      name="id"
      placeholder="Id"
      v-model="this.foodItem.id"
      type="number"
    />
    <the-input
      id="type"
      name="type"
      placeholder="Type"
      v-model="this.foodItem.type"
    />
    <the-input
      id="name"
      name="name"
      placeholder="Name"
      v-model="this.foodItem.name"
    />
    <the-input
      id="topping"
      name="topping"
      placeholder="Topping"
      v-model="this.foodItem.topping"
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