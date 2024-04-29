import { listPokemon } from "../interfaces/Pokedex";

const baseURL = 'https://pokeapi.co/api/v2/';

export const getAllPokemon = async (limit: number): Promise<listPokemon> => {
    return await fetch(`${baseURL}pokemon?limit=${limit}&offset=0`)
    .then(response => response.json() as Promise<listPokemon>);
}
