<template>
  <v-container class="pa-5">
    <v-row>
      <v-col>
        <h2>{{ productName }}</h2>
      </v-col>
      <v-col>
        {{ dueDate }}
      </v-col>
    </v-row>

    <v-row>
      <v-card
       id="downloads"
       width="100%"
      >
        <v-list
          class="teal accent-1"
        >
          <v-subheader>Package Files</v-subheader>

          <v-list-item v-for="file in productFiles" :key="file.title">
            <v-list-item-content>
              <v-list-item-title v-text="file.title"></v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn icon>
                <v-icon color="grey lighten-1">mdi-arrow-down-bold-box</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>
      
    </v-row>

    <v-row>
      <v-col>
        <v-text-field
          id="requestedQuantities"
          readonly
          outlined
          label="Requested Quantities"
          color="secondary"
          v-model="requestedQuantities"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-textarea
      readonly
      outlined
      label="Description & Notes"
      color="secondary"
      v-model="description"
    >
    </v-textarea>
    <v-row> </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return{
      productName: this.getProductName(this.$route.params.id),
      dueDate: new Date(),
      productFiles: [
        { title: "modifications.csv" },
        { title: "fuelManagementMap.exe" },
      ],
      requestedQuantities: [10, 50, 100],
      description: `The ${this.getProductName(this.$route.params.id)} has a 16v 2.0 4cylinder that utilized CIS fuel injection technology from the super 80s`
    }
  },
  methods: {
    getProductName (productId) {
    let products = [
      {id: 0, productName: "Golf GTI"},
      {id: 1, productName: "Jetta GTI"},
      {id: 2, productName: "Corrado G60"}
    ]
    return products[productId].productName;
    }
  },
  created: function () {
    console.log(this.$route.params);
  }
};
</script>

<style scoped>
  #downloads{
    margin: 15px;
    background-color: white;
  }
</style>
