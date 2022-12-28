import { Ref, ref } from "vue";
import { pokemon_i } from "../interfaces/pokemon";
import { pokemon_data_url_i } from "../interfaces/pokemon_data_url";

export default class PokemonController{

    constructor(url:Ref<string>){
        this.url = url;
    }
   
    private url: Ref<string> = ref('');
    private allPokemonsUrls: Ref<Array<pokemon_data_url_i>> = ref([]);
    private pokemon: Ref<pokemon_i> | Ref<null> = ref(null);
    private allPokemons: Ref<Array<pokemon_i>> = ref([]);

    private async callAllPokemonData(){
        try {
            const call = await fetch(`${import.meta.env.VITE_API_URL}${this.url.value}`);
            let data = await call.json();
            this.allPokemonsUrls.value = data.results;
            data.results.forEach((pokemonsData:any)=>{
            this.callAllPokemonsInfo(pokemonsData.url)
            });
        } catch (error) {
            console.log(error);
        }
    }

    private async callAllPokemonsInfo( url:string ){
            try {
                const call = await fetch(url);
                let data = await call.json();
                this.allPokemons.value.push(data);
            } catch (error) {
             console.log(error)   
            }
    }

    public startControllerPokemon(){
        this.callAllPokemonData();
    }

    public get getAllPokemonsData(){
        return this.allPokemonsUrls.value;
    }


    public get getPokemonsInfo(){
        return this.allPokemons.value
    }
}