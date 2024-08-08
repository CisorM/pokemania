import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <>
      <section className="flex gap-4 font-pokedex flex-col justify-center items-center h-svh bg-bgPokedex">
        <p className="sm:text-4xl text-3xl  text-bgBlack font-semibold">
          Pokemon #404
        </p>
        <div className="flex justify-betw items-center gap-4">
          <span className="text-xl">Luxio</span>
          <img
            src="images/Pokemon404.gif"
            className=" w-32"
            alt="Pagina no encontrada"
          />
        </div>
        <p className="text-xl">Pagina no encontrada</p>
        <Link to={"/"} className="btn w-2/6  rounded-md cursor-pointer">
          Volver al lobby
        </Link>
      </section>
    </>
  );
};
export default Page404;
