<template>
  <v-container>
    <v-row justify="end" class="pa-5">
      <v-btn @click="handleClick">Create New</v-btn>
    </v-row>
    <v-list
      style="background-color: aliceblue"
    >
      <v-list-item v-for="(item, i) in items" :key="i">
        <v-list-item-content>
          <v-card
            id="vCard"
            elevation="2"
            @click="openProduct(item.id)"
            v-text="item.text"
          >
          Product Card
          </v-card>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  name: "ProductList",

  data: () => ({
    selectedItem: null,
    items: [
      {id: 0, text: "Golf GTI"},
      {id: 1, text: "Jetta GTI"},
      {id: 2, text: "Corrado G60"}
    ]
  }),
  methods: {
    handleClick() {
      this.$router.push({ name: "newProduct" });
    },
    openProduct(productId) {
      this.$router.push({ name: "productDetail", params: { id: productId } });
    }
  }
};
</script>

<style scoped>
  #vCard{
    height:30px;
    padding: 5px;
  }
</style>
