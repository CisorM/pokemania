import { useEffect, useState } from "react";
import { getAllPokemon } from "../helpers/utils";
import { listPokemon, Pokemon } from '../interfaces/Pokedex';

export const Pokedex = () => {
  const [allPokemon, setAllPokemon] = useState<Pokemon[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    getAllPokemon(10)
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

  
  const handleButtonClick = (direction: string) => {
    if (direction === 'up' && activeIndex!== null && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      setTranslateY(prevTranslateY => prevTranslateY + 110);
    } else if (direction === 'down' && activeIndex!== null && activeIndex < allPokemon.length - 1) {
      setActiveIndex(activeIndex + 1);
      setTranslateY(prevTranslateY => prevTranslateY - 110);
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
      <article className="flex justify-end gap-3 items-center mb-12">
        <button className="btn w-1/2 p-1 rounded-md sm:w-1/5">Filtrar</button>
        <div>
          <div className="flex gap-2 w-full rounded-md p-1 border-solid border-bgBlack border-[1px]">
            <img src="svgs/search.svg" alt="buscar" />
            <input placeholder="Buscar pokemon..." type="text" className="overflow-hidden outline-none border-none"/>
          </div>
        </div>
      </article>

      <article className="flex flex-col justify-center">
        <img src="images/Pokbg.png" alt="pokeball" className="z-10 w-60 absolute duration-700 hover:rotate-[360deg]"/>

        <div className="relative max-h-[35rem] overflow-hidden bgRows p-12">
          <div className="z-20 flex justify-end items-center">
            <div className="flex flex-col z-20 w-1/3 gap-12 justify-center options-container">
              {allPokemon.map((poke, index) => (
                <div
                style={{ transform: `translateY(${translateY}%)` }}
                    key={poke.id}
                    className={`cursor-pointer flex items-center gap-2 bg-bgOrange p-1 rounded-md transition-transform duration-300 ${activeIndex === index? 'bg-bgBlue' : ''}`}
                    onKeyDown={handleKeyDown}
                    tabIndex={index}
                    >
                    <img src="images/Pokbg.png" alt="pokeball" className="w-6"/>
                    <div className={`flex w-full justify-between rounded-md gap-2 font-pokedex bg-bgWhite p-1 group relative`}>
                        <div className="flex items-center gap-2">
                        <span>{poke.id}.</span>
                        <span className="capitalize">{poke.name}</span>
                        </div>
                        <img
                        src={poke.sprites.front_default}
                        alt={poke.name}
                        className={`w-8 transition-all ${activeIndex === index? 'pokeJump' : ''}`}
                        />
                    </div>
                </div>
              ))}
            </div>
            <button className="btn-up" onClick={() => handleButtonClick('up')}>
              &#x25B2;
            </button>
            <button className="btn-down" onClick={() => handleButtonClick('down')}>
              &#x25BC;
            </button>
          </div>
        </div>
        {activeIndex!== null && (
          <aside className="elipse z-20 bg-bgPokedex w-1/2 h-1/2 flex flex-col absolute items-center">
            <div className="flex flex-col gap-4">
              <img
                src={allPokemon[activeIndex]?.sprites?.other["official-artwork"].front_default}
                alt={allPokemon[activeIndex]?.name}
                className="w-24"
              />
            </div>
          </aside>
        )}
      </article>
    </section>
  );
};