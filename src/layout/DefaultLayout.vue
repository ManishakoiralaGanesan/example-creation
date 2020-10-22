<template>
  <v-app>
    <AppBar />
    <NavigationBar />
  </v-app>
</template>
<script>
import AppBar from "./../Bars/AppBar";
import NavigationBar from "./Bars/NavigationBar";
export default {
  components: {
    AppBar,
    NavigationBar,
  },
};
</script>