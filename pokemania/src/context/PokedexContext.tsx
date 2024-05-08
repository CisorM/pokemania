import { createContext, useState, useEffect, ReactNode } from 'react';
import { getAllPokemon } from '../helpers/utils';
import { Pokemon } from '../interfaces/Pokedex';

interface PokemonContext {
  pokemons: Pokemon[];
  loading: boolean;
  page: number
  setRegion: (region: number) => void;
  setTypes: (types: string[]) => void;
  setPage: (newPage: number) => void;
}

export const PokemonContext = createContext<PokemonContext>({
  pokemons: [],
  loading: false,
  page: 1,
  setRegion: () => {},
  setTypes: () => {},
  setPage: () => {}
});

export const PokemonProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [region, setRegion] = useState<number>(1);
  const [types, setTypes] = useState<string[]>([]); 
  const [page, setPage] = useState<number>(1);

  const limit = 20;
  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      const response = await getAllPokemon(region);
      const pokemonPokedex = response.pokemon_entries.slice((page - 1) * limit, page * limit).map(async (poke) => {
        const speciesResponse = await fetch(poke.pokemon_species.url).then((res) => res.json());
        const varietiesResponse = await fetch(speciesResponse.varieties[0].pokemon.url).then((res) => res.json());
        return {...speciesResponse,...varietiesResponse };
      });
      const pokemonArray = await Promise.all(pokemonPokedex);
      setPokemons(pokemonArray);
      setLoading(false);
    };
    fetchPokemons();
  }, [region, page, limit]);

  return (
    <PokemonContext.Provider value={{ pokemons, loading, setRegion, setTypes, setPage, page }}>
      {children}
    </PokemonContext.Provider>
  );
};