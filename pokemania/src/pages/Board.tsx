import { useState } from "react";
import confetti from "canvas-confetti";
import Square from "../components/board/Square";
import { WinnerModal } from "../components/board/WinnerModal";
import { TURNS } from "../helpers/boardConfig";
import { checkEndGame, checkWinnerFrom } from "../logic/board";
import { resetGameStorage, saveGameToStorage } from "../logic/storage";
import { boards } from "../helpers/combinations";

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

  const [winner, setWinner] = useState<Winner>(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => setIsOpen(true);

  const indiceAleatorio = Math.floor(Math.random() * boards.length);
  const BoardGenerated = boards[indiceAleatorio];
  console.log(BoardGenerated);

  const typesArray = [];
  for (let index = 0; index < 3; index++) {
    const type = BoardGenerated[index].map((type) => type.type);
    typesArray.push(type);
  }

  const regions = BoardGenerated[0].map((regions) => regions.region);
  const types = [...new Set(typesArray.flat())];

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
    <main className="w-fit my-5 mx-auto text-center">
      <h1 className="font-bold text-3xl font-pokedex tracking-wider">
        Tic-tac-toe
      </h1>
      <section className="grid grid-cols-5 gap-3 items-center">
        <div className="grid grid-rows-3 gap-3">
          <div className=""></div>{" "}
          {types.map((type, index) => (
            <div key={index} className="text-right pr-2 h-[100px] capitalize">
              <div className="w-full text-center bg-bgGray rounded-lg px-2 py-2">
                {type}
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-4">
          <div className="grid grid-cols-3 gap-3">
            {regions.map((region, index) => (
              <div key={index} className="text-center">
                <div className="w-3/4 mx-auto text-center bg-bgGray rounded-lg px-2 py-2">
                  {region}
                </div>
              </div>
            ))}
            {board.map((square: null | string, index: number) => (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {square}
              </Square>
            ))}
          </div>
        </div>
      </section>
      <button className="btn mx-auto rounded-lg mb-8" onClick={resetGame}>
        Reset del juego
      </button>

      <section className="flex gap-6 justify-center mx-auto w-fit relative rounded-xl">
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
