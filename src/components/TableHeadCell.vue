<template>
  <th :class="`table-head-cell`">
    <div class="head-cell-content">
      <div><slot /></div>
      <div class="show-sort">
        <div class="arrows">
          <up-arrow class="up-arrow" />
          <down-arrow class="down-arrow" />
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
  size: 10px;
  height: 10px;
}

.down-arrow {
  color: rgb(255, 0, 0);
  background: rgb(255, 255, 255);
  size: 10px;
  height: 10px;
}

.arrows {
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: -10px;

}
.arrows > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0.1rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.1rem * var(--tw-space-y-reverse));
}
</style>