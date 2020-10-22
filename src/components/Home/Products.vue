<template>
  <v-container>
    <v-row>
      <v-col sm="10" md="10">
        <h2>Popular Products</h2>
        <v-btn text to="/store" color="primary" small>View all</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="10" md="9">
        <v-row>
          <v-col sm="6" md="4" v-for="item in items" :key="item.name">
            <v-card>
              <v-card-title>{{ item.name }}</v-card-title>
              <v-card-subtitle>{{ item.price }}</v-card-subtitle>
              <v-card-actions>
                <v-btn color="success" outlined @click="addCart(item)">
                  <v-icon>fa-plus</v-icon> Add Cart</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar" centered="true">
      product added to cart

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
    <v-alert type="success" v-model="alert">
      Added Cart successfully <br />
      <v-btn @click="close">close</v-btn>
    </v-alert>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      snackbar: false,
      type: "success",
      alert: "",
      cart: [
        {
          name: "",
          price: "",
        },
      ],
      items: [
        {
          name: "Mobile",
          price: "29999.00",
        },
        {
          name: "Laptop",
          price: "100000.00",
        },
        {
          name: "Head sets",
          price: "1300.00",
        },
        {
          name: "Telivision",
          price: "50000.00",
        },
        {
          name: "Telivision",
          price: "50000.00",
        },
        {
          name: "Telivision",
          price: "50000.00",
        },
        {
          name: "Telivision",
          price: "50000.00",
        },
        {
          name: "Telivision",
          price: "50000.00",
        },
        {
          name: "Telivision",
          price: "50000.00",
        },
        {
          name: "Telivision",
          price: "50000.00",
        },
        {
          name: "Telivision",
          price: "50000.00",
        },
        {
          name: "Telivision",
          price: "50000.00",
        },
        {
          name: "Telivision",
          price: "50000.00",
        },
        {
          name: "Telivision",
          price: "50000.00",
        },
        {
          name: "Telivision",
          price: "50000.00",
        },
        {
          name: "Telivision",
          price: "50000.00",
        },
      ],
    };
  },
  methods: {
    addCart(item) {
      this.cart.push(item);
      this.snackbar = true;
      this.alert = true;
      console.log("cart", this.cart);
    },
    close() {
      this.alert = false;
    },
  },
};
</script>