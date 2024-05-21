import { createContext, useState, useEffect, ReactNode } from 'react';
import { getAllPokemon, getAllPokemonByType } from '../helpers/utils';
import { Pokemon } from '../interfaces/Pokedex';

interface PokemonContext {
  pokemons: Pokemon[];
  loading: boolean;
  page: number;
  setRegion: (region: number) => void;
  setType: (types: number) => void;
  setPage: (newPage: number) => void;
  setFetchByRegion: (opt: boolean) => void;
}

export const PokemonContext = createContext<PokemonContext>({
  pokemons: [],
  loading: false,
  page: 1,
  setRegion: () => {},
  setType: () => {},
  setPage: () => {},
  setFetchByRegion: () => {}
});

export const PokemonProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [region, setRegion] = useState<number>(1);
  const [type, setType] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [fetchByRegion, setFetchByRegion] = useState<boolean>(true);
  const limit = 20;

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      if (fetchByRegion) {
        const response = await getAllPokemon(region);
        const pokemonPokedex = response.pokemon_entries.slice((page - 1) * limit, page * limit).map(async (poke) => {
          const speciesResponse = await fetch(poke.pokemon_species.url).then((res) => res.json());
          const varietiesResponse = await fetch(speciesResponse.varieties[0].pokemon.url).then((res) => res.json());
          return { ...speciesResponse, ...varietiesResponse };
        });
        const pokemonArray = await Promise.all(pokemonPokedex);
        setPokemons(pokemonArray);
      } else {
        const response = await getAllPokemonByType(type);
        const pokemonType = response.pokemon.slice((page - 1) * limit, page * limit).map(async (poke) => {
          const pokemonResults = await fetch(poke.pokemon.url);
          return pokemonResults.json(); 
        });
        const pokemonArray = await Promise.all(pokemonType);
        setPokemons(pokemonArray);
      }
      setLoading(false);
    };
    fetchPokemons();
  }, [region, page, type, fetchByRegion]);

  return (
    <PokemonContext.Provider value={{ pokemons, loading, setRegion, setType, setPage, page, setFetchByRegion }}>
      {children}
    </PokemonContext.Provider>
  );
};