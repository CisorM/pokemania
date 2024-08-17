import { useState } from "react";
import { pokemonData } from "../../../helpers/pokemons";
import { useNavigate } from "react-router-dom";
import { Pokemon, SearchBarProps } from "../../../interfaces/SearchBar";
import { SearchNotFound } from "./NotFound";
import { InputSearch } from "./Input";

export const SearchBar = ({
  handleLinkClick,
  setOpen,
  searchTerm,
  setSearchTerm,
}: SearchBarProps) => {
  const [searchResults, setSearchResults] = useState<Pokemon[]>([]);
  const navigate = useNavigate();

  const defaultHandleLinkClick = (id: string) => {
    navigate(`${id}`, { replace: true });
    document.body.style.overflowY = "auto";
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    if (searchTerm === "") {
      setSearchResults([]);
    } else if (pokemonData && pokemonData.pokemons) {
      const results = pokemonData.pokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(searchTerm);
      });
      setSearchResults(results.slice(0, 6));
    } else {
      console.error("pokemonData.pokemon is undefined");
    }
  };

  const handleClick = (id: string) => {
    if (handleLinkClick) {
      setOpen(false);
      handleLinkClick(id);
    } else {
      defaultHandleLinkClick(id);
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full justify-center">
      <InputSearch searchTerm={searchTerm} handleSearch={handleSearch} />
      {searchResults.length > 0 ? (
        <ul className="flex flex-col bg-bgWhite gap-2 rounded-lg h-64 overflow-y-auto">
          {searchResults.map((pokemon: Pokemon) => (
            <div
              onClick={() => handleClick(pokemon.id)}
              key={pokemon.id}
              className="flex items-center capitalize m-1 rounded-lg bg-bgBlanco gap-2 cursor-pointer border-b-2 hover:border-bgBlue"
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
                width={40}
                height={40}
              />
              <span>{pokemon.name}</span>
            </div>
          ))}
        </ul>
      ) : (
        searchTerm !== "" && <SearchNotFound />
      )}
    </div>
  );
};
