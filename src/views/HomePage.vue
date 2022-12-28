<template>
<div class="template-pokedex">
  <div class="card-pokemon" v-for="(pokemon,index) in allPokemonInfo" :key="index">
    <img class="pokemon-sprite" :src="pokemon.sprites.other.home.front_default" alt="img-pokemon">
    <div class="card-pokemon--info">
      <h4 class="pokemon-name">{{ pokemon.name }}</h4>
      <BarHpPokemon :hp="pokemon.stats[0].base_stat"/>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { computed,Ref,ref} from 'vue';
import BarHpPokemon from '../components/BarHpPokemon.vue';
import PokemonController from '../controllers/PokemonController';

const URL_POKEMON_DATA:Ref<string> = ref('pokemon?limit=100&offset=0'); 
const POKEMON_CONTROLLER = new PokemonController(URL_POKEMON_DATA);

let allPokemonInfo = computed(()=>{return POKEMON_CONTROLLER.getPokemonsInfo});
POKEMON_CONTROLLER.startControllerPokemon();

</script>
