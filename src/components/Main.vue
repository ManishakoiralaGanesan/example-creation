<template>
  <div id="container">
    <div class="div1">
      <h1>Login</h1>
    </div>

    <div class="div2">
      <Login />
    </div>
  </div>
</template>
<script>
import Login from "./Login";
export default {
  components: {
    Login,
  },
};
</script>
<style scoped>
.div1 {
  width: 100%;
  height: 350px;
  background-color: rgb(238, 167, 74);
}

.div2 {
  width: 100%;
  height: 700px;
  background-color: rgb(255, 255, 255);
}
h1 {
  text-align: center;
  font-size: 50px;
  color: white;
  padding-top: 180px;
  font-family: Georgia, "Times New Roman", Times, serif;
}
</style>