import { PokedexList, PokemonPokedex, PokemonType } from "../interfaces/Pokedex";

const baseURL = 'https://pokeapi.co/api/v2/';

export const getAllPokemon = async (region:number): Promise<PokedexList> => {
    return await fetch(`${baseURL}pokedex/${region}/`)
    .then(response => response.json() as Promise<PokedexList>);
}

export const getAllPokemonByType = async (type:number): Promise<PokemonType> => {
    return await fetch(`${baseURL}type/${type}/`)
    .then(response => response.json() as Promise<PokemonType>);
}

export const getPokemonPokedex = async (pokeId:number): Promise<PokemonPokedex> => {
    return await fetch(`${baseURL}pokemon-species/${pokeId}/`)
    .then(response => response.json() as Promise<PokemonPokedex>);
}
