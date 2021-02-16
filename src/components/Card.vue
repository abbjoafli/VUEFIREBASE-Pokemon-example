<template>
  <v-card class="mx-auto" max-width="344">
    <v-img :src="pokemon.img" height="200px"></v-img>

    <v-card-title class="headline mb-1">
      {{ pokemon.name }}
    </v-card-title>

    <v-card-text>
      {{ pokemon.description }}
    </v-card-text>

    <v-card-actions v-show="uid == pokemon.userId">
      <v-btn color="red lighten-2" text @click="removePokemon(pokemon.id)">
        Ta bort
      </v-btn>
      <v-btn color="orange lighten-2" text @click="show = !show"> Ändra </v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          <v-container>
            <v-text-field
              label="Namn"
              required
              v-model="pokemon.name"
            ></v-text-field>

            <v-text-field
              label="Pokedex nummer"
              hint="Pokemonens nummer i pokedexsystemet"
              v-model="pokemon.number"
              type="number"
              required
            ></v-text-field>
            <v-text-field
              label="img url"
              hint="Url till bild på pokemonen"
              v-model="pokemon.img"
              required
            ></v-text-field>

            <v-text-field
              label="Beskrivning"
              hint="Beskriv din pokemon, helst från pokemon röd eller blå!"
              v-model="pokemon.description"
              required
            ></v-text-field>
            <!-- //TIPS! Om du vill kunna ha en del av en array som text och en annan som värde så kan man göra som jag gör här nedan. --->
            <v-select
              v-model="pokemon.type"
              :items="[
                ['Gräs', 'Grass'],
                ['Gift', 'Poison'],
                ['Eld', 'Fire'],
                ['Elkraft', 'Electric'],
                ['Vatten', 'Water'],
                ['Spöke(Laban)', 'Ghost'],
                ['Psykisk', 'Psychic'],
                ['Jord', 'Ground'],
                ['Draken', 'Dragon'],
                ['Legendarisk', 'Legendary'],
              ]"
              item-text="[0]"
              item-value="[1]"
              attach
              chips
              label="Typ"
              hint="Vad är det för typ av pokemon"
              multiple
            ></v-select>
            <v-select
              v-model="pokemon.weakness"
              :items="[
                'Grass',
                'Poison',
                'Fire',
                'Electric',
                'Water',
                'Ghost',
                'Psychic',
                'Ground',
                'Dragon',
                'Legendary',
              ]"
              attach
              chips
              label="Svaghet"
              hint="Vad är pokemonens svaghet?"
              multiple
            ></v-select>
            <v-btn color="green lighten-2" text @click="updatePokemon(pokemon)">
              Spara
            </v-btn>
            {{ pokemon }}
          </v-container>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    show: false,
  }),
  props: {
    pokemon: Object,
    uid: String,
  },
  methods: {
    ...mapActions("pokemons", ["removePokemon", "updatePokemon"]),
  },
};
</script>
<style >
</style>