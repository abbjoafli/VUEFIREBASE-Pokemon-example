<template>
  <v-container grid-list-md text-xs-center>
    <v-flex xs12>
      <v-layout row wrap>
        <v-flex xs4 v-for="pokemon in MypokemonsShow" :key="pokemon.name">
          <Card :pokemon="pokemon" :uid="uid" />
        </v-flex>
      </v-layout>
      <Add :uid="uid" />
    </v-flex>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Add from "../components/Add";
import Card from "../components/Card";
export default {
  components: {
    Card,
    Add,
  },
  props: {},
  data: () => ({}),
  computed: {
    ...mapGetters("pokemons", ["MypokemonsShow", "pokemons"]),
    ...mapGetters(["uid"]),
  },
  methods: {
    ...mapActions("pokemons", ["initMyPokemons"]),
  },
  created() {
    this.initMyPokemons(this.uid);
  },
};
</script>
