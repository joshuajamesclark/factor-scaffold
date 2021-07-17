<template>
  <div class="hello">
    <h3>Hello {{personName}}</h3>
    <input v-model="personName">
    <router-link to="/list">List Page</router-link>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    personName: "Joshua"
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
