<template>
  <div>
    <v-sheet>Side Bar</v-sheet>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>Header</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-radio-group v-model="priceFilter" :mandatory="true">
            <v-radio
              v-for="price in prices"
              :key="price"
              :label="price"
              :value="price"
            >
            </v-radio>
          </v-radio-group>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script>
export default {
  data() {
    return {
      prices: ["Any", "under $25", "$25 to $100", "$100 to $200"],
      priceFilter: 0,
    };
  },
};
</script>