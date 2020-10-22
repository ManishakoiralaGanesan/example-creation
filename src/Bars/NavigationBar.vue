<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app :mini-variant.sync="mini" clipped>
      <!--<v-list-item class="px-2">
        <v-list-item-title>App</v-list-item-title>

        <v-btn icon>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </v-btn>
      </v-list-item>-->

      <v-list>
        <v-divider></v-divider>
        <div v-for="section in itemSection" :key="section.id">
          <div class="section-name">
            <v-list rounded>
              <v-list-item
                link
                v-on:click="section.expanded = !section.expanded"
              >
                <v-list-item-content>
                  {{ section.title }}
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon right>mdi-chevron-right</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list>
            <!--<v-card-actions>
              {{ section.title }}
              <v-icon right v-on:click="section.expanded = !section.expanded"
                >mdi-chevron-right</v-icon
              >
            </v-card-actions> -->
          </div>
          <v-list>
            <v-list-item
              v-for="item in section.subItems"
              :key="item.id"
              :to="item.link"
              v-show="section.expanded"
            >
              <v-list-item-content class="menu-content">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
      </v-list>
    </v-navigation-drawer>
    <v-card>
      <v-app-bar color="blue" app clipped-left>
        <v-toolbar-title :mini-variant.sync="mini"
          >Material pro</v-toolbar-title
        >
        <v-btn icon @click.stop="miniVal">
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-spacer></v-spacer>
        <v-btn text to="/home1"> <v-icon small left>fa-home</v-icon>Home</v-btn>
        <v-btn text to="/store"><v-icon small left>fa-home</v-icon>Store</v-btn>
        <v-btn text to="/cart"><v-icon small left>fa-home</v-icon>Cart</v-btn>
        <v-btn text>Settings</v-btn>
        <v-btn text>Workflow</v-btn>
      </v-app-bar>
    </v-card>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer absolute class="pa-6" padless>
      <v-col class="text-center">
        <v-card-text style="height: 50px; position: relative">
          <v-fab-transition>
            <v-btn
              @click.stop="toggle = !toggle"
              color="pink"
              dark
              absolute
              top
              right
              fab
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-fab-transition>
        </v-card-text>
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>

    <!-- -->
    <v-navigation-drawer v-model="toggle" absolute temporary right>
      <v-list>
        <v-list-item>
          <v-list-item-content> Theme </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-switch label="Dark" v-model="$vuetify.theme.dark"></v-switch>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-switch label="RTL" v-model="$vuetify.rtl"></v-switch>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-switch label="mini-varient" v-model="mini"></v-switch>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            Navbar and theme bar color
            <ColorsList />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- -->
  </v-app>
</template>
<script>
//import AppBar from "./AppBar";
import ColorsList from "./../components/ColorsList";
export default {
  components: {
    //  AppBar,
    ColorsList,
  },
  data() {
    return {
      rtl: false,
      theme: false,
      drawer: true,
      mini: false,
      isExpand: false,
      toggle: false,
      itemSection: [
        {
          id: 1,
          title: "Users",
          expanded: false,
          subItems: [
            {
              id: 1,
              title: "Users",
              link: "/tabs",
            },
            {
              id: 2,
              title: "Dashoard",
              link: "/dashboard",
            },
          ],
        },
        {
          id: 2,
          title: "controls",
          expanded: false,
          subItems: [
            {
              id: 1,
              title: "Users",
              link: "/users",
            },
          ],
        },
        {
          id: 3,
          title: "Playground",
          expanded: false,
          subItems: [
            {
              id: 1,
              title: "Typography",
              link: "/typography",
            },
            {
              id: 2,
              title: "Timeline",
              link: "/timeline",
            },
          ],
        },
      ],
    };
  },
  methods: {
    subtitle() {
      this.itemSection.expanded = !this.itemSection.expanded;
    },
    miniVal() {
      this.mini = !this.mini;
    },
    expandhover() {
      this.isExpand = !this.isExpand;
    },
  },
};
</script>
<style scoped>
</style>