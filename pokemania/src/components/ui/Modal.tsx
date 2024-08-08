import { ElementRef, useCallback, useEffect, useRef } from "react";
import { ModalProps } from "../../interfaces/ModalProps";

export const Modal = ({ children, isOpen, setIsOpen }: ModalProps) => {
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  const closeModalWithKeyboard = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setIsOpen(false);
      }
    },
    [setIsOpen]
  );
  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
      document.addEventListener("keydown", closeModalWithKeyboard);
      document.body.style.overflowY = "hidden";
    } else {
      dialogRef.current?.close();
      document.removeEventListener("keydown", closeModalWithKeyboard);
      document.body.style.overflowY = "auto";
    }
  }, [isOpen, closeModalWithKeyboard]);
  return (
    <>
      <dialog
        className="w-3/4 transition-all p-8 border-3 
			border-bgGrey border-solid rounded-lg fixed bottom-36 md:bottom-0"
        ref={dialogRef}
      >
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <span className="text-bgBlack opacity-75">Esc |</span>
          <button
            className="transition-all bg-bgGray px-2 rounded-md opacity-60 border border-bgBlack border-solid hover:opacity-100"
            autoFocus
            onClick={() => setIsOpen(false)}
          >
            x
          </button>
        </div>
        <div className="modal__content">{children}</div>
      </dialog>
    </>
  );
};
