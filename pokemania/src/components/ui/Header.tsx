import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="block w-full p-5">
      <Link to={"/"} className="flex gap-4 items-center w-fit">
        <img
          src="images/pokeball.png"
          className="sm:w-16 w-10"
          alt="pokeball | ir a inicio"
        />

        <p className="sm:text-3xl text-xl">POKEMANIA</p>
      </Link>
    </header>
  );
};
