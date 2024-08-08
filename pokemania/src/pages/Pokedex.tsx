import { useEffect, useState } from "react";
import { PokemonCard, PokemonImage } from "../components";
import { Filter } from "../components/pokedex/Filter";
import { useContext } from "react";
import { PokemonContext } from "../context/PokedexContext";

const Pokedex = () => {
  const { pokemons, setPage, page } = useContext(PokemonContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, pokemons.length]);

  const handleButtonClick = (direction: string) => {
    if (direction === "up" && activeIndex !== null && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      setTranslateY((prevTranslateY) => prevTranslateY + 180);
    } else if (
      direction === "down" &&
      activeIndex !== null &&
      activeIndex < pokemons.length - 1
    ) {
      setActiveIndex(activeIndex + 1);
      setTranslateY((prevTranslateY) => prevTranslateY - 180);
    } else if (direction === "nextPage") {
      setPage(page + 1);
      setActiveIndex(0);
      setTranslateY(0);
    } else if (direction === "prevPage" && page !== 1) {
      setPage(page - 1);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
      const newIndex = activeIndex + (event.key === "ArrowUp" ? -1 : 1);
      if (newIndex >= 0 && newIndex < pokemons.length) {
        setActiveIndex(newIndex);
        handleButtonClick(event.key === "ArrowUp" ? "up" : "down");
      } else if (activeIndex === pokemons.length - 1) {
        handleButtonClick("nextPage");
      } else {
        handleButtonClick("prevPage");
      }
    }
  };

  return (
    <section className="flex flex-col mb-24">
      <Filter setActiveIndex={setActiveIndex} setTranslate={setTranslateY} />
      <article className="bgRows">
        <div className="relative max-h-[35rem] overflow-hidden p-12">
          {activeIndex !== null && (
            <PokemonImage pokemon={pokemons} activeIndex={activeIndex} />
          )}
          <PokemonCard
            pokemon={pokemons}
            activeIndex={activeIndex}
            translateY={translateY}
            handleButtonClick={handleButtonClick}
          />
        </div>
      </article>
    </section>
  );
};
export default Pokedex;
