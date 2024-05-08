export interface PokedexList {
    pokemon_entries: {
      entry_number: number;
      pokemon_species: {
        name: string;
        url: string;
      };
    }[];
  }

export interface PokemonSpecies {
  color: {
    name: string;
  };

  genera: {
    genus: string;
  }[];

  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;

  varieties: {
    pokemon: {
    url: string;
    };
  }[];
}

export interface Pokemon {
    name: string;
    id: number;
    height: number;
    weight: number;
    types: {
        type: {
          name: string;
        };
      }[];
    sprites: {
        front_default: string;
        other: {
            "official-artwork": {
                front_default: string;
            };
        };
    };
}


