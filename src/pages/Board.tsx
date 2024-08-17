import { useState } from "react";
import confetti from "canvas-confetti";
import Square from "../components/board/Square";
import { WinnerModal } from "../components/board/WinnerModal";
import { TURNS } from "../helpers/boardConfig";
import { checkEndGame, checkWinnerFrom } from "../logic/board";
import { resetGameStorage, saveGameToStorage } from "../logic/storage";
import { boards } from "../helpers/combinations";
import BoardLeft from "../components/board/LeftBoard";
import TopBoard from "../components/board/TopBoard";

const Board = () => {
  type Winner = string | null | false;

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });

  const [BoardGenerated, setBoardGenerated] = useState(() => {
    const indiceAleatorio = Math.floor(Math.random() * boards.length);
    return boards[indiceAleatorio];
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.X;
  });

  const [winner, setWinner] = useState<Winner>(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => setIsOpen(true);

  const squareCombinations = [
    BoardGenerated[0][0],
    BoardGenerated[0][1],
    BoardGenerated[0][2],
    BoardGenerated[1][0],
    BoardGenerated[1][1],
    BoardGenerated[1][2],
    BoardGenerated[2][0],
    BoardGenerated[2][1],
    BoardGenerated[2][2],
  ];

  const regions = BoardGenerated[0].map((regions) => regions.region);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    resetGameStorage();

    const newBoardGenerated = boards[Math.floor(Math.random() * boards.length)];
    setBoardGenerated(newBoardGenerated);
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
        <BoardLeft BoardGenerated={BoardGenerated} />

        <div className="col-span-4">
          <div className="board grid grid-cols-3 gap-3">
            {regions.map((region, index) => (
              <TopBoard key={index} region={region} />
            ))}
            {board.map((square: null | string, index: number) => (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
                combination={squareCombinations[index]}
                turn={turn}
                setTurn={setTurn}
              >
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
