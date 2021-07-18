<template>
  <v-container>
    <v-row justify='end' class='pa-5'> 
      <v-btn @click='handleClick'>Create New</v-btn>
    </v-row>
    <v-list>
      <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-content>
            <v-list-item-title @click='openProduct(item.id)' v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
  export default {
    name: 'ProductList',

    data: () => ({
      selectedItem: null,
      items: [
        { text: 'Product 1', id: 1},
        { text: 'Product 2', id: 2},
        { text: 'Product 3', id: 3},
      ],
    }),
    methods: {
      handleClick() {
        this.$router.push({name: "newProduct"});
      },
      openProduct(productId) {
        console.log("productId: ", productId);
        this.$router.push({name: "productDetail", params: {id: productId}});
      }
    }
  }
</script>

<style scoped>
  
</style>
