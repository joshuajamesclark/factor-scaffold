<template>
  <v-app
    id="main"
    :style="{ background: $vuetify.theme.themes[theme].background }"
  >
    <v-app-bar app color="primary">
      <router-link to="/">
        <div class="d-flex align-center">
          <img src="./assets/img/logo.svg" />
        </div>
      </router-link>
    </v-app-bar>

    <v-main>
      <router-view></router-view>

      <!-- Bottom navigation should be its own component -->
      <!-- <v-bottom-navigation 
        v-model="value"
        absolute = true
      >
        <v-btn value="recent">
          <span>Product List</span>

          <v-icon>mdi-history</v-icon>
        </v-btn>

        <v-btn value="favorites">
          <span>Detail</span>

          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn value="nearby">
          <span>Create New</span>

          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
      </v-bottom-navigation> -->

    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
};
</script>

<style scoped>
</style>
