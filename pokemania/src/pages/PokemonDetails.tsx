import { useParams, Link } from "react-router-dom";
import { getPokemonPokedex } from "../helpers/utils";
import { Pokemon, PokemonInfo } from "../interfaces/Pokedex";
import { useState, useEffect } from "react";
import { typesData } from "../helpers/types";

export const PokemonDetails = () => {
  const { pokemonId } = useParams<{ pokemonId: string }>();
  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfo>();
  const pokemonIdNumber = pokemonId ? parseInt(pokemonId) : 1;

  async function getPokemonInfo(pokemonId: string | undefined) {
    try {
      const response = await getPokemonPokedex(pokemonId);
      const pokemonPokedex = response;
      const varietyUrl = pokemonPokedex.varieties[0].pokemon.url;
      const pokemonResponse = await fetch(varietyUrl);
      const pokemonData: Pokemon = await pokemonResponse.json();

      const flavorTextEntry = pokemonPokedex.flavor_text_entries.find(
        (entry) => entry.language?.name === "es"
      );
      const pokemonTypeInfo: PokemonInfo = {
        genera: pokemonPokedex.genera[5]?.genus || "Pokemon desconocido",
        flavorText:
          flavorTextEntry?.flavor_text ||
          "Descripción no disponible actualmente :(",
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

  //Funcion de Fetch

  useEffect(() => {
    getPokemonInfo(pokemonId);
  }, [pokemonId]);

  return (
    <section className="flex flex-col h-screen sm:w-[90%] sm:mx-auto">
      <header className="bg-bgRed p-3 rounded-sm">
        <div className="flex gap-4 items-center">
          <Link
            to={"/pokedex"}
            className="flex items-center justify-center bg-bgBlack p-2 w-6 h-6 rounded-full"
          >
            <span className="text-bgWhite text-[1rem]">&lt;</span>
          </Link>
          <h2 className="font-pokedex font-bold text-lg text-bgWhite tracking-widest">
            INFO.
          </h2>
        </div>
      </header>
      {!pokemonInfo ? (
        <>
          <p>POKEMON NO DISPONIBLE</p>
        </>
      ) : (
        <>
          <article className="bgPokedex relative h-full md:h-[72%] w-full flex items-center">
            <div className="w-full flex sm:flex-row flex-col justify-evenly gap-5 sm:gap-0">
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
                <div className="flex border-bgBlack border-[1px] p-3 min-w-40 w-full md:w-3/4 text-center rounded-md mb-6 sm:mb-0">
                  <p>{pokemonInfo.flavorText}</p>
                </div>
              </article>
            </div>
          </article>
          <div className="flex justify-between mt-1">
            <Link
              to={`/pokedex/${pokemonIdNumber - 1}`}
              className={`bg-bgRed text-bgWhite font-bold py-2 px-4 rounded z-0 ${
                pokemonIdNumber <= 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              style={{
                pointerEvents: pokemonIdNumber <= 1 ? "none" : "auto",
              }}
            >
              Anterior
            </Link>
            <Link
              to={`/pokedex/${pokemonIdNumber + 1}`}
              className={`bg-bgRed text-bgWhite font-bold py-2 px-4 rounded z-0 ${
                pokemonIdNumber >= 1025 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              style={{
                pointerEvents: pokemonIdNumber >= 1025 ? "none" : "auto",
              }}
            >
              Siguiente
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

// Crear Componentes
// Arreglar errores
// Crear funcion en otro lado para el fetch
//Arreglar Footer (en mobile se mueve en horizontal y vertical)
//Agregar componente SearchBar
