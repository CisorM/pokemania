import { FilterModal } from "./FilterModal";
import { useState } from "react";
import { SearchBarModal } from "../ui/SearchBarModal";

export const Filter = ({
  setActiveIndex,
  setTranslate,
}: {
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  setTranslate: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [open, setOpen] = useState(false);
  const [openSearch, setSearch] = useState(false);
  const handleModal = () => setOpen(!open);
  const handleSearch = () => setSearch(!openSearch);

  return (
    <article className="flex justify-end gap-3 items-center mb-6">
      <button
        className="btn w-1/2 p-1 rounded-md sm:w-1/5"
        onClick={handleModal}
      >
        Filtrar
      </button>
      <button
        className="btn w-1/2 p-1 rounded-md sm:w-1/5"
        onClick={handleSearch}
      >
        Buscar
      </button>
      <div>
        <SearchBarModal isOpen={openSearch} setIsOpen={setSearch} />
      </div>
      <FilterModal
        isOpen={open}
        setIsOpen={setOpen}
        setActiveIndex={setActiveIndex}
        setTranslate={setTranslate}
      />
    </article>
  );
};
