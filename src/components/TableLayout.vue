<template>
  <table class="styled-table">
    <thead>
      <slot name="heading" />
    </thead>
    <tbody>
      <slot name="body" />
    </tbody>
  </table>
</template>

<style>
.styled-table {
  min-width: 100%;
}
.styled-table thead tr {
  background-color: #1F2937;
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
</style>