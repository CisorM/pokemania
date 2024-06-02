import { PokedexList, PokemonSpecies, PokemonType } from "../interfaces/Pokedex";
import { Pokemon, PokemonInfo } from "../interfaces/Pokedex";

const baseURL = 'https://pokeapi.co/api/v2/';

export const getAllPokemon = async (region:number): Promise<PokedexList> => {
    return await fetch(`${baseURL}pokedex/${region}/`)
    .then(response => response.json() as Promise<PokedexList>);
}

export const getAllPokemonByType = async (type:number): Promise<PokemonType> => {
    return await fetch(`${baseURL}type/${type}/`)
    .then(response => response.json() as Promise<PokemonType>);
}

export const getPokemonPokedex = async (pokeId:string | undefined): Promise<PokemonSpecies> => {
    return await fetch(`${baseURL}pokemon-species/${pokeId}/`)
    .then(response => response.json() as Promise<PokemonSpecies>);
}

//-------------------------------------------------------------

export const getPokemonInfo = async (pokemonId: string | undefined): Promise<PokemonInfo> => {
    try {
      const response = await getPokemonPokedex(pokemonId);
      const pokemonPokedex = response;
      const varietyUrl = pokemonPokedex.varieties[0].pokemon.url;
      const pokemonResponse = await fetch(varietyUrl);
      const pokemonData: Pokemon = await pokemonResponse.json();
  
      const flavorTextEntry = pokemonPokedex.flavor_text_entries.find(
        (entry) => entry.language?.name === "es"
      );
      const pokemonTypeInfo: PokemonInfo = {
        genera: pokemonPokedex.genera[5]?.genus || "Pokemon desconocido",
        flavorText:
          flavorTextEntry?.flavor_text ||
          "Descripción no disponible actualmente :(",
        name: pokemonData.name || "???",
        id: pokemonData.id,
        height: pokemonData.height,
        weight: pokemonData.weight,
        types: pokemonData.types.map((type) => type.type.name),
        frontDefaultSprite: pokemonData.sprites.front_default,
        officialArtworkSprite:
          pokemonData.sprites.other["official-artwork"].front_default,
      };
  
      return pokemonTypeInfo;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };