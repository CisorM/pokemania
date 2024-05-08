import { PokedexList } from "../interfaces/Pokedex";

const baseURL = 'https://pokeapi.co/api/v2/';

export const getAllPokemon = async (region:number): Promise<PokedexList> => {
    return await fetch(`${baseURL}pokedex/${region}/`)
    .then(response => response.json() as Promise<PokedexList>);
}
