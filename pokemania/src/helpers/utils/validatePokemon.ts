import { PokemonBoard } from "../../interfaces/SearchBar";

const versionToRegionMap: { [key: string]: string } = {
    "red-blue": "Kanto",
    "gold-silver": "Johto",
    "ruby-sapphire": "Hoenn",
    "diamond-pearl": "Sinnoh",
    "black-white": "Unova",
    "x-y": "Kalos",
    "sun-moon": "Alola",
    "sword-shield": "Galar",
    "scarlet-violet": "Paldea",
  };
  
  function getRegionFromVersion(versionGroupName: string): string | undefined {
    return versionToRegionMap[versionGroupName];
  }
  
  export async function validatePokemon(
    id: string,
    combination: { type: string; region: string }
  ): Promise<boolean> {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-form/${id}`
      );
      const data: PokemonBoard = await response.json();
  
      // Obtener tipos y región del Pokémon seleccionado
      const selectedTypes = data.types.map((typeInfo) => typeInfo.type.name);
      const selectedRegion = getRegionFromVersion(data.version_group.name);
  
      // Comparar con la combinación esperada
      const isTypeMatch = selectedTypes.includes(combination.type);
      const isRegionMatch = selectedRegion === combination.region;
  
      return isTypeMatch && isRegionMatch;
    } catch (error) {
      console.error("Error al obtener datos de la PokeAPI:", error);
      return false;
    }
  }