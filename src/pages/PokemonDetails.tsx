import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PokemonInfo } from "../interfaces/Pokedex";
import {
  HeaderInfo,
  BtnPokedexInfo,
  PokeInfoImage,
  PokeInfoText,
} from "../components/index";
import { getPokemonInfo } from "../helpers/utils/getPokemonInfo";

const PokemonDetails = () => {
  const { pokemonId } = useParams<{ pokemonId: string }>();
  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfo>();

  useEffect(() => {
    getPokemonInfo(pokemonId).then((pokemonInfo) =>
      setPokemonInfo(pokemonInfo)
    );
  }, [pokemonId]);

  return (
    <section className="flex flex-col h-screen sm:w-[90%] sm:mx-auto">
      <HeaderInfo />
      {!pokemonInfo ? (
        <>
          <p>¡POKEMON NO DISPONIBLE!</p>
        </>
      ) : (
        //Renderizar componente de error
        <>
          <article className="bgPokedex relative h-full md:h-[72%] w-full flex items-center">
            <div className="w-full flex sm:flex-row flex-col justify-evenly gap-5 sm:gap-0">
              <PokeInfoImage pokemonInfo={pokemonInfo} />
              <PokeInfoText pokemonInfo={pokemonInfo} />
            </div>
          </article>

          <BtnPokedexInfo pokemonId={pokemonId} />
        </>
      )}
    </section>
  );
};
export default PokemonDetails;
