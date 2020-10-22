<template>
  <div>
    <div class="div1">
      <h1>Dashboard</h1>

      <v-breadcrumbs :items="items" divider="-"></v-breadcrumbs>
    </div>
    <br />

    <div class="div">
      <v-row>
        <v-col sm="7">
          <SalesOverview />
        </v-col>
        <v-col>
          <OurVisitors />
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="7">
          <SalesOverview />
        </v-col>
        <v-col>
          <OurVisitors />
        </v-col>
      </v-row>
      <v-row> </v-row>
    </div>
  </div>
</template>
<script>
import SalesOverview from "./Dashboards/SalesOverview";
import OurVisitors from "./Dashboards/OurVisitors";

export default {
  components: {
    SalesOverview,
    OurVisitors,
  },
  data: () => ({
    hidden: false,
    items: [
      {
        text: "Dashboard",
        disabled: false,
        href: "breadcrumbs_dashboard",
      },
      {
        text: "Link 1",
        disabled: false,
        href: "breadcrumbs_link_1",
      },
      {
        text: "Link 2",
        disabled: true,
        href: "breadcrumbs_link_2",
      },
    ],
  }),
};
</script>
<style scoped>
.div {
  height: 1000px;
  padding: 20px;
  background-color: whitesmoke;
}
</style>