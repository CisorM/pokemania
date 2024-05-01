import { PokemonCardProps } from '../interfaces/PokemonCardProps';

export const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
  activeIndex,
  translateY,
  handleButtonClick,
  
}) => {
  return (
    <div className='z-20 flex justify-end items-center'>
        <div className="flex flex-col z-20 w-full sm:w-1/2 md:w-1/3 gap-12 justify-center">
          {pokemon.map((poke, index) => (
          <div
              style={{ transform: `translateY(${translateY}%)` }}
              key={poke.id}
              className={`cursor-pointer mr-5 flex items-center gap-2 p-1 rounded-md transition-transform duration-300 ${activeIndex === index? 'bg-bgBlue' : 'bg-bgOrange'}`}
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
                  className={`w-10 transition-all ${activeIndex === index? 'pokeJump' : ''}`}
                  />
              </div>
          </div>
          ))}
      </div> {/* PokedexCard */}

      <button className="btnPokedex top-0 rounded-ss-2xl" onClick={() => handleButtonClick('up')}>
          &#x25B2;
      </button>
      <button className="btnPokedex bottom-0 rounded-bl-2xl" onClick={() => handleButtonClick('down')}>
          &#x25BC;
      </button>
  </div>
  );
};
