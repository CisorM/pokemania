import { useState } from "react";
import confetti from "canvas-confetti";
import Square from "../components/board/Square";
import { WinnerModal } from "../components/board/WinnerModal";
import { TURNS } from "../helpers/boardConfig";
import { checkEndGame, checkWinnerFrom } from "../logic/board";
import { resetGameStorage, saveGameToStorage } from "../logic/storage";

const Board = () => {
  type Winner = string | null | false;
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    if (boardFromStorage) return JSON.parse(boardFromStorage);
    return Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.X;
  });

  // null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState<Winner>(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => setIsOpen(true);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    resetGameStorage();
  };

  const updateBoard = (index: number) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    saveGameToStorage({
      board: newBoard,
      turn: newTurn,
    });
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      handleModal();
      setWinner(newWinner);
      confetti();
    } else if (checkEndGame(newBoard)) {
      setWinner(false); // empate
    }
  };

  return (
    <main className="w-fit my-10 mx-auto text-center">
      <h1 className="font-bold text-3xl mb-4 font-pokedex tracking-wider">
        Tic-tac-toe
      </h1>
      <section className="grid grid-cols-3 gap-3">
        {board.map((square: null | string, index: number) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>
      <button className="btn mx-auto rounded-lg my-4" onClick={resetGame}>
        Reset del juego
      </button>

      <section className="flex gap-6 justify-center my-4 mx-auto w-fit relative rounded-xl">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        resetGame={resetGame}
        winner={winner}
      />
    </main>
  );
};

export default Board;
