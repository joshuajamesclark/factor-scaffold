<template>
  <v-container
    
  >
     <h1
      id="title"
     >Create New Product</h1>
    <form>
      <v-row class="pa-5">
        <v-text-field
          required
          outlined
          color="secondary"
          label="Name"
          v-model="packageName"
        ></v-text-field>
      </v-row>
      <v-row class="pa-5">
        <v-file-input
          outlined
          small-chips
          multiple
          label="Package Files"
          color="secondary"
          v-model="requestedFiles"
        ></v-file-input>
      </v-row>
      <v-row class="pa-5">
        <v-select
          outlined
          multiple
          item-color="secondary"
          color="secondary"
          label="Requested Quantities"
          :items="requestedQuantities"
          v-model="selectedQuantity"
        ></v-select>
      </v-row>
      <v-row class="pa-5">
        <v-menu
          ref="dateMenu"
          color="secondary"
          v-model="dateMenu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              outlined
              v-model="dateFormatted"
              color="secondary"
              label="Due Date"
              hint="MM/DD/YYYY format"
              persistent-hint
              v-bind="attrs"
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            color="secondary"
            v-model="date"
            no-title
            @input="dateMenu = false"
          ></v-date-picker>
        </v-menu>
      </v-row>
      <v-row class="pa-5">
        <v-textarea
          outlined
          color="secondary"
          label="Description & Notes"
          v-model="description"
        ></v-textarea>
      </v-row>
      <v-row justify="end" class="pa-5">
        <v-btn @click="handleClick"> submit </v-btn>
      </v-row>
    </form>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";

export default {
  mixins: [validationMixin],
  validations: {},
  data: (vm) => ({
    packageName: "",
    requestedFiles: [],
    requestedQuantities: [10, 50, 100],
    selectedQuantity: [10],
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    dateFormatted: vm.formatDate(
      new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10)
    ),
    dateMenu: false,
    description: "",
  }),
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },

  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
    },
  },
  methods: {
    handleClick() {
      this.$router.push("/");
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
  },
};
</script>

<style scoped>
  #title{
    text-align: center;
  }
</style>
