<template>
  <th :class="`table-head-cell`">
    <div class="head-cell-content">
      <div><slot /></div>
      <div class="show-sort">
        <div v-show="currentSortedColumn == columnName" class="arrows">
          <down-arrow v-bind:class="getClass()" />
        </div>
      </div>
    </div>
  </th>
</template>

<script>
import UpArrow from "./UpArrow.vue";
import DownArrow from "./DownArrow.vue";

export default {
  components: {
    UpArrow,
    DownArrow,
  },

  props: {
    columnName: {
      type: String,
      default: "",
    },
    sortType: {
      type: String,
      default: "noSort",
    },
    currentSortedColumn: {
      type: String,
      default: "",
    },
  },
  methods: {
    getClass() {
      return {
        "down-arrow": this.sortType == "ascending",
        "up-arrow": this.sortType == "descending",
      };
    },
  },
};
</script>

<style>
.table-head-cell:hover {
  opacity: 50%;
  cursor: pointer;
  user-select: none;
}
.head-cell-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.up-arrow {
  color: rgb(255, 0, 0);
  background: rgb(255, 255, 255);
  height: 12px;
  width: 12px;
  position: absolute;

  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}
.down-arrow {
  color: rgb(255, 0, 0);
  background: rgb(255, 255, 255);
  height: 12px;
  width: 12px;
  position: absolute;
}

.arrows {
  position: relative;
  margin-top: -6px;
  margin-left: -10px;
}
.arrows > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.1rem * var(--tw-space-y-reverse));
}
</style>