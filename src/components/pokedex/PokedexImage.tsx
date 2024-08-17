import { PokemonImageProps } from '../../interfaces/PokemonImageProps';

export const PokemonImage: React.FC<PokemonImageProps> = ({ pokemon, activeIndex }) => {
  return (
    <aside className="hidden rounded-full bg-bgPokedex w-1/3 h-1/4 sm:h-1/2 md:h-[80%] sm:flex flex-col absolute items-center justify-center">
        <img
        src={pokemon[activeIndex]?.sprites?.other["official-artwork"].front_default}
        alt={pokemon[activeIndex]?.name}
        className="w-16 sm:w-32 md:w-64"
        />
        <span className='uppercase font-pokedex font-bold text-3xl text-bgWhite tracking-widest '>{pokemon[activeIndex]?.name}</span>
    </aside>
  );
};