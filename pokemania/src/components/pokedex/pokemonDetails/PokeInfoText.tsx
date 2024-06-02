import { PokemonInfo } from "../../../interfaces/Pokedex";

export const PokeInfoText = ({ pokemonInfo }: { pokemonInfo: PokemonInfo }) => {
  return (
    <article className="flex flex-col w-full sm:w-2/4 gap-5 font-pokedex text-lg sm:mx-0 mx-auto">
      <div className="tracking-wider border border-bgBlack rounded-md">
        <div className="flex gap-2 items-center bg-bgRed text-bgWhite p-2 rounded-md rounded-b-none">
          <img
            className="w-6 h-6"
            src="/images/pokeicon.png"
            alt="pokeball images"
          />
          <span>{pokemonInfo.id}</span>
          <p className="capitalize">{pokemonInfo.name}</p>
        </div>

        <div className="bg-bgWhite p-2 text-bgBlack rounded-md rounded-t-none">
          <p>{pokemonInfo.genera}</p>
        </div>
      </div>

      <div className="flex flex-col items-center sm:flex-row gap-4 sm:gap-10 tracking-wider ">
        <div className="border-bgBlack border-[1px]">
          <img
            className="aspect-square border-t-8 border-solid border-bgRed"
            src={pokemonInfo.frontDefaultSprite}
            alt={`${pokemonInfo.name} front default sprite`}
          />
        </div>

        <div className="flex flex-col border-bgBlack border-[1px] p-3 min-w-40 w-[50%] rounded-md">
          <p className="flex gap-2 mb-2">
            Alt.
            <span className="text-lg">{pokemonInfo.height / 10} m</span>
          </p>
          <div className="border-b-2 border-bgBlack border-dashed"></div>
          <p className="flex gap-2 mt-2">
            Peso.
            <span>{pokemonInfo.weight / 10} kg</span>
          </p>
        </div>
      </div>
      <div className="flex border-bgBlack border-[1px] p-3 min-w-40 w-full md:w-3/4 text-center rounded-md mb-6 sm:mb-0">
        <p>{pokemonInfo.flavorText}</p>
      </div>
    </article>
  );
};
