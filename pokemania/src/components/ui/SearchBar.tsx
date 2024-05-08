export const SearchBar = () => {
	return (
        <div className="flex gap-2 w-full rounded-md p-1 border-solid border-bgBlack border-[1px]">
            <img src="svgs/search.svg" alt="buscar" />
            <input placeholder="Buscar pokemon..." type="text" className="overflow-hidden outline-none border-none"/>
        </div>
    );
};