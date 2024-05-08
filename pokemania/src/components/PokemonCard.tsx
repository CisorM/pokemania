import { useContext } from 'react';
import { PokemonCardProps } from '../interfaces/PokemonCardProps';
import { PokemonContext } from '../context/PokedexContext';
import { PokemonItem } from './PokemonItem';

export const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
  activeIndex,
  translateY,
  handleButtonClick,
}) => {

  const {setPage, page} = useContext(PokemonContext)
  return (
    <div className='z-20 flex justify-end items-center'>
        <div className="flex flex-col z-20 w-full sm:w-1/2 md:w-1/3 gap-12 justify-center">
          {pokemon.map((pokemonItem, index) => (
            <PokemonItem
              key={pokemonItem.id}
              pokemonItem={pokemonItem}
              isActive={activeIndex === index}
              translateY={translateY}
            />
          ))}
          <div className="w-full flex justify-center"> 
            <button className='btn w-1/2 rounded-md bg-bgBlue' onClick={() => setPage(page + 1)}>Next</button>
          </div>
        </div>
      <button className="btnPokedex top-0 rounded-ss-2xl" onClick={() => handleButtonClick('up')}>
          &#x25B2;
      </button>
      <button className="btnPokedex bottom-0 rounded-bl-2xl" onClick={() => handleButtonClick('down')}>
          &#x25BC;
      </button>
  </div>
  );
};
