<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary right app>
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.id" :to="item.to">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title
              >{{ item.name }} {{ loggedIn }}</v-list-tile-title
            >
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title
              v-if="this.userDisplayName != 'Gäst'"
              flat
              @click="logout_User()"
            >
              Logga ut
            </v-list-tile-title>
            <v-list-tile-title v-else flat to="/login">
              Logga in
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark app class="amber darken-2">
      <router-link to="/" tag="v-toolbar-title" style="cursor: pointer">
        <v-toolbar-title class="headline text-uppercase" to="/">
          <span>Poke</span>
          <span class="font-weight-light">Dex</span>
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <h2 v-if="this.userDisplayName != 'Gäst'">{{ this.userDisplayName }}</h2>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-if="this.userDisplayName != 'Gäst'" flat @click="logout_User()"
          >Logga ut</v-btn
        >
        <v-btn v-else flat to="/login">Logga in</v-btn>
        <slot v-if="loggedIn">
          <v-btn flat v-for="item in menuItems" :key="item.id" :to="item.to">{{
            item.name
          }}</v-btn>
        </slot>
        <slot v-else>
          <v-btn
            flat
            v-for="item in menuItems.filter((item) => item.loggedIn == false)"
            :key="item.id"
            :to="item.to"
            >{{ item.name }}</v-btn
          >
        </slot>
      </v-toolbar-items>
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click.native.stop="drawer = !drawer"
      ></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
    <v-snackbar
      v-model="snackbarlocal"
      :timeout="5000"
      bottom
      :color="snackbarColor"
    >
      <span>{{ snackbarText }}</span>
      <v-btn color="white" flat @click="snackbarlocal = false">Stäng</v-btn>
    </v-snackbar>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import appFooter from "./components/appFooter";

import { firebase } from "@/firebase";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  components: {
    "app-footer": appFooter,
  },
  computed: {
    snackbarlocal: {
      set(show) {
        this.SHOWSNACKBAR(show);
      },
      get() {
        return this.snackbar;
      },
    },
    ...mapGetters([
      "userDisplayName",
      "snackbar",
      "snackbarText",
      "snackbarColor",
    ]),
  },
  methods: {
    logout_User() {
      this.logoutUser();
      this.$router.replace("/login");
    },
    ...mapActions(["logoutUser", "setUser", "SHOWSNACKBAR"]),
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.loggedIn = !this.loggedIn;
      this.setUser(user || null);
    });
  },
  data() {
    return {
      loggedIn: false,
      drawer: null,
      menuItems: [
        { name: "Hem", icon: "home", to: "/home", loggedIn: false },
        {
          name: "Min sida",
          icon: "supervisor_account",
          loggedIn: true,
          to: "/homeuser",
        },
      ],
    };
  },
};
</script>
