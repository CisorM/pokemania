import { FilterModal } from "./FilterModal";
import { SearchBar } from "./ui/SearchBar";
import { useState } from "react";

export const Filter = () => {
    const [open, setOpen] = useState(false);
    const handleModal = () => setOpen(!open);

	return (
        <article className="flex justify-end gap-3 items-center mb-6">
            <button className="btn w-1/2 p-1 rounded-md sm:w-1/5" onClick={handleModal}>Filtrar</button>
            <div>
                <SearchBar />
            </div>
            <FilterModal isOpen={open} setIsOpen={setOpen}/>
        </article>
    );
};