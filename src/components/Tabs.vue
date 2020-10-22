<template>
  <v-card>
    <v-toolbar flat>
      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title>
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab v-for="item in items" :key="item">
            {{ item.title }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <!-- <v-tab-item v-for="item in items" :key="item">
        <v-card flat>
          <v-card-text v-text="item.text"></v-card-text>
        </v-card>
      </v-tab-item> -->

      <v-tab-item>
        <HelloWorld />
      </v-tab-item>

      <v-tab-item>
        <UserList />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
import HelloWorld from "./HelloWorld";
import UserList from "./UserList";
export default {
  components: {
    HelloWorld,
    UserList,
  },
  data() {
    return {
      tab: null,
      items: [
        {
          title: "web",
          text: "haiii",
        },
        {
          title: "shopping",
          text: "hello",
        },
        {
          title: "videos",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "images",
          text: "mmmmm",
        },
        {
          title: "news",
          text: "newsss",
        },
      ],
    };
  },
};
</script>

