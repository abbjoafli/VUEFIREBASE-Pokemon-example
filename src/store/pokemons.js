import { firestoreAction } from "vuexfire";
import db from "../firebase";

const state = {
  pokemons: [],
  mypokemons: []
};
const getters = {
  pokemons: state => {
    return state.pokemons;
  },
  pokemonsShow: state => {
    return state.pokemons.map(pokemon => ({
      name: pokemon.name,
      id: pokemon.id,
      userId: pokemon.userId,
      img: pokemon.img,
      description: pokemon.description
    }));
  },
  MypokemonsShow: state => {
    return state.mypokemons.map(pokemon => ({
      name: pokemon.name,
      id: pokemon.id,
      userId: pokemon.userId,
      img: pokemon.img,
      description: pokemon.description
    }));
  }
};
const actions = {
  initPokemons: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef("pokemons", db.collection("pokemons"));
  }),
  initMyPokemons: firestoreAction(({ bindFirestoreRef }, userId) => {
    //Denna är egentligen "onödig" för vårat ändamål då vi ändå ska ha alla pokemons för att kika på men i andra projekt kan denna vara bra.
    bindFirestoreRef(
      "mypokemons",
      db.collection("pokemons").where("userId", "==", userId)
    ); //Vill man ta bara "mina" pokemon från alla arrayen så kan man använda pokemon.filter(pokemon=> pokemon.userId== VåratID) t.ex
  }),

  updatePokemon({ commit }, Pokemon) {
    console.log(Pokemon + "Uppdateras");
    db.collection("pokemons")
      .doc(Pokemon.id)
      .update(Pokemon);
  },
  removePokemon({}, PokemonId) {
    console.log(PokemonId + " tas bort");
    db.collection("pokemons")
      .doc(PokemonId)
      .delete();
  },
  createPokemon({}, Pokemon) {
    Pokemon.uploadTime = Date.now();
    console.log(Pokemon + " skapas");
    db.collection("pokemons").add(Pokemon);
  }
};

export default {
  namespaced: true,
  state,
  actions,
  getters
};
