<template>
  <div>
    <div class="dashboard">
      <section>
        <div style="padding-top: 30px; padding-bottom: 20px">
          <a href="https://www.megaport.com/" target="_blank">Megaport</a>
        </div>
        <hr />
        <div class="section-heading">
          <h3>Megaport Table</h3>
          <button>Add Item</button>
        </div>
      </section>
      <div class="main-content">
        <table class="styled-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Type</th>
              <th>Name</th>
              <th>Topping</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(foodItem, index) in foodItemList"
              :key="index"
              :class="{ 'active-row': index % 2 != 0 }"
            >
              <td>{{ parseInt(foodItem.id, 8) }}</td>
              <td>{{ foodItem.type }}</td>
              <td>{{ foodItem.name }}</td>
              <td>{{ foodItem.topping }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foodItemList: [
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Regular Glazed",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Regular Sugar",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Regular Powdered Sugar",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Regular Chocolate with Sprinkles",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Regular Chocolate",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Regular Maple",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Chocolate None",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Chocolate Glazed",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Chocolate Sugar",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Chocolate Powdered Sugar",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Chocolate Chocolate with Sprinkles",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Chocolate Chocolate",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Chocolate Maple",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Blueberry None",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Blueberry Glazed",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Blueberry Sugar",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Blueberry Powdered Sugar",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Blueberry Chocolate with Sprinkles",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Blueberry Chocolate",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Blueberry Maple",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Devil's Food None",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Devil's Food Glazed",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Devil's Food Sugar",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Devil's Food Powdered Sugar",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Devil's Food Chocolate with Sprinkles",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Devil's Food Chocolate",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Devil's Food Maple",
        },
        {
          id: "0002",
          type: "donut",
          name: "Raised",
          topping: "Regular None",
        },
        {
          id: "0002",
          type: "donut",
          name: "Raised",
          topping: "Regular Glazed",
        },
        {
          id: "0002",
          type: "donut",
          name: "Raised",
          topping: "Regular Sugar",
        },
        {
          id: "0002",
          type: "donut",
          name: "Raised",
          topping: "Regular Chocolate",
        },
        {
          id: "0002",
          type: "donut",
          name: "Raised",
          topping: "Regular Maple",
        },
        {
          id: "0003",
          type: "donut",
          name: "Old Fashioned",
          topping: "Regular None",
        },
        {
          id: "0003",
          type: "donut",
          name: "Old Fashioned",
          topping: "Regular Glazed",
        },
        {
          id: "0003",
          type: "donut",
          name: "Old Fashioned",
          topping: "Regular Chocolate",
        },
        {
          id: "0003",
          type: "donut",
          name: "Old Fashioned",
          topping: "Regular Maple",
        },
        {
          id: "0003",
          type: "donut",
          name: "Old Fashioned",
          topping: "Chocolate None",
        },
        {
          id: "0003",
          type: "donut",
          name: "Old Fashioned",
          topping: "Chocolate Glazed",
        },
        {
          id: "0003",
          type: "donut",
          name: "Old Fashioned",
          topping: "Chocolate Chocolate",
        },
        {
          id: "0003",
          type: "donut",
          name: "Old Fashioned",
          topping: "Chocolate Maple",
        },
        {
          id: "0004",
          type: "bar",
          name: "Bar",
          topping: "Regular Chocolate",
        },
        {
          id: "0004",
          type: "bar",
          name: "Bar",
          topping: "Regular Maple",
        },
        {
          id: "0005",
          type: "twist",
          name: "Twist",
          topping: "Regular Glazed",
        },
        {
          id: "0005",
          type: "twist",
          name: "Twist",
          topping: "Regular Sugar",
        },
        {
          id: "0006",
          type: "filled",
          name: "Filled",
          topping: "Regular Glazed",
        },
        {
          id: "0006",
          type: "filled",
          name: "Filled",
          topping: "Regular Powdered Sugar",
        },
        {
          id: "0006",
          type: "filled",
          name: "Filled",
          topping: "Regular Chocolate",
        },
        {
          id: "0006",
          type: "filled",
          name: "Filled",
          topping: "Regular Maple",
        },
      ],
    };
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.main-content {
  background-color: white;
  margin-top: -40px;
  border-radius: 7px;
  padding: 25px;
}
.dashboard {
  padding-left: 200px;
  padding-right: 200px;
  background-color: #354253;
  height: 310px;
}
body {
  margin: 0;
  background-color: #f2f5f8;
}

section {
  flex-direction: column;
  height: 250px;
  color: #dddddd;
}
.dashboard a {
  border-radius: 10px;
  padding: 10px;
  background-color: rgb(19, 24, 65);
  cursor: pointer;
  color: #f2f5f8;
  text-decoration: none;
}
.h3 {
  display: flex;
  align-items: center;
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
  background-color: #009879;
  cursor: pointer;
  color: #f2f5f8;
  height: 0px;
  display: flex;
  align-items: center;
  font-size: medium;
}
.styled-table {
  min-width: 100%;
}
.styled-table thead tr {
  background-color: #3b323f;
  color: #ffffff;
  text-align: left;
}
.styled-table th,
.styled-table td {
  padding: 12px 15px;
}
.styled-table tbody tr {
  border-bottom: 1px solid "dddddd";
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid "#009879";
}
.styled-table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}
</style>
