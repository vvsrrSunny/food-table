<template>
  <div
    v-show="show"
    class="backdrop"
    @click.self="closePrompt"
  >
    <div class="model">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    openPrompt() {
      this.open();
    },

    closePrompt() {
      this.close();
    },

    open() {
      this.show = true;
    },

    close() {
      this.show = false;
    },
  },
};
</script>


<style >
.model {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}

.backdrop {
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
</style>