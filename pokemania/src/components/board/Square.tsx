import { useState } from "react";
import { SquareProps } from "../../interfaces/Board";
import { TURNS } from "../../helpers/boardConfig";
import { validatePokemon } from "../../helpers/utils/validatePokemon";
import { SearchBarModal } from "../ui/Searchbar/SearchBarModal";

const Square: React.FC<SquareProps> = ({
  children,
  isSelected,
  updateBoard,
  index,
  combination,
  setTurn,
  turn,
}) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  const [openSearch, setSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handlePokemonSelect = async (id: string | null) => {
    if (!id) return;
    if (!combination) {
      console.error("Combination is undefined. Cannot validate Pokémon.");
      return;
    }
    const isValid = await validatePokemon(id, combination);
    if (updateBoard && isValid) {
      updateBoard(index || 0);
    } else {
      console.log("El Pokémon seleccionado no cumple las condiciones."); //Poner mensaje de error en caso de equivocarse
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
      if (!setTurn) return;
      setTurn(newTurn);
    }
  };

  const handleClick = () => {
    if (children !== null && children !== undefined) return;
    setSearch(true);
  };

  return (
    <article>
      <SearchBarModal
        isOpen={openSearch}
        setIsOpen={setSearch}
        handleLinkClick={handlePokemonSelect}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    </article>
  );
};

export default Square;
