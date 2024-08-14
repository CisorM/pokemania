import { useState } from "react";
import { SquareProps } from "../../interfaces/Board";
import { SearchBarModal } from "../ui/SearchBarModal";

const Square: React.FC<SquareProps> = ({
  children,
  isSelected,
  updateBoard,
  index,
}) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  const [openSearch, setSearch] = useState(false);

  const handlePokemonSelect = (id: string | null) => {
    // Aquí puedes agregar lógica para verificar la condición del Square o cualquier otra acción necesaria
    console.log("Pokémon seleccionado con ID:", id);
  };

  const handleClick = () => {
    setSearch(true);
    if (updateBoard) {
      // Poner otra condicion de si el pokemon seleccionado retorna true
      updateBoard(index || 0);
    }
  };

  return (
    <article>
      <SearchBarModal
        isOpen={openSearch}
        setIsOpen={setSearch}
        handleLinkClick={handlePokemonSelect}
      />
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    </article>
  );
};

export default Square;
