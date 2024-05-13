import { useContext } from 'react';
import { PokemonCardProps } from '../../interfaces/PokemonCardProps';
import { PokemonContext } from '../../context/PokedexContext';
import { PokemonItem } from './PokemonItem';
import { CreateButton } from './pokedexButton';

export const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
  activeIndex,
  translateY,
  handleButtonClick,
}) => {

  const {page} = useContext(PokemonContext)
  
  const upButtonOnClick = () => {
    activeIndex === 0 && page !== 1 ? (
        handleButtonClick('prevPage') 
    ) : handleButtonClick('up');
  };
  const downButtonOnClick = () => {
    activeIndex === pokemon.length - 1 ? (
        handleButtonClick("nextPage")
    ) : handleButtonClick('down');
  };
  
  const upButton = CreateButton({
    onClick: upButtonOnClick,
    className: 'btnPokedex top-0 rounded-ss-2xl',
    icon: '∧'
  });
  
  const downButton = CreateButton({
    onClick: downButtonOnClick,
    className: 'btnPokedex bottom-0 rounded-bl-2xl',
    icon: 'v'
  });

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
        </div>
        {upButton}
        {downButton}
  </div>
  );
};
