<template>
  <v-container>
    <h1>Create New Product</h1>
    <form>
        <v-row class="pa-5">
        </v-row>
    </form>
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  validations: {

  },
  data: () => ({
      packageName: '',
      packageFiles: '',
      requestedFiles: [],
      requestedQuantities: [],
      dueDate: new Date(),
      description: ''
    }),
  methods: {
    handleClick() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped></style>