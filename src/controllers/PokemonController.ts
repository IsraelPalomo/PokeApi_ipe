import Pokemon from "../models/Pokemon"
import PokemonData from "../models/PokemonData"

export default class PokemonController{
    public allPokemonsData:Array<PokemonData> | null;
    constructor(allPokemonData:Array<PokemonData> | null = null){
        this.allPokemonsData = allPokemonData;
    }

    public async callAllPokemonData(url:string){
        try {
            const call = await fetch(`${import.meta.env.VITE_API_URL}${url}`);
            let data = await call.json();
            this.allPokemonsData = data;
            console.log('AllDataPokemons ->', this.allPokemonsData)
        } catch (error) {
            console.log(error);
        }

    }

    public get getAllPokemonsData(){
        return this.allPokemonsData;
    }
}