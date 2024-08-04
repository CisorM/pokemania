import { useState } from "react";
import { pokemonData } from "../../helpers/pokemons";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para almacenar el término de búsqueda
  const [searchResults, setSearchResults] = useState([]); // Estado para almacenar los resultados de la búsqueda

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    if (pokemonData && pokemonData.pokemons) {
      const results = pokemonData.pokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(searchTerm);
      });
      setSearchResults(results.slice(0, 7));
    } else {
      console.error("pokemonData.pokemon is undefined");
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex gap-2 w-full rounded-md p-1 border-solid border-bgBlack border-[1px]">
        <img src="svgs/search.svg" alt="buscar" />
        <input
          placeholder="Buscar pokemon..."
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          className="overflow-hidden outline-none border-none"
        />
      </div>

      {searchResults.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {searchResults.map((pokemon) => (
            <li key={pokemon.id} className="flex gap-2">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
                width={40}
                height={40}
              />
              <span>{pokemon.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
