import { useParams } from "react-router-dom";
import { getPokemonPokedex } from "../helpers/utils";
import { Pokemon, PokemonInfo } from "../interfaces/Pokedex";
import { useState, useEffect } from "react";

export const PokemonDetails = () => {
  const { pokemonId } = useParams();
  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfo>();

  async function getPokemonInfo(pokemonId: string | undefined) {
    try {
      const response = await getPokemonPokedex(pokemonId);
      const pokemonPokedex = response;
      const varietyUrl = pokemonPokedex.varieties[0].pokemon.url;
      const pokemonResponse = await fetch(varietyUrl);
      const pokemonData: Pokemon = await pokemonResponse.json();

      const pokemonTypeInfo = {
        genera: pokemonPokedex.genera[5]?.genus || "Pokemon desconocido",
        name: pokemonData.name || "???",
        id: pokemonData.id,
        height: pokemonData.height,
        weight: pokemonData.weight,
        types: pokemonData.types.map((type) => type.type.name),
        frontDefaultSprite: pokemonData.sprites.front_default,
        officialArtworkSprite:
          pokemonData.sprites.other["official-artwork"].front_default,
      };

      setPokemonInfo(pokemonTypeInfo);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPokemonInfo(pokemonId);
  }, [pokemonId]);

  return (
    <section className="flex flex-col h-screen">
      {pokemonInfo && (
        <>
          <header className="bg-bgRed p-3 rounded-sm">
            <h2 className="font-pokedex font-bold text-lg text-bgWhite tracking-widest">
              INFO.
            </h2>
          </header>

          <article className="bgPokedex relative h-[72%] w-full flex items-center">
            <div className="w-full flex justify-evenly">
              <figure className="w-64">
                <img
                  src={pokemonInfo.officialArtworkSprite}
                  alt={`${pokemonInfo.name} front default sprite`}
                  className="aspect-square"
                />
                <figcaption className="flex justify-center gap-3">
                  {pokemonInfo.types.map((type) => (
                    <span className="bg-bgRed p-2" key={type}>
                      {type}
                    </span>
                  ))}
                </figcaption>
              </figure>

              <article className="flex flex-col w-2/5 gap-6 font-pokedex text-lg">
                <div className="tracking-wider border border-bgBlack rounded-md">
                  <div className="flex gap-2 items-center bg-bgRed text-bgWhite p-2 rounded-md rounded-b-none">
                    <img
                      className="w-6 h-6"
                      src="images/Pokbg.png"
                      alt="pokeball images"
                    />
                    <span>{pokemonInfo.id}</span>
                    <p className="capitalize">{pokemonInfo.name}</p>
                  </div>

                  <div className="bg-bgWhite p-2 text-bgBlack rounded-md rounded-t-none">
                    <p>{pokemonInfo.genera}</p>
                  </div>
                </div>

                <div className="flex gap-10 items-center tracking-wider">
                  <div className="border-bgBlack border-[1px]">
                    <img
                      className="w-28 aspect-square border-t-8 border-solid border-bgRed"
                      src={pokemonInfo.frontDefaultSprite}
                      alt={`${pokemonInfo.name} front default sprite`}
                    />
                  </div>

                  <div className="flex flex-col border-bgBlack border-[1px] p-3 min-w-40 w-[50%] rounded-md">
                    <p className="flex gap-2 mb-2">
                      Alt.
                      <span className="text-lg">
                        {pokemonInfo.height / 10} m
                      </span>
                    </p>
                    <div className="border-b-2 border-bgBlack border-dashed"></div>
                    <p className="flex gap-2 mt-2">
                      Peso.
                      <span>{pokemonInfo.weight / 10} kg</span>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </article>
        </>
      )}
    </section>
  );
};
