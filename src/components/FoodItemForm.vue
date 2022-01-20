<template>
  <form-layout @cancel-clicked="cancelClicked">
    <the-input id="type" name="type" placeholder="Type" />
    <the-input id="name" name="name" placeholder="Name" />
    <the-input id="topping" name="topping" placeholder="Topping" />
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