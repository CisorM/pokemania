import { Link } from "react-router-dom";

export const BtnPokedexInfo = ({
  pokemonId,
}: {
  pokemonId: string | undefined;
}) => {
  const pokemonIdNumber = pokemonId ? parseInt(pokemonId) : 1;
  return (
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
  );
};
