<template>
  <div class="search-box">
    <input id="searchbox" type="text" placeholder="Search" v-model="search" />
  </div>
</template>

<script>
export default {
  emits: ["search-val"],

  data() {
    return {
      search: "",
    };
  },

  watch: {
    search() {
      this.$emit("search-value", this.search);
      this.$emit("remove-sort");
    },
  },
};
</script>

<style>
#searchbox {
  height: 20px;
  font-size: 14pt;
  padding: 5px;
}

.search-box {
  float: right;
  padding: 10px;
}
</style>
