import { useEffect, useState } from "react";
import { PokemonCard, PokemonImage } from "../components";
import { Filter } from "../components/Filter";
import { useContext } from "react";
import { PokemonContext } from "../context/PokedexContext";

export const Pokedex = () => {
  const { pokemons } = useContext(PokemonContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, pokemons.length]);


  const handleButtonClick = (direction: string) => {
    if (direction === 'up' && activeIndex!== null && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      setTranslateY(prevTranslateY => prevTranslateY + 180);
    } else if (direction === 'down' && activeIndex!== null && activeIndex < pokemons.length - 1) {
      setActiveIndex(activeIndex + 1);
      setTranslateY(prevTranslateY => prevTranslateY - 180);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
      const newIndex = activeIndex + (event.key === 'ArrowUp'? -1 : 1);
      if (newIndex >= 0 && newIndex < pokemons.length) {
        setActiveIndex(newIndex);
        handleButtonClick(event.key === 'ArrowUp'? 'up' : 'down');
      }
    }
  };

  return (
    <section className="flex flex-col mb-24">
        <Filter />
        <article className="bgRows"> 
            <div className="relative max-h-[35rem] overflow-hidden p-12">
                {activeIndex!== null && (
                    <PokemonImage pokemon={pokemons}  activeIndex={activeIndex}/>
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