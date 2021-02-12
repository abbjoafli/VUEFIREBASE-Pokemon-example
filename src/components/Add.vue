<template>
  <v-flex justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Lägg till en ny pokemon</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-text-field
              label="Namn"
              required
              v-model="newPokemon.name"
            ></v-text-field>

            <v-text-field
              label="Pokedex nummer"
              hint="Pokemonens nummer i pokedexsystemet"
              v-model="newPokemon.number"
              type="number"
              required
            ></v-text-field>
            <v-text-field
              label="img url"
              hint="Url till bild på pokemonen"
              v-model="newPokemon.img"
              required
            ></v-text-field>
            <v-img
              v-if="newPokemon.hasOwnProperty('img')"
              :src="newPokemon.img"
              height="200px"
            ></v-img>
            <v-text-field
              label="Beskrivning"
              hint="Beskriv din pokemon, helst från pokemon röd eller blå!"
              v-model="newPokemon.description"
              required
            ></v-text-field>
            <!-- //TIPS! Om du vill kunna ha en del av en array som text och en annan som värde så kan man göra som jag gör här nedan. --->
            <v-select
              v-model="newPokemon.type"
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
              v-model="newPokemon.weakness"
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
              item-text="[0]"
              item-value="[1]"
              attach
              chips
              label="Svaghet"
              hint="Vad är pokemonens svaghet?"
              multiple
            ></v-select>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn dark color="blue darken-1" @click="dialog = false">
            Stäng
          </v-btn>
          <v-btn
            color="green lighten-1"
            text
            dark
            @click="createPokemonlocal()"
          >
            Lägg till!
          </v-btn>
          <!-- <v-btn //Det finns två sätt att göra detta på, antingen som ovan med en local metod som är mellanlandning innan man skickar vidare infon till storen. Föredelar med den är att du kan anpassa datan som skickas, stänga fönstret osv.
                    //Fördelarna med sättet nedan är att det är enkelt, cleant och smidigt. Överväg!
            color="green lighten-1"
            text
            dark
            @click="createPokemon(newPokemon)"
          >
            Lägg till!
          </v-btn> -->
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn dark color="green darken-1" @click="dialog = true">
      Lägg till en Pokemon
    </v-btn>
  </v-flex>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    dialog: false,
    newPokemon: {},
  }),
  props: {
    uid: String,
  },
  methods: {
    ...mapActions("pokemons", ["createPokemon"]),

  createPokemonlocal() {
    console.log("Hej")
    this.newPokemon.userId = this.uid;
    this.newPokemon.number = parseInt(this.newPokemon.number);//Gör om den till ett nummer
    this.createPokemon(this.newPokemon);
    this.dialog = false;
    this.newPokemon={};
  }, 
   },
};
</script>
<style >
</style>