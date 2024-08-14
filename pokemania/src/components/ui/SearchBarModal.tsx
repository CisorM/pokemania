import { ModalProps } from "../../interfaces/ModalProps";
import { Modal } from "../ui/Modal";
import { SearchBar } from "./SearchBar";

export const SearchBarModal: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  handleLinkClick,
}) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl">Buscar pokemon</h2>
        <article className="w-3/4 mx-auto">
          <SearchBar handleLinkClick={handleLinkClick} />
        </article>
      </div>
    </Modal>
  );
};
