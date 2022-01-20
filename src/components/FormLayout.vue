<template>
  <div class="form-con">
    <div>
      <slot />
      <div class="btn-group">
        <button @click="$emit('cancel-clicked')" style="margin-right: 25px">
          Cancel
        </button>
        <button @click="$emit('create-clicked')" style="margin-right: 25px">
          Add Item
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["cancel-clicked", "create-clicked"],
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