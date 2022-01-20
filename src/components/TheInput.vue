<template>
  <input
    class="input-box"
    :type="type"
    :id="id"
    :name="name"
    :placeholder="placeholder"
    v-model="inputVal"
  />
</template>
<script>
export default {
  emits: ["update:modelValue"],

  props: {
    id: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      default: "",
    },

    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },

    modelValue: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      inputVal: this.modelValue,
    };
  },
  watch: {
    inputVal() {
      this.$emit("update:modelValue", this.inputVal);
    },

    modelValue() {
      this.inputVal = this.modelValue;
    },
  },
};
</script>

<style>
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
</style>
