<template>
  <v-container grid-list-md text-xs-center>
    <v-flex xs12>
      <v-layout row wrap>
        <v-flex xs4 v-for="pokemon in pokemonsShow" :key="pokemon.name">
          <Card :pokemon="pokemon" />
        </v-flex>
      </v-layout>
    </v-flex>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Card from "../components/Card";
export default {
  components: {
    Card,
  },
  props: {},
  data: () => ({}),
  computed: {
    ...mapGetters("pokemons", ["pokemonsShow", "pokemons"]),
  },
  methods: {
    ...mapActions("pokemons", ["initPokemons"]),
  },
  created() {
    this.initPokemons();
  },
};
</script>
