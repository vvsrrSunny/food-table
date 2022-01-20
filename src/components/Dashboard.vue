<template>
  <div class="hello">
<section></section>

  </div>
</template>

<script>
export default {};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
      body {
        margin: 0;
        font-family: 'Prompt', sans-serif;
        color: white;
        
      }

      section {
        flex-direction: column;
        align-items: center;
        height: 250px;
        color: #dddddd;
        background: #354253;
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
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}
.styled-table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
