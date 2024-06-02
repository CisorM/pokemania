import { Link } from "react-router-dom";

export const HeaderInfo = () => {
  return (
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
  );
};
