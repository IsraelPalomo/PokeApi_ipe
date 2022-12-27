export default class PokemonData{
    public url:string | null;
    public name:string | null;
    constructor(url:string, name:string){
        this.url = url,
        this.name = name
    }
}