export const SearchNotFound = () => {
  return (
    <div className="mx-auto">
      <p className="text-center text-xl font-pokedex">
        No se encontraron resultados
      </p>
      <img
        className="w-64 h-fit "
        src="images/slowpoke.png"
        alt="pokemon no encontrado"
      />
    </div>
  );
};
