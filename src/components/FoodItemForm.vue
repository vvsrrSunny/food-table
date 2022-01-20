<template>
  <form-layout @cancel-clicked="cancelClicked" @create-clicked="createClicked">
    <p style="color: green" v-show="foodItemCreatedSuccess">
      Food Item added successfully!
    </p>
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
    <p style="color: red" v-show="showFieldsRequire">
      {{ error }}
    </p>
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
      showFieldsRequire: false,
      foodItemCreatedSuccess: false,
      error: "All fields are required.",
    };
  },

  methods: {
    createClicked() {
      if (this.foodItem.id.toString().trim() == "") {
        this.setErrorMessage();
        return;
      }

      if (this.foodItem.type.trim() == "") {
        this.setErrorMessage();

        return;
      }

      if (this.foodItem.name.trim() == "") {
        this.setErrorMessage();

        return;
      }

      if (this.foodItem.topping.trim() == "") {
        this.setErrorMessage();

        return;
      }

      this.specialCharTest();
    },
    specialCharTest() {
      let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

      if (format.test(this.foodItem.id.toString().trim())) {
        this.setErrorMessage("Please remove special character");

        return;
      }
      if (format.test(this.foodItem.type.trim())) {
        this.setErrorMessage("Please remove special character");

        return;
      }
      if (format.test(this.foodItem.name.trim())) {
        this.setErrorMessage("Please remove special character");

        return;
      }
      if (format.test(this.foodItem.topping.trim())) {
        this.setErrorMessage("Please remove special character");

        return;
      }

      this.creatingWithDelay();
    },
    setErrorMessage(message = "All fields are required.") {
      this.error = message;
      this.showFieldsRequire = true;
    },
    creatingWithDelay() {
      this.foodItemCreatedSuccess = true;
      this.showFieldsRequire = false;
      setTimeout(() => {
        this.$emit("create-food-item", this.foodItem);
      }, 1000);
    },

    cancelClicked() {
      this.$emit("form-cancel-click");

      this.foodItemToDefault();
    },
    foodItemToDefault() {
      this.foodItem = this.defaultObject();

      this.showFieldsRequire = false;
      this.foodItemCreatedSuccess = false;
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