<template>
  <div>
    <h3>List Page</h3>
    <button @click="handleClick">Hello World</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$router.push("/");
    }
  }
}
</script>

<style scoped>

</style>
