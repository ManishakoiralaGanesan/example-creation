<template>
  <v-card>
    <v-app-bar color="blue" app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
      <v-btn text class="v-btn--active">
        <v-icon small left>fa-home</v-icon>Home</v-btn
      >

      <v-btn text><v-icon small left>fa-home</v-icon>Store</v-btn>
      <v-btn text><v-icon small left>fa-home</v-icon>Cart</v-btn>
      <v-btn text>Settings</v-btn>
      <v-btn text>Workflow</v-btn>
      <v-btn text>Settings</v-btn>
      <v-btn text>Workflow</v-btn>
    </v-app-bar>
  </v-card>
</template>
<script>
export default {
  props: ["drawer"],
};
</script>
<style  scoped>
.v-app-bar {
}
</style>