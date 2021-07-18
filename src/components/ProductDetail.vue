<template>
  <div>
    <h3 @click="handleClick">Product {{ this.$route.params.id }} Detail Page</h3>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log(this.$router);
    }
  },
  created: function(){
    console.log(this.$route.params);
  },
};
</script>

<style scoped></style>