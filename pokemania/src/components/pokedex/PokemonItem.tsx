import { Link } from "react-router-dom";

interface PokemonItemProps {
  pokemonItem: {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
  };
  isActive: boolean;
  translateY: number;
}

export const PokemonItem: React.FC<PokemonItemProps> = ({
  pokemonItem,
  isActive,
  translateY,
}) => {
  return (
    <Link
      to={`${pokemonItem.id}`}
      style={{ transform: `translateY(${translateY}%)` }}
      className={`cursor-pointer mr-5 flex items-center gap-2 p-1 rounded-md transition-transform duration-300 ${
        isActive ? "bg-bgBlue" : "bg-bgOrange"
      }`}
    >
      <img src="/images/pokeicon.png" alt="pokeball" className="w-6" />
      <div className="flex w-full justify-between rounded-md gap-2 font-pokedex bg-bgWhite p-1 group relative">
        <div className="flex items-center gap-2">
          <span>{pokemonItem.id}.</span>
          <span className="capitalize">{pokemonItem.name}</span>
        </div>
        <img
          src={pokemonItem.sprites.front_default}
          alt={pokemonItem.name}
          className={`w-10 transition-all ${isActive ? "pokeJump" : ""}`}
        />
      </div>
    </Link>
  );
};
