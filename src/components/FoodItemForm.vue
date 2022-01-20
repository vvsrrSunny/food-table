<template>
  <div class="form-con">
    <form>
      <input
        class="input-box"
        type="text"
        id="type"
        name="type"
        placeholder="Type"
      />
      <input
        class="input-box"
        type="text"
        id="name"
        name="name"
        placeholder="Name"
      />
      <input
        class="input-box"
        type="text"
        id="topping"
        name="topping"
        placeholder="Topping"
      />
      <div class="btn-group">
        <a style="margin-right: 25px">Cancel</a>
        <button style="margin-right: 25px">Add Item</button>
      </div>
    </form>
  </div>
</template>

<style>
.btn-group {
  display: flex;
  margin-right: 25px;
}
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

.input-btn {
  background-color: #04aa6d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.form-con {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>