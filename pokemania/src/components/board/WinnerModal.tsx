import Square from "./Square";
import { Modal } from "../ui/Modal";
import { WinnerModalProps } from "../../interfaces/Board";

export function WinnerModal({
  winner,
  resetGame,
  isOpen,
  setIsOpen,
}: WinnerModalProps) {
  if (winner === null) return null;
  const winnerText = winner === false ? "Empate" : "Ganó:";
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <section className="flex items-center justify-center">
        <div className="bg-bgGray h-[300px] w-80 rounded-lg flex flex-col justify-center items-center gap-5">
          <h2>{winnerText}</h2>

          <header className="mx-auto w-fit rounded-lg flex gap-4">
            {winner && <Square>{winner}</Square>}
          </header>

          <footer>
            <button className="btn rounded-lg" onClick={resetGame}>
              Empezar de nuevo
            </button>
          </footer>
        </div>
      </section>
    </Modal>
  );
}
