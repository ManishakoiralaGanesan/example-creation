<template>
  <v-container>
    <v-row>
      <v-col sm="3" offset-lg="1"><SideBar /></v-col>
      <v-col sm="8" lg="7"> <ProductDisplay /> </v-col>
    </v-row>
  </v-container>
</template>
<script>
import SideBar from "./Store/SideBar";
import ProductDisplay from "./Home/Products";
export default {
  components: {
    SideBar,
    ProductDisplay,
  },
};
</script>
