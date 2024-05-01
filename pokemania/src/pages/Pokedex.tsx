import { useEffect, useState } from "react";
import { getAllPokemon } from "../helpers/utils";
import { listPokemon, Pokemon } from '../interfaces/Pokedex';
import { PokemonCard, PokemonImage, PokedexModal } from "../components";

export const Pokedex = () => {
  const [allPokemon, setAllPokemon] = useState<Pokemon[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getAllPokemon(20)
    .then((data: listPokemon) => {
        const pokemonData = data.results.map(poke => {
          return fetch(poke.url)
          .then(res => res.json())
          .then((res: Pokemon) => {
              return res;
            });
        });
        Promise.all(pokemonData).then(pokemonArray => {
          setAllPokemon(pokemonArray);
        });
      });
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, allPokemon.length]);



  const handleButtonClick = (direction: string) => {
    if (direction === 'up' && activeIndex!== null && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      setTranslateY(prevTranslateY => prevTranslateY + 180);
    } else if (direction === 'down' && activeIndex!== null && activeIndex < allPokemon.length - 1) {
      setActiveIndex(activeIndex + 1);
      setTranslateY(prevTranslateY => prevTranslateY - 180);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
      const newIndex = activeIndex + (event.key === 'ArrowUp'? -1 : 1);
      if (newIndex >= 0 && newIndex < allPokemon.length) {
        setActiveIndex(newIndex);
        handleButtonClick(event.key === 'ArrowUp'? 'up' : 'down');
      }
    }
  };

  return (
    <section className="flex flex-col mb-24">
        <article className="flex justify-end gap-3 items-center mb-6">
            <button className="btn w-1/2 p-1 rounded-md sm:w-1/5" onClick={() => setOpen(!open)}>Filtrar</button>
            <div>
            <div className="flex gap-2 w-full rounded-md p-1 border-solid border-bgBlack border-[1px]">
                <img src="svgs/search.svg" alt="buscar" />
                <input placeholder="Buscar pokemon..." type="text" className="overflow-hidden outline-none border-none"/>
            </div>
            </div>
        </article> {/* SearchBar */} 

        <article className="bgRows"> 
            <div className="relative max-h-[35rem] overflow-hidden p-12">
                {activeIndex!== null && (
                    <PokemonImage pokemon={allPokemon}  activeIndex={activeIndex}/>
                )}
                    <PokemonCard 
                        pokemon={allPokemon}
                        activeIndex={activeIndex}
                        translateY={translateY}
                        handleButtonClick={handleButtonClick}
                    />
            </div>
        </article>

        <PokedexModal isOpen={open} setIsOpen={setOpen}/>
    </section>
  );
};