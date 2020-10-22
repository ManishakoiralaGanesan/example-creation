<template>
  <div>
    <HeaderComp />
    <Products />
  </div>
</template>
<script>
import HeaderComp from "./Home/HeaderComp";
import Products from "./Home/Products";
export default {
  components: {
    HeaderComp,
    Products,
  },
};
</script>