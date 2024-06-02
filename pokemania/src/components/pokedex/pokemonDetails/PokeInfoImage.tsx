import { typesData } from "../../../helpers/types";
import { PokemonInfo } from "../../../interfaces/Pokedex";

export const PokeInfoImage = ({
  pokemonInfo,
}: {
  pokemonInfo: PokemonInfo;
}) => {
  return (
    <figure className="w-64 mx-auto sm:mx-0">
      <img
        src={pokemonInfo.officialArtworkSprite}
        alt={`${pokemonInfo.name} front default sprite`}
        className="w-40 mx-auto sm:w-full aspect-square"
      />
      <figcaption className="flex justify-center gap-3">
        {pokemonInfo.types.map((type) => {
          const typeData = typesData.find((t) => t.type === type);
          return (
            <span
              className="flex gap-3 items-center p-2 sm:p-3 rounded-lg font-pokedex font-bold
                   text-bgWhite uppercase tracking-[.2rem] text-sm sm:text-md"
              key={type}
              style={{ backgroundColor: typeData?.color }}
            >
              <img
                src={typeData?.img}
                alt={`${type} type icon`}
                className="w-4 h-4"
              />
              {type}
            </span>
          );
        })}
      </figcaption>
    </figure>
  );
};
