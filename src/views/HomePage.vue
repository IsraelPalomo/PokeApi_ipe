<template>
  <p>{{pokemonController.getAllPokemonsData}}</p>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import PokemonController from '../controllers/PokemonController';
let pokemonController = new PokemonController();
const URL_POKEMON_DATA = 'pokemon?limit=100000&offset=0'; 

onMounted(() => {
  pokemonController.callAllPokemonData(URL_POKEMON_DATA);
  allPokemonData
})

let allPokemonData = () => {
  let allData = ref(pokemonController.getAllPokemonsData);
  return allData.value
}


</script>
