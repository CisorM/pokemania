import { SearchInput } from "../../../interfaces/SearchBar";

export const InputSearch = ({ searchTerm, handleSearch }: SearchInput) => {
  return (
    <div className="flex gap-2 w-full rounded-md p-1 border-solid border-bgBlue border-2">
      <img src="svgs/search.svg" alt="buscar" />
      <input
        autoFocus
        placeholder="Buscar pokemon..."
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        className="overflow-hidden outline-none border-none w-full"
      />
    </div>
  );
};
