<template>
  <div class="dashboard">
    <section>
      <div style="padding-top: 30px; padding-bottom: 20px">
        <a class="header-button" href="https://www.megaport.com/" target="_blank">Megaport</a>
      </div>
      <hr />
      <div class="section-heading">
        <h3>Megaport Menu</h3>
        <button class="main button" @click="$emit('create-food-item')">
          Add Item
        </button>
      </div>
    </section>
    <slot />
  </div>
</template>
<script>
export default {
  emits: ["create-food-item"],
};
</script>

<style>
section {
  flex-direction: column;
  height: 250px;
  color: #dddddd;
}

.dashboard {
  padding-left: 200px;
  padding-right: 200px;
  background-color: #1f2937;
  height: 310px;
}

.header-button {
  border-radius: 10px;
  padding: 10px;
  background-color: rgb(43, 68, 209);
  cursor: pointer;
  color: #f2f5f8;
  text-decoration: none;
}

.header-button:hover {
  opacity: 75%;
}
.section-heading {
  padding-top: 20px;
  padding-bottom: 10px;
  font-size: larger;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  border-radius: 10px;
  padding: 20px;
  background-color: #ff9900c5;
  cursor: pointer;
  color: #f2f5f8;
  height: 0px;
  display: flex;
  align-items: center;
  font-size: medium;
   border: 0px;
}

button:hover {
  opacity: 75%;
}
</style>